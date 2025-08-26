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

  if (name === "pipp") {
    img.src = "./icons/pippit.svg";
    h1.innerText = "Pippit AI";
    p.innerText = `Pippit AI é uma ferramenta com inteligência artificial — incorporada, por exemplo, ao CapCut — que transforma links ou texto em vídeos completos de forma automática. Ela gera vídeos prontos para uso, com avatares digitais que narram conteúdos em vários idiomas. Ideal para criação de vídeos de produtos ou marketing, especialmente para plataformas como Shopify ou Amazon.`;

    append();

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/1riqz9S0iinP4dsfufutRrvzyjaRoTq4l/edit";

    content.appendChild(a2);
  }

  if (name === "note") {
    img.src = "./icons/notebooklm.svg";
    h1.innerText = "NotebookLM";
    p.innerText = `O NotebookLM é uma ferramenta experimental do Google que atua como “assistente de pesquisa” com IA. Permite que você envie documentos, PDFs, anotações e links para que a IA organize, resuma e gere insights. Cria resumos, mapas mentais, roteiros e respostas personalizadas com base apenas nas fontes fornecidas. Ajuda a estudar, preparar apresentações e estruturar ideias de forma mais rápida e contextualizada. Foca em manter a precisão, citando as referências usadas nas respostas.`;

    append();

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/1riqz9S0iinP4dsfufutRrvzyjaRoTq4l/edit";

    content.appendChild(a2);
  }

  if (name === "chat") {
    img.src = "./icons/chatgpt.svg";
    h1.innerText = "ChatGPT";
    p.innerText = `O ChatGPT é um modelo de linguagem avançado da OpenAI, baseado na arquitetura GPT-5. Consegue compreender e gerar textos em linguagem natural para responder perguntas, criar conteúdos e resolver problemas. Pode auxiliar em tarefas como programação, estudo, tradução, redação e brainstorming. Aprende padrões a partir de grandes volumes de dados, mas não acessa informações pessoais sem consentimento. Está disponível em várias plataformas, inclusive integrado a ferramentas como navegadores, aplicativos e sistemas de suporte.`;

    append();

    const a1 = document.createElement("a");
    a1.innerText = "Plano de Aula 1º ano";
    setAttr(a1);
    a1.href =
      "https://docs.google.com/document/d/1vaHtjDFA0PUVX9W7TKxFT2MlBo_nHhin/edit";

    content.appendChild(a1);
  }

  if (name === "gemi") {
    img.src = "./icons/gemini.png";
    h1.innerText = "Gemini";
    p.innerText = `O Gemini, do Google, é um modelo de inteligência artificial multimodal capaz de processar texto, imagem, áudio e código. Ele responde perguntas, gera textos, analisa imagens e auxilia em tarefas de programação. Integra-se a produtos como Google Search, Docs, Gmail e Android. Foi projetado para oferecer raciocínio mais avançado e interações naturais. Possui diferentes versões, otimizadas para velocidade ou complexidade das tarefas.`;

    append();

    const a1 = document.createElement("a");
    a1.innerText = "Plano de Aula 1º ano";
    setAttr(a1);
    a1.href =
      "https://docs.google.com/document/d/1y24RESNWUwEWbUdXH07EgIvb5exEHkqW/edit";

    const a7 = document.createElement("a");
    a7.innerText = "Plano de Aula 7º ano";
    setAttr(a7);
    a7.href =
      "https://docs.google.com/document/d/1PGNdttrmhsSveGfpeadsGj5fONLHBhLX/edit?rtpof=true";

    const a8 = document.createElement("a");
    a8.innerText = "Plano de Aula 8º ano";
    setAttr(a8);
    a8.href =
      "https://docs.google.com/document/d/1LdsWdxFrS7ssKUSmSPtidE0E5iiQqwH6/edit";

    content.appendChild(a1);
    content.appendChild(a7);
    content.appendChild(a8);
  }

  if (name === "kli") {
    img.src = "./icons/kling.svg";
    h1.innerText = "Kling AI";
    p.innerText = `O Kling AI é uma plataforma da Kuaishou que gera vídeos realistas em alta definição a partir de texto ou imagens. Permite criar, estender e editar vídeos com movimentos fluidos e sincronização labial precisa. Oferece plano gratuito com créditos diários e versões pagas com mais recursos. Destacou-se recentemente com a série de ficção científica “Loading…”, mostrando seu potencial criativo.`;

    append();

    const a9 = document.createElement("a");
    a9.innerText = "Plano de Aula 9º ano";
    setAttr(a9);
    a9.href =
      "https://docs.google.com/document/d/1Ze6Y3jmxJ9II6sQLNpDw3l55g8itORHr/edit";

    content.appendChild(a9);
  }

  if (name === "stable") {
    img.src = "./icons/stable-diffusion.webp";
    h1.innerText = "Stable Diffusion AI";
    p.innerText = `O Kling AI é uma plataforma da Kuaishou que gera vídeos realistas em alta definição a partir de texto ou imagens. Permite criar, estender e editar vídeos com movimentos fluidos e sincronização labial precisa. Oferece plano gratuito com créditos diários e versões pagas com mais recursos. Destacou-se recentemente com a série de ficção científica “Loading…”, mostrando seu potencial criativo.`;

    append();

    const a1 = document.createElement("a");
    a1.innerText = "Plano de Aula 1º ano";
    setAttr(a1);
    a1.href =
      "https://docs.google.com/document/d/1s--LjyECqgUN4QmZZJePh_j-bbP1hpI_/edit";

    const a9 = document.createElement("a");
    a9.innerText = "Plano de Aula 9º ano";
    setAttr(a9);
    a9.href =
      "https://docs.google.com/document/d/1Ze6Y3jmxJ9II6sQLNpDw3l55g8itORHr/edit";

    content.appendChild(a9);
  }

  if (name === "suno") {
    img.src = "./icons/suno.svg";
    h1.innerText = "Suno";
    p.innerText = `O Suno é uma plataforma de inteligência artificial especializada na criação de músicas originais a partir de comandos em texto. Ele compõe melodia, letra, arranjos e até a voz cantada, permitindo que usuários sem conhecimentos técnicos produzam músicas completas. Suporta diversos estilos e gêneros musicais, podendo gerar desde trilhas instrumentais até canções com vocais realistas. A ferramenta é usada para projetos criativos, comerciais e de entretenimento, facilitando a produção musical de forma rápida e acessível.`;

    append();

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/1I5AjfPm_12jn3e4z8JDmPCjCCO0zQ2Gk/edit";

    const a3 = document.createElement("a");
    a3.innerText = "Plano de Aula 3º ano";
    setAttr(a3);
    a3.href =
      "https://docs.google.com/document/d/1iFNAaJNohFdZVXWoj6Q3ReZ61v2io3CH/edit";

    const a5 = document.createElement("a");
    a5.innerText = "Plano de Aula 5º ano";
    setAttr(a5);
    a5.href =
      "https://docs.google.com/document/d/1_le0svz9Z4Gj6hG9XpKZkxjodsqwRRas/edit";

    content.appendChild(a2);
    content.appendChild(a3);
    content.appendChild(a5);
  }

  if (name === "stab") {
    img.src = "./icons/stability.svg";
    h1.innerText = "Stability";
    p.innerText = `O Stability é uma plataforma de inteligência artificial especializada na criação de músicas originais a partir de comandos em texto. Ele compõe melodia, letra, arranjos e até a voz cantada, permitindo que usuários sem conhecimentos técnicos produzam músicas completas. Suporta diversos estilos e gêneros musicais, podendo gerar desde trilhas instrumentais até canções com vocais realistas. A ferramenta é usada para projetos criativos, comerciais e de entretenimento, facilitando a produção musical de forma rápida e acessível.`;

    append();

    const a1 = document.createElement("a");
    a1.innerText = "Plano de Aula 1º ano";
    setAttr(a1);
    a1.href =
      "https://docs.google.com/document/d/1kYONcLIX8C1nSrKVj0FOeahirAaiOA2wB5gW02a2T4U/edit?tab=t.0";

    content.appendChild(a1);
  }

  if (name === "elev") {
    img.src = "./icons/elevenlabs.svg";
    h1.innerText = "ElevenLabs";
    p.innerText = `A IA da ElevenLabs é especializada em geração de voz realista. Ela utiliza inteligência artificial para converter texto em fala (TTS) com entonação, ritmo e expressividade natural, simulando vozes humanas de alta qualidade. Também permite clonagem de voz a partir de amostras, suporte a vários idiomas e ajustes de emoção e tom, sendo usada em audiobooks, dublagens, jogos, treinamentos e assistentes virtuais.`;

    append();

    const a7 = document.createElement("a");
    a7.innerText = "Plano de Aula 7º ano";
    setAttr(a7);
    a7.href =
      "https://docs.google.com/document/d/1jcd5UG7UoiwQVDfgedPM-d_br8Pe0T-m/edit";

    content.appendChild(a7);
  }

  if (name === "mid") {
    img.src = "./icons/midjourney.png";
    h1.innerText = "MidJourney";
    p.innerText = `O Midjourney é uma inteligência artificial voltada para a criação de imagens a partir de descrições em texto. Utilizando técnicas avançadas de geração visual, ele interpreta comandos escritos e produz ilustrações, artes digitais e composições realistas ou estilizadas. A plataforma é muito usada por artistas, designers e criadores de conteúdo para explorar ideias visuais rapidamente. Funciona principalmente via Discord, onde o usuário envia o prompt e recebe as imagens geradas.`;

    append();

    const a4 = document.createElement("a");
    a4.innerText = "Plano de Aula 4º ano";
    setAttr(a4);
    a4.href =
      "https://docs.google.com/document/d/1rTBHWPSiZ4zw7_odwh_ch-IyH_E8zhyR/edit";

    content.appendChild(a4);
  }
}

const close = document.getElementById("close");

function closeModal() {
  modal.classList.add("invisible");
}

close.onclick = closeModal;
