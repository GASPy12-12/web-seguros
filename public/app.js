// ===== Configuración =====
const WHATSAPP = '3764580660';
const TOKEN_LINK = '?token=njXRQnZo4tf5SyZuT3okfcRn5mi6ST3Pb-Yd0-WsjYPZVqhmBypDVUZrOtye9wqaRwRiFJKqVLrvQri90V6OFLEo6aLiijxyV3kG5JsfFvEiPi6scxKbT7r_iCifRJLTx7FQwGHl6U0w24VnMBhJvSdQi2Ul4ZLZqsdCQCd9_gy4KvmT4bUY6-cOMe8KOVoQB6zw-V3zmh08GOdlFfQLBw1gmX_CCaBJe6EkMt35gcKERRoHyz6--GVXShGQJnWO&SOURCEID=Sitio%20Seguro';
const PAS = 'https://www.sancristobal.com.ar/pas/asesor-integral-de-riesgos';
const AUTO_URL = `${PAS}/seguro-automotor`;
const PROMO_VENCE = new Date('2027-03-01T00:00:00-03:00');

const PRODUCTS = [
  {
    key: 'auto', label: 'Auto', title: 'Tu auto.', url: AUTO_URL, cta: 'Cotizar mi auto',
    line: 'Desde la responsabilidad civil obligatoria hasta todo riesgo.',
    note: new Date() < PROMO_VENCE ? 'Promo vigente: Todo Riesgo al valor de un Terceros Completo.' : '',
    art: '<path d="M72 262H54q-10 0-10-10v-20q0-12 13-15l44-10 40-36q7-6 17-6h72q11 0 19 8l32 34 38 9q13 3 13 15v21q0 10-10 10h-12"/><path d="M136 262H264"/><path class="accent" d="M124 203l30-27q3-3 8-3h34v30ZM214 173h26q6 0 10 4l24 26h-60Z"/><circle cx="104" cy="262" r="30"/><circle cx="296" cy="262" r="30"/>',
  },
  {
    key: 'moto', label: 'Moto', title: 'Tu moto.', url: `https://www.sancristobal.com.ar/otros-riesgos/Moto${TOKEN_LINK}`, cta: 'Cotizar mi moto',
    line: 'Cobertura para andar tranquilo, todos los días.',
    note: 'Es para motos de uso particular. No incluye reparto, cadetería ni uso comercial.',
    art: '<circle cx="106" cy="264" r="38"/><circle cx="294" cy="264" r="38"/><circle cx="106" cy="264" r="10"/><circle cx="294" cy="264" r="10"/><path d="M294 264 254 158"/><path d="M254 158l-16-22h-30"/><circle class="accent" cx="276" cy="164" r="13"/><path class="accent" d="M152 196q6-40 50-40h22q20 0 26 30l-58 12Z"/><path d="M152 196H94q2-20 26-20h34"/><path d="M106 264 150 198M240 208 192 198"/><path d="M160 216h62l14 34-14 22h-48l-14-22Z"/><path d="M174 272l-26 14H92"/>',
  },
  {
    key: 'hogar', label: 'Hogar', title: 'Tu casa.', url: `${PAS}/seguro-hogar`, cta: 'Cotizar mi hogar',
    line: 'Protegé tu hogar y todo lo que hay adentro.',
    art: '<path d="M78 206 200 104l122 102"/><path d="M108 184v118h184V184"/><path class="accent" d="M172 302v-70h56v70"/><path d="M260 136v-30h26v52"/><path class="accent" d="M128 214h28v28h-28ZM244 214h28v28h-28Z"/><path d="M70 302H330"/>',
  },
  {
    key: 'accidentes', label: 'Accidentes personales', title: 'Vos.', url: `https://www.sancristobal.com.ar/otros-riesgos/accidentes-personales${TOKEN_LINK}`, cta: 'Cotizar accidentes personales',
    line: 'Accidentes personales, las 24 horas, todos los días del año.',
    art: '<circle cx="200" cy="168" r="36"/><path d="M124 300v-22q0-54 76-54t76 54v22"/><path class="accent" d="M108 170a92 92 0 0 1 184 0"/><path d="M92 300H308"/>',
  },
  {
    key: 'comercio', label: 'Integral de comercio', title: 'Tu negocio.', url: `${PAS}/seguro-integral-de-comercio`, cta: 'Cotizar mi comercio',
    line: 'Integral de comercio, para tu local y tu mercadería.',
    art: '<path d="M92 172l22-62h172l22 62"/><path class="accent" d="M92 172q18 26 36 0 18 26 36 0 18 26 36 0 18 26 36 0 18 26 36 0 18 26 36 0"/><path d="M108 196v106h184V196"/><path d="M130 302v-72h50v72"/><path class="accent" d="M204 230h66v44h-66Z"/><path d="M70 302H330"/>',
  },
];

// Planes de auto: datos publicados por San Cristóbal
const PLANS = [
  {
    name: 'Responsabilidad civil obligatoria', count: 4, desc: 'Lo que exige la ley para circular.',
    items: [['Responsabilidad civil para tu vehículo'], ['Responsabilidad civil con lesiones'], ['Muerte e invalidez del conductor y familiares'], ['Cobertura Mercosur']],
  },
  {
    name: 'Básico', count: 7, desc: 'Protección ante robo, incendio y destrucción total.', prefix: 'Todo lo anterior, más:',
    items: [['Destrucción total por accidente'], ['Incendio y robo total'], ['Baja del vehículo']],
  },
  {
    name: 'Terceros completo básico o premium', count: 12, desc: 'El más elegido.', prefix: 'Todo lo anterior, más:',
    items: [['Incendio y robo parcial'], ['Robo de ruedas', '1 por vigencia'], ['Cerraduras', 'Hasta $150.000'], ['Luneta y parabrisas', 'Hasta $300.000'], ['Cristales laterales', 'Hasta $150.000']],
  },
  {
    name: 'Todo riesgo', count: 15, desc: 'La máxima protección, con franquicia.', prefix: 'Todo lo anterior, más:',
    items: [['Daños parciales con franquicia'], ['Daño parcial ante robo total', 'Hasta 10%'], ['Cristales de techo', 'Hasta $300.000']],
  },
];

const $ = (s) => document.querySelector(s);
const motion = document.documentElement.classList.contains('motion');

document.querySelectorAll('.js-wa').forEach((a) => {
  a.href = `https://wa.me/549${WHATSAPP}?text=${encodeURIComponent('Hola, quiero consultar por un seguro.')}`;
});
$('#planCta').href = AUTO_URL;

// ===== Selector de seguros =====
$('#chooser').innerHTML = PRODUCTS.map((p) => `
  <button class="choice" role="tab" type="button" id="tab-${p.key}" data-key="${p.key}" aria-controls="stage">
    <svg viewBox="40 90 320 230" aria-hidden="true">${p.art}</svg>
    <span>${p.label}</span>
  </button>`).join('');
const choices = [...document.querySelectorAll('.choice')];

function selectProduct(key, focus) {
  const p = PRODUCTS.find((x) => x.key === key);
  choices.forEach((c) => {
    const on = c.dataset.key === key;
    c.setAttribute('aria-selected', on);
    c.tabIndex = on ? 0 : -1;
    if (on) {
      $('#stage').setAttribute('aria-labelledby', c.id);
      if (focus) c.focus();
    }
  });
  const art = $('#stageArt');
  art.innerHTML = p.art;
  // cada trazo se dibuja después del anterior
  const strokes = [...art.querySelectorAll('path, circle')];
  strokes.forEach((el, i) => {
    el.setAttribute('pathLength', '1');
    el.style.animationDelay = `${i * 70}ms`;
  });
  $('#stageTitle').textContent = p.title;
  $('#stageLine').textContent = p.line;
  $('#stageNote').textContent = p.note || '';
  const cta = $('#stageCta');
  cta.href = p.url;
  cta.textContent = p.cta;
  const copy = $('#stageCopy');
  copy.classList.remove('swap');
  void copy.offsetWidth; // reinicia la animación del texto
  copy.classList.add('swap');
}

choices.forEach((c, i) => {
  c.addEventListener('click', () => selectProduct(c.dataset.key));
  c.addEventListener('keydown', (e) => {
    const move = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!move) return;
    e.preventDefault();
    selectProduct(choices[(i + move + choices.length) % choices.length].dataset.key, true);
  });
});

// ===== Planes =====
$('#planTabs').innerHTML = PLANS.map((p, i) => `<button class="plan-tab" type="button" role="radio" data-i="${i}">${p.name}</button>`).join('');
const planTabs = [...document.querySelectorAll('.plan-tab')];
let countTimer;

function showPlan(i, focus) {
  const p = PLANS[i];
  planTabs.forEach((t, n) => {
    t.setAttribute('aria-checked', n === i);
    t.tabIndex = n === i ? 0 : -1;
    if (n === i && focus) t.focus();
  });
  $('#planName').textContent = p.name;
  $('#planDesc').textContent = p.desc;
  $('#planPrefix').textContent = p.prefix || '';
  $('#planItems').innerHTML = p.items.map(([a, b]) => `<li>${a}${b ? `<small>${b}</small>` : ''}</li>`).join('');
  $('#planBar').style.width = `${(p.count / 15) * 100}%`;
  const detail = $('#planDetail');
  detail.classList.remove('swap');
  void detail.offsetWidth;
  detail.classList.add('swap');

  const el = $('#planCount');
  clearInterval(countTimer);
  if (!motion) { el.textContent = p.count; return; }
  let n = Number(el.textContent);
  countTimer = setInterval(() => {
    if (n === p.count) return clearInterval(countTimer);
    n += n < p.count ? 1 : -1;
    el.textContent = n;
  }, 45);
}

planTabs.forEach((t, i) => {
  t.addEventListener('click', () => showPlan(i));
  t.addEventListener('keydown', (e) => {
    const move = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!move) return;
    e.preventDefault();
    showPlan((i + move + PLANS.length) % PLANS.length, true);
  });
});

// ===== Inicio =====
// Un link como /?seguro=moto abre la página con ese seguro ya elegido (para QR y concesionarias)
const pedido = new URLSearchParams(location.search).get('seguro');
selectProduct(PRODUCTS.some((p) => p.key === pedido) ? pedido : 'auto');
const FIRST_PLAN = 2;

if (motion && 'IntersectionObserver' in window) {
  // El contador arranca cuando los planes entran en pantalla
  planTabs[FIRST_PLAN].setAttribute('aria-checked', 'true');
  const planIo = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { showPlan(FIRST_PLAN); planIo.disconnect(); }
  }, { threshold: 0.3 });
  planIo.observe($('#planes'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = `${i * 90}ms`; io.observe(el); });
  // Mientras tanto el contenido del plan ya está cargado por si el observador tarda
  $('#planName').textContent = PLANS[FIRST_PLAN].name;
} else {
  showPlan(FIRST_PLAN);
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}
