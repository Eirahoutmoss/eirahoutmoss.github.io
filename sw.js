// QUL EFSANELERİ — servis çalışanı (yayin_hazirla.py üretir; elle düzenlemeyin)
const V = 'qul-aeba65549b', RT = 'qul-rt', PRE = ["./", "404.html", "galaksi/ardil.js", "galaksi/bakis.js", "galaksi/css/drift.css", "galaksi/css/galaxy.css", "galaksi/data.js", "galaksi/galaksi.js", "galaksi/img/aetherium.jpg", "galaksi/img/araf-cherqa.jpg", "galaksi/img/bio-nexus.jpg", "galaksi/img/eirahoutmoss.jpg", "galaksi/img/esik-araf.jpg", "galaksi/img/esik-cherqa.jpg", "galaksi/img/ethos.jpg", "galaksi/img/event-horizon.jpg", "galaksi/img/gok.png", "galaksi/img/harmony.jpg", "galaksi/img/javelin.jpg", "galaksi/img/kisura-poster.jpg", "galaksi/img/nihil.jpg", "galaksi/img/synapto.jpg", "galaksi/img/vespera-minor.jpg", "galaksi/index.html", "galaksi/kavramlar.js", "galaksi/lang/en.js", "galaksi/lang/liste.js", "galaksi/meclis.js", "galaksi/ortak.js", "i18n_sayfa.js", "index.html", "manifest.webmanifest", "muzik.css", "muzik.js", "muzik_listesi.js", "pwa/apple-touch-icon.png", "pwa/favicon-48.png", "pwa/icon-192.png", "pwa/icon-512.png", "pwa/maskable-512.png", "vitrin/atlas.html", "vitrin/frekans.html", "vitrin/index.html", "vitrin/k/Anlam _ Kapak.png", "vitrin/k/ana.jpg", "vitrin/k/anlam.jpg", "vitrin/k/ardil.jpg", "vitrin/k/askerdem.jpg", "vitrin/k/azazel.jpg", "vitrin/k/kaos.jpg", "vitrin/k/mimari.jpg", "vitrin/k/nefud.jpg", "vitrin/k/suhak.jpg", "vitrin/k/yitim.jpg", "vitrin/k/zaman.jpg", "vitrin/kavramlar.html", "vitrin/tani.html", "vitrin/yapimcilar.html"];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(PRE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('qul-') && k !== V && k !== RT).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if(r.method !== 'GET') return;
  const u = new URL(r.url); if(u.origin !== location.origin) return;
  if(u.pathname.includes('/muzik/') || r.headers.has('range')) return; // müzik akışı tarayıcıya bırakılır
  // Kod, veri ve sayfalar: önce ağ (5 sn), olmazsa önbellek — eski/yeni dosya karışması olmaz. Görseller: önce önbellek.
  const agOnce = () => new Promise((ok, no) => { const t = setTimeout(() => no(new Error('zaman')), 5000);
    fetch(r).then(res => { clearTimeout(t); if(res.ok){ const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } ok(res); }, x => { clearTimeout(t); no(x); }); });
  if(!/\.(png|jpe?g|webp|gif|svg|woff2?)$/i.test(u.pathname)){
    e.respondWith(agOnce().catch(() => caches.match(r, { ignoreSearch:true }).then(m => m || (r.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
    return;
  }
  e.respondWith(caches.match(r, { ignoreSearch:true }).then(m => m || fetch(r).then(res => { if(res.ok){ const cp = res.clone(); caches.open(RT).then(c => c.put(r, cp)); } return res; })));
});
