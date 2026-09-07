/* ============================================================
   GESTIX 100% EDITABLE — CONFIGURACIÓN DE CONTENIDO
   Cambiá solamente estos valores para modificar la web.
   ============================================================ */

const GESTIX_CONFIG = {
  textos: {
    barraSuperior: "La gestión de tu negocio, más simple.",
    heroEyebrow: "EMPEZÁ HOY",
    heroTitulo: "Tu negocio merece algo mejor que una planilla.",
    heroDescripcion: "Gestioná ventas, stock, clientes, caja y mucho más desde un solo lugar."
  },

  precios: {
    inicial: "$19.900",
    profesional: "$34.900",
    premium: "$59.900"
  },

  enlaces: {
    ingresar: "https://gestix.base44.app/",
    inicial: "https://gestix.base44.app/",
    profesional: "https://gestix.base44.app/",
    premium: "https://gestix.base44.app/"
  },

  logos: {
    header: "gestix-logo-blanco.png",
    hero: "gestix-logo-blanco.png",
    footer: "gestix-logo-blanco.png"
  }
};

/* =================== NO NECESITÁS TOCAR ABAJO =================== */

document.addEventListener("DOMContentLoaded", () => {
  const t = GESTIX_CONFIG.textos;
  const p = GESTIX_CONFIG.precios;
  const l = GESTIX_CONFIG.enlaces;
  const logos = GESTIX_CONFIG.logos;

  document.getElementById("topbarText").textContent = t.barraSuperior;
  document.getElementById("heroEyebrow").textContent = t.heroEyebrow;
  document.getElementById("heroTitle").textContent = t.heroTitulo;
  document.getElementById("heroText").textContent = t.heroDescripcion;

  document.getElementById("starterPrice").textContent = p.inicial;
  document.getElementById("professionalPrice").textContent = p.profesional;
  document.getElementById("premiumPrice").textContent = p.premium;

  ["headerLogin","heroLogin","ctaLogin"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = l.ingresar;
  });

  document.getElementById("starterLink").href = l.inicial;
  document.getElementById("professionalLink").href = l.profesional;
  document.getElementById("premiumLink").href = l.premium;

  document.querySelector(".logo-header").src = logos.header;
  document.querySelector(".logo-hero").src = logos.hero;
  document.querySelector(".logo-footer").src = logos.footer;

  document.getElementById("year").textContent = new Date().getFullYear();
});
