// MÜZİK OYNATICI — kabuk sayfada yaşar, iframe içindeki sayfalar değişirken kesintisiz çalar
(function(){
  const $ = id => document.getElementById(id), PAGES = ['vitrin/index.html','vitrin/yapimcilar.html','vitrin/atlas.html','vitrin/kavramlar.html','vitrin/frekans.html','vitrin/kitap-ana.html','vitrin/kitap-anlam.html','vitrin/kitap-ardil.html','vitrin/kitap-kaos.html','vitrin/kitap-suhak.html','vitrin/kitap-yitim.html','vitrin/kitap-zaman.html','vitrin/kitap-mimari.html','vitrin/kitap-askerdem.html','vitrin/kitap-2678.html','vitrin/kitap-nefud.html','galaksi/index.html'];
  const sp0 = new URLSearchParams(location.search), p = sp0.get('p'); $('fr').src = sp0.has('sergi') ? 'galaksi/index.html?sergi=1' : p && PAGES.includes(p.split('?')[0]) ? p : PAGES[0];
  const L = (window.QUL_MUZIK || []).map(t => ({ t:t.t, srcs:[t.f ? encodeURI(t.f) : null, t.drive ? 'https://drive.google.com/uc?export=download&id=' + t.drive : null].filter(Boolean) }));
  if(!L.length){ $('pl').remove(); $('gm').textContent='♪ Müzikle gir (parça yok)'; const out=()=>{ $('gate').classList.add('out'); setTimeout(()=>$('gate').remove(),1100); }; $('gm').onclick=out; $('gs').onclick=out; return; }
  const a = new Audio(); a.preload = 'metadata';
  addEventListener('message', e => { const d = e.data; if(d && typeof d.qulDuck === 'boolean'){ ducked = d.qulDuck; a.volume = eff(); } });
  let ducked = false; const eff = () => ducked ? vol * .06 : vol;
  let st = {}; try { st = JSON.parse(localStorage.getItem('qm') || '{}'); } catch(e){}
  let i = Math.min(st.i || 0, L.length-1), vol = st.v == null ? .6 : st.v, shuf = !!st.s, rep = st.r || 0, fails = 0, started = false, si = 0;
  const fmt = s => isFinite(s) ? Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2,'0') : '0:00';
  const save = () => { try { localStorage.setItem('qm', JSON.stringify({i, v:vol, s:shuf, r:rep})); } catch(e){} };
  $('tl').innerHTML = L.map((t,k) => '<li data-k="'+k+'"><span>'+(k+1)+'</span>'+t.t.replace(/</g,'&lt;')+'</li>').join('');
  $('tl').onclick = e => { const li = e.target.closest('li'); if(li) go(+li.dataset.k, true); };
  function mark(){ [].forEach.call($('tl').children, (li,k) => li.classList.toggle('a', k === i)); }
  function setPlay(on){ $('pl').classList.toggle('on', on); $('pp').textContent = on ? '⏸' : '▶'; }
  function go(k, play){
    i = k; si = 0; a.src = L[k].srcs[0]; $('tt').textContent = L[k].t; mark(); save(); a.volume = vol;
    if(play) a.play().then(()=>{fails=0;}).catch(()=>setPlay(false));
    if('mediaSession' in navigator) navigator.mediaSession.metadata = new MediaMetadata({ title:L[k].t, artist:'Hasan Güler', album:'Qul Efsaneleri' });
  }
  const next = () => go(shuf && L.length > 1 ? (()=>{ let k; do k = Math.floor(Math.random()*L.length); while(k === i); return k; })() : (i+1) % L.length, true);
  const prev = () => a.currentTime > 3 ? (a.currentTime = 0) : go((i-1+L.length) % L.length, true);
  function start(){
    if(started) return; started = true; go(i, true); a.volume = 0; let v = 0;
    const iv = setInterval(() => { v = Math.min(vol, v + vol/25); a.volume = v; if(v >= vol) clearInterval(iv); }, 100);
  }
  a.onplay = () => setPlay(true); a.onpause = () => setPlay(false);
  a.onended = () => rep === 1 ? (a.currentTime = 0, a.play()) : next();
  a.onerror = () => { if(si + 1 < L[i].srcs.length){ a.src = L[i].srcs[++si]; a.play().catch(()=>{}); return; } if(++fails <= L.length) setTimeout(next, 600); };
  a.ontimeupdate = () => { $('sk').value = a.duration ? a.currentTime / a.duration * 1000 : 0; $('tm').textContent = fmt(a.currentTime); };
  $('sk').oninput = () => { if(a.duration) a.currentTime = $('sk').value / 1000 * a.duration; };
  $('pp').onclick = () => { if(!started){ start(); } else a.paused ? a.play() : a.pause(); };
  $('pv').onclick = prev; $('nx').onclick = next;
  $('ls').onclick = () => $('pl').classList.toggle('open');
  $('vl').value = vol * 100; $('vl').oninput = () => { vol = $('vl').value / 100; a.volume = eff(); $('vp').textContent = Math.round(vol*100); save(); };
  const step = d => { vol = Math.round(Math.max(0,Math.min(1,vol+d))*20)/20; a.volume = eff(); if(a.muted && d > 0){ a.muted = false; $('mu').textContent = '♪'; } $('vl').value = vol*100; $('vp').textContent = Math.round(vol*100); save(); };
  $('vp').textContent = Math.round(vol*100); $('vd').onclick = () => step(-.05); $('vu').onclick = () => step(.05);
  addEventListener('keydown', e => { if(e.target.closest && e.target.closest('input,textarea')) return; if(e.key === '-' || e.key === '_') step(-.05); else if(e.key === '+' || e.key === '=') step(.05); });
  $('mu').onclick = () => { a.muted = !a.muted; $('mu').textContent = a.muted ? '✕' : '♪'; };
  const tg = () => { $('sh').classList.toggle('on', shuf); $('rp').classList.toggle('on', rep === 1); };
  $('sh').onclick = () => { shuf = !shuf; tg(); save(); }; $('rp').onclick = () => { rep = rep ? 0 : 1; tg(); save(); }; tg();
  if('mediaSession' in navigator){ const m = navigator.mediaSession; m.setActionHandler('play',()=>a.play()); m.setActionHandler('pause',()=>a.pause()); m.setActionHandler('previoustrack',prev); m.setActionHandler('nexttrack',next); }
  $('tt').textContent = L[i].t; mark();
  const open = () => { $('gate').classList.add('out'); setTimeout(()=>$('gate').remove(), 1100); };
  $('gm').onclick = () => { open(); start(); }; $('gs').onclick = () => { open(); a.src = L[i].srcs[0]; };
})();
// Taşınabilir oynatıcı: tutamaçtan sürükle, konum hatırlanır, çift tık sıfırlar
(function(){
  const pl = document.getElementById('pl'), bar = document.getElementById('bar'); if(!pl || !bar) return;
  const g = document.createElement('span'); g.id = 'gr'; g.title = 'Sürükle · çift tık: eski yerine'; g.textContent = '⠿'; bar.insertBefore(g,bar.firstChild);
  let pos = null; try{ pos = JSON.parse(localStorage.getItem('qplpos')||'null'); }catch(e){}
  const apply = (x,y) => {
    const bh = bar.offsetHeight, w = pl.offsetWidth; x = Math.max(0,Math.min(innerWidth-w,x)); y = Math.max(0,Math.min(innerHeight-bh,y));
    const dn = y+bh/2 < innerHeight/2; pl.classList.toggle('dn',dn); pl.style.left = x+'px'; pl.style.right = 'auto';
    if(dn){ pl.style.top = y+'px'; pl.style.bottom = 'auto'; } else { pl.style.bottom = (innerHeight-y-bh)+'px'; pl.style.top = 'auto'; }
    pos = { x, y };
  };
  const save = () => { try{ localStorage.setItem('qplpos',JSON.stringify(pos)); }catch(e){} };
  if(pos) apply(pos.x,pos.y);
  let ox = 0, oy = 0, on = false;
  g.addEventListener('pointerdown',e => { const r = bar.getBoundingClientRect(); ox = e.clientX-r.left; oy = e.clientY-r.top; on = true; g.setPointerCapture(e.pointerId); e.preventDefault(); });
  g.addEventListener('pointermove',e => { if(on) apply(e.clientX-ox,e.clientY-oy); });
  g.addEventListener('pointerup',() => { if(on){ on = false; save(); } });
  g.addEventListener('dblclick',() => { pl.removeAttribute('style'); pl.classList.remove('dn'); pos = null; try{ localStorage.removeItem('qplpos'); }catch(e){} });
  addEventListener('resize',() => { if(pos) apply(pos.x,pos.y); });
})();
// OYNATICIYI SAĞA GİZLE — kenardaki tutamaca gelince açılır; imleç oynatıcının çevresinden uzaklaşınca kapanır
(function(){
  const pl = document.getElementById('pl'), g = document.getElementById('gr'); if(!pl) return;
  let hideT = 0, px = -1, py = -1;
  const fit = () => { pl.style.setProperty('--tx',Math.max(0,innerWidth-pl.offsetLeft-34)+'px'); };
  const show = () => { clearTimeout(hideT); pl.classList.add('show'); };
  const near = () => { if(px < 0) return false; const r = pl.getBoundingClientRect(), m = 36; return px > r.left-m && px < Math.max(r.right,innerWidth) && py > r.top-m && py < r.bottom+m; };
  const later = () => { clearTimeout(hideT); hideT = setTimeout(() => { if(!near() && !pl.classList.contains('drag')) pl.classList.remove('show'); else later(); },900); };
  pl.classList.add('tuck','peek'); fit(); setTimeout(() => pl.classList.remove('peek'),6000);
  addEventListener('resize',fit);
  pl.addEventListener('pointerenter',show); pl.addEventListener('pointerleave',() => { px = -1; later(); });
  addEventListener('pointermove',e => { px = e.clientX; py = e.clientY; if(pl.classList.contains('show') && !near()) later(); },{ passive:true });
  if(g){ g.addEventListener('pointerdown',() => { pl.classList.add('drag'); show(); }); addEventListener('pointerup',() => { if(pl.classList.contains('drag')){ pl.classList.remove('drag'); fit(); later(); } }); g.addEventListener('dblclick',() => setTimeout(fit,30)); }
})();

// F9: tanı kutusu (grafik kartı, WebGL, son hatalar) — hangi sayfada olursan ol
addEventListener('keydown',function(e){ if(e.key!=='F9') return; e.preventDefault();
  var d=document.getElementById('tani'); if(d){ d.remove(); return; }
  var w={}; try{ w=document.getElementById('fr').contentWindow||{}; }catch(x){}
  var g=w.__qulGpu||null, info={ sayfa:(w.location&&w.location.pathname)||'?', webgl:g||'(galaksi sayfası henüz açılmadı ya da WebGL başlamadı)', kalite:w.__qulQL, hata:w.__qulErr||[], yuzey:w.__qulSurfFail||'-', tarayici:navigator.userAgent, ekran:innerWidth+'x'+innerHeight+' @'+devicePixelRatio };
  d=document.createElement('pre'); d.id='tani'; d.style.cssText='position:fixed;left:8px;top:8px;z-index:2147483647;max-width:92vw;max-height:80vh;overflow:auto;margin:0;padding:10px 12px;background:#000e;color:#9fe;font:11px/1.45 monospace;border:1px solid #365;white-space:pre-wrap;user-select:all';
  d.textContent='QUL TANI (kapatmak için F9)\n'+JSON.stringify(info,null,1); document.body.appendChild(d); });
