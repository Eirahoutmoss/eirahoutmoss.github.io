// Statik sayfalar için dil katmanı: <script src="i18n_sayfa.js" data-base="galaksi/lang/"></script>
(function(){
  var s=document.currentScript, base=s.getAttribute('data-base')||'', c, m=location.search.match(/lang=([\w-]+)/); c=m&&m[1];
  try{ c=c||localStorage.getItem('qlang'); }catch(e){}
  document.write('<script src="'+base+'liste.js"><\/script>');
  document.write('<script>(function(){var c='+JSON.stringify(c||'tr')+';if(c!=="tr"&&(window.QUL_LANGS||[]).some(function(l){return l.c===c}))document.write(\'<script src="'+base+'\'+c+\'.js"><\\/script>\');window.QUL_CODE=c})()<\/script>');
  addEventListener('DOMContentLoaded',function(){
    var L=window.QUL_LANG; if(L&&L.code!=='tr'){ document.documentElement.lang=L.code; document.documentElement.dir=L.dir||'ltr';
      [].forEach.call(document.querySelectorAll('[data-i18n]'),function(e){ var v=L.s[e.getAttribute('data-i18n')]; if(v) e.innerHTML=v; }); }
    var ls=window.QUL_LANGS||[]; if(ls.length<2) return;
    var sel=document.createElement('select'); sel.setAttribute('aria-label','Language'); sel.style.cssText='position:fixed;top:10px;left:50%;transform:translateX(-50%);z-index:90;background:#14110dcc;color:#d8c9a8;border:1px solid #6b5d4288;padding:4px 8px;font:12px Georgia,serif;cursor:pointer';
    ls.forEach(function(l){ var o=document.createElement('option'); o.value=l.c; o.textContent=l.n; sel.appendChild(o); }); sel.value=window.QUL_CODE||'tr';
    sel.onchange=function(){ try{ localStorage.setItem('qlang',sel.value); }catch(e){} try{ top.location.reload(); }catch(e){ location.reload(); } };
    document.body.appendChild(sel);
  });
})();
