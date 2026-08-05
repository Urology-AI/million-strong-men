document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var overlay = document.querySelector(".sidebar-overlay");
  function close() { document.body.classList.remove("sidebar-open"); }
  if (toggle) toggle.addEventListener("click", function () {
    document.body.classList.toggle("sidebar-open");
  });
  if (overlay) overlay.addEventListener("click", close);
  document.querySelectorAll(".sidebar-nav a").forEach(function (a) {
    a.addEventListener("click", close);
  });
});
