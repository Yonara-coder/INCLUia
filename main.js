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
  if (name === "notebook") {
    img.src = "./icons/notebooklm.svg";
    h1.innerText = "NotebookLM";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/1cdmPKt97IPzLVIIFJAz7Lf5ucg0rAkh3uLBmVpDhqYE/edit?tab=t.0";

    content.appendChild(a2);
  }
  if (name === "gemini") {
    img.src = "./icons/gemini.png";
    h1.innerText = "Gemini";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/1qAHDwR4bernbb1i_Yc6vmB-Wf-NdGlb_lbKmnv2IrQY/edit?tab=t.0";

    content.appendChild(a2);
  }
  if (name === "pippit") {
    img.src = "./icons/pippit.svg";
    h1.innerText = "Pippit";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/1cdmPKt97IPzLVIIFJAz7Lf5ucg0rAkh3uLBmVpDhqYE/edit?tab=t.0";

    content.appendChild(a2);
  }
  if (name === "chatgpt") {
    img.src = "./icons/chatgpt.svg";
    h1.innerText = "ChatGPT";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a1 = document.createElement("a");
    a1.innerText = "Plano de Aula 1º ano - Matemática";
    setAttr(a1);
    a1.href =
      "https://docs.google.com/document/d/1YZErfPLlG3nU6XBXTtzNCed2hUmBLCUsl6vcUaMp1Y4/edit?tab=t.0";

    const a11 = document.createElement("a");
    a11.innerText = "Plano de Aula 1º ano - Português";
    setAttr(a11);
    a11.href =
      "https://docs.google.com/document/d/1zqGcyyRiO2XTrYB-BLc2mIpqw8IIZ-kZ/edit";

    const a5 = document.createElement("a");
    a5.innerText = "Plano de Aula 5º ano";
    setAttr(a5);
    a5.href =
      "https://docs.google.com/document/d/1Sz0jdCPw4Lr3G-e6q9DMwlXobE8JFrr_tACgGqkae5o/edit?tab=t.0";

    content.appendChild(a1);
    content.appendChild(a11);
    content.appendChild(a5);
  }
  if (name === "suno") {
    img.src = "./icons/suno.svg";
    h1.innerText = "Suno";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a3 = document.createElement("a");
    a3.innerText = "Plano de Aula 3º ano";
    setAttr(a3);
    a3.href =
      "https://docs.google.com/document/d/1fX7sqzNpUjHf8n11MZlY9Te097uHpleE8UwA9kT-Phg/edit?tab=t.0";

    content.appendChild(a3);
  }
  if (name === "perplexity") {
    img.src = "./icons/perplexity.webp";
    h1.innerText = "Perplexity";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a9 = document.createElement("a");
    a9.innerText = "Plano de Aula 9º ano";
    setAttr(a9);
    a9.href =
      "https://docs.google.com/document/d/12sbgrOgHmSmmj82qqwbKXX8aZV_Eg9Nc/edit";

    content.appendChild(a9);
  }
  if (name === "grok") {
    img.src = "./icons/grok.png";
    h1.innerText = "Grok";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a5 = document.createElement("a");
    a5.innerText = "Plano de Aula 5º ano";
    setAttr(a5);
    a5.href =
      "https://docs.google.com/document/d/11Slyxhj2kfF8UyTaHz4OnoMK7LvQF85be9rRjExuf0M/edit?tab=t.0";

    content.appendChild(a5);
  }
  if (name === "gemini2") {
    img.src = "./icons/gemini.png";
    h1.innerText = "Gemini";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a8 = document.createElement("a");
    a8.innerText = "Plano de Aula 8º ano";
    setAttr(a8);
    a8.href =
      "https://docs.google.com/document/d/11FjqzbykgAVp78y7Lcj86Iivaj_CYKS4Q9mCWw2yv4g/edit?tab=t.0";

    content.appendChild(a8);
  }
  if (name === "perplexity2") {
    img.src = "./icons/perplexity.webp";
    h1.innerText = "Perplexity";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a6 = document.createElement("a");
    a6.innerText = "Plano de Aula 6º ano";
    setAttr(a6);
    a6.href =
      "https://docs.google.com/document/d/1hv_Fl-fLfFdnz4kGZkd8832zV1vSyz2jbmRLmt-mwBM/edit?tab=t.0";

    content.appendChild(a6);
  }
  if (name === "notebook2") {
    img.src = "./icons/notebooklm.svg";
    h1.innerText = "NotebookLM";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a9 = document.createElement("a");
    a9.innerText = "Plano de Aula 9º ano";
    setAttr(a9);
    a9.href =
      "https://docs.google.com/document/d/1gEMURtZDTLpgS2G694ClmrKRdL9iA61c/edit";

    content.appendChild(a9);
  }
  if (name === "kling") {
    img.src = "./icons/kling.svg";
    h1.innerText = "Kling";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a9 = document.createElement("a");
    a9.innerText = "Plano de Aula 9º ano";
    setAttr(a9);
    a9.href =
      "https://docs.google.com/document/d/1nzES1mq9vJaIf6TNV1MPHUtv19psQF7U/edit";

    content.appendChild(a9);
  }
}

const close = document.getElementById("close");

function closeModal() {
  modal.classList.add("invisible");
}

close.onclick = closeModal;
