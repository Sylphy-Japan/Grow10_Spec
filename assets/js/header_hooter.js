// assets/js/header-footer.js
async function includeTemplate(id, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(`Error loading ${filePath}:`, err);
  }
}

// ページロード後に呼び出し
window.addEventListener("DOMContentLoaded", () => {
  includeTemplate("header", "/Grow10.Spec/assets/templates/header.html");
  includeTemplate("footer", "/Grow10.Spec/assets/templates/footer.html");
});
