// script.js — versão unificada com filtro direto nos .produto-card

/* === 1. CTA para WhatsApp (opcional, caso exista botão) =================== */
const cta = document.querySelector('.cta-button');
cta?.addEventListener('click', () => {
  window.location.href = 'https://wa.me/5535992660184';
});

/* === 2. Observer para animações de entrada ================================ */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function prepareFade(el) {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease-out, transform .6s ease-out';
  fadeObserver.observe(el);
}

/* === 3. Filtragem por categoria usando .produto-card ====================== */
const productCards = document.querySelectorAll('.produto-card');
productCards.forEach(card => prepareFade(card));

function filterProducts(cat) {
  productCards.forEach(card => {
    const categoria = card.dataset.categoria || 'todos';
    const parent   = card.parentElement; // <a> ou grid cell
    const show = (cat === 'todos') || (categoria === cat);
    parent.style.display = show ? 'block' : 'none';
  });
}

document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    filterProducts(this.dataset.categoria);
  });
});
// exibe tudo ao carregar
filterProducts('todos');

/* ======================================================
   4. CARROSSEL DE BANNERS
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

  /* ======================================================
     CONTROLE DO BOTÃO DE BANNER DE CAMPANHA
  ====================================================== */
  function controlarBotaoBannerData() {
    const slideAtivo = document.querySelector(".slide.active");
    const botao = document.querySelector(".banner-data-btn");

    if (!slideAtivo || !botao) return;

    if (slideAtivo.classList.contains("banner-data")) {
      botao.style.display = "inline-block";
    } else {
      botao.style.display = "none";
    }
  }


  /* ======================================================
     SELEÇÃO DE ELEMENTOS
  ====================================================== */
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");
  const carousel = document.querySelector(".carousel");


  /* ======================================================
     VARIÁVEIS DE CONTROLE
  ====================================================== */
  let currentSlide = 0;
  let autoPlay;


  /* ======================================================
     INICIALIZAÇÃO DO CARROSSEL (🔥 CORREÇÃO PRINCIPAL)
  ====================================================== */
  function initCarousel() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      indicators[index].classList.remove("active");
    });

    slides[0].classList.add("active");
    indicators[0].classList.add("active");

    currentSlide = 0;

    controlarBotaoBannerData(); // garante botão correto no load
  }


  /* ======================================================
     MOSTRAR UM SLIDE ESPECÍFICO
  ====================================================== */
  function showSlide(index){

    slides.forEach((slide,i)=>{
      slide.classList.remove("active");
      indicators[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    indicators[index].classList.add("active");

    currentSlide = index;

    controlarBotaoBannerData();
  }


  /* ======================================================
     PRÓXIMO SLIDE
  ====================================================== */
  function nextSlide(){

    let next = currentSlide + 1;

    if(next >= slides.length){
      next = 0;
    }

    showSlide(next);
  }


  /* ======================================================
     INICIAR AUTOPLAY
  ====================================================== */
  function startCarousel(){
    autoPlay = setInterval(nextSlide, 5000);
  }


  /* ======================================================
     PARAR AUTOPLAY
  ====================================================== */
  function stopCarousel(){
    clearInterval(autoPlay);
  }


  /* ======================================================
     CLIQUE NOS INDICADORES
  ====================================================== */
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function(){
      showSlide(index);
    });
  });


  /* ======================================================
     PAUSAR AO PASSAR O MOUSE
  ====================================================== */
  carousel.addEventListener("mouseenter", stopCarousel);
  carousel.addEventListener("mouseleave", startCarousel);


  /* ======================================================
     INICIALIZAÇÃO FINAL (ORDEM CORRETA)
  ====================================================== */
  initCarousel();   // 🔥 resolve seu problema
  startCarousel();  // inicia depois de tudo pronto

});






/* === Carrossel de Depoimentos ==================================== */
document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".depoimento-track");
  const slides = document.querySelectorAll(".depoimento");
  const prev = document.getElementById("prevDepoimento");
  const next = document.getElementById("nextDepoimento");

  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // Auto play
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlide();
  }, 5000);

});

/*=== Formulário de orçamento ======================================*/
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formOrcamento");
  if (!form) return;

  const botao = form.querySelector("button");
  const telefoneInput = document.getElementById("telefone");
  const produtoSelect = document.getElementById("produto");
  const quantidadeInput = document.getElementById("quantidade");
  const valorEstimado = document.getElementById("valorEstimado");

  // =========================
  // TABELA DE PREÇOS (edite aqui)
  // =========================
  const precos = {
    "Copo Térmico 500ml": 85,
    "Garrafa Térmica": 120,
    "Caneca Personalizada": 45,
    "Outro": 60
  };

  // =========================
  // Máscara Telefone
  // =========================
  telefoneInput.addEventListener("input", function () {
    let valor = telefoneInput.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      telefoneInput.value = `(${valor.slice(0,2)}) ${valor.slice(2,7)}-${valor.slice(7)}`;
    } else if (valor.length > 2) {
      telefoneInput.value = `(${valor.slice(0,2)}) ${valor.slice(2)}`;
    } else {
      telefoneInput.value = valor;
    }
  });

  // =========================
  // Cálculo automático
  // =========================
  function calcularValor() {
  const valorUnitario = parseFloat(produtoSelect.value);
  const quantidade = parseInt(quantidadeInput.value);

  if (!isNaN(valorUnitario) && quantidade > 0) {
    const total = valorUnitario * quantidade;
    valorEstimado.textContent = 
      `Valor estimado: R$ ${total.toFixed(2)}`;
  } else {
    valorEstimado.textContent = "";
  }
}

  produtoSelect.addEventListener("change", calcularValor);
  quantidadeInput.addEventListener("input", calcularValor);

  // =========================
  // Submit
  // =========================
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valido = true;

    function mostrarErro(campo, mensagem) {
      const erro = campo.nextElementSibling;
      erro.textContent = mensagem;
      campo.style.borderColor = "red";
      valido = false;
    }

    function limparErro(campo) {
      const erro = campo.nextElementSibling;
      erro.textContent = "";
      campo.style.borderColor = "#ccc";
    }

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const produto = produtoSelect;
    const quantidade = quantidadeInput;
    const mensagemExtra = document.getElementById("mensagem");

    if (!nome.value.trim()) mostrarErro(nome, "Informe seu nome");
    else limparErro(nome);

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) mostrarErro(email, "Email inválido");
    else limparErro(email);

    if (telefone.value.replace(/\D/g, "").length < 10)
      mostrarErro(telefone, "Telefone inválido");
    else limparErro(telefone);

    if (!produto.value.trim()) mostrarErro(produto, "Selecione um produto");
    else limparErro(produto);

    if (!quantidade.value || quantidade.value <= 0)
      mostrarErro(quantidade, "Quantidade inválida");
    else limparErro(quantidade);

    if (!valido) return;

    botao.textContent = "Redirecionando...";
    botao.disabled = true;

    const totalCalculado = 
  parseFloat(produto.value) * quantidade.value;

    const mensagem = `
Olá, vim pelo site da OG Criativo!

📌 *Solicitação de Orçamento*
👤 Nome: ${nome.value}
📧 Email: ${email.value}
📱 Telefone: ${telefone.value}
🛍 Produto: ${produto.value}
🔢 Quantidade: ${quantidade.value}
💰 Valor estimado: R$ ${totalCalculado.toFixed(2)}

📝 Observações:
${mensagemExtra.value || "Nenhuma observação adicional."}
    `;

    const numeroWhatsApp = "5535992660184";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      form.reset();
      valorEstimado.textContent = "";
      botao.textContent = "Enviar Solicitação";
      botao.disabled = false;
    }, 800);

  });

});

/* === 7. Garante que links (âncoras) ocupem toda área ===================== */
document.querySelectorAll('.produto-card-link').forEach(a => {
  a.style.display = 'block';
  a.style.width   = '100%';
});

/* === 8. Carrossel customizado Banner 2 e 3 =========================== */
const bannerSlides = document.querySelectorAll('.carousel .slide');
let bannerIndex = 0;

function mostrarBanner() {
  bannerSlides.forEach(slide => slide.classList.remove('ativo'));
  bannerSlides[bannerIndex].classList.add('ativo');
  bannerIndex = (bannerIndex + 1) % bannerSlides.length;
}

setInterval(mostrarBanner, 5000); // troca de banner a cada 5 segundos
