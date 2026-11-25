document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      htmlLang: "en",
      meta_home_title: "VELURA — Interactive WebGL & 3D Web Experiences",
      meta_home_desc: "Custom WebGL and 3D websites engineered for speed, precision, and visual depth.",
      meta_tech_title: "Technology & Architecture — VELURA",
      meta_tech_desc: "How we build fast, secure WebGL and 3D websites compatible with every browser.",
      meta_contact_title: "Contact & Quotes — VELURA",
      meta_contact_desc: "Get in touch via WhatsApp, email, or send a quick project brief.",
      meta_terms_title: "Terms of Use — VELURA",
      meta_priv_title: "Privacy Policy — VELURA",
      nav_models: "Models",
      nav_tech: "Technology",
      nav_contact: "Contact",
      hero_eyebrow: "WebGL · Interactive 3D · Performance",
      hero_title: "Interfaces with real depth.",
      hero_sub: "We design and engineer custom web experiences with real-time 3D rendering, minimalist clarity, and fast loading across desktop and Apple devices.",
      hero_btn_models: "View Models",
      hero_btn_wa: "Request Quote on WhatsApp",
      show_title: "Selected Models",
      show_sub: "Click any rounded quadrant to inspect the demonstration in expanded view.",
      expand_btn: "Expand",
      m1_title: "01 — Architecture & 3D Product",
      m1_card_desc: "Interactive visualization with dynamic lighting and fluid 60fps navigation.",
      m1_modal_desc: "Real-time WebGL product and spatial showcase engineered for smooth camera transitions and responsive frame pacing.",
      m2_title: "02 — Minimalist Editorial",
      m2_card_desc: "High-contrast typographic layout with GPU-accelerated transitions.",
      m2_modal_desc: "Clean editorial interface prioritizing typography, visual restraint, and hardware-accelerated motion.",
      m3_title: "03 — Industrial Showcase",
      m3_card_desc: "Blender-exported assets optimized for mobile and Safari.",
      m3_modal_desc: "3D hardware and industrial model pipeline optimized for Safari, iOS, and desktop browsers.",
      m4_title: "04 — Immersive Experience",
      m4_card_desc: "Scroll-driven visual storytelling syncing 3D camera and clean UI.",
      m4_modal_desc: "Scroll-synchronized 3D narrative combining depth cues, clear hierarchy, and controlled asset weight.",
      cta_title: "Interested in a custom model for your brand?",
      cta_sub: "Message us directly on WhatsApp to discuss scope, timeline, and a tailored quote.",
      cta_whatsapp: "Chat on WhatsApp",
      tech_eyebrow: "Engineering & Standards",
      tech_title: "Built for speed, stability, and precision.",
      tech_sub: "Every project combines optimized 3D pipelines with lightweight front-end engineering so visual complexity never slows down the user.",
      t1_title: "Blender to WebGL Pipeline",
      t1_desc: "Geometry decimation, baked lighting, and compressed textures ensure 3D scenes render smoothly without bloated downloads.",
      t2_title: "Apple & Safari Readiness",
      t2_desc: "Strict GPU memory budgeting, universal H.264 media encoding, and viewport handling tailored for iOS, iPadOS, and macOS.",
      t3_title: "Edge Security & CDN",
      t3_desc: "Deployed on global edge networks with HTTPS, Content Security Policy headers, anti-clickjacking rules, and clean dependencies.",
      t4_title: "On-Demand Media Loading",
      t4_desc: "Videos and heavy assets initialize only when entering the viewport, preserving battery and bandwidth on mobile devices.",
      t5_title: "Responsive Architecture",
      t5_desc: "Adaptive layouts and touch-calibrated interactions built to feel native from ultra-wide monitors down to compact phones.",
      t6_title: "Modular Delivery",
      t6_desc: "Multi-page static architecture prevents single-page bloat and keeps navigation instantaneous.",
      contact_eyebrow: "Direct Channels",
      contact_title: "Start a conversation.",
      contact_sub: "Every project is quoted according to 3D complexity, pages, and timeline. Choose your preferred channel below.",
      c_wa_title: "WhatsApp Direct",
      c_wa_desc: "Ideal for quick questions, sharing visual references, and scheduling a call.",
      c_em_title: "Email & Briefings",
      c_em_desc: "Send project documentation, brand guidelines, or 3D asset details directly to our inbox.",
      c_br_title: "What to Include",
      c_br_desc: "1) Reference model from our portfolio · 2) Desired deadline · 3) Whether you already have 3D assets or need full modeling.",
      back_models: "← Back to Models",
      go_contact: "Discuss Your Project →",
      footer_copy: "© 2026 VELURA. All rights reserved.",
      footer_terms: "Terms of Use",
      footer_privacy: "Privacy Policy",
      legal_eyebrow: "Legal Documentation",
      legal_updated: "Last updated: November 25, 2026",
      terms_heading: "Terms of Use",
      terms_s1_t: "1. Purpose of This Website",
      terms_s1_p: "This website operates as an official commercial portfolio presenting web engineering, WebGL, and 3D visual demonstration models.",
      terms_s2_t: "2. Intellectual Property",
      terms_s2_p: "All source code, visual layouts, brand elements, 3D renders, and demonstration videos displayed across these pages are protected by copyright laws. Copying, scraping, downloading for redistribution, or commercial reuse without explicit written authorization is prohibited.",
      terms_s3_t: "3. Demonstrations & Project Scope",
      terms_s3_p: "Videos and interactive previews represent technical and aesthetic benchmarks. Final performance, frame rate, and deliverables for contracted websites depend on the approved project scope, 3D asset complexity, hosting environment, and end-user hardware.",
      terms_s4_t: "4. External Links",
      terms_s4_p: "Outbound links (such as WhatsApp or email clients) lead to third-party platforms governed by their own terms and security policies.",
      priv_heading: "Privacy Policy",
      priv_s1_t: "1. Data We Collect",
      priv_s1_p: "This portfolio does not sell personal information or run invasive advertising trackers. When you initiate contact voluntarily via WhatsApp or email, we receive only the contact details and project information you choose to share.",
      priv_s2_t: "2. How Information Is Used",
      priv_s2_p: "Shared contact details are used strictly to answer technical inquiries, prepare project quotes, and execute contracted services.",
      priv_s3_t: "3. Local Storage & Technical Security",
      priv_s3_p: "We store only your selected interface language preference (EN, ES, or PT) locally in your browser so pages stay consistent while you browse. All pages are served over HTTPS with strict browser security headers.",
      priv_s4_t: "4. Your Rights (LGPD / GDPR)",
      priv_s4_p: "You may request access, correction, or deletion of any contact records you have sent us at any time through our official contact page."
    },
    es: {
      htmlLang: "es",
      meta_home_title: "VELURA — Experiencias WebGL y 3D Interactivas",
      meta_home_desc: "Sitios web personalizados en WebGL y 3D diseñados para velocidad, precisión y profundidad visual.",
      meta_tech_title: "Tecnología y Arquitectura — VELURA",
      meta_tech_desc: "Cómo construimos sitios WebGL y 3D rápidos, seguros y compatibles con cualquier navegador.",
      meta_contact_title: "Contacto y Cotizaciones — VELURA",
      meta_contact_desc: "Contáctanos por WhatsApp, correo o envíanos un resumen rápido de tu proyecto.",
      meta_terms_title: "Términos de Uso — VELURA",
      meta_priv_title: "Política de Privacidad — VELURA",
      nav_models: "Modelos",
      nav_tech: "Tecnología",
      nav_contact: "Contacto",
      hero_eyebrow: "WebGL · 3D Interactivo · Rendimiento",
      hero_title: "Interfaces con profundidad real.",
      hero_sub: "Diseñamos y desarrollamos experiencias web a medida con renderizado 3D en tiempo real, claridad minimalista y carga rápida en escritorio y dispositivos Apple.",
      hero_btn_models: "Ver Modelos",
      hero_btn_wa: "Cotizar por WhatsApp",
      show_title: "Modelos Seleccionados",
      show_sub: "Haz clic en cualquier cuadrante redondeado para ver la demostración ampliada.",
      expand_btn: "Ampliar",
      m1_title: "01 — Arquitectura y Producto 3D",
      m1_card_desc: "Visualización interactiva con iluminación dinámica y navegación fluida a 60fps.",
      m1_modal_desc: "Demostración WebGL en tiempo real diseñada para transiciones fluidas de cámara y respuesta inmediata.",
      m2_title: "02 — Editorial Minimalista",
      m2_card_desc: "Diseño tipográfico de alto contraste con transiciones aceleradas por GPU.",
      m2_modal_desc: "Interfaz editorial limpia centrada en tipografía, claridad y movimiento fluido.",
      m3_title: "03 — Showcase Industrial",
      m3_card_desc: "Activos exportados desde Blender optimizados para móvil y Safari.",
      m3_modal_desc: "Flujo 3D optimizado para Safari, iOS y navegadores de escritorio sin sobrecarga.",
      m4_title: "04 — Experiencia Inmersiva",
      m4_card_desc: "Narrativa visual guiada por scroll sincronizando cámara 3D e interfaz.",
      m4_modal_desc: "Experiencia 3D sincronizada con el desplazamiento, cuidando el peso de los recursos.",
      cta_title: "¿Te interesa un modelo a medida para tu marca?",
      cta_sub: "Escríbenos directamente por WhatsApp para revisar alcance, plazos y una cotización personalizada.",
      cta_whatsapp: "Hablar por WhatsApp",
      tech_eyebrow: "Ingeniería y Estándares",
      tech_title: "Construido para velocidad, estabilidad y precisión.",
      tech_sub: "Cada proyecto combina flujos 3D optimizados con ingeniería front-end ligera para que la complejidad visual nunca frene al usuario.",
      t1_title: "Flujo Blender a WebGL",
      t1_desc: "Optimización de geometría, iluminación horneada y texturas comprimidas para que las escenas 3D fluyan sin descargas pesadas.",
      t2_title: "Compatibilidad Apple y Safari",
      t2_desc: "Control estricto de memoria GPU, códec universal H.264 y ajuste de pantalla para iOS, iPadOS y macOS.",
      t3_title: "Seguridad en el Borde y CDN",
      t3_desc: "Desplegado en redes globales con HTTPS, cabeceras Content Security Policy, protección anti-clickjacking y código limpio.",
      t4_title: "Carga de Medios Bajo Demanda",
      t4_desc: "Los videos y activos pesados se activan solo al entrar en pantalla, cuidando batería y datos móviles.",
      t5_title: "Arquitectura Responsiva",
      t5_desc: "Diseños adaptables e interacciones táctiles calibradas desde monitores ultrawide hasta teléfonos compactos.",
      t6_title: "Entrega Modular",
      t6_desc: "Arquitectura multipágina estática que evita sobrecargar una sola pantalla y mantiene la navegación instantánea.",
      contact_eyebrow: "Canales Directos",
      contact_title: "Iniciemos una conversación.",
      contact_sub: "Cada proyecto se cotiza según complejidad 3D, páginas y plazos. Elige tu canal preferido abajo.",
      c_wa_title: "WhatsApp Directo",
      c_wa_desc: "Ideal para consultas rápidas, enviar referencias visuales y agendar una llamada.",
      c_em_title: "Correo y Briefings",
      c_em_desc: "Envía documentación del proyecto, identidad de marca o detalles 3D directamente a nuestra bandeja.",
      c_br_title: "Qué Incluir",
      c_br_desc: "1) Modelo de referencia del portafolio · 2) Plazo deseado · 3) Si ya cuentas con activos 3D o necesitas modelado completo.",
      back_models: "← Volver a Modelos",
      go_contact: "Hablar de tu Proyecto →",
      footer_copy: "© 2026 VELURA. Todos los derechos reservados.",
      footer_terms: "Términos de Uso",
      footer_privacy: "Política de Privacidad",
      legal_eyebrow: "Documentación Legal",
      legal_updated: "Última actualización: 25 de noviembre de 2026",
      terms_heading: "Términos de Uso",
      terms_s1_t: "1. Finalidad de Este Sitio",
      terms_s1_p: "Este sitio web funciona como portafolio comercial oficial para exhibir modelos de desarrollo web, WebGL y visualización 3D.",
      terms_s2_t: "2. Propiedad Intelectual",
      terms_s2_p: "Todo el código fuente, diseños, elementos de marca, renders 3D y videos de demostración están protegidos por derechos de autor. Se prohíbe su copia, extracción o uso comercial sin autorización escrita.",
      terms_s3_t: "3. Demostraciones y Alcance",
      terms_s3_p: "Los videos y vistas previas representan referencias técnicas y estéticas. El rendimiento final de un proyecto contratado depende del alcance aprobado, complejidad 3D, alojamiento y dispositivo del usuario.",
      terms_s4_t: "4. Enlaces Externos",
      terms_s4_p: "Los enlaces salientes (como WhatsApp o correo) dirigen a plataformas de terceros regidas por sus propias políticas.",
      priv_heading: "Política de Privacidad",
      priv_s1_t: "1. Datos que Recopilamos",
      priv_s1_p: "Este portafolio no vende información personal ni utiliza rastreadores publicitarios invasivos. Al contactarnos voluntariamente por WhatsApp o correo, recibimos únicamente los datos que decidas compartir.",
      priv_s2_t: "2. Uso de la Información",
      priv_s2_p: "Los datos compartidos se utilizan exclusivamente para responder consultas técnicas, preparar cotizaciones y ejecutar servicios contratados.",
      priv_s3_t: "3. Almacenamiento Local y Seguridad",
      priv_s3_p: "Guardamos únicamente tu preferencia de idioma (EN, ES o PT) de forma local en tu navegador para mantener coherencia al navegar. Todas las páginas se sirven sobre HTTPS con cabeceras de seguridad.",
      priv_s4_t: "4. Tus Derechos",
      priv_s4_p: "Puedes solicitar acceso, corrección o eliminación de tus registros de contacto en cualquier momento mediante nuestra página de contacto."
    },
    pt: {
      htmlLang: "pt-BR",
      meta_home_title: "VELURA — Experiências WebGL & 3D Interativas",
      meta_home_desc: "Sites sob medida em WebGL e 3D projetados para velocidade, precisão e profundidade visual.",
      meta_tech_title: "Tecnologia e Arquitetura — VELURA",
      meta_tech_desc: "Como construímos sites WebGL e 3D rápidos, seguros e compatíveis com qualquer navegador.",
      meta_contact_title: "Contato e Orçamentos — VELURA",
      meta_contact_desc: "Fale conosco pelo WhatsApp, e-mail ou envie um resumo rápido do seu projeto.",
      meta_terms_title: "Termos de Uso — VELURA",
      meta_priv_title: "Política de Privacidade — VELURA",
      nav_models: "Modelos",
      nav_tech: "Tecnologia",
      nav_contact: "Contato",
      hero_eyebrow: "WebGL · 3D Interativo · Performance",
      hero_title: "Interfaces com profundidade real.",
      hero_sub: "Projetamos e desenvolvemos experiências web sob medida com renderização 3D em tempo real, clareza minimalista e carregamento rápido no desktop e em dispositivos Apple.",
      hero_btn_models: "Ver Modelos",
      hero_btn_wa: "Orçamento no WhatsApp",
      show_title: "Modelos Selecionados",
      show_sub: "Clique em qualquer quadrante arredondado para assistir à demonstração ampliada.",
      expand_btn: "Expandir",
      m1_title: "01 — Arquitetura & Produto 3D",
      m1_card_desc: "Visualização interativa com iluminação dinâmica e navegação fluida a 60fps.",
      m1_modal_desc: "Demonstração WebGL em tempo real projetada para transições suaves de câmera e resposta imediata.",
      m2_title: "02 — Editorial Minimalista",
      m2_card_desc: "Layout tipográfico de alto contraste com transições aceleradas por GPU.",
      m2_modal_desc: "Interface editorial limpa com foco em tipografia, clareza e movimento fluido.",
      m3_title: "03 — Showcase Industrial",
      m3_card_desc: "Assets exportados do Blender otimizados para mobile e Safari.",
      m3_modal_desc: "Pipeline 3D otimizado para Safari, iOS e desktop sem estourar memória gráfica.",
      m4_title: "04 — Experiência Imersiva",
      m4_card_desc: "Narrativa visual guiada por scroll sincronizando câmera 3D e interface.",
      m4_modal_desc: "Experiência 3D sincronizada à rolagem com controle rigoroso de peso e fluidez.",
      cta_title: "Quer um modelo sob medida para a sua marca?",
      cta_sub: "Chame direto no WhatsApp para alinhar escopo, prazo e orçamento personalizado.",
      cta_whatsapp: "Falar no WhatsApp",
      tech_eyebrow: "Engenharia & Padrões",
      tech_title: "Construído para velocidade, estabilidade e precisão.",
      tech_sub: "Cada projeto une pipelines 3D otimizados com front-end leve para que a complexidade visual nunca trave a navegação.",
      t1_title: "Pipeline Blender para WebGL",
      t1_desc: "Otimização de malha, iluminação baked e texturas comprimidas garantem cenas 3D fluidas sem downloads pesados.",
      t2_title: "Compatibilidade Apple & Safari",
      t2_desc: "Controle rigoroso de memória de GPU, codificação universal H.264 e ajuste de viewport para iOS, iPadOS e macOS.",
      t3_title: "Segurança na Borda & CDN",
      t3_desc: "Publicado em rede global com HTTPS, headers Content Security Policy, proteção anti-clickjacking e código limpo.",
      t4_title: "Carregamento Sob Demanda",
      t4_desc: "Vídeos e assets pesados iniciam apenas ao entrar na tela, preservando bateria e dados móveis.",
      t5_title: "Arquitetura Responsiva",
      t5_desc: "Layouts adaptáveis e interações calibradas para toque desde monitores ultrawide até celulares compactos.",
      t6_title: "Entrega Modular",
      t6_desc: "Estrutura multipágina estática evita sobrecarga em uma única tela e mantém a navegação instantânea.",
      contact_eyebrow: "Canais Diretos",
      contact_title: "Inicie uma conversa.",
      contact_sub: "Cada projeto é orçado conforme complexidade 3D, páginas e prazo. Escolha seu canal preferido abaixo.",
      c_wa_title: "WhatsApp Direto",
      c_wa_desc: "Ideal para dúvidas rápidas, envio de referências visuais e alinhamento inicial.",
      c_em_title: "E-mail & Briefings",
      c_em_desc: "Envie documentação do projeto, identidade visual ou detalhes dos modelos 3D para nossa caixa de entrada.",
      c_br_title: "O Que Enviar",
      c_br_desc: "1) Modelo de referência do portfólio · 2) Prazo desejado · 3) Se já possui arquivos 3D ou precisa da modelagem completa.",
      back_models: "← Voltar aos Modelos",
      go_contact: "Falar Sobre Seu Projeto →",
      footer_copy: "© 2026 VELURA. Todos os direitos reservados.",
      footer_terms: "Termos de Uso",
      footer_privacy: "Política de Privacidade",
      legal_eyebrow: "Documentação Legal",
      legal_updated: "Última atualização: 25 de novembro de 2026",
      terms_heading: "Termos de Uso",
      terms_s1_t: "1. Finalidade Deste Site",
      terms_s1_p: "Este site funciona como portfólio comercial oficial para apresentar modelos de desenvolvimento web, WebGL e visualização 3D.",
      terms_s2_t: "2. Propriedade Intelectual",
      terms_s2_p: "Todo o código-fonte, layout visual, elementos de marca, renders 3D e vídeos demonstrativos exibidos nestas páginas são protegidos por direitos autorais. É proibida a cópia, extração ou reutilização comercial sem autorização por escrito.",
      terms_s3_t: "3. Demonstrações e Escopo",
      terms_s3_p: "Vídeos e prévias representam referências técnicas e estéticas. O desempenho final de projetos contratados depende do escopo aprovado, complexidade dos ativos 3D, hospedagem e hardware do usuário final.",
      terms_s4_t: "4. Links Externos",
      terms_s4_p: "Links externos (como WhatsApp ou clientes de e-mail) direcionam para plataformas de terceiros regidas por seus próprios termos e políticas.",
      priv_heading: "Política de Privacidade",
      priv_s1_t: "1. Dados Coletados",
      priv_s1_p: "Este portfólio não vende dados pessoais nem utiliza rastreadores invasivos de anúncios. Ao iniciar contato voluntariamente pelo WhatsApp ou e-mail, recebemos apenas os dados e informações de projeto que você optar por enviar.",
      priv_s2_t: "2. Uso das Informações",
      priv_s2_p: "Os dados compartilhados são utilizados exclusivamente para responder dúvidas técnicas, elaborar orçamentos e executar serviços contratados.",
      priv_s3_t: "3. Armazenamento Local e Segurança",
      priv_s3_p: "Armazenamos apenas sua preferência de idioma (EN, ES ou PT) localmente no navegador para manter a consistência entre as páginas. Todas as páginas são servidas via HTTPS com headers de segurança.",
      priv_s4_t: "4. Seus Direitos (LGPD)",
      priv_s4_p: "Você pode solicitar acesso, correção ou exclusão de qualquer registro de contato enviado a qualquer momento pela nossa página de contato."
    }
  };

  let currentLang = localStorage.getItem("site_lang") || "en";
  if (!translations[currentLang]) currentLang = "en";

  const langButtons = document.querySelectorAll(".lang-btn");

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    currentLang = translations[lang] ? lang : "en";
    localStorage.setItem("site_lang", currentLang);
    document.documentElement.lang = dict.htmlLang;

    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const tKey = titleEl.getAttribute("data-i18n");
      if (dict[tKey]) document.title = dict[tKey];
    }

    const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
    if (metaDesc) {
      const dKey = metaDesc.getAttribute("data-i18n");
      if (dict[dKey]) metaDesc.setAttribute("content", dict[dKey]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.tagName === "TITLE" || el.tagName === "META") return;
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    langButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Safari / iOS Video Guard + IntersectionObserver (roda apenas nas páginas com vídeo)
  const videos = document.querySelectorAll(".portfolio-video");
  if (videos.length > 0) {
    videos.forEach((video) => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const vid = entry.target;
            if (entry.isIntersecting) {
              const p = vid.play();
              if (p !== undefined) p.catch(() => {});
            } else {
              vid.pause();
            }
          });
        },
        { threshold: 0.25 }
      );
      videos.forEach((v) => observer.observe(v));
    }
  }

  // Modal de Vídeo Expandido (Home)
  const videoModal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const cards = document.querySelectorAll(".card");

  if (videoModal && modalVideo && cards.length > 0) {
    function openVideoModal(card) {
      const src = card.getAttribute("data-video");
      const proj = card.getAttribute("data-project");
      const dict = translations[currentLang] || translations.en;

      if (!src || !proj) return;
      modalTitle.textContent = dict[`${proj}_title`] || "";
      modalDesc.textContent = dict[`${proj}_modal_desc`] || dict[`${proj}_card_desc`] || "";

      modalVideo.src = src;
      modalVideo.muted = true;
      modalVideo.playsInline = true;

      videoModal.classList.add("open");
      videoModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      const p = modalVideo.play();
      if (p !== undefined) p.catch(() => {});
    }

    function closeVideoModal() {
      modalVideo.pause();
      modalVideo.removeAttribute("src");
      modalVideo.load();
      videoModal.classList.remove("open");
      videoModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => openVideoModal(card));
    });

    document.querySelectorAll("[data-close-modal]").forEach((el) => {
      el.addEventListener("click", closeVideoModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && videoModal.classList.contains("open")) {
        closeVideoModal();
      }
    });
  }

  applyLanguage(currentLang);
});