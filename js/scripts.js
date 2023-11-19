const btnGenerator = document.querySelector("#btn-generator");
const link = document.querySelector("#url-code");
const imageCode = document.querySelector("#image-code");
const resultCode = document.querySelector(".result-code");

function getLinkCode(url) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
}

function generate() {
  imageCode.setAttribute("src", getLinkCode(link.value));
  btnGenerator.innerHTML = "Gerando código...";

  imageCode.addEventListener("load", () => {
    resultCode.classList.add("active");
    btnGenerator.innerHTML = "Código gerado!";
    setTimeout(() => {
      btnGenerator.innerHTML = "Gerar QR Code";
    }, 2000);
  });
}

btnGenerator.addEventListener("click", () => {
  if (!link.value) return;
  generate();
});

link.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generate();
  }
});
