export type Project = {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string[];
  technologies: string[];
  link?: string;
  category: "personal" | "professional";
};

export type ProfileData = {
  name: string;
  title: string;
  catchphrase: string;
  description: string;
  availability: string;
  links: {
    github: string;
    youtube: string;
    email: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    infra: string[];
    ai_data: string[];
  };
  qualifications: { name: string; date: string }[];
};

const links = {
  github: "https://github.com/KoshiNakano1017",
  youtube: "https://studio.youtube.com/channel/UCiWheGvIvvZxXAMLsfFpNgw/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D",
  email: "nakano1017rec@gmail.com"
};

const skills = {
  frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "React.js", "Vue.js"],
  backend: ["Supabase (Auth/DB/RLS)", "FastAPI", "Stripe (Checkout/Webhook)", "Python"],
  infra: ["GCP", "AWS", "Vercel", "Docker", "Celery", "Terraform"],
  ai_data: ["LightGBM", "SVM / scikit-learn", "ETL", "RAG", "ベクトルDB (pgvector)", "ファインチューニング", "エッジAI / オンデバイス推論", "リアルタイム推論API", "Cursor", "マルチエージェント", "動画自動生成"]
};

const skillsEn = {
  ...skills,
  ai_data: ["LightGBM", "SVM / scikit-learn", "ETL", "RAG", "Vector DB (pgvector)", "Fine-tuning", "Edge AI / On-device Inference", "Real-time Inference API", "Cursor", "Multi-Agent", "Video Generation"]
};

export const profileDataJa: ProfileData = {
  name: "Nakano System",
  title: "AI-native full-stack engineer",
  catchphrase: "Ships solo from spec to infra.",
  description: "要件定義からフロント・バック・インフラ・MLまで、分業なしで一人で完結させます。",
  availability: "Available for async, fully-remote, 2–3 days/week contract work (直契約歓迎)",
  links,
  skills,
  qualifications: [
    { name: "AWS Certified DevOps Engineer - Professional (DOP)", date: "2026年02月" },
    { name: "AWS Certified Developer - Associate (DVA)", date: "2023年01月" },
    { name: "AWS Certified Solutions Architect - Associate (SAA)", date: "2021年02月 (失効)" },
    { name: "応用情報技術者", date: "2023年06月" }
  ]
};

export const profileDataEn: ProfileData = {
  name: "Nakano System",
  title: "AI-native full-stack engineer",
  catchphrase: "Ships solo from spec to infra.",
  description: "End-to-end delivery from requirements definition to frontend, backend, infrastructure, and ML — fully handled solo without division of labor.",
  availability: "Available for async, fully-remote, 2–3 days/week contract work (Direct contracts welcome)",
  links,
  skills: skillsEn,
  qualifications: [
    { name: "AWS Certified DevOps Engineer - Professional (DOP)", date: "Feb 2026" },
    { name: "AWS Certified Developer - Associate (DVA)", date: "Jan 2023" },
    { name: "AWS Certified Solutions Architect - Associate (SAA)", date: "Feb 2021 (Expired)" },
    { name: "Applied Information Technology Engineer Examination (AP)", date: "Jun 2023" }
  ]
};

export const projectsDataJa: Project[] = [
  {
    id: "0",
    title: "プライバシー保護型エッジAI基盤 (画像を送らないAI推論)",
    period: "2024年10月 ～ 現在",
    role: "アーキテクチャ設計〜ML実装",
    description: [
      "顔画像などの重い個人データをサーバーに送信せず、クライアント端末側で特徴点（座標）抽出まで完結。サーバーには軽量な座標データのみを送る「エッジ＆クラウド協調型」アーキテクチャで、通信コスト・サーバー負荷・プライバシーリスクを同時に削減。",
      "「とりあえずディープラーニング」ではなく、課題に応じて軽量・高速・説明可能なSVM（サポートベクターマシン）を選定。リアルタイム2値分類を低レイテンシで実現。",
      "想定ニーズ: 個人情報を扱う表情・ジェスチャー認識、店舗の匿名属性分析、医療・ヘルスケアの異常検知など。"
    ],
    technologies: ["Python", "SVM", "scikit-learn", "FastAPI", "Edge AI", "JavaScript"],
    category: "personal"
  },
  {
    id: "2",
    title: "AI自動動画生成パイプライン (議事録・テキストの動画化)",
    period: "2024年8月 ～ 現在",
    role: "Full-stack Developer",
    description: [
      "文字だけでは伝わりにくい議事録、社内マニュアル、研修資料を、AIが全自動で動画化。視覚的・聴覚的なアプローチにより、社内共有の質や理解度を劇的に向上。",
      "テキストデータをAPIに投げるだけで、裏側の非同期処理が「台本生成 → 音声合成 → 動画レンダリング」まで自動完結。",
      "想定ニーズ: 営業資料の動画化、社内研修の自動作成、YouTube等のSNSコンテンツ量産。"
    ],
    technologies: ["FastAPI", "Celery", "Remotion", "TypeScript", "Python", "Text to Video"],
    link: "https://github.com/KoshiNakano1017/conversation_movie",
    category: "personal"
  },
  {
    id: "9",
    title: "自社データ特化型 LINE × RAG AIアシスタント",
    period: "2024年11月 ～ 現在",
    role: "Full-stack Developer",
    description: [
      "社内ドキュメントや独自データを学習させた高精度なAIアシスタントを、LINEインターフェースで提供。顧客対応の自動化や、社内問い合わせの工数を大幅に削減。",
      "既存のマニュアル（PDF等）をベクトルDB化し、LLMと連携。ユーザーはLINEで質問するだけで、自社データに基づいた正確な回答を得られます。",
      "想定ニーズ: BtoCカスタマーサポート、社内ヘルプデスク（情シス・労務対応）、専門知識のナレッジベース化。"
    ],
    technologies: ["Python", "RAG", "LINE Messaging API", "Vector DB", "LLM"],
    category: "personal"
  },
  {
    id: "10",
    title: "AIモーニングニュース (LINE × 動画 複合ソリューション)",
    period: "2025年1月 ～ 現在",
    role: "Full-stack Developer",
    description: [
      "LINE RAGBOTとAI動画生成を組み合わせた、経営層向けの次世代情報共有ソリューション。社内の一次情報（売上、日報等）をAIが毎朝自動で動画ニュース化し、LINEでお届け。",
      "「何を調べるべきか」探す時間や報告待ちのタイムロスをゼロに。情報収集を「受動化」し、経営判断に直結する時間を最大化。",
      "運用方法: SaaS/DBからRAGで収集 → 台本化 → 動画生成 → 毎朝定時にLINE配信。"
    ],
    technologies: ["LINE API", "RAG", "Video Generation", "Python", "Automation"],
    category: "personal"
  },
  {
    id: "11",
    title: "X(Twitter)半自動投稿システム (AI生成 × 承認フロー)",
    period: "2025年3月 ～ 現在",
    role: "Developer",
    description: [
      "AIがツイート文案を自動生成し、Notionでワンタップ承認するだけでXへ自動投稿。完全サーバーレス（GAS）構成で、月額コスト約300円の超低コスト運用を実現。",
      "「自動化したいが垢BANは避けたい」運用者向けに、人間の承認を挟んだ安全な設計。完全放置の暴走が起きない。",
      "想定ニーズ: 個人ブランディングの自動化、コンテンツ発信の継続支援、低コストなSNS運用。"
    ],
    technologies: ["Google Apps Script", "Gemini API", "Notion API", "X API v2"],
    category: "personal"
  },
  {
    id: "1",
    title: "AI予測・データ分析SaaS基盤 (ai-predict)",
    period: "2026年3月 ～ 現在",
    role: "要件定義〜結合テスト (個人受注)",
    description: [
      "過去の膨大なデータから未来の数値を高精度に予測。フロントエンド、権限管理、サブスク課金を一体化したシステム。マネタイズや業務改善に直結。",
      "データ抽出・加工(ETL)から機械学習モデル(LightGBM等)の学習・推論までをパイプライン化。予測結果はNext.jsで可視化し、Stripe連携で自動課金を実現。",
      "想定ニーズ: 需要予測、ダイナミックプライシング、独自データを活用した会員制SaaSビジネス。"
    ],
    technologies: ["Python", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "LightGBM", "GCP", "Vercel"],
    category: "professional"
  },
  {
    id: "8",
    title: "複数案件開発",
    period: "2025年10月 ～現在",
    role: "要件定義〜結合テスト (フリーランス)",
    description: [
      "士業向けチャットBOT開発　LLM組み込みのAPI開発、脆弱性診断とクラウド基盤の改修",
      "コンタクトセンター品質評価システム開発(AIツールの導入によるPJ自動化（議事録およびタスク割り当て自動化ツール、要件定義関連書類自動作成、画面レイアウト自動作成（figma)、開発用マルチエージェントAI）",
    ],
    technologies: ["Python", "React.js", "TypeScript", "AWS", "Docker", "Terraform"],
    category: "professional"
  },
  {
    id: "4",
    title: "ホテル予約システムの開発",
    period: "2025年1月 ～ 2025年9月",
    role: "基本設計〜総合テスト (フリーランス)",
    description: [
      "基本設計・詳細設計、API設計書の作成。",
      "オフショアへの作業指示、進捗管理、コードレビューの実施。",
      "Vue3・Pythonを用いた一部実装とテスト仕様書作成。"
    ],
    technologies: ["Python", "Vue.js", "TypeScript", "AWS", "PostgreSQL"],
    category: "professional"
  },
  {
    id: "5",
    title: "LLM組み込み投資ポートフォリオ照会アプリ開発 等",
    period: "2023年11月 ～ 2024年12月",
    role: "基本設計〜総合テスト (フリーランス)",
    description: [
      "投資ポートフォリオ照会アプリの詳細設計・実装。",
      "開発環境におけるAWS環境整備、コストの見える化、ALBからNLBへの変更等。"
    ],
    technologies: ["Python", "Vue.js", "AWS", "Laravel"],
    category: "professional"
  },
  {
    id: "6",
    title: "大手外資保険会社等におけるPMOおよびVBAツール開発",
    period: "2022年8月 ～ 2023年10月",
    role: "PMO / コンサルティング",
    description: [
      "Excel VBAを用いたプロジェクト予算管理・WBS集計自動化ツールの開発。",
      "インフラ移行プロジェクトおよび新規機能追加プロジェクトのPMO（ベンダーコントロール、タスク管理）。",
      "通信系会社のシンクライアントサーバーSaaS化PoCへの参画（AWS環境構築・方式検討）。"
    ],
    technologies: ["Excel VBA", "AWS", "Ruby on Rails", "MySQL"],
    category: "professional"
  },
  {
    id: "7",
    title: "大手製造業向け基幹システムリプレース",
    period: "2021年3月 ～ 2022年7月",
    role: "要件定義〜単体テスト",
    description: [
      "要件定義（議事録・叩き台作成）から基本設計（基本設計書・DFD作成）。",
      "在庫管理機能の実装および単体テスト実施。"
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "Python", "Oracle"],
    category: "professional"
  }
];

export const projectsDataEn: Project[] = [
  {
    id: "0",
    title: "Privacy-Preserving Edge AI Platform (No-Image Inference)",
    period: "Oct 2024 - Present",
    role: "Architecture Design to ML Implementation",
    description: [
      "Heavy personal data like face images never leaves the device—feature extraction (coordinates) is completed on the client. Only lightweight coordinate data is sent to the server. This edge-cloud cooperative architecture cuts bandwidth, server load, and privacy risk.",
      "Rather than defaulting to deep learning, I select a lightweight, fast, and explainable SVM matched to the task—delivering real-time binary classification at low latency.",
      "Use Cases: Expression/gesture recognition handling personal data, anonymous in-store analytics, and anomaly detection in healthcare."
    ],
    technologies: ["Python", "SVM", "scikit-learn", "FastAPI", "Edge AI", "JavaScript"],
    category: "personal"
  },
  {
    id: "2",
    title: "AI Video Generation Pipeline (Auto Video from Text)",
    period: "Aug 2024 - Present",
    role: "Full-stack Developer",
    description: [
      "Automatically convert text-heavy meeting minutes, internal manuals, and training materials into engaging videos using AI. Enhances internal knowledge sharing and comprehension through visual and auditory approaches.",
      "Simply send text data to the API, and background asynchronous tasks handle the rest—from script generation to voice synthesis and video rendering.",
      "Use Cases: Video conversion of sales decks, auto-creation of internal training, and mass production of SNS content like YouTube."
    ],
    technologies: ["FastAPI", "Celery", "Remotion", "TypeScript", "Python", "Text to Video"],
    link: "https://github.com/KoshiNakano1017/conversation_movie",
    category: "personal"
  },
  {
    id: "9",
    title: "Custom Data Specialized LINE × RAG AI Assistant",
    period: "Nov 2024 - Present",
    role: "Full-stack Developer",
    description: [
      "Provides a highly accurate AI assistant trained on internal documents and proprietary data via the familiar LINE interface. Automates customer responses and significantly reduces internal inquiry workloads.",
      "Vectorize existing manuals (PDFs) and connect with LLMs. Users simply ask questions on LINE as usual to get accurate answers based on your company's data.",
      "Use Cases: B2C customer support, internal helpdesk (IT/HR support), and knowledge base for specialized domains."
    ],
    technologies: ["Python", "RAG", "LINE Messaging API", "Vector DB", "LLM"],
    category: "personal"
  },
  {
    id: "10",
    title: "Executive Morning AI News (LINE × Video Solution)",
    period: "Jan 2025 - Present",
    role: "Full-stack Developer",
    description: [
      "A next-generation information-sharing solution for executives, combining LINE RAGBOT with AI video generation. Automatically transforms internal primary info (sales, reports) into a morning video digest delivered to LINE.",
      "Eliminates time spent searching for \"what to look into\" and waiting for reports. By turning information gathering passive, it maximizes time for management decisions.",
      "Operation: Gathers data from SaaS/DBs via RAG → Scripts → Generates Video → Delivered to LINE every morning."
    ],
    technologies: ["LINE API", "RAG", "Video Generation", "Python", "Automation"],
    category: "personal"
  },
  {
    id: "11",
    title: "X (Twitter) Semi-Auto Posting System (AI Gen × Approval)",
    period: "Mar 2025 - Present",
    role: "Developer",
    description: [
      "AI auto-generates tweet drafts; approve them with one tap in Notion on your phone, and they post to X automatically. Fully serverless (GAS) with running costs of about $2/month.",
      "Safe semi-automation with a human approval step—built for operators who want automation without risking bans. Designed so it never runs wild unattended.",
      "Use Cases: Automating personal branding, consistent posting for side-businesses, and low-cost SNS operation for solo owners."
    ],
    technologies: ["Google Apps Script", "Gemini API", "Notion API", "X API v2"],
    category: "personal"
  },
  {
    id: "1",
    title: "AI Prediction & Data Analysis SaaS Platform (ai-predict)",
    period: "Mar 2026 - Present",
    role: "Requirements Definition to Integration Testing (Freelance)",
    description: [
      "Predicts future figures with high accuracy from vast historical data. Integrated system with frontend, user permissions, and subscription billing. Leads directly to monetization and improvements.",
      "Pipelined from ETL to machine learning (LightGBM) training and inference. Visualizes results on a modern Web frontend (Next.js) with automated Stripe billing.",
      "Use Cases: Demand forecasting, dynamic pricing, and launching membership SaaS businesses using proprietary data."
    ],
    technologies: ["Python", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "LightGBM", "GCP", "Vercel"],
    category: "professional"
  },
  {
    id: "8",
    title: "Kyushu Village Talent Development & Gamification App",
    period: "May 2026 - Present",
    role: "Requirements Definition to Full-stack Implementation (Freelance)",
    description: [
      "Designed and implemented a skill development and quest-based task management system using gamification.",
      "Built a dynamic wage determination logic based on skills and contributions.",
      "Developed a platform using Next.js, Supabase, and Stripe."
    ],
    technologies: ["Python", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "LightGBM", "GCP", "Vercel"],
    category: "professional"
  },
  {
    id: "3",
    title: "AI Chatbot & Contact Center Quality Evaluation System",
    period: "Oct 2025 - Present",
    role: "Requirements Definition to Integration Testing (Freelance)",
    description: [
      "Implemented an LLM-embedded chat feature, including auto-generating source code from API design documents.",
      "Defined requirements for a contact center quality evaluation system (business flows, screen transitions).",
      "Designed and built CI/CD pipelines using Terraform."
    ],
    technologies: ["Python", "React.js", "TypeScript", "AWS", "Docker", "Terraform"],
    category: "professional"
  },
  {
    id: "4",
    title: "Hotel Reservation System Development",
    period: "Jan 2025 - Sep 2025",
    role: "Basic Design to System Testing (Freelance)",
    description: [
      "Created basic/detailed designs and API design specifications.",
      "Managed offshore teams, provided task instructions, and conducted code reviews.",
      "Implemented partial features using Vue3 and Python, and created test specifications."
    ],
    technologies: ["Python", "Vue.js", "TypeScript", "AWS", "PostgreSQL"],
    category: "professional"
  },
  {
    id: "5",
    title: "LLM-Embedded Investment Portfolio App",
    period: "Nov 2023 - Dec 2024",
    role: "Basic Design to System Testing (Freelance)",
    description: [
      "Detailed design and implementation of an investment portfolio inquiry application.",
      "Maintained AWS environments, visualized costs, and migrated load balancers (ALB to NLB)."
    ],
    technologies: ["Python", "Vue.js", "AWS", "Laravel"],
    category: "professional"
  },
  {
    id: "6",
    title: "PMO & VBA Tool Development for Global Insurance Company",
    period: "Aug 2022 - Oct 2023",
    role: "PMO / Consulting",
    description: [
      "Developed Excel VBA tools to automate project budget management and WBS aggregation.",
      "Acted as PMO for infrastructure migration and new feature development projects (vendor control, task management).",
      "Participated in a SaaS PoC for a telecommunications company's thin client server (AWS environment building, method study)."
    ],
    technologies: ["Excel VBA", "AWS", "Ruby on Rails", "MySQL"],
    category: "professional"
  },
  {
    id: "7",
    title: "Core System Replacement for Major Manufacturing Company",
    period: "Mar 2021 - Jul 2022",
    role: "Requirements Definition to Unit Testing",
    description: [
      "Handled requirements definition (meeting minutes, drafting) to basic design (DFD creation).",
      "Implemented and unit-tested inventory management features."
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "Python", "Oracle"],
    category: "professional"
  }
];

export const getPortfolioData = (lang: "ja" | "en") => {
  return {
    profile: lang === "ja" ? profileDataJa : profileDataEn,
    projects: lang === "ja" ? projectsDataJa : projectsDataEn,
    ui: {
      searchPlaceholder: lang === "ja" ? "技術、キーワードで検索..." : "Search tech, keyword...",
      noProjects: lang === "ja" ? "条件に一致するプロジェクトがありません。" : "No projects found matching your search.",
      techStack: lang === "ja" ? "技術スタック" : "Tech Stack",
      experience: lang === "ja" ? "経歴 & プロジェクト" : "Experience & Projects",
      qualifications: lang === "ja" ? "保有資格" : "Qualifications",
      viewProduct: lang === "ja" ? "AIプロダクト / 提供価値を見る" : "View AI Products / Solutions",
      viewRepo: lang === "ja" ? "リポジトリを見る" : "View Repository",
      contact: lang === "ja" ? "お問い合わせ" : "Contact",
      personalDev: lang === "ja" ? "個人開発 / 受託" : "Personal Development / Contracts",
      professionalExp: lang === "ja" ? "職歴 / 参画プロジェクト" : "Professional Experience",
      solutionsTitle: lang === "ja" ? "AIプロダクト / 提供価値" : "AI Products & Solutions",
      solutionsSubTitle: lang === "ja" ? "ビジネスの課題をAIで解決する。" : "Solving Business Challenges with AI."
    }
  };
};
