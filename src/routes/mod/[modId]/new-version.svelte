<script lang="ts" context="module">
  import { paramsToProps } from '$lib/utils/routing';

  export const load = paramsToProps();
</script>

<script lang="ts">
  import { mutation, operationStore, query } from '@urql/svelte';
  import Toast from '$lib/components/general/Toast.svelte';
  import { goto } from '$app/navigation';
  import type { VersionData } from '$lib/models/versions';
  import VersionForm from '$lib/components/versions/VersionForm.svelte';
  import {
    CheckVersionUploadStateDocument,
    CreateVersionDocument,
    FinalizeCreateVersionDocument,
    GetModReferenceDocument,
    UploadVersionPartDocument
  } from '$lib/generated';
  import { get, writable } from 'svelte/store';
  import { chunkedUpload } from '$lib/utils/chunked-upload';
  import type { UploadState } from '$lib/utils/chunked-upload';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import Card, { Content } from '@smui/card';

  export let modId!: string;

  const uploadStatus = writable<undefined | string>('');
  const uploadPercent = writable<number>(0);

  const uploadState = writable<UploadState>();

  uploadState.subscribe((up) => {
    if (up) {
      if (up.uploaded === up.total) {
        uploadStatus.set(`Processing...`);
        uploadPercent.set(100);
      } else {
        uploadStatus.set(`Uploading: ${up.uploaded}/${up.total}`);
        uploadPercent.set((up.uploaded / up.total) * 100);
      }
    }
  });

  let errorMessage = '';
  let errorToast = false;

  const mod = operationStore(GetModReferenceDocument, { mod: modId });

  query(mod);

  const createVersion = mutation({
    query: CreateVersionDocument
  });

  const uploadVersionPart = mutation({
    query: UploadVersionPartDocument
  });

  const finalizeCreateVersion = mutation({
    query: FinalizeCreateVersionDocument
  });

  const checkVersionUploadState = operationStore(
    CheckVersionUploadStateDocument,
    {
      versionId: undefined,
      modId: undefined
    },
    {
      pause: true
    }
  );

  $: $mod.data && (checkVersionUploadState.variables.modId = $mod.data.mod.id);

  query(checkVersionUploadState);

  const onSubmit = async (data: VersionData) =>
    chunkedUpload(
      data.file,
      get(mod).data.mod.id,
      {
        changelog: data.changelog,
        stability: data.stability
      },
      uploadState,
      {
        createVersion,
        uploadVersionPart,
        finalizeCreateVersion,
        checkVersionUploadState
      }
    )
      .then((success) => {
        console.log({ success });
        // TODO Toast or something
        goto(base + '/mod/' + modId + '/version/' + success.version.id);
      })
      .catch((err) => {
        console.error(err);
        errorMessage = 'Error creating version: ' + err.message;
        errorToast = true;
        uploadStatus.set('');
      });

  $: if (!errorToast) {
    errorMessage = '';
  }
</script>

<svelte:head>
  {#if !$mod.fetching && !$mod.error && $mod.data.mod}
    <MetaDescriptors
      description="Creating a new version of mod {$mod.data.mod.name}"
      title="New version of mod {$mod.data.mod.name}" />
  {/if}
</svelte:head>

<h1 class="text-4xl my-4 font-bold">
  New Version for
  {#if $mod.fetching}
    ...
  {:else if !$mod.error}
    {$mod.data.mod.name}
  {/if}
</h1>

<Card>
  <Content>
    {#if $mod.fetching}
      <p>Loading...</p>
    {:else if $mod.error}
      <p>Oh no... {$mod.error.message}</p>
    {:else}
      <VersionForm {onSubmit} modReference={$mod.data.mod.mod_reference} />

      {#if $uploadStatus}
        <div class="relative pt-4">
          <div class="flex mb-2 items-center justify-between">
            <div>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600">
                {$uploadStatus}
              </span>
            </div>
            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-white">{$uploadPercent.toFixed(0)}%</span>
            </div>
          </div>
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600">
            <div
              style="width: {$uploadPercent.toFixed(0)}%"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600" />
          </div>
        </div>
      {/if}
    {/if}
  </Content>
</Card>

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
