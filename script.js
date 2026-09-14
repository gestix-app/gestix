const demoData={dashboard:{title:'Dashboard',html:`<div class="demo-cards"><div class="demo-card"><small>Ventas del mes</small><strong>$ 8.420.500</strong><em>↑ 18,4%</em></div><div class="demo-card"><small>Productos</small><strong>248</strong><em>12 nuevos</em></div><div class="demo-card"><small>Clientes</small><strong>1.284</strong><em>↑ 8,2%</em></div><div class="demo-card"><small>Caja</small><strong>$ 1.240.300</strong><em>Actualizada</em></div></div><div class="demo-table"><div class="demo-row head"><span>Actividad</span><span>Cliente</span><span>Importe</span><span>Estado</span></div><div class="demo-row"><span>iPhone 15 Pro</span><span>Marcos G.</span><span>$1.890.000</span><span>Pagado</span></div><div class="demo-row"><span>Galaxy S24</span><span>Lucía R.</span><span>$1.320.000</span><span>Pagado</span></div><div class="demo-row"><span>iPhone 13 usado</span><span>Tomás P.</span><span>$820.000</span><span>Reservado</span></div></div>`},ventas:{title:'Ventas',html:`<div class="demo-cards"><div class="demo-card"><small>Ventas hoy</small><strong>27</strong><em>↑ 12%</em></div><div class="demo-card"><small>Total</small><strong>$ 1.420.800</strong><em>↑ 8,7%</em></div><div class="demo-card"><small>Ticket promedio</small><strong>$ 52.622</strong><em>Estable</em></div><div class="demo-card"><small>Pagadas</small><strong>25</strong><em>92,6%</em></div></div><div class="demo-table"><div class="demo-row head"><span>Producto</span><span>Cliente</span><span>Pago</span><span>Estado</span></div><div class="demo-row"><span>iPhone 15 Pro</span><span>Marcos G.</span><span>Transferencia</span><span>Pagado</span></div><div class="demo-row"><span>AirPods Pro 2</span><span>Lucía R.</span><span>Tarjeta</span><span>Pagado</span></div></div>`},stock:{title:'Stock',html:`<div class="demo-cards"><div class="demo-card"><small>Productos</small><strong>248</strong><em>En stock</em></div><div class="demo-card"><small>Stock bajo</small><strong>12</strong><em>Revisar</em></div><div class="demo-card"><small>Sin stock</small><strong>4</strong><em>Reponer</em></div><div class="demo-card"><small>Valor stock</small><strong>$ 48,2M</strong><em>Total</em></div></div><div class="demo-table"><div class="demo-row head"><span>Producto</span><span>SKU</span><span>Cantidad</span><span>Estado</span></div><div class="demo-row"><span>iPhone 15 Pro</span><span>IP15P256</span><span>8</span><span>Disponible</span></div><div class="demo-row"><span>Galaxy S24</span><span>S24-256</span><span>3</span><span>Stock bajo</span></div><div class="demo-row"><span>AirPods Pro 2</span><span>APP2</span><span>0</span><span>Sin stock</span></div></div>`},clientes:{title:'Clientes',html:`<div class="demo-cards"><div class="demo-card"><small>Clientes totales</small><strong>1.284</strong><em>↑ 8,2%</em></div><div class="demo-card"><small>Nuevos</small><strong>38</strong><em>Este mes</em></div><div class="demo-card"><small>Con compras</small><strong>916</strong><em>71,3%</em></div><div class="demo-card"><small>Deudores</small><strong>17</strong><em>Revisar</em></div></div><div class="demo-table"><div class="demo-row head"><span>Cliente</span><span>Compras</span><span>Total</span><span>Última</span></div><div class="demo-row"><span>Marcos G.</span><span>8</span><span>$ 5.420.000</span><span>Hoy</span></div><div class="demo-row"><span>Lucía R.</span><span>5</span><span>$ 2.180.000</span><span>Ayer</span></div></div>`},usados:{title:'Equipos usados',html:`<div class="demo-cards"><div class="demo-card"><small>Recibidos</small><strong>36</strong><em>Este mes</em></div><div class="demo-card"><small>En evaluación</small><strong>7</strong><em>Revisar</em></div><div class="demo-card"><small>Publicados</small><strong>21</strong><em>Listos</em></div><div class="demo-card"><small>Vendidos</small><strong>18</strong><em>Este mes</em></div></div><div class="demo-table"><div class="demo-row head"><span>Equipo</span><span>IMEI</span><span>Estado</span><span>Precio</span></div><div class="demo-row"><span>iPhone 13 128GB</span><span>•••• 4281</span><span>Publicado</span><span>$820.000</span></div><div class="demo-row"><span>Galaxy S22 128GB</span><span>•••• 9022</span><span>Evaluación</span><span>$610.000</span></div></div>`}};
const demoContent=document.getElementById('demoContent');const demoTitle=document.getElementById('demoTitle');
function renderDemo(key){const d=demoData[key]||demoData.dashboard;if(demoContent){demoContent.innerHTML=d.html;demoTitle.textContent=d.title}}renderDemo('dashboard');
document.querySelectorAll('.tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderDemo(btn.dataset.demo)}));
document.querySelectorAll('.faq-list button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
const menu=document.querySelector('.menu-btn');const nav=document.querySelector('.desktop-nav');if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('mobile-open');});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')))}

/* Gestix integrations: clean brand presentation. No recoloring, blending or fake backgrounds. */
const integrationLogos={
  1:'https://upload.wikimedia.org/wikipedia/commons/a/a3/ARCA_logo.png?v=20260914',
  2:'https://upload.wikimedia.org/wikipedia/commons/a/ad/Correo_Argentino_Logo.svg?v=20260914',
  3:'https://upload.wikimedia.org/wikipedia/commons/c/ce/OCA_logo.svg?v=20260914',
  4:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_de_Andreani.jpg?v=20260914',
  5:'https://upload.wikimedia.org/wikipedia/commons/d/d2/Logo_Tiendanube_2025.svg?v=20260914',
  6:'https://upload.wikimedia.org/wikipedia/commons/6/60/Mercado_Libre_wordmark_%28Spanish_version%29.svg?v=20260914'
};
const integrationCards=document.querySelectorAll('.integration-brand-card');
integrationCards.forEach((card,index)=>{const img=card.querySelector('.brandmark img');if(!img)return;const src=integrationLogos[index+1];if(src)img.src=src;img.removeAttribute('style');});
const integrationFix=document.createElement('style');
integrationFix.textContent=`
.integration-brand-card .brandmark{position:relative;width:100%;height:145px;margin:0 0 18px;display:flex;align-items:center;justify-content:center}
.integration-brand-card .brandmark:before{content:"";position:absolute;left:22px;right:22px;top:0;height:145px;border-radius:14px;background:#fff;box-shadow:0 10px 28px rgba(0,0,0,.18)}
.integration-brand-card .brandmark img{position:relative;z-index:1;display:block;max-width:78%;max-height:92px;width:auto;height:auto;object-fit:contain;background:transparent!important;padding:0!important;border:0!important;border-radius:0!important;box-shadow:none!important;filter:none!important;mix-blend-mode:normal!important}
.integration-brand-card:first-child .brandmark img{max-width:82%;max-height:58px}
.integration-brand-card:nth-child(2) .brandmark img{max-width:82%;max-height:78px}
.integration-brand-card:nth-child(3) .brandmark img{max-width:78%;max-height:72px}
.integration-brand-card:nth-child(4) .brandmark img{max-width:82%;max-height:70px}
.integration-brand-card:nth-child(5) .brandmark img{max-width:82%;max-height:70px}
.integration-brand-card:nth-child(6) .brandmark img{max-width:82%;max-height:82px}
.ml-visual img{filter:none!important;background:transparent!important;mix-blend-mode:normal!important}
@media(max-width:620px){
.integration-brand-card .brandmark{height:82px;margin-bottom:12px}
.integration-brand-card .brandmark:before{left:7px;right:7px;height:82px;border-radius:11px}
.integration-brand-card .brandmark img{max-width:82%;max-height:60px}
.integration-brand-card:first-child .brandmark img{max-width:86%;max-height:38px}
.integration-brand-card:nth-child(2) .brandmark img{max-width:86%;max-height:52px}
.integration-brand-card:nth-child(3) .brandmark img{max-width:82%;max-height:48px}
.integration-brand-card:nth-child(4) .brandmark img{max-width:86%;max-height:48px}
.integration-brand-card:nth-child(5) .brandmark img{max-width:86%;max-height:48px}
.integration-brand-card:nth-child(6) .brandmark img{max-width:86%;max-height:55px}
}
`;
document.head.appendChild(integrationFix);
