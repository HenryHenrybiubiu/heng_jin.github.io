(() => {
  "use strict";

  const translations = {
    en: {
      pageTitle: "Heng Jin | Human-Centred Robotics",
      skip: "Skip to content",
      menu: "Open menu",
      navAbout: "About",
      navQuestion: "Question",
      navResearch: "Research",
      navPublications: "Publications",
      navContact: "Contact",
      heroEyebrow: "Prospective PhD Applicant · Human-Centred Robotics",
      heroDiscipline: "Human-Centred Robotics · Physiological Sensing · Shared Autonomy",
      heroIntro: "I build assistive robotic systems that connect human intention, environmental perception, and shared autonomy.",
      affiliation: "Researcher in biomedical engineering and assistive robotics",
      downloadCv: "Download CV <span aria-hidden=\"true\">↗</span>",
      portraitAlt: "Portrait of Heng Jin",
      portraitCaptionLeft: "Heng Jin",
      portraitCaptionRight: "Research portfolio · 2026",
      questionEyebrow: "One user, one central question",
      questionTitle: "My work follows one question: how can a robot better understand and support its user?",
      questionIntro: "I approach it by reading the person reliably, understanding the surrounding scene, and sharing control at the right moment.",
      pillarOneTitle: "Read the user",
      pillarOneText: "EMG, EEG, FMG, and other signals of intention.",
      pillarTwoTitle: "Understand the scene",
      pillarTwoText: "RGB-D perception and context for action.",
      pillarThreeTitle: "Assist with care",
      pillarThreeText: "Shared autonomy evaluated with real users.",
      researchEyebrow: "Selected research",
      researchTitle: "Projects built around the same question.",
      projectOneType: "Assistive robotics · Shared autonomy",
      projectOneTitle: "Vision-Guided Shared Control for a Full-Arm Prosthesis",
      projectOneLead: "A physical full-arm prosthetic system that combines EMG commands, RGB-D perception, and shared autonomy.",
      projectOneText: "The user provides an intention signal. The system understands the scene and assists reaching and grasping. It is a complete human–robot interaction system, not only an offline model.",
      factEvidence: "Evidence",
      factRole: "Role",
      factResult: "Result",
      factPublication: "Publication",
      factMethods: "Methods",
      factStatus: "Status",
      factFocus: "Focus",
      projectOneEvidence: "8 able-bodied participants + 1 transhumeral amputee participant",
      projectOneRole: "Co-first author · IEEE TNSRE, under review",
      projectOneImageAlt: "Participant wearing a full-arm prosthetic system",
      projectOneCaption: "Physical evaluation with a transhumeral amputee participant.",
      projectOneFrameworkAlt: "System framework for vision-guided shared control",
      projectOneFrameworkCaption: "EMG, visual context, and shared control in one interaction loop.",
      projectTwoType: "Physiological sensing · Signal recovery",
      projectTwoTitle: "Reliable HD-sEMG for Intention Recognition",
      projectTwoLead: "Reliable assistance starts with reliable sensing.",
      projectTwoText: "I developed an adaptive low-rank signal-recovery framework for high-density EMG. It recovers corrupted channels before decoding, making intention recognition more dependable when sensing quality changes.",
      projectTwoResult: "Up to 49% improvement in reconstruction quality; 95.5% gesture-recognition accuracy.",
      projectTwoPublication: "IEEE Transactions on Instrumentation and Measurement, 2024",
      projectTwoImageAlt: "Framework for robust high-density EMG signal recovery",
      projectTwoCaption: "Recover first, then decode intention.",
      readPaper: "Read paper <span aria-hidden=\"true\">↗</span>",
      projectThreeType: "Human factors · Prosthetic interaction",
      projectThreeTitle: "Measuring the Human Cost of Prosthesis Control",
      projectThreeLead: "Does better robot performance also mean lower user burden?",
      projectThreeText: "This project studies muscle activity, EEG, workload, and control behaviour while people operate a full-arm prosthesis. The goal is to evaluate assistance from the user’s side, not only the robot’s side.",
      projectThreeMethods: "EMG · EEG · NASA-TLX · control metrics",
      projectThreeStatus: "Manuscript in preparation",
      projectThreeImageAlt: "Human factors evaluation of a full-arm prosthesis",
      projectThreeCaption: "Evaluation combines system performance with the user experience.",
      projectFourType: "Multimodal sensing · Robust interaction",
      projectFourTitle: "EMG–FMG Fusion for Robust Hand-Intention Recognition",
      projectFourLead: "Intention recognition should remain useful when one sensor becomes noisy or unavailable.",
      projectFourText: "I combine electromyography and force myography so that the system can use complementary information rather than relying on one signal alone. The work focuses on dependable input for future wearable and assistive interfaces.",
      projectFourFocus: "Multimodal fusion · sensor robustness · hand intention",
      projectFourStatus: "Ongoing research",
      projectFourImageAlt: "Example of EMG and FMG fusion for hand-intention recognition",
      projectFourCaption: "Complementary sensing for more dependable interaction.",
      relatedWork: "Related work <span aria-hidden=\"true\">↗</span>",
      publicationsEyebrow: "Selected publications",
      publicationsTitle: "Methods should lead to systems people can use.",
      publicationOneMeta: "IEEE Transactions on Instrumentation and Measurement · 2024",
      publicationTwoTitle: "Vision-Guided Shared Control for a Full-Arm Prosthesis",
      publicationTwoMeta: "IEEE Transactions on Neural Systems and Rehabilitation Engineering · under review",
      publicationThreeTitle: "Human Factors in Full-Arm Prosthesis Control",
      publicationThreeMeta: "Manuscript in preparation",
      underReview: "Under review",
      inPreparation: "In preparation",
      contactEyebrow: "Get in touch",
      contactTitle: "Interested in human-centred robotics?",
      contactText: "I welcome conversations about assistive robotics, multimodal sensing, shared autonomy, and doctoral research opportunities.",
      contactCv: "View contact details in my CV <span aria-hidden=\"true\">↗</span>",
      footerText: "Human-centred robotics, built with care.",
      backToTop: "Back to top ↑"
    },
    zh: {
      pageTitle: "金恒 | 以人为中心的机器人研究",
      skip: "跳到正文",
      menu: "打开菜单",
      navAbout: "关于我",
      navQuestion: "核心问题",
      navResearch: "研究项目",
      navPublications: "论文成果",
      navContact: "联系",
      heroEyebrow: "博士申请者 · 以人为中心的机器人研究",
      heroDiscipline: "以人为中心的机器人 · 生理信号感知 · 共享自主",
      heroIntro: "我构建辅助机器人系统，将人的意图、环境感知与共享自主连接起来。",
      affiliation: "生物医学工程与辅助机器人研究者",
      downloadCv: "下载简历 <span aria-hidden=\"true\">↗</span>",
      portraitAlt: "金恒的人像照片",
      portraitCaptionLeft: "金恒",
      portraitCaptionRight: "研究作品集 · 2026",
      questionEyebrow: "一个使用者，一个核心问题",
      questionTitle: "我的研究围绕一个核心问题：机器人如何更好地理解并支持它的使用者？",
      questionIntro: "我从三个层面回答它：可靠地读懂人、理解周围环境，并在恰当的时机共享控制权。",
      pillarOneTitle: "读懂使用者",
      pillarOneText: "EMG、EEG、FMG 等意图信号。",
      pillarTwoTitle: "理解环境",
      pillarTwoText: "用于行动的 RGB-D 感知与场景信息。",
      pillarThreeTitle: "恰当地辅助",
      pillarThreeText: "通过真实使用者评估共享自主。",
      researchEyebrow: "代表性研究",
      researchTitle: "围绕同一个问题展开的项目。",
      projectOneType: "辅助机器人 · 共享自主",
      projectOneTitle: "面向全臂假肢的视觉引导共享控制",
      projectOneLead: "一个融合 EMG 指令、RGB-D 感知和共享自主的实体全臂假肢系统。",
      projectOneText: "使用者给出意图信号；系统理解场景，并协助完成伸手与抓取。这是一个完整的人机交互系统，而不只是离线模型。",
      factEvidence: "实验验证",
      factRole: "我的角色",
      factResult: "结果",
      factPublication: "发表",
      factMethods: "方法",
      factStatus: "状态",
      factFocus: "重点",
      projectOneEvidence: "8 名健全参与者 + 1 名经肱截肢参与者",
      projectOneRole: "共同一作 · IEEE TNSRE，审稿中",
      projectOneImageAlt: "参与者佩戴全臂假肢系统",
      projectOneCaption: "与经肱截肢参与者开展实体系统评估。",
      projectOneFrameworkAlt: "视觉引导共享控制的系统框架",
      projectOneFrameworkCaption: "在同一交互闭环中融合 EMG、视觉场景信息和共享控制。",
      projectTwoType: "生理信号感知 · 信号恢复",
      projectTwoTitle: "用于意图识别的可靠 HD-sEMG",
      projectTwoLead: "可靠的辅助，始于可靠的感知。",
      projectTwoText: "我开发了一种面向高密度 EMG 的自适应低秩信号恢复框架。它在解码前恢复受损通道，使意图识别在传感质量变化时仍然更可靠。",
      projectTwoResult: "重建质量最高提升 49%；手势识别准确率达 95.5%。",
      projectTwoPublication: "IEEE Transactions on Instrumentation and Measurement，2024",
      projectTwoImageAlt: "稳健高密度 EMG 信号恢复框架",
      projectTwoCaption: "先恢复信号，再解码意图。",
      readPaper: "阅读论文 <span aria-hidden=\"true\">↗</span>",
      projectThreeType: "人因研究 · 假肢交互",
      projectThreeTitle: "测量假肢控制对使用者的负担",
      projectThreeLead: "更好的机器人表现，是否也意味着更低的使用者负担？",
      projectThreeText: "该项目研究人们操作全臂假肢时的肌肉活动、EEG、主观工作负荷和控制行为。目标是从使用者一侧评估辅助效果，而不只看机器人的表现。",
      projectThreeMethods: "EMG · EEG · NASA-TLX · 控制指标",
      projectThreeStatus: "论文撰写中",
      projectThreeImageAlt: "全臂假肢的人因评估",
      projectThreeCaption: "评估同时关注系统性能与使用者体验。",
      projectFourType: "多模态感知 · 稳健交互",
      projectFourTitle: "面向稳健手部意图识别的 EMG–FMG 融合",
      projectFourLead: "当一个传感器受到噪声干扰或不可用时，意图识别仍应保持可用。",
      projectFourText: "我融合肌电信号与力肌电信号，让系统利用互补信息，而不是依赖单一信号。这项工作聚焦于为未来可穿戴与辅助交互提供可靠输入。",
      projectFourFocus: "多模态融合 · 传感器稳健性 · 手部意图",
      projectFourStatus: "进行中的研究",
      projectFourImageAlt: "EMG 与 FMG 融合用于手部意图识别的示例",
      projectFourCaption: "利用互补感知，让交互更可靠。",
      relatedWork: "相关工作 <span aria-hidden=\"true\">↗</span>",
      publicationsEyebrow: "代表性成果",
      publicationsTitle: "方法应当走向人们真正能够使用的系统。",
      publicationOneMeta: "IEEE Transactions on Instrumentation and Measurement · 2024",
      publicationTwoTitle: "面向全臂假肢的视觉引导共享控制",
      publicationTwoMeta: "IEEE Transactions on Neural Systems and Rehabilitation Engineering · 审稿中",
      publicationThreeTitle: "全臂假肢控制中的人因研究",
      publicationThreeMeta: "论文撰写中",
      underReview: "审稿中",
      inPreparation: "撰写中",
      contactEyebrow: "联系我",
      contactTitle: "对以人为中心的机器人感兴趣？",
      contactText: "欢迎就辅助机器人、多模态感知、共享自主和博士研究机会与我交流。",
      contactCv: "在简历中查看联系方式 <span aria-hidden=\"true\">↗</span>",
      footerText: "以人为中心的机器人研究，用心构建。",
      backToTop: "回到顶部 ↑"
    }
  };

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const languageButtons = document.querySelectorAll("[data-language]");

  const setLanguage = (language) => {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = dictionary.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAlt];
      if (value !== undefined) element.alt = value;
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try { localStorage.setItem("portfolio-language", language); } catch (_) { /* Storage can be unavailable. */ }
  };

  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const willOpen = mobileMenu.hidden;
      mobileMenu.hidden = !willOpen;
      menuButton.classList.toggle("is-open", willOpen);
      menuButton.setAttribute("aria-expanded", String(willOpen));
    });
    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  }

  window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 8), { passive: true });
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
  document.getElementById("current-year").textContent = new Date().getFullYear();

  let preferredLanguage = "en";
  try { preferredLanguage = localStorage.getItem("portfolio-language") || "en"; } catch (_) { /* Keep English as default. */ }
  setLanguage(preferredLanguage === "zh" ? "zh" : "en");
})();
