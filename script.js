const plans={
  Inicial:'$ 19.900 /mes',
  Profesional:'$ 34.900 /mes',
  Premium:'$ 59.900 /mes'
};

const mpLinks={
  Inicial:'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=b9e452fb6ef447cca7ac5f2ac6c3bdcf',
  Profesional:'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=3ac6b80dd24a40febb087e2b37c8c050',
  Premium:'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=8a5d672a8ce34c8a8337b29c73f3efef'
};

const demo={
  dashboard:['Dashboard','Resumen del negocio',['$ 8.420.500','$ 2.185.300','248','1.284'],['Ventas','Ganancia estimada','Stock','Clientes']],
  ventas:['Ventas','Operaciones',['$ 486.500','12','$ 40.541','$ 121.300'],['Ventas hoy','Operaciones','Ticket promedio','Ganancia']],
  stock:['Stock','Productos en stock',['248','$ 42,8M','7','2'],['Productos','Valor de stock','Stock bajo','Agotados']],
  clientes:['Clientes','Clientes',['1.284','96','324','$ 482K'],['Total clientes','Nuevos este mes','Clientes frecuentes','Deuda pendiente']],
  usados:['Equipos usados','Equipos usados',['37','8','21','$ 12,6M'],['Recibidos este mes','En evaluación','Listos para venta','Valor recibido']]
};

function renderDemo(key='dashboard'){
  const d=demo[key];
  document.getElementById('demoTitle').textContent=d[0];
  document.getElementById('demoContent').innerHTML=
  `<aside><b>G</b><i>⌂</i><i>▣</i><i>▤</i><i>◉</i><i>◌</i><i>⚙</i></aside>
  <div class="demo-main">
    <div class="demo-head">
      <div><small>${d[0]}</small><h3>${d[1]}</h3></div>
      <button class="fake">+ ${key==='usados'?'Recibir equipo':key==='ventas'?'Registrar venta':'Nuevo registro'}</button>
    </div>
    <div class="demo-metrics">${d[2].map((x,i)=>`<div><small>${d[3][i]}</small><strong>${x}</strong><em>↑ ${i%2?'8,2':'12,4'}%</em></div>`).join('')}</div>
    <div class="demo-table">
      <div class="table-head"><b>${key==='stock'?'Inventario':key==='clientes'?'Clientes recientes':key==='usados'?'Últimos equipos':'Actividad reciente'}</b><span>Ver todo →</span></div>
      <div class="row"><div><b>iPhone 15 Pro 256GB</b><small>IMEI ****7291 · ${key==='usados'?'Batería 87% · Muy buen estado':'Operación registrada'}</small></div><strong>$ 1.890.000</strong><em>Completada</em></div>
      <div class="row"><div><b>Samsung Galaxy S24</b><small>IMEI ****1148 · Información detallada</small></div><strong>$ 1.320.000</strong><em>Disponible</em></div>
    </div>
  </div>`;
}
renderDemo();

document.querySelectorAll('.tabs button').forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderDemo(b.dataset.demo);
  };
});

const modal=document.getElementById('modal');
document.querySelectorAll('.choose').forEach(b=>{
  b.onclick=()=>{
    const p=b.dataset.plan;
    document.getElementById('chosen').textContent=p;
    document.getElementById('chosenPrice').textContent=plans[p];
    modal.dataset.plan=p;
    modal.classList.add('show');
    document.body.style.overflow='hidden';
  };
});

document.getElementById('close').onclick=close;
modal.onclick=e=>{if(e.target===modal)close();};
function close(){
  modal.classList.remove('show');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});

document.getElementById('pay').onclick=()=>{
  const p=modal.dataset.plan;
  if(!mpLinks[p]) return;
  window.location.href=mpLinks[p];
};

document.querySelectorAll('.faq button').forEach(b=>{
  b.onclick=()=>{
    const item=b.parentElement;
    document.querySelectorAll('.faq article').forEach(x=>x!==item&&x.classList.remove('open'));
    item.classList.toggle('open');
  };
});

const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.onclick=()=>{
  const open=nav.classList.toggle('open');
  if(open){
    nav.style.display='flex';
    nav.style.position='absolute';
    nav.style.top='76px';
    nav.style.left='0';
    nav.style.right='0';
    nav.style.flexDirection='column';
    nav.style.padding='20px 25px';
    nav.style.background='#0b0f18';
    nav.style.borderBottom='1px solid #ffffff14';
  }else{
    nav.style.display='';
  }
};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{
  if(innerWidth<=950)nav.style.display='';
});
