(function(){
  // Cambio de tema
  var btn = document.getElementById('btn-tema');
  var raiz = document.documentElement;
  function aplica(modo){
    raiz.setAttribute('data-theme', modo);
    btn.textContent = modo === 'dark' ? 'Modo claro' : 'Modo oscuro';
    btn.setAttribute('aria-pressed', modo === 'dark');
    try{ localStorage.setItem('tema', modo); }catch(e){}
  }
  var guardado = null;
  try{ guardado = localStorage.getItem('tema'); }catch(e){}
  if(guardado){ aplica(guardado); }
  btn.addEventListener('click', function(){
    var oscuro = raiz.getAttribute('data-theme') === 'dark'
      || (!raiz.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    aplica(oscuro ? 'light' : 'dark');
  });

  // Marcar en el menú la sección visible
  var enlaces = Array.prototype.slice.call(document.querySelectorAll('.menu a'));
  var destinos = enlaces.map(function(a){ return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  if('IntersectionObserver' in window && destinos.length){
    var obs = new IntersectionObserver(function(entradas){
      entradas.forEach(function(e){
        if(!e.isIntersecting) return;
        enlaces.forEach(function(a){
          a.setAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id ? 'true' : 'false');
        });
      });
    }, {rootMargin:'-45% 0px -50% 0px'});
    destinos.forEach(function(d){ obs.observe(d); });
  }
})();
