const links = document.querySelectorAll(".side-link");

const panels = document.querySelectorAll(".panel");

const title = document.getElementById("panel-title");

const modal = document.getElementById("subscribeModal");

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const closeModal = document.getElementById("closeModal");

const modalOk = document.getElementById("modalOk");


const titles = {

  overview: "Resumen general",

  sales: "Ventas",

  stock: "Stock",

  clients: "Clientes",

  used: "Recepción de usados",

  analytics: "Analítica"

};


links.forEach(link => {

  link.addEventListener("click", () => {

    const target = link.dataset.panel;

    links.forEach(x => {
      x.classList.remove("active");
    });

    link.classList.add("active");

    panels.forEach(panel => {
      panel.classList.remove("active-panel");
    });

    document
      .getElementById("panel-" + target)
      .classList.add("active-panel");

    title.textContent =
      titles[target] || "Resumen general";

  });

});


document.querySelectorAll(".btn-plan").forEach(button => {

  button.addEventListener("click", () => {

    const plan = button.dataset.plan;

    modalTitle.textContent =
      `Plan ${plan}`;

    modalText.textContent =
      `Seleccionaste el plan ${plan}. En la versión conectada, este botón puede llevar directamente al checkout de Mercado Pago.`;

    modal.classList.add("show");

  });

});


closeModal.addEventListener("click", () => {

  modal.classList.remove("show");

});


modalOk.addEventListener("click", () => {

  modal.classList.remove("show");

});


modal.addEventListener("click", event => {

  if (event.target === modal) {

    modal.classList.remove("show");

  }

});


document
  .getElementById("demoAction")
  .addEventListener("click", () => {

    modalTitle.textContent =
      "Nueva venta";

    modalText.textContent =
      "Esta es una demostración visual del dashboard. En el SaaS real se abriría el formulario de nueva venta.";

    modal.classList.add("show");

  });