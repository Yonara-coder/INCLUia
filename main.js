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
  if (name === "claude") {
    img.src = "./icons/claude.png";
    h1.innerText = "CLAUDE AI";
    p.innerText = `Claude AI é um avançado assistente de inteligência artificial. Ele foi desenvolvido para conversar, gerar textos criativos e responder suas perguntas. É uma ferramenta que busca ser útil, coerente e segura em diversas tarefas. Com ele, você explora informações e cria conteúdo de forma eficaz.`;

    append();

    const a3 = document.createElement("a");
    a3.innerText = "Plano de Aula 3º ano - Ciências";
    setAttr(a3);
    a3.href =
      "https://docs.google.com/document/d/13yynShtNKf61YagEMaj2ZFJFIjn5mONpJTbgMtUbLYk/edit?tab=t.0";

    content.appendChild(a3);
  }

  if (name === "deepseek") {
    img.src = "./icons/deepseek.png";
    h1.innerText = "DeepSeek";
    p.innerText = `Deepseek é um motor de busca e assistente de inteligência artificial. Sua principal função é fornecer respostas detalhadas e interativas para as perguntas dos usuários, indo além de simples resultados de busca. Ele se destaca por sua capacidade de compreender contextos complexos, auxiliando em tarefas que exigem uma análise aprofundada de informações. Além disso, busca ser uma ferramenta versátil para diversas necessidades informacionais.`;

    append();

    const a7 = document.createElement("a");
    a7.innerText = "Plano de Aula 7º ano - Ciências";
    setAttr(a7);
    a7.href =
      "https://docs.google.com/document/d/1i9hqBt3N-XeulCk6DE5gxDSLno-DJGv1j3PbuVH844Y/edit?tab=t.0";

    content.appendChild(a7);
  }
  if (name === "ideogram") {
    img.src = "./icons/ideogram.png";
    h1.innerText = "Ideogram";
    p.innerText = `Ideogram é uma ferramenta de inteligência artificial focada na geração de imagens. Seu grande diferencial é a capacidade superior de criar imagens que incluem texto legível e com tipografia de alta qualidade. Enquanto muitas IAs generativas de imagem falham ao tentar inserir texto, o Ideogram se destaca precisamente nesse aspecto, produzindo logos e designs visuais com clareza textual. Isso a torna ideal para marketing, branding e projetos gráficos onde a mensagem escrita é crucial.`;

    append();

    const a7 = document.createElement("a");
    a7.innerText = "Plano de Aula 7º ano - Ciências";
    setAttr(a7);
    a7.href =
      "https://docs.google.com/document/d/1i9hqBt3N-XeulCk6DE5gxDSLno-DJGv1j3PbuVH844Y/edit?tab=t.0";

    content.appendChild(a7);
  }
  if (name === "stability") {
    img.src = "./icons/stability.svg";
    h1.innerText = "Stability AI";
    p.innerText = `Stability AI é uma empresa líder no desenvolvimento de modelos de inteligência artificial, especialmente conhecida por sua abordagem de código aberto. Ela se tornou amplamente reconhecida pela criação de tecnologias de geração de imagens, como o popular Stable Diffusion. Seu objetivo é democratizar o acesso à IA, permitindo que desenvolvedores e pesquisadores colaborem e inovem com suas ferramentas. A empresa impulsiona a criatividade através da IA generativa.`;

    append();

    const a1 = document.createElement("a");
    a1.innerText = "Plano de Aula 1º ano - Português";
    setAttr(a1);
    a1.href =
      "https://docs.google.com/document/d/1kYONcLIX8C1nSrKVj0FOeahirAaiOA2wB5gW02a2T4U/edit?tab=t.0";

    content.appendChild(a1);
  }
  if (name === "notebook") {
    img.src = "./icons/notebooklm.svg";
    h1.innerText = "NotebookLM";
    p.innerText = `NotebookLM é um assistente de inteligência artificial desenvolvido pelo Google. Ele atua como um "caderno inteligente" que auxilia na organização e resumo de informações. Sua principal funcionalidade é processar e compreender o conteúdo dos seus próprios documentos e diversas outras fontes de dados que você fornecer. Isso permite que você extraia insights, crie rascunhos e sintetize conhecimento de maneira eficiente, otimizando seu estudo ou pesquisa.`;

    append();

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano - Ciências";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/1cdmPKt97IPzLVIIFJAz7Lf5ucg0rAkh3uLBmVpDhqYE/edit?tab=t.0";

    content.appendChild(a2);
  }
  if (name === "gemini") {
    img.src = "./icons/gemini.png";
    h1.innerText = "Gemini";
    p.innerText = `Gemini é um avançado modelo de inteligência artificial multimodal, desenvolvido pelo Google. Sua principal característica é a capacidade de processar e gerar diferentes tipos de dados simultaneamente, como texto, código de programação, áudio, imagens e até vídeos. Essa versatilidade permite que seja aplicado em uma vasta gama de tarefas, desde a criação de conteúdo criativo até a solução de problemas complexos. Ele representa um passo significativo na interação humano-IA.`;

    append();

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano - Artes";
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
    a2.innerText = "Plano de Aula 2º ano - Ciências";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/1cdmPKt97IPzLVIIFJAz7Lf5ucg0rAkh3uLBmVpDhqYE/edit?tab=t.0";

    content.appendChild(a2);
  }
  if (name === "chatgpt") {
    img.src = "./icons/chatgpt.svg";
    h1.innerText = "ChatGPT";
    p.innerText = `ChatGPT é um chatbot de inteligência artificial criado pela OpenAI, famoso por sua capacidade de interação conversacional. Ele pode conversar de forma fluida, responder a uma ampla variedade de perguntas e até mesmo gerar textos criativos, como poemas, roteiros e e-mails. Além disso, é capaz de auxiliar na geração de código de programação, tornando-o uma ferramenta versátil para produtividade e criatividade. Sua interface intuitiva o torna acessível a muitos usuários.`;

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
    a5.innerText = "Plano de Aula 5º ano - Português";
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
    p.innerText = `Suno é uma inteligência artificial inovadora que permite a criação de músicas completas. A partir de descrições textuais simples fornecidas pelo usuário, a IA é capaz de gerar não apenas a melodia e a harmonia, mas também o ritmo e as letras das canções. Ela democratiza a produção musical, permitindo que qualquer pessoa com uma ideia crie faixas originais. É uma ferramenta poderosa para artistas e entusiastas da música.`;

    append();

    const a3 = document.createElement("a");
    a3.innerText = "Plano de Aula 3º ano - Ciências";
    setAttr(a3);
    a3.href =
      "https://docs.google.com/document/d/1fX7sqzNpUjHf8n11MZlY9Te097uHpleE8UwA9kT-Phg/edit?tab=t.0";

    const a2 = document.createElement("a");
    a2.innerText = "Plano de Aula 2º ano - Matemática";
    setAttr(a2);
    a2.href =
      "https://docs.google.com/document/d/13HPsr5uzDG_mgBmXauDDd7hhJINRHj3b1a1EagLKDCc/edit?tab=t.0";

    content.appendChild(a2);
    content.appendChild(a3);
  }
  if (name === "perplexity") {
    img.src = "./icons/perplexity.webp";
    h1.innerText = "Perplexity";
    p.innerText = `Perplexity é um motor de busca e ferramenta de resposta a perguntas, diferenciando-se por sua abordagem única. Ele não apenas fornece respostas, mas também as sintetiza em resumos concisos e, crucialmente, cita as fontes de onde a informação foi extraída. Isso garante que os usuários possam verificar a veracidade das informações, promovendo maior transparência e confiabilidade. É ideal para quem busca conhecimento rápido e fundamentado.`;

    append();

    const a9 = document.createElement("a");
    a9.innerText = "Plano de Aula 9º ano - Ciências";
    setAttr(a9);
    a9.href =
      "https://docs.google.com/document/d/12sbgrOgHmSmmj82qqwbKXX8aZV_Eg9Nc/edit";

    content.appendChild(a9);
  }
  if (name === "grok") {
    img.src = "./icons/grok.png";
    h1.innerText = "Grok";
    p.innerText = `Grok é uma inteligência artificial conversacional desenvolvida pela xAI, a empresa de Elon Musk. Uma de suas características distintivas é a capacidade de responder a perguntas com um tom de humor e até mesmo sarcasmo. Além disso, o Grok tem acesso a informações em tempo real através da plataforma X (antigo Twitter). Isso lhe permite fornecer respostas atualizadas e contextualizadas, com uma personalidade mais irreverente em comparação a outras IAs.`;

    append();

    const a5 = document.createElement("a");
    a5.innerText = "Plano de Aula 5º ano - Geografia";
    setAttr(a5);
    a5.href =
      "https://docs.google.com/document/d/11Slyxhj2kfF8UyTaHz4OnoMK7LvQF85be9rRjExuf0M/edit?tab=t.0";

    content.appendChild(a5);
  }
  if (name === "gemini2") {
    img.src = "./icons/gemini.png";
    h1.innerText = "Gemini";
    p.innerText = ` Gemini é um avançado modelo de inteligência artificial multimodal, desenvolvido pelo Google. Sua principal característica é a capacidade de processar e gerar diferentes tipos de dados simultaneamente, como texto, código de programação, áudio, imagens e até vídeos. Essa versatilidade permite que seja aplicado em uma vasta gama de tarefas, desde a criação de conteúdo criativo até a solução de problemas complexos. Ele representa um passo significativo na interação humano-IA.`;

    append();

    const a8 = document.createElement("a");
    a8.innerText = "Plano de Aula 8º ano - Química";
    setAttr(a8);
    a8.href =
      "https://docs.google.com/document/d/11FjqzbykgAVp78y7Lcj86Iivaj_CYKS4Q9mCWw2yv4g/edit?tab=t.0";

    content.appendChild(a8);
  }
  if (name === "perplexity2") {
    img.src = "./icons/perplexity.webp";
    h1.innerText = "Perplexity";
    p.innerText = `Perplexity é um motor de busca e ferramenta de resposta a perguntas, diferenciando-se por sua abordagem única. Ele não apenas fornece respostas, mas também as sintetiza em resumos concisos e, crucialmente, cita as fontes de onde a informação foi extraída. Isso garante que os usuários possam verificar a veracidade das informações, promovendo maior transparência e confiabilidade. É ideal para quem busca conhecimento rápido e fundamentado.`;

    append();

    const a6 = document.createElement("a");
    a6.innerText = "Plano de Aula 6º ano - Filosofia";
    setAttr(a6);
    a6.href =
      "https://docs.google.com/document/d/1hv_Fl-fLfFdnz4kGZkd8832zV1vSyz2jbmRLmt-mwBM/edit?tab=t.0";

    content.appendChild(a6);
  }
  if (name === "notebook2") {
    img.src = "./icons/notebooklm.svg";
    h1.innerText = "NotebookLM";
    p.innerText = `NotebookLM é um assistente de inteligência artificial desenvolvido pelo Google. Ele atua como um "caderno inteligente" que auxilia na organização e resumo de informações. Sua principal funcionalidade é processar e compreender o conteúdo dos seus próprios documentos e diversas outras fontes de dados que você fornecer. Isso permite que você extraia insights, crie rascunhos e sintetize conhecimento de maneira eficiente, otimizando seu estudo ou pesquisa.`;

    append();

    const a9 = document.createElement("a");
    a9.innerText = "Plano de Aula 9º ano - História";
    setAttr(a9);
    a9.href =
      "https://docs.google.com/document/d/1gEMURtZDTLpgS2G694ClmrKRdL9iA61c/edit";

    content.appendChild(a9);
  }
  if (name === "kling") {
    img.src = "./icons/kling.svg";
    h1.innerText = "Kling";
    p.innerText = `Kling é um modelo de inteligência artificial desenvolvido na China, com foco principal na geração de vídeos. Sua tecnologia permite criar sequências de vídeo complexas a partir de simples descrições textuais, transformando ideias em conteúdo visual dinâmico. Ele se posiciona como um concorrente forte no crescente campo das tecnologias de vídeo generativo. O Kling busca inovar na produção de conteúdo audiovisual impulsionada por IA.`;

    append();

    const a9 = document.createElement("a");
    a9.innerText = "Plano de Aula 9º ano - Matemática";
    setAttr(a9);
    a9.href =
      "https://docs.google.com/document/d/1nzES1mq9vJaIf6TNV1MPHUtv19psQF7U/edit";

    content.appendChild(a9);
  }
  if (name === "leonardo") {
    img.src = "./icons/leonardo.png";
    h1.innerText = "Leonardo AI";
    p.innerText = `O Leonardo AI é uma plataforma de inteligência artificial focada em criação de imagens e design digital. Ele permite gerar artes realistas, estilizadas ou conceituais a partir de descrições em texto. É usado por artistas, designers e criadores de jogos para desenvolver personagens, cenários, ilustrações e até texturas. A ferramenta oferece opções de ajuste fino, personalização de estilos e treinamento de modelos próprios. Além disso, integra recursos colaborativos e de organização para fluxos criativos.`;

    append();

    const a5 = document.createElement("a");
    a5.innerText = "Plano de Aula 5º ano - Artes";
    setAttr(a5);
    a5.href =
      "https://docs.google.com/document/d/1UGOg-3wIasSlVOYJ59uCMxYUhG_oqGDySK1sIqNlG94/edit?tab=t.0";

    content.appendChild(a5);
  }
}

const close = document.getElementById("close");

function closeModal() {
  modal.classList.add("invisible");
}

close.onclick = closeModal;
