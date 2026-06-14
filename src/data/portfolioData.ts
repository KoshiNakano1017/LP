export type Project = {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string[];
  technologies: string[];
  link?: string;
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
  name: "Koshi Nakano",
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
  name: "Koshi Nakano",
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
    title: "プライバシー保護型エッジAI推論システム（リアルタイム表情分類）",
    period: "個人開発 / 受託",
    role: "アーキテクチャ設計〜ML実装",
    description: [
      "顔画像をサーバーに送らず、エッジ側（クライアント）で15点の顔特徴点を抽出し、軽量な座標データのみを送信するエッジ＆クラウド協調アーキテクチャを設計。",
      "座標データの正規化（位置・スケール補正）前処理パイプラインを実装。",
      "ディープラーニングではなく軽量・高速・説明可能なSVM（サポートベクターマシン）を選定し、リアルタイム2値分類の推論APIを構築。",
      "重い画像転送を排した低レイテンシ・低通信コスト・プライバシーバイデザインな推論基盤として汎用化（ジェスチャー認識・異常検知等に転用可能）。"
    ],
    technologies: ["Python", "SVM", "scikit-learn", "FastAPI", "リアルタイム推論API", "エッジAI", "JavaScript"]
  },
  {
    id: "1",
    title: "AI予測・データ分析SaaS基盤 (ai-predict)",
    period: "2026年3月 ～ 現在",
    role: "要件定義〜結合テスト (個人受注)",
    description: [
      "要件定義・システム全体アーキテクチャ設計・フロント・インフラ・AI構築までを一人で完結。",
      "ユーザーライフサイクルに応じた権限管理・課金導線の策定および実装。",
      "Next.js + Supabase + Stripeを用いたサブスクリプション基盤の構築。",
      "Python / LightGBM を用いた予測モデルとETLパイプラインの構築。"
    ],
    technologies: ["Python", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "LightGBM", "GCP", "Vercel"]
  },
  {
    id: "2",
    title: "AI動画自動生成 (conversation_movie)",
    period: "個人開発",
    role: "Full-stack Developer",
    description: [
      "台本生成から動画レンダリングまでの非同期パイプラインを設計・実装。"
    ],
    technologies: ["FastAPI", "Celery", "Remotion", "TypeScript", "Python"],
    link: "https://github.com/KoshiNakano1017/conversation_movie"
  },
  {
    id: "3",
    title: "士業向けAIチャットボット・コンタクトセンター品質評価システムの開発",
    period: "2025年10月 ～ 2026年2月",
    role: "要件定義〜結合テスト (フリーランス)",
    description: [
      "LLM組み込みチャット機能の実装、API設計書からのソースコード自動生成および修正。",
      "コンタクトセンター品質評価システムの要件定義（業務フロー・画面遷移図作成）。",
      "TerraformによるCI/CD方式設計・構築。"
    ],
    technologies: ["Python", "React.js", "TypeScript", "AWS", "Docker", "Terraform"]
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
    technologies: ["Python", "Vue.js", "TypeScript", "AWS", "PostgreSQL"]
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
    technologies: ["Python", "Vue.js", "AWS", "Laravel"]
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
    technologies: ["Excel VBA", "AWS", "Ruby on Rails", "MySQL"]
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
    technologies: ["PHP", "Laravel", "Vue.js", "Python", "Oracle"]
  }
];

export const projectsDataEn: Project[] = [
  {
    id: "0",
    title: "Privacy-Preserving Edge AI Inference System (Real-time Expression Classification)",
    period: "Personal / Contract",
    role: "Architecture Design to ML Implementation",
    description: [
      "Designed an edge-cloud cooperative architecture that extracts 15 facial landmarks on the client side and sends only lightweight coordinate data—never the face image—to the server.",
      "Implemented a preprocessing pipeline for coordinate normalization (position and scale correction).",
      "Selected a lightweight, fast, and explainable SVM (Support Vector Machine) over deep learning, building a real-time binary classification inference API.",
      "Generalized into a low-latency, low-bandwidth, privacy-by-design inference platform (reusable for gesture recognition, anomaly detection, etc.)."
    ],
    technologies: ["Python", "SVM", "scikit-learn", "FastAPI", "Real-time Inference API", "Edge AI", "JavaScript"]
  },
  {
    id: "1",
    title: "AI Prediction & Data Analysis SaaS Platform (ai-predict)",
    period: "Mar 2026 - Present",
    role: "Requirements Definition to Integration Testing (Freelance)",
    description: [
      "Independently managed the entire lifecycle including requirements definition, system architecture, frontend, infrastructure, and AI model deployment.",
      "Designed and implemented role-based access control and billing flows based on user lifecycles.",
      "Built a subscription platform using Next.js, Supabase, and Stripe.",
      "Developed predictive models and ETL pipelines using Python and LightGBM."
    ],
    technologies: ["Python", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "LightGBM", "GCP", "Vercel"]
  },
  {
    id: "2",
    title: "AI Video Generation (conversation_movie)",
    period: "Personal Project",
    role: "Full-stack Developer",
    description: [
      "Designed and implemented an asynchronous pipeline from script generation to video rendering."
    ],
    technologies: ["FastAPI", "Celery", "Remotion", "TypeScript", "Python"],
    link: "https://github.com/KoshiNakano1017/conversation_movie"
  },
  {
    id: "3",
    title: "AI Chatbot & Contact Center Quality Evaluation System",
    period: "Oct 2025 - Feb 2026",
    role: "Requirements Definition to Integration Testing (Freelance)",
    description: [
      "Implemented an LLM-embedded chat feature, including auto-generating source code from API design documents.",
      "Defined requirements for a contact center quality evaluation system (business flows, screen transitions).",
      "Designed and built CI/CD pipelines using Terraform."
    ],
    technologies: ["Python", "React.js", "TypeScript", "AWS", "Docker", "Terraform"]
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
    technologies: ["Python", "Vue.js", "TypeScript", "AWS", "PostgreSQL"]
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
    technologies: ["Python", "Vue.js", "AWS", "Laravel"]
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
    technologies: ["Excel VBA", "AWS", "Ruby on Rails", "MySQL"]
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
    technologies: ["PHP", "Laravel", "Vue.js", "Python", "Oracle"]
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
      solutionsTitle: lang === "ja" ? "AIプロダクト / 提供価値" : "AI Products & Solutions",
      solutionsSubTitle: lang === "ja" ? "ビジネスの課題をAIで解決する。" : "Solving Business Challenges with AI."
    }
  };
};
