/* =========================================================
   GESTIX — CONFIGURACIÓN EDITABLE
   Cambiá solamente estos valores para actualizar la web.
   ========================================================= */
const GESTIX_CONFIG = {
  loginUrl: 'https://gestix.base44.app/',
  topbar: '🚀 Gestioná tu negocio de celulares desde un solo lugar.',
  heroTitle: 'Tu negocio merece algo mejor que una',
  heroHighlight: 'planilla.',
  heroText: 'Organizá tu operación, conocé tus números y llevá tu negocio al siguiente nivel.',
  plans: {
    Inicial: { price: 19900, checkoutUrl: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=b9e452fb6ef447cca7ac5f2ac6c3bdcf' },
    Profesional: { price: 34900, checkoutUrl: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=3ac6b80dd24a40febb087e2b37c8c050' },
    Premium: { price: 59900, checkoutUrl: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=8a5d672a8ce34c8a8337b29c73f3efef' }
  }
};

function formatARS(value){
  return '$ ' + Number(value).toLocaleString('es-AR');
}

function applyGestixConfig(){
  const c = GESTIX_CONFIG;
  const topbar = document.getElementById('topbar');
  if(topbar) topbar.textContent = c.topbar;

  document.querySelectorAll('a[href="https://gestix.base44.app/"]').forEach(a => a.href = c.loginUrl);

  const heroTitle = document.getElementById('heroTitle');
  if(heroTitle) heroTitle.innerHTML = `${c.heroTitle}<br><span>${c.heroHighlight}</span>`;
  const heroText = document.getElementById('heroText');
  if(heroText) heroText.textContent = c.heroText;

  const ids = { Inicial:'Inicial', Profesional:'Profesional', Premium:'Premium' };
  Object.entries(ids).forEach(([plan,key]) => {
    const data = c.plans[plan];
    const price = document.getElementById('price'+key);
    const button = document.getElementById('btn'+key);
    if(price && data) price.innerHTML = `${formatARS(data.price)} <small>/mes</small>`;
    if(button && data) button.href = data.checkoutUrl;
  });
}

applyGestixConfig();

const demoData={dashboard:{title:'Dashboard',html:`<div class="demo-cards"><div class="demo-card"><small>Ventas del mes</small><strong>$ 8.420.500</strong><em>↑ 18,4%</em></div><div class="demo-card"><small>Productos</small><strong>248</strong><em>12 nuevos</em></div><div class="demo-card"><small>Clientes</small><strong>1.284</strong><em>↑ 8,2%</em></div><div class="demo-card"><small>Caja</small><strong>$ 1.240.300</strong><em>Actualizada</em></div></div><div class="demo-table"><div class="demo-row head"><span>Actividad</span><span>Cliente</span><span>Importe</span><span>Estado</span></div><div class="demo-row"><span>iPhone 15 Pro</span><span>Marcos G.</span><span>$1.890.000</span><span>Pagado</span></div><div class="demo-row"><span>Galaxy S24</span><span>Lucía R.</span><span>$1.320.000</span><span>Pagado</span></div><div class="demo-row"><span>iPhone 13 usado</span><span>Tomás P.</span><span>$820.000</span><span>Reservado</span></div></div>`},ventas:{title:'Ventas',html:`<div class="demo-cards"><div class="demo-card"><small>Ventas hoy</small><strong>27</strong><em>↑ 12%</em></div><div class="demo-card"><small>Total</small><strong>$ 1.420.800</strong><em>↑ 8,7%</em></div><div class="demo-card"><small>Ticket promedio</small><strong>$ 52.622</strong><em>Estable</em></div><div class="demo-card"><small>Pagadas</small><strong>25</strong><em>92,6%</em></div></div><div class="demo-table"><div class="demo-row head"><span>Producto</span><span>Cliente</span><span>Pago</span><span>Estado</span></div><div class="demo-row"><span>iPhone 15 Pro</span><span>Marcos G.</span><span>Transferencia</span><span>Pagado</span></div><div class="demo-row"><span>AirPods Pro 2</span><span>Lucía R.</span><span>Tarjeta</span><span>Pagado</span></div></div>`},stock:{title:'Stock',html:`<div class="demo-cards"><div class="demo-card"><small>Productos</small><strong>248</strong><em>En stock</em></div><div class="demo-card"><small>Stock bajo</small><strong>12</strong><em>Revisar</em></div><div class="demo-card"><small>Sin stock</small><strong>4</strong><em>Reponer</em></div><div class="demo-card"><small>Valor stock</small><strong>$ 48,2M</strong><em>Total</em></div></div><div class="demo-table"><div class="demo-row head"><span>Producto</span><span>SKU</span><span>Cantidad</span><span>Estado</span></div><div class="demo-row"><span>iPhone 15 Pro</span><span>IP15P256</span><span>8</span><span>Disponible</span></div><div class="demo-row"><span>Galaxy S24</span><span>S24-256</span><span>3</span><span>Stock bajo</span></div><div class="demo-row"><span>AirPods Pro 2</span><span>APP2</span><span>0</span><span>Sin stock</span></div></div>`},clientes:{title:'Clientes',html:`<div class="demo-cards"><div class="demo-card"><small>Clientes totales</small><strong>1.284</strong><em>↑ 8,2%</em></div><div class="demo-card"><small>Nuevos</small><strong>38</strong><em>Este mes</em></div><div class="demo-card"><small>Con compras</small><strong>916</strong><em>71,3%</em></div><div class="demo-card"><small>Deudores</small><strong>17</strong><em>Revisar</em></div></div><div class="demo-table"><div class="demo-row head"><span>Cliente</span><span>Compras</span><span>Total</span><span>Última</span></div><div class="demo-row"><span>Marcos G.</span><span>8</span><span>$ 5.420.000</span><span>Hoy</span></div><div class="demo-row"><span>Lucía R.</span><span>5</span><span>$ 2.180.000</span><span>Ayer</span></div></div>`},usados:{title:'Equipos usados',html:`<div class="demo-cards"><div class="demo-card"><small>Recibidos</small><strong>36</strong><em>Este mes</em></div><div class="demo-card"><small>En evaluación</small><strong>7</strong><em>Revisar</em></div><div class="demo-card"><small>Publicados</small><strong>21</strong><em>Listos</em></div><div class="demo-card"><small>Vendidos</small><strong>18</strong><em>Este mes</em></div></div><div class="demo-table"><div class="demo-row head"><span>Equipo</span><span>IMEI</span><span>Estado</span><span>Precio</span></div><div class="demo-row"><span>iPhone 13 128GB</span><span>•••• 4281</span><span>Publicado</span><span>$820.000</span></div><div class="demo-row"><span>Galaxy S22 128GB</span><span>•••• 9022</span><span>Evaluación</span><span>$610.000</span></div></div>`}};
const demoContent=document.getElementById('demoContent');const demoTitle=document.getElementById('demoTitle');
function renderDemo(key){const d=demoData[key]||demoData.dashboard;if(demoContent){demoContent.innerHTML=d.html;demoTitle.textContent=d.title}}renderDemo('dashboard');
document.querySelectorAll('.tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderDemo(btn.dataset.demo)}));
document.querySelectorAll('.faq-list button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
const menu=document.querySelector('.menu-btn');const nav=document.querySelector('.desktop-nav');if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('mobile-open');});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')))}
