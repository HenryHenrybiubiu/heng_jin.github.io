(() => {
  "use strict";

  const translations = {
    en: {
      pageTitle: "Heng Jin | Human-Centred Interactive Robotics",
      skip: "Skip to content",
      menu: "Open menu",
      homeLabel: "Heng Jin home",
      primaryNavLabel: "Primary navigation",
      mobileNavLabel: "Mobile navigation",
      languageLabel: "Language",
      highlightsLabel: "Research highlights",
      navAbout: "About",
      navFocus: "Focus",
      navResearch: "Research",
      navOther: "Other work",
      navPublications: "Publications",
      navContact: "Contact",
      heroEyebrow: "PhD Applicant · Fall 2027",
      heroDiscipline: "Human-centred interactive robotics",
      heroIntro: "I build physical robot systems that infer human intention, understand visual context, and share control with their users.",
      heroAffiliation: "M.Eng. candidate, SUSTech · Graduate Research Assistant, SIAT, CAS",
      downloadCv: "Download CV <span aria-hidden=\"true\">↗</span>",
      emailMe: "Email me <span aria-hidden=\"true\">↗</span>",
      proofPublications: "journal publications<br>in 2026",
      proofEvaluation: "participants in<br>prosthesis evaluation",
      proofPatent: "motion-intention<br>recognition patent",
      portraitAlt: "Portrait of Heng Jin",
      portraitCaptionLeft: "Heng Jin",
      portraitCaptionRight: "Research portfolio · 2026",
      focusEyebrow: "A research direction",
      focusTitle: "My work follows one question: how can a robot better understand and support its user?",
      focusIntro: "I build this answer as a closed loop: read the person, understand the task context, and assist through a physical system.",
      focusOneTitle: "Infer intention",
      focusOneText: "Robust EMG, FMG, and EEG sensing.",
      focusTwoTitle: "Read the scene",
      focusTwoText: "RGB-D perception and visual task context.",
      focusThreeTitle: "Share action",
      focusThreeText: "Human-centred control validated on hardware.",
      futureLabel: "Next direction",
      futureText: "I am eager to extend robust multimodal sensing into learning-enabled policies on real robotic hardware.",
      researchEyebrow: "Selected research",
      researchTitle: "From human intent to physical assistance.",
      researchIntro: "Three projects show the same research arc: a real system, the user experience it creates, and the sensing that makes it dependable.",
      projectOneType: "Flagship physical system · Shared autonomy",
      projectOneBadgeOne: "Physical system",
      projectOneBadgeTwo: "TNSRE · under review",
      projectOneTitle: "Vision-Guided Shared Control for a Full-Arm Prosthesis",
      projectOneLead: "A full-arm prosthetic system that combines EMG commands, RGB-D scene perception, and shared autonomy.",
      projectOneText: "EMG triggers the user’s intent. Visual context supports autonomous execution for coordinated reaching and grasping. The system is evaluated as a complete human–robot interaction loop, not only as an offline model.",
      projectOneLoop: "EMG trigger <span aria-hidden=\"true\">→</span> RGB-D context <span aria-hidden=\"true\">→</span> shared action",
      factEvidence: "Evidence",
      factOutcome: "Outcome",
      factRole: "Role",
      factMethods: "Methods",
      factPreliminary: "Preliminary evidence",
      factRobustness: "Robustness",
      factRecognition: "Recognition",
      projectOneEvidence: "8 able-bodied participants + 1 transhumeral amputee participant",
      projectOneOutcome: "Shorter completion time and higher success than EMG-only control",
      projectOneRole: "Co-first author · framework development and evaluation",
      projectOneImageAlt: "Participant wearing a full-arm prosthetic system",
      projectOneCaption: "Physical evaluation with a transhumeral amputee participant.",
      projectOneFrameworkAlt: "System framework for vision-guided shared control",
      projectOneFrameworkCaption: "EMG, visual context, and shared control in one loop.",
      projectOneResultsAlt: "Performance results for the full-arm prosthesis study",
      projectOneResultsCaption: "Task-level evidence from the user study.",
      projectTwoType: "User-centred evaluation · Physiological human factors",
      projectTwoTitle: "Human Factors and Neural–Muscular Coordination in Prosthetic Interaction",
      projectTwoBadge: "Manuscript in preparation · co-first author",
      projectTwoLead: "Better task performance is not enough if the user remains overloaded.",
      projectTwoText: "This work measures task performance, NASA-TLX, sEMG, EEG, and corticomuscular coupling while people use the full-arm system. It asks how shared control changes both performance and the human cost of control.",
      projectTwoMethods: "NASA-TLX · sEMG · EEG · corticomuscular coupling",
      projectTwoFinding: "Less sustained activation with intermittent recovery during vision-guided control",
      projectTwoImageAlt: "Human factors and neural-muscular coordination results",
      projectTwoCaption: "Evaluation joins system performance with physiological evidence.",
      projectThreeType: "Robust intent sensing · HD-sEMG",
      projectThreeTitle: "Adaptive Signal Recovery for Reliable HD-sEMG",
      projectThreeBadge: "Published · First author · IEEE TIM 2026",
      projectThreeLead: "When sensing becomes unreliable, the robot should not lose the user.",
      projectThreeText: "I developed an adaptive low-rank recovery framework that reconstructs mixed-channel corruption and motion interference before downstream intention decoding. It makes HD-sEMG a more dependable input for assistive interaction.",
      projectThreeRobustness: "Mixed-fault evaluation up to 49%",
      projectThreeRecognition: "95.5% accuracy across seven hand-gesture tasks",
      projectThreeImageAlt: "Results for adaptive high-density EMG signal recovery",
      projectThreeCaption: "Recover the signal before interpreting the user’s intent.",
      readPaper: "Read paper <span aria-hidden=\"true\">↗</span>",
      otherEyebrow: "Other work & collaboration",
      otherTitle: "A wider record of research, prototypes, and teamwork.",
      otherIntro: "Beyond my main projects, I contribute to data-efficient learning, multimodal sensing, intellectual property, and physical robot demonstrations.",
      videoFallback: "Your browser does not support this video.",
      bciBadge: "Second Prize · 2026",
      bciMeta: "World Robot Contest",
      bciTitle: "BCI-Controlled Robot",
      bciText: "A hands-on competition project demonstrating BCI-controlled operation of a physical robot.",
      adaImageAlt: "AdaWGAN framework for data augmentation",
      adaBadge: "Published · Third author",
      adaText: "Data augmentation for few-shot HD-sEMG gesture recognition using single-trial data.",
      fusionImageAlt: "EMG and FMG fusion for robust gesture recognition",
      fusionBadge: "In preparation · Co-first author",
      fusionMeta: "Multimodal sensing",
      fusionTitle: "Robust EMG–FMG Fusion",
      fusionText: "Temporal attention-guided mixture-of-modality-experts fusion for robust gesture recognition.",
      patentBadge: "Patent application · 2025",
      patentTitle: "Motion-Intention Recognition Patent",
      patentText: "Remote Bionic Pulse Diagnosis System Based on Motion Intention Recognition.",
      publicationsEyebrow: "Publications & manuscripts",
      publicationsTitle: "A record of methods, systems, and evidence.",
      publicationsIntro: "Publication status is stated explicitly.",
      published: "Published",
      firstAuthor: "First author",
      thirdAuthor: "Third author",
      coFirstAuthor: "Co-first author",
      underReview: "Under review",
      inPreparation: "In preparation",
      publicationOneMeta: "IEEE Transactions on Instrumentation and Measurement, vol. 75, pp. 1–12 · 2026",
      publicationTwoMeta: "IEEE Journal of Biomedical and Health Informatics · 2026",
      publicationThreeMeta: "Under review at IEEE Transactions on Neural Systems and Rehabilitation Engineering · 2026",
      recognitionEyebrow: "Recognition",
      recognitionText: "Selected awards and research milestones.",
      awardOne: "Second Prize · World Robot Contest — BCI Controlled Robot Contest",
      awardTwo: "First-Class Academic Scholarship · SUSTech",
      awardThree: "Third Prize · National College Physics Experiment Competition",
      contactEyebrow: "PhD opportunities · Fall 2027",
      contactTitle: "I am currently applying for PhD positions.",
      contactText: "I welcome conversations about human-centred robotics, assistive systems, multimodal sensing, shared autonomy, and learning-enabled physical systems.",
      contactEmail: "Email Heng <span aria-hidden=\"true\">↗</span>",
      contactCv: "Download CV <span aria-hidden=\"true\">↗</span>",
      footerText: "Human-centred interactive robotics.",
      backToTop: "Back to top ↑"
    },
    zh: {
      pageTitle: "金恒 | 以人为中心的交互机器人研究",
      skip: "跳到正文",
      menu: "打开菜单",
      homeLabel: "金恒首页",
      primaryNavLabel: "主导航",
      mobileNavLabel: "移动端导航",
      languageLabel: "语言",
      highlightsLabel: "研究亮点",
      navAbout: "关于我",
      navFocus: "研究主线",
      navResearch: "代表性研究",
      navOther: "其他工作",
      navPublications: "论文成果",
      navContact: "联系",
      heroEyebrow: "博士申请者 · 2027 年秋季",
      heroDiscipline: "以人为中心的交互机器人",
      heroIntro: "我构建实体机器人系统，让机器人理解人的意图、读取视觉场景信息，并与使用者共享控制权。",
      heroAffiliation: "南方科技大学硕士研究生 · 中国科学院深圳先进技术研究院科研助理",
      downloadCv: "下载简历 <span aria-hidden=\"true\">↗</span>",
      emailMe: "联系我 <span aria-hidden=\"true\">↗</span>",
      proofPublications: "2026 年发表的<br>期刊论文",
      proofEvaluation: "全臂假肢评估<br>参与者",
      proofPatent: "运动意图识别<br>专利申请",
      portraitAlt: "金恒的人像照片",
      portraitCaptionLeft: "金恒",
      portraitCaptionRight: "研究作品集 · 2026",
      focusEyebrow: "研究主线",
      focusTitle: "我的研究围绕一个问题：机器人如何更好地理解并支持它的使用者？",
      focusIntro: "我将答案构建为一个闭环：读懂人、理解任务场景，并通过实体系统提供辅助。",
      focusOneTitle: "推断意图",
      focusOneText: "稳健的 EMG、FMG 与 EEG 感知。",
      focusTwoTitle: "读取场景",
      focusTwoText: "RGB-D 感知与视觉任务场景信息。",
      focusThreeTitle: "共享行动",
      focusThreeText: "在人机实体系统上验证以人为中心的控制。",
      futureLabel: "下一步方向",
      futureText: "我希望将稳健的多模态感知进一步扩展为能够部署在真实机器人硬件上的学习增强型控制策略。",
      researchEyebrow: "代表性研究",
      researchTitle: "从人的意图，到实体系统中的辅助。",
      researchIntro: "三个项目呈现同一条研究路径：实体系统、使用者体验，以及让系统保持可靠的感知基础。",
      projectOneType: "核心实体系统 · 共享自主",
      projectOneBadgeOne: "实体系统",
      projectOneBadgeTwo: "TNSRE · 审稿中",
      projectOneTitle: "面向全臂假肢的视觉引导共享控制",
      projectOneLead: "一个融合 EMG 指令、RGB-D 场景感知和共享自主的全臂假肢实体系统。",
      projectOneText: "EMG 触发使用者意图；视觉场景信息支持协调的伸手与抓取自主执行。该系统作为完整的人机交互闭环进行评估，而不仅是一个离线模型。",
      projectOneLoop: "EMG 意图触发 <span aria-hidden=\"true\">→</span> RGB-D 场景信息 <span aria-hidden=\"true\">→</span> 共享辅助动作",
      factEvidence: "实验验证",
      factOutcome: "结果",
      factRole: "我的角色",
      factMethods: "方法",
      factPreliminary: "初步发现",
      factRobustness: "稳健性",
      factRecognition: "识别结果",
      projectOneEvidence: "8 名健全参与者 + 1 名经肱截肢参与者",
      projectOneOutcome: "较纯 EMG 控制具有更短完成时间与更高成功率",
      projectOneRole: "共同一作 · 框架开发与实验评估",
      projectOneImageAlt: "参与者佩戴全臂假肢系统",
      projectOneCaption: "与经肱截肢参与者开展实体系统评估。",
      projectOneFrameworkAlt: "视觉引导共享控制的系统框架",
      projectOneFrameworkCaption: "在同一交互闭环中融合 EMG、视觉场景信息和共享控制。",
      projectOneResultsAlt: "全臂假肢研究的性能结果",
      projectOneResultsCaption: "来自用户研究的任务层面证据。",
      projectTwoType: "使用者评估 · 生理人因研究",
      projectTwoTitle: "假肢交互中的人因与神经–肌肉协同",
      projectTwoBadge: "论文撰写中 · 共同一作",
      projectTwoLead: "如果使用者仍然负担过重，更好的任务表现还不够。",
      projectTwoText: "该研究在使用者操作全臂系统时，测量任务表现、NASA-TLX、sEMG、EEG 及皮层肌肉耦合。它关注共享控制如何同时改变系统表现与使用者的控制负担。",
      projectTwoMethods: "NASA-TLX · sEMG · EEG · 皮层肌肉耦合",
      projectTwoFinding: "视觉引导控制下持续激活降低，并出现间歇性恢复",
      projectTwoImageAlt: "人因与神经–肌肉协同研究结果",
      projectTwoCaption: "评估将系统表现与生理证据结合起来。",
      projectThreeType: "稳健意图感知 · HD-sEMG",
      projectThreeTitle: "面向可靠 HD-sEMG 的自适应信号恢复",
      projectThreeBadge: "已发表 · 第一作者 · IEEE TIM 2026",
      projectThreeLead: "当感知信号变得不可靠时，机器人不应失去对使用者意图的理解。",
      projectThreeText: "我开发了一个自适应低秩恢复框架，在后续意图解码之前重建混合通道故障和运动干扰信号，使 HD-sEMG 成为更可靠的辅助交互输入。",
      projectThreeRobustness: "混合故障条件下的测试（最高 49%）",
      projectThreeRecognition: "七类手势任务的识别准确率达 95.5%",
      projectThreeImageAlt: "自适应高密度 EMG 信号恢复结果",
      projectThreeCaption: "先恢复信号，再理解使用者的意图。",
      readPaper: "阅读论文 <span aria-hidden=\"true\">↗</span>",
      otherEyebrow: "其他工作与合作",
      otherTitle: "更广泛的研究、原型与团队协作记录。",
      otherIntro: "除主要项目外，我还参与数据高效学习、多模态感知、知识产权与实体机器人演示。",
      videoFallback: "你的浏览器不支持此视频。",
      bciBadge: "二等奖 · 2026",
      bciMeta: "世界机器人大赛",
      bciTitle: "脑机控制机器人",
      bciText: "一个展示脑机接口控制实体机器人的竞赛实践项目。",
      adaImageAlt: "AdaWGAN 数据增强框架",
      adaBadge: "已发表 · 第三作者",
      adaText: "利用单次试验数据进行小样本 HD-sEMG 手势识别的数据增强。",
      fusionImageAlt: "用于稳健手势识别的 EMG 与 FMG 融合",
      fusionBadge: "论文撰写中 · 共同一作",
      fusionMeta: "多模态感知",
      fusionTitle: "稳健 EMG–FMG 融合",
      fusionText: "面向稳健手势识别的时序注意力引导混合模态专家融合。",
      patentBadge: "专利申请 · 2025",
      patentTitle: "运动意图识别专利",
      patentText: "基于运动意图识别的远程仿生脉诊系统。",
      publicationsEyebrow: "论文与手稿",
      publicationsTitle: "方法、系统与证据的研究记录。",
      publicationsIntro: "每项成果均明确标注当前状态。",
      published: "已发表",
      firstAuthor: "第一作者",
      thirdAuthor: "第三作者",
      coFirstAuthor: "共同一作",
      underReview: "审稿中",
      inPreparation: "撰写中",
      publicationOneMeta: "IEEE Transactions on Instrumentation and Measurement，第 75 卷，第 1–12 页 · 2026",
      publicationTwoMeta: "IEEE Journal of Biomedical and Health Informatics · 2026",
      publicationThreeMeta: "投稿至 IEEE Transactions on Neural Systems and Rehabilitation Engineering · 2026",
      recognitionEyebrow: "荣誉与奖励",
      recognitionText: "代表性奖项与研究里程碑。",
      awardOne: "二等奖 · 世界机器人大赛——脑机控制机器人赛项",
      awardTwo: "一等奖学金 · 南方科技大学",
      awardThree: "三等奖 · 全国大学生物理实验竞赛",
      contactEyebrow: "博士申请 · 2027 年秋季",
      contactTitle: "我正在申请博士项目。",
      contactText: "欢迎就以人为中心的机器人、辅助系统、多模态感知、共享自主与学习增强型实体系统与我交流。",
      contactEmail: "邮件联系金恒 <span aria-hidden=\"true\">↗</span>",
      contactCv: "下载简历 <span aria-hidden=\"true\">↗</span>",
      footerText: "以人为中心的交互机器人研究。",
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

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute("aria-label", value);
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
  try { preferredLanguage = localStorage.getItem("portfolio-language") || "en"; } catch (_) { /* English is the default. */ }
  setLanguage(preferredLanguage === "zh" ? "zh" : "en");
})();
