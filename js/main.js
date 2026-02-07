// 年表示
document.getElementById("year").textContent = String(new Date().getFullYear());

// SPメニュー開閉
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.style.display = expanded ? "none" : "flex";
  });

  // メニュー項目クリックで閉じる（SP）
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        toggle.setAttribute("aria-expanded", "false");
        nav.style.display = "none";
      }
    });
  });

  // 画面リサイズで表示崩れ防止
  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      nav.style.display = "flex";
      toggle.setAttribute("aria-expanded", "false");
    } else {
      nav.style.display = "none";
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ダミーフォーム送信
const dummyBtn = document.getElementById("dummySubmit");
const dummyMsg = document.getElementById("dummyMsg");
if (dummyBtn && dummyMsg) {
  dummyBtn.addEventListener("click", () => {
    dummyMsg.textContent =
      "このフォームはダミーです。実運用はフォームサービス（例：Formspree等）に差し替えてください。";
  });
}
