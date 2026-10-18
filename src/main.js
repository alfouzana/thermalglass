import "./style.css";

// mobile nav toggle
const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
btn?.addEventListener("click", () => { menu?.classList.toggle("hidden"); menu?.classList.toggle("flex"); });

// current year in footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
