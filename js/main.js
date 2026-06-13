/* ============================================================
   BARON GOLD — interactions
   Edit BARON.whatsapp / phone / email / instagram in ONE place.
   ============================================================ */
const BARON = {
  whatsapp: "2348165675182",                 // international format, no "+" or spaces
  phoneDisplay: "+234 816 567 5182",
  email: "info@barongold.africa",             // placeholder — update with your real email
  instagram: "baron_gold1",
  facebook: "https://facebook.com/",          // placeholder — paste your page URL
  location: "Lagos, Nigeria"                  // placeholder — update with your address
};

/* Build a WhatsApp deep link with a prefilled message */
function waLink(message){
  const base = "https://wa.me/" + BARON.whatsapp;
  return message ? base + "?text=" + encodeURIComponent(message) : base;
}

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Sticky header on scroll ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });

  /* ---- Mobile drawer ---- */
  const drawer = document.getElementById("mobileNav");
  const scrim  = document.getElementById("scrim");
  const closeBtn = document.getElementById("mnClose");
  const setNav = (open) => {
    if(!drawer) return;
    drawer.classList.toggle("open", open);
    scrim && scrim.classList.toggle("show", open);
    document.body.classList.toggle("no-scroll", open);
  };
  // Any element with #navToggle or .js-nav-open opens the drawer (dashboard hamburger included)
  document.querySelectorAll("#navToggle, .js-nav-open").forEach(b => b.addEventListener("click", () => setNav(true)));
  closeBtn && closeBtn.addEventListener("click", () => setNav(false));
  scrim    && scrim.addEventListener("click", () => setNav(false));
  drawer && drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setNav(false)));
  document.addEventListener("keydown", e => { if(e.key === "Escape") setNav(false); });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q && q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // close siblings for a clean single-open accordion
      item.closest(".faq").querySelectorAll(".faq-item.open").forEach(o => {
        if(o !== item){ o.classList.remove("open"); o.querySelector(".faq-a").style.maxHeight = null; }
      });
      item.classList.toggle("open", !isOpen);
      a.style.maxHeight = isOpen ? null : a.scrollHeight + "px";
    });
  });

  /* ---- Scroll reveal ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold:0.12, rootMargin:"0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* ---- Footer year ---- */
  const yr = document.getElementById("year");
  if(yr) yr.textContent = new Date().getFullYear();

  /* ---- Contact form -> WhatsApp ---- */
  const form = document.getElementById("inquiryForm");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const msg =
        `Hello Baron Gold, I'd like to make an inquiry.%0A%0A` +
        `Name: ${f.get("name")||"-"}%0A` +
        `Phone/WhatsApp: ${f.get("phone")||"-"}%0A` +
        `Email: ${f.get("email")||"-"}%0A` +
        `Interested in: ${f.get("interest")||"-"}%0A` +
        `Message: ${f.get("message")||"-"}`;
      const success = document.getElementById("formSuccess");
      success && success.classList.add("show");
      window.open("https://wa.me/" + BARON.whatsapp + "?text=" + msg, "_blank");
      form.reset();
      setTimeout(() => success && success.classList.remove("show"), 6000);
    });
  }
});
