const stopVideoBtn = document.querySelector("#stop");

function stopThis() {
  const iframe = document.querySelector("#video");
  const url = iframe.getAttribute("src");
  iframe.setAttribute("src", "");
  iframe.setAttribute("src", url);
}

if (stopVideoBtn) {
  stopVideoBtn.addEventListener("click", stopThis);
}
