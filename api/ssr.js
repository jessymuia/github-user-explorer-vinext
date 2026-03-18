import handler from '../dist/server/index.js';
import { Readable } from 'node:stream';

export const config = {
  api: { bodyParser: false },
};

export default async function ssrHandler(req, res) {
  try {
    const protocol =
      req.headers['x-forwarded-proto']?.split(',')[0]?.trim() || 'https';
    const host = req.headers.host || 'localhost';
    const webUrl = new URL(req.url || '/', `${protocol}://${host}`);

    const webHeaders = new Headers();
    for (const [key, val] of Object.entries(req.headers)) {
      if (val === undefined) continue;
      if (Array.isArray(val)) val.forEach((v) => webHeaders.append(key, v));
      else webHeaders.set(key, val);
    }

    const method = req.method || 'GET';
    const hasBody = method !== 'GET' && method !== 'HEAD';
    const requestInit = { method, headers: webHeaders };
    if (hasBody) {
      requestInit.body = Readable.toWeb(req);
      requestInit.duplex = 'half';
    }

    const webRequest = new Request(webUrl, requestInit);

    const waitUntilPromises = [];
    const ctx = { waitUntil: (p) => waitUntilPromises.push(p) };

    const webResponse = await handler.fetch(webRequest, {}, ctx);

    const responseBuffer = Buffer.from(await webResponse.arrayBuffer());
    const responseHeaders = {};
    webResponse.headers.forEach((val, key) => {
      responseHeaders[key] = val;
    });

    res.writeHead(webResponse.status, responseHeaders);
    res.end(responseBuffer);

    await Promise.allSettled(waitUntilPromises);
  } catch (err) {
    console.error('[vinext-vercel] Error:', err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }
}
