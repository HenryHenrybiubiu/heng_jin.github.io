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
      focusIntro: "I approach it as a chain of responsibility: first recover a dependable physiological reading of intention; then combine it with visual task context to guide action; finally, evaluate not only what the system accomplishes, but how the person experiences sharing control with it.",
      focusIllustrationAlt: "Concept illustration of EMG, EEG, camera, prosthesis, and task environment",
      focusIllustrationCaption: "Concept illustration of the multimodal interaction loop; EEG is used here for human-factor assessment.",
      focusOneTitle: "Make sensing reliable",
      focusOneText: "Robust HD-sEMG recovery before interpreting intent.",
      focusTwoTitle: "Guide action with context",
      focusTwoText: "EMG intent and RGB-D context in shared control.",
      focusThreeTitle: "Measure the human impact",
      focusThreeText: "Task performance, workload, and neural–muscular coordination.",
      futureLabel: "Next direction",
      futureText: "I am eager to extend robust multimodal sensing into learning-enabled policies on real robotic hardware.",
      researchEyebrow: "Selected research",
      researchTitle: "From a dependable signal to meaningful support.",
      researchIntro: "The research path is deliberate: make human intent reliable, turn it into context-aware assistance, then measure its value to the person using it.",
      projectOneType: "Foundation · Robust physiological sensing",
      projectOneBadgeOne: "Published · First author",
      projectOneBadgeTwo: "IEEE TIM · 2026",
      projectOneTitle: "Adaptive Signal Recovery for Reliable HD-sEMG",
      projectOneLead: "Reliable support starts with a reliable reading of intent.",
      projectOneText: "HD-sEMG is vulnerable to channel failures and motion artefacts. I developed an adaptive low-rank recovery framework that reconstructs corrupted recordings before downstream intention recognition, making multimodal interaction more dependable.",
      projectOneLoop: "HD-sEMG <span aria-hidden=\"true\">→</span> adaptive recovery <span aria-hidden=\"true\">→</span> reliable intent decoding",
      factEvidence: "Evidence",
      factOutcome: "Outcome",
      factRole: "Role",
      factMethods: "Methods",
      factPreliminary: "Preliminary observation",
      factRobustness: "Robustness",
      factRecognition: "Recognition",
      projectOneEvidence: "Evaluated under mixed-fault conditions up to 49%",
      projectOneOutcome: "95.5% accuracy across seven hand-gesture tasks",
      projectOneRole: "First author · method development and validation",
      projectOneGalleryLabel: "Signal recovery image gallery",
      projectOneSlideOneAlt: "High-density EMG acquisition and two-dimensional signal representation",
      projectOneSlideOneCaption: "HD-sEMG acquisition and 2D signal representation",
      projectOneSlideTwoAlt: "Adaptive low-rank framework for fault recovery",
      projectOneSlideTwoCaption: "Adaptive low-rank recovery framework",
      projectOneSlideThreeAlt: "Signal-recovery analysis and reconstruction results",
      projectOneSlideThreeCaption: "Recovery analysis under mixed faults",
      projectOneImageAlt: "Participant wearing a full-arm prosthetic system",
      projectOneCaption: "Physical evaluation with a transhumeral amputee participant.",
      projectOneFrameworkAlt: "System framework for vision-guided shared control",
      projectOneFrameworkCaption: "EMG, visual context, and shared control in one loop.",
      projectOneResultsAlt: "Performance results for the full-arm prosthesis study",
      projectOneResultsCaption: "Task-level evidence from the user study.",
      projectTwoType: "Context-aware assistance · Vision-guided shared control",
      projectTwoTitle: "Vision-Guided Shared Control for a Full-Arm Prosthesis",
      projectTwoBadge: "Under review · Co-first author",
      projectTwoBadgeOne: "Under review · Co-first author",
      projectTwoBadgeTwo: "IEEE TNSRE · 2026",
      projectTwoLead: "EMG provides the intent trigger; RGB-D supplies visual task context for coordinated assistance.",
      projectTwoText: "This full-arm prosthetic system combines EMG commands, RGB-D perception, and shared autonomy for reaching and grasping. It is evaluated as a complete human–robot interaction loop rather than only as an offline model.",
      projectTwoLoop: "EMG intent <span aria-hidden=\"true\">→</span> RGB-D task context <span aria-hidden=\"true\">→</span> shared assistive action",
      projectTwoEvidence: "8 able-bodied participants + 1 transhumeral amputee participant",
      projectTwoOutcome: "Shorter completion time and higher success than EMG-only control",
      projectTwoRole: "Co-first author · framework development and evaluation",
      projectTwoMethods: "NASA-TLX · sEMG · EEG · corticomuscular coupling",
      projectTwoFinding: "Less sustained activation with intermittent recovery during vision-guided control",
      projectTwoImageAlt: "Human factors and neural-muscular coordination results",
      projectTwoCaption: "Evaluation joins system performance with physiological evidence.",
      projectTwoGalleryLabel: "Vision-guided shared control image gallery",
      projectTwoSlideOneAlt: "Participant wearing a full-arm prosthetic system during physical evaluation",
      projectTwoSlideOneCaption: "Physical evaluation with a transhumeral amputee participant",
      projectTwoSlideTwoAlt: "Framework combining EMG, visual context, and shared control",
      projectTwoSlideTwoCaption: "EMG, visual context, and shared control in one loop",
      projectTwoSlideThreeAlt: "Task-level results for vision-guided prosthetic control",
      projectTwoSlideThreeCaption: "Task-level evidence from the user study",
      projectThreeType: "User-centred evaluation · Physiological human factors",
      projectThreeTitle: "Human Factors and Neural–Muscular Coordination in Prosthetic Interaction",
      projectThreeBadge: "Manuscript in preparation · Co-first author",
      projectThreeLead: "Better task performance is not enough if the user remains overloaded.",
      projectThreeText: "This work compares strategies using task performance, NASA-TLX, sEMG, EEG, and corticomuscular coupling. It asks whether better assistance also lowers the human cost of control.",
      projectThreeMethods: "NASA-TLX · sEMG · EEG · corticomuscular coupling",
      projectThreeFinding: "Less sustained activation with intermittent recovery during vision-guided control",
      projectThreeRole: "Co-first author · study design and analysis",
      projectThreeRobustness: "Mixed-fault evaluation up to 49%",
      projectThreeRecognition: "95.5% accuracy across seven hand-gesture tasks",
      projectThreeImageAlt: "Results for adaptive high-density EMG signal recovery",
      projectThreeCaption: "Recover the signal before interpreting the user’s intent.",
      projectThreeGalleryLabel: "Human factors image gallery",
      projectThreeSlideOneAlt: "Conceptual diagram of the human factors problem in prosthetic interaction",
      projectThreeSlideOneCaption: "From system performance to the human cost of control",
      projectThreeSlideTwoAlt: "Participant in a prosthetic interaction experiment",
      projectThreeSlideTwoCaption: "Human-centred experiment with the physical system",
      projectThreeSlideThreeAlt: "Physiological and task-performance analysis for human factors study",
      projectThreeSlideThreeCaption: "Task, workload, and physiological evidence",
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
      focusIntro: "我把它看作一条由浅入深的链路：先获得可靠的生理意图信号，再将意图与视觉任务场景结合以引导行动，最后不仅评估系统完成了什么，也评估人如何感受与它共享控制。",
      focusIllustrationAlt: "包含 EMG、EEG、相机、假肢和任务环境的多模态交互概念图",
      focusIllustrationCaption: "多模态交互闭环的概念示意；此处 EEG 用于人因评估，而非实时控制输入。",
      focusOneTitle: "让感知更可靠",
      focusOneText: "先恢复稳健的 HD-sEMG 信号，再解读意图。",
      focusTwoTitle: "以场景信息引导行动",
      focusTwoText: "在共享控制中融合 EMG 意图与 RGB-D 场景信息。",
      focusThreeTitle: "衡量对人的影响",
      focusThreeText: "同时关注任务表现、负担与神经—肌肉协同。",
      futureLabel: "下一步方向",
      futureText: "我希望将稳健的多模态感知进一步扩展为能够部署在真实机器人硬件上的学习增强型控制策略。",
      researchEyebrow: "代表性研究",
      researchTitle: "从可靠信号，到真正有意义的辅助。",
      researchIntro: "这条研究路径是有意设计的：先让人的意图可靠，再将其转化为理解场景的辅助，最后衡量它对使用者的真实价值。",
      projectOneType: "研究基础 · 稳健生理感知",
      projectOneBadgeOne: "已发表 · 第一作者",
      projectOneBadgeTwo: "IEEE TIM · 2026",
      projectOneTitle: "面向可靠 HD-sEMG 的自适应信号恢复",
      projectOneLead: "可靠的辅助，始于对意图的可靠读取。",
      projectOneText: "HD-sEMG 易受通道故障与运动伪迹影响。我开发了自适应低秩恢复框架，在后续意图识别前重建受损记录，让多模态交互的输入更可靠。",
      projectOneLoop: "HD-sEMG <span aria-hidden=\"true\">→</span> 自适应恢复 <span aria-hidden=\"true\">→</span> 可靠意图解码",
      factEvidence: "实验验证",
      factOutcome: "结果",
      factRole: "我的角色",
      factMethods: "方法",
      factPreliminary: "初步观察",
      factRobustness: "稳健性",
      factRecognition: "识别结果",
      projectOneEvidence: "在最高 49% 的混合故障条件下评估",
      projectOneOutcome: "七类手势任务的识别准确率达 95.5%",
      projectOneRole: "第一作者 · 方法开发与验证",
      projectOneGalleryLabel: "信号恢复图片画廊",
      projectOneSlideOneAlt: "高密度 EMG 采集与二维信号表征",
      projectOneSlideOneCaption: "HD-sEMG 采集与二维信号表征",
      projectOneSlideTwoAlt: "用于故障恢复的自适应低秩框架",
      projectOneSlideTwoCaption: "自适应低秩恢复框架",
      projectOneSlideThreeAlt: "信号恢复分析与重建结果",
      projectOneSlideThreeCaption: "混合故障下的恢复分析",
      projectOneImageAlt: "参与者佩戴全臂假肢系统",
      projectOneCaption: "与经肱截肢参与者开展实体系统评估。",
      projectOneFrameworkAlt: "视觉引导共享控制的系统框架",
      projectOneFrameworkCaption: "在同一交互闭环中融合 EMG、视觉场景信息和共享控制。",
      projectOneResultsAlt: "全臂假肢研究的性能结果",
      projectOneResultsCaption: "来自用户研究的任务层面证据。",
      projectTwoType: "场景感知辅助 · 视觉引导共享控制",
      projectTwoTitle: "面向全臂假肢的视觉引导共享控制",
      projectTwoBadge: "审稿中 · 共同一作",
      projectTwoBadgeOne: "审稿中 · 共同一作",
      projectTwoBadgeTwo: "IEEE TNSRE · 2026",
      projectTwoLead: "EMG 提供意图触发；RGB-D 提供任务场景信息，以实现协调的辅助动作。",
      projectTwoText: "该全臂假肢系统融合 EMG 指令、RGB-D 感知与共享自主，用于伸手和抓取。它被作为完整的人机交互闭环评估，而不仅是离线模型。",
      projectTwoLoop: "EMG 意图 <span aria-hidden=\"true\">→</span> RGB-D 任务场景 <span aria-hidden=\"true\">→</span> 共享辅助动作",
      projectTwoEvidence: "8 名健全参与者 + 1 名经肱截肢参与者",
      projectTwoOutcome: "较纯 EMG 控制具有更短完成时间与更高成功率",
      projectTwoRole: "共同一作 · 框架开发与实验评估",
      projectTwoMethods: "NASA-TLX · sEMG · EEG · 皮层肌肉耦合",
      projectTwoFinding: "视觉引导控制下持续激活降低，并出现间歇性恢复",
      projectTwoImageAlt: "人因与神经—肌肉协同研究结果",
      projectTwoCaption: "评估将系统表现与生理证据结合起来。",
      projectTwoGalleryLabel: "视觉引导共享控制图片画廊",
      projectTwoSlideOneAlt: "参与者在实体系统评估中佩戴全臂假肢",
      projectTwoSlideOneCaption: "与经肱截肢参与者开展实体系统评估",
      projectTwoSlideTwoAlt: "融合 EMG、视觉场景信息和共享控制的系统框架",
      projectTwoSlideTwoCaption: "在同一交互闭环中融合 EMG、视觉场景信息和共享控制",
      projectTwoSlideThreeAlt: "视觉引导假肢控制的任务层面结果",
      projectTwoSlideThreeCaption: "来自用户研究的任务层面证据",
      projectThreeType: "以使用者为中心的评估 · 生理人因",
      projectThreeTitle: "假肢交互中的人因与神经—肌肉协同",
      projectThreeBadge: "论文撰写中 · 共同一作",
      projectThreeLead: "如果使用者仍然负担过重，更好的任务表现还不够。",
      projectThreeText: "该研究使用任务表现、NASA-TLX、sEMG、EEG 与皮层肌肉耦合比较不同策略，并关注更好的辅助是否同时降低人的控制负担。",
      projectThreeMethods: "NASA-TLX · sEMG · EEG · 皮层肌肉耦合",
      projectThreeFinding: "视觉引导控制下持续激活降低，并出现间歇性恢复",
      projectThreeRole: "共同一作 · 研究设计与分析",
      projectThreeRobustness: "混合故障条件下的测试（最高 49%）",
      projectThreeRecognition: "七类手势任务的识别准确率达 95.5%",
      projectThreeImageAlt: "自适应高密度 EMG 信号恢复结果",
      projectThreeCaption: "先恢复信号，再理解使用者的意图。",
      projectThreeGalleryLabel: "人因研究图片画廊",
      projectThreeSlideOneAlt: "假肢交互中人因问题的概念图",
      projectThreeSlideOneCaption: "从系统表现，到人的控制负担",
      projectThreeSlideTwoAlt: "参与者进行假肢交互实验",
      projectThreeSlideTwoCaption: "围绕实体系统开展的以人为中心实验",
      projectThreeSlideThreeAlt: "人因研究中的生理与任务表现分析",
      projectThreeSlideThreeCaption: "任务、负担与生理证据",
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
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const initGalleries = () => {
    document.querySelectorAll("[data-gallery]").forEach((gallery) => {
      const slides = [...gallery.querySelectorAll("[data-gallery-slide]")];
      const thumbnails = [...gallery.querySelectorAll("[data-gallery-thumb]")];
      if (slides.length < 2 || thumbnails.length !== slides.length) return;

      const interval = Number(gallery.dataset.galleryInterval) || 6800;
      let currentIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
      let timer;
      let inView = false;
      let pointerOver = false;
      let focusWithin = false;

      const stopRotation = () => {
        if (timer) window.clearInterval(timer);
        timer = undefined;
      };

      const canRotate = () => inView && !pointerOver && !focusWithin && !document.hidden && !reducedMotion.matches;

      const refreshRotation = () => {
        stopRotation();
        if (!canRotate()) return;
        timer = window.setInterval(() => {
          setSlide((currentIndex + 1) % slides.length, false);
        }, interval);
      };

      const setSlide = (nextIndex, restartTimer = true) => {
        currentIndex = (nextIndex + slides.length) % slides.length;
        slides.forEach((slide, index) => {
          const active = index === currentIndex;
          slide.hidden = !active;
          slide.classList.toggle("is-active", active);
          slide.setAttribute("aria-hidden", String(!active));
          if ("inert" in slide) slide.inert = !active;
        });
        thumbnails.forEach((thumbnail, index) => {
          const active = index === currentIndex;
          thumbnail.classList.toggle("is-active", active);
          thumbnail.setAttribute("aria-pressed", String(active));
        });
        gallery.querySelectorAll("[data-gallery-counter]").forEach((counter) => {
          counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
        });
        if (restartTimer) refreshRotation();
      };

      thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => setSlide(index));
      });

      gallery.addEventListener("pointerenter", () => {
        pointerOver = true;
        refreshRotation();
      });
      gallery.addEventListener("pointerleave", () => {
        pointerOver = false;
        refreshRotation();
      });
      gallery.addEventListener("focusin", () => {
        focusWithin = true;
        refreshRotation();
      });
      gallery.addEventListener("focusout", () => {
        window.setTimeout(() => {
          focusWithin = gallery.contains(document.activeElement);
          refreshRotation();
        }, 0);
      });

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
          refreshRotation();
        }, { threshold: [0, 0.35, 0.7] });
        observer.observe(gallery);
      } else {
        inView = true;
      }

      document.addEventListener("visibilitychange", refreshRotation);
      if ("addEventListener" in reducedMotion) reducedMotion.addEventListener("change", refreshRotation);
      else reducedMotion.addListener(refreshRotation);
      setSlide(currentIndex, false);
      refreshRotation();
    });
  };

  const initViewportVideos = () => {
    document.querySelectorAll("[data-autoplay-video]").forEach((video) => {
      let inView = false;
      let userPaused = false;
      let autoPausing = false;
      video.muted = true;
      video.defaultMuted = true;

      const pauseVideo = () => {
        if (video.paused) {
          autoPausing = false;
          return;
        }
        autoPausing = true;
        video.pause();
      };

      const playVideo = () => {
        if (!inView || userPaused || document.hidden || reducedMotion.matches) return;
        video.play().catch(() => { /* The visible controls remain available if autoplay is blocked. */ });
      };

      video.addEventListener("pause", () => {
        if (inView && !autoPausing && !document.hidden) userPaused = true;
        autoPausing = false;
      });
      video.addEventListener("play", () => { userPaused = false; });

      const updatePlayback = () => {
        if (inView && !document.hidden && !reducedMotion.matches) playVideo();
        else pauseVideo();
      };

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting && entry.intersectionRatio >= 0.6;
          updatePlayback();
        }, { threshold: [0, 0.6] });
        observer.observe(video);
      } else {
        inView = true;
        updatePlayback();
      }

      document.addEventListener("visibilitychange", updatePlayback);
      if ("addEventListener" in reducedMotion) reducedMotion.addEventListener("change", updatePlayback);
      else reducedMotion.addListener(updatePlayback);
    });
  };

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

  initGalleries();
  initViewportVideos();

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
