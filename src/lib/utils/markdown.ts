import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { browser } from '$app/env';
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup';

let resolver;
const sanitizer = new Promise<(string) => string>((r) => (resolver = r));

if (!browser) {
  (async () => {
    const { JSDOM } = await import('jsdom');
    resolver(DOMPurify(new JSDOM('').window).sanitize);
  })();
} else {
  resolver(DOMPurify.sanitize);
}

export const markdown = (md: string): Promise<string> => {
  return sanitizer.then((s) => {
    const sanitized = s(marked(md));
    const parsed = new DOMParser().parseFromString(sanitized, 'text/html');
    Prism.highlightAllUnder(parsed.body);
    return parsed.body.innerHTML;
  });
};
