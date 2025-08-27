const allAi = document.querySelectorAll(".ai");

const allAiArray = Array.from(allAi);

allAiArray.forEach((e) => {
  e.onclick = () => showModal(e.id);
});

const modal = document.getElementById("modal");
const content = document.getElementById("content");

function setAttr(e) {
  e.setAttribute("target", "_blank");
  e.setAttribute("rel", "noopener noreferrer");
}

function showModal(name) {
  modal.classList.remove("invisible");

  content.innerHTML = "";

  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  function append() {
    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(p);
  }

  if (name === "deepseek") {
    img.src = "./icons/deepseek.png";
    h1.innerText = "DeepSeek";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a7 = document.createElement("a");
    a7.innerText = "Plano de Aula 7º ano";
    setAttr(a7);
    a7.href =
      "https://docs.google.com/document/d/1i9hqBt3N-XeulCk6DE5gxDSLno-DJGv1j3PbuVH844Y/edit?tab=t.0";

    content.appendChild(a7);
  }
  if (name === "ideogram") {
    img.src = "./icons/ideogram.png";
    h1.innerText = "Ideogram";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a7 = document.createElement("a");
    a7.innerText = "Plano de Aula 7º ano";
    setAttr(a7);
    a7.href =
      "https://docs.google.com/document/d/1i9hqBt3N-XeulCk6DE5gxDSLno-DJGv1j3PbuVH844Y/edit?tab=t.0";

    content.appendChild(a7);
  }
  if (name === "stability") {
    img.src = "./icons/stability.svg";
    h1.innerText = "Stability AI";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a1 = document.createElement("a");
    a1.innerText = "Plano de Aula 1º ano";
    setAttr(a1);
    a1.href =
      "https://docs.google.com/document/d/1kYONcLIX8C1nSrKVj0FOeahirAaiOA2wB5gW02a2T4U/edit?tab=t.0";

    content.appendChild(a1);
  }
}

const close = document.getElementById("close");

function closeModal() {
  modal.classList.add("invisible");
}

close.onclick = closeModal;
