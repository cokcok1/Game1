// 這是一個最簡化的 Service Worker，僅用於滿足 PWA 安裝要求。
// 它目前不會緩存任何檔案，每次都會從網絡請求最新版本。

self.addEventListener('install', (event) => {
  console.log('[Service Worker] 安裝成功');
  // 跳過等待，立即激活
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] 已激活');
  // 立即接管所有頁面
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // 直接通過網絡請求，不進行緩存
  event.respondWith(fetch(event.request));
});
