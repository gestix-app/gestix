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


const paymentLinks = {
  Inicial: "https://mpago.la/1DXMUDA",
  Profesional: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=8af536f5f60d4be48512342ed38cb9e4",
  Premium: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=9766c1bc814443b48589759487315609"
};

document.querySelectorAll(".btn-plan").forEach(button => {

  button.addEventListener("click", () => {

    const plan = button.dataset.plan;
    const paymentUrl = paymentLinks[plan];

    if (!paymentUrl) {
      alert("No se encontró el enlace de pago para este plan.");
      return;
    }

    window.location.href = paymentUrl;

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
