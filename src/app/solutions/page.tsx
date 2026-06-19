"use client";

import { FaGithub } from "react-icons/fa";
import { MdCheckCircle, MdArrowForward, MdEmail } from "react-icons/md";
import Link from "next/link";
import { getPortfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionsPage() {
  const { lang, setLang } = useLanguage();
  const data = getPortfolioData(lang);
  const { profile, ui } = data;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-10 px-6 sm:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tight text-gray-800 hover:text-blue-600 transition">
          Nakano System
        </Link>
        <div className="flex items-center space-x-4">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as "ja" | "en")}
            className="bg-transparent border-none text-sm text-gray-600 focus:ring-0 cursor-pointer hidden sm:block"
          >
            <option value="ja">JP</option>
            <option value="en">EN</option>
          </select>
          <a href={`mailto:${profile.links.email}`} className="text-sm font-medium text-blue-600 hover:underline">
            {ui.contact}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            {lang === "ja" ? (
              <>
                ビジネスの課題を、<br className="sm:hidden" />
                <span className="text-blue-600">AI実装力</span>で突破する。
              </>
            ) : (
              <>
                Break Through Business Challenges with <br className="sm:hidden" />
                <span className="text-blue-600">AI Engineering</span>.
              </>
            )}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            {lang === "ja" ? (
              <>
                単なる技術提供ではなく、ビジネスの課題定義から共に考えます。<br className="hidden sm:block" />
                要件定義からインフラ・ML基盤までを一人で完結させることで、<br className="hidden sm:block" />
                無駄なコミュニケーションコストを省き、最速で価値を生み出します。
              </>
            ) : (
              <>
                Beyond mere technical implementation, I partner with you from business problem definition.<br className="hidden sm:block" />
                By independently handling everything from requirements to infrastructure and ML,<br className="hidden sm:block" />
                I eliminate communication overhead and deliver value at maximum speed.
              </>
            )}
          </p>
          <a
            href={`mailto:${profile.links.email}`}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            {lang === "ja" ? "プロジェクトの相談をする" : "Discuss a Project"}
            <MdArrowForward className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Solutions / Products Section */}
      <main className="py-16 px-6 sm:px-12 max-w-5xl mx-auto space-y-24">
        
        {/* Product 1: conversation_movie */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-sm">
              {lang === "ja" ? "自動化・効率化" : "Automation & Efficiency"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              {lang === "ja" ? (
                <>議事録・テキストの<br />AI自動動画生成パイプライン</>
              ) : (
                <>AI Video Generation Pipeline<br />for Minutes & Text</>
              )}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ja" 
                ? "文字だけでは伝わりにくい議事録、社内マニュアル、研修資料を、AIが全自動で動画化します。視覚的・聴覚的なアプローチにより、社内共有の質や理解度を劇的に向上させます。"
                : "Automatically convert text-heavy meeting minutes, internal manuals, and training materials into engaging videos using AI. Enhances internal knowledge sharing and comprehension through visual and auditory approaches."}
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MdCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "運用方法:" : "Operation:"}</strong>{" "}
                  {lang === "ja" 
                    ? "テキストデータをAPIに投げるだけで、裏側の非同期処理が「台本生成 → 音声合成 → 動画レンダリング」まで自動完結。" 
                    : "Simply send text data to the API, and background asynchronous tasks handle the rest—from script generation to voice synthesis and video rendering."}
                </p>
              </div>
              <div className="flex items-start">
                <MdCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "想定ニーズ:" : "Use Cases:"}</strong>{" "}
                  {lang === "ja" 
                    ? "営業資料の動画化、社内研修の自動作成、YouTube等のSNSコンテンツ量産。" 
                    : "Video conversion of sales decks, auto-creation of internal training, and mass production of SNS content like YouTube."}
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">FastAPI</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Celery</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Remotion</span>
              <a href="https://github.com/KoshiNakano1017/conversation_movie" target="_blank" rel="noopener noreferrer" className="ml-auto text-gray-500 hover:text-gray-900 transition">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-video bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 shadow-inner flex items-center justify-center p-6">
               <div className="text-center">
                 <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                   <div className="w-8 h-8 bg-indigo-500 rounded-sm"></div>
                 </div>
                 <p className="text-indigo-800 font-medium">Text to Video Generation</p>
                 <p className="text-indigo-600 text-sm mt-2">{lang === "ja" ? "API 連携で完全自動化" : "Fully automated via API"}</p>
               </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Product 2: line-gemini-bot (RAG) */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">
              {lang === "ja" ? "顧客対応・ヘルプデスク" : "Customer Support & Helpdesk"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              {lang === "ja" ? (
                <>自社データ特化型<br />LINE × RAG AIアシスタント</>
              ) : (
                <>Custom Data Specialized<br />LINE × RAG AI Assistant</>
              )}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ja" 
                ? "社内ドキュメントや独自データを学習させた高精度なAIアシスタントを、最も身近なLINEインターフェースで提供。顧客対応の自動化や、社内問い合わせの工数を大幅に削減します。" 
                : "Provides a highly accurate AI assistant trained on internal documents and proprietary data via the familiar LINE interface. Automates customer responses and significantly reduces internal inquiry workloads."}
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MdCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "運用方法:" : "Operation:"}</strong>{" "}
                  {lang === "ja" 
                    ? "既存のマニュアル（PDF等）をベクトルDB化し、LLMと連携。ユーザーは普段通りLINEで質問するだけで、自社データに基づいた正確な回答を得られます。" 
                    : "Vectorize existing manuals (PDFs) and connect with LLMs. Users simply ask questions on LINE as usual to get accurate answers based on your company's data."}
                </p>
              </div>
              <div className="flex items-start">
                <MdCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "想定ニーズ:" : "Use Cases:"}</strong>{" "}
                  {lang === "ja" 
                    ? "BtoCカスタマーサポート、社内ヘルプデスク（情シス・労務対応）、専門知識のナレッジベース化。" 
                    : "B2C customer support, internal helpdesk (IT/HR support), and knowledge base for specialized domains."}
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Python</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">RAG</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">LINE Messaging API</span>
              <a href="https://github.com/KoshiNakano1017/line-gemini-bot" target="_blank" rel="noopener noreferrer" className="ml-auto text-gray-500 hover:text-gray-900 transition">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-w-[320px] mx-auto bg-gray-50 rounded-3xl border-8 border-gray-800 shadow-xl overflow-hidden relative">
              <div className="bg-green-500 text-white text-center py-3 font-bold">{lang === "ja" ? "公式アカウント" : "Official Account"}</div>
              <div className="p-4 space-y-4">
                <div className="bg-white rounded-2xl p-3 shadow-sm text-sm ml-8 border">
                  {lang === "ja" ? "経費精算のやり方を教えて" : "How do I submit an expense report?"}
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0"></div>
                  <div className="bg-green-50 rounded-2xl p-3 shadow-sm text-sm border border-green-100">
                    {lang === "ja" ? (
                      <>
                        社内規定ファイルに基づき回答します。<br/><br/>
                        1. 領収書をスキャン<br/>
                        2. システムXから申請...
                      </>
                    ) : (
                      <>
                        Answering based on internal policy files.<br/><br/>
                        1. Scan the receipt<br/>
                        2. Apply via System X...
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Product 3: AI Prediction SaaS */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">
              {lang === "ja" ? "マネタイズ・データ分析" : "Monetization & Data Analysis"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              {lang === "ja" ? (
                <>高精度AI予測・データ分析<br />SaaS基盤 (ai-predict)</>
              ) : (
                <>High-Accuracy AI Prediction<br />& SaaS Platform (ai-predict)</>
              )}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ja" 
                ? "過去の膨大なデータから未来の数値を高精度に予測。フロントエンド表示、ユーザー権限管理、サブスクリプション課金までを一体化したシステムとして提供可能で、即座にマネタイズや業務改善に直結します。" 
                : "Predicts future figures with high accuracy from vast amounts of historical data. Provided as an integrated system encompassing frontend display, user permission management, and subscription billing—leading directly to immediate monetization and business improvements."}
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MdCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "運用方法:" : "Operation:"}</strong>{" "}
                  {lang === "ja" 
                    ? "データ抽出・加工(ETL)から機械学習モデル(LightGBM等)の学習・推論までをパイプライン化。予測結果はモダンなWebフロント(Next.js)で可視化し、Stripe連携で自動課金を実現。" 
                    : "Pipelined from data extraction (ETL) to machine learning (LightGBM) training and inference. Visualizes prediction results on a modern Web frontend (Next.js) with automated Stripe billing."}
                </p>
              </div>
              <div className="flex items-start">
                <MdCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "想定ニーズ:" : "Use Cases:"}</strong>{" "}
                  {lang === "ja" 
                    ? "需要予測、ダイナミックプライシング、独自データを活用した会員制SaaSビジネスの立ち上げ。" 
                    : "Demand forecasting, dynamic pricing, and launching membership SaaS businesses using proprietary data."}
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Next.js</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Supabase</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">LightGBM</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Stripe</span>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-video bg-white rounded-xl border border-gray-200 shadow-lg p-6 flex flex-col">
               <div className="border-b pb-3 mb-4 flex justify-between items-center">
                 <div className="font-bold text-gray-700">Predictive Dashboard</div>
                 <div className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded">PRO PLAN</div>
               </div>
               <div className="flex-1 flex items-end gap-2 pb-2 border-b-2 border-l-2 border-gray-200 px-2">
                 {/* Mock Chart */}
                 {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                   <div key={i} className="w-1/6 bg-orange-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                 ))}
               </div>
               <div className="mt-4 text-center text-sm text-gray-500 font-medium">
                 AI Model Accuracy: <span className="text-green-600 font-bold">High</span>
               </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Product 4: Executive Morning News (LINE RAG x Video) */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">
              {lang === "ja" ? "複合ソリューション・経営支援" : "Complex Solutions & Executive Support"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              {lang === "ja" ? (
                <>経営・管理層向け<br />AIモーニングニュース (LINE × 動画)</>
              ) : (
                <>Executive Morning AI News<br />(LINE × Video)</>
              )}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ja" 
                ? "LINE RAGBOTとAI動画生成を組み合わせた、経営層向けの次世代情報共有ソリューションです。社内の出来事や各種一次情報（売上、インシデント、日報など）をAIが毎朝自動で動画ニュース化し、LINEでお届けします。" 
                : "A next-generation information-sharing solution for executives, combining LINE RAGBOT with AI video generation. Automatically transforms internal events and primary information (sales, incidents, daily reports) into a morning video news digest delivered directly to LINE."}
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MdCheckCircle className="text-purple-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "提供価値:" : "Value Prop:"}</strong>{" "}
                  {lang === "ja" 
                    ? "「何を調べるべきか」探す時間や、部下からの「回答待ち」によるタイムロスをゼロに。情報収集の受動化により、情報共有の手間を減らし、経営判断に直結する時間を最大化します。" 
                    : "Eliminates time spent searching for \"what to look into\" and waiting for reports from subordinates. By turning information gathering passive, it maximizes time directly related to management decisions."}
                </p>
              </div>
              <div className="flex items-start">
                <MdCheckCircle className="text-purple-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "運用方法:" : "Operation:"}</strong>{" "}
                  {lang === "ja" 
                    ? "各種SaaSや社内DBから一次情報をRAGで収集 → 台本化 → 動画生成 → 毎朝定時にLINEへ自動配信。" 
                    : "Gathers primary data from various SaaS/internal DBs via RAG → Scripts → Generates Video → Automatically delivers to LINE every morning."}
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">LINE API</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">RAG</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Video Generation</span>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-w-[320px] mx-auto bg-gray-50 rounded-3xl border-8 border-gray-800 shadow-xl overflow-hidden relative flex flex-col">
              <div className="bg-purple-600 text-white text-center py-3 font-bold text-sm">Morning AI News</div>
              <div className="p-4 flex-1 flex flex-col gap-3">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                  <div className="bg-gray-200 h-24 flex items-center justify-center relative">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md pl-1">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-purple-600 border-b-[6px] border-b-transparent"></div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-bold text-gray-800">{lang === "ja" ? "本日のダイジェスト" : "Today's Digest"}</p>
                    <p className="text-[10px] text-gray-500 mt-1">
                      {lang === "ja" ? (
                        <>・昨日の売上速報<br/>・Aプロジェクト進捗<br/>・競合ニュース</>
                      ) : (
                        <>・Yesterday's Sales<br/>・Project A Update<br/>・Competitor News</>
                      )}
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-xl p-3 shadow-sm text-xs border border-purple-100 leading-relaxed">
                  {lang === "ja" ? (
                    <>おはようございます！<br/>本日のサマリー動画が生成されました。<br/>再生してご確認ください。</>
                  ) : (
                    <>Good morning!<br/>Today's summary video is ready.<br/>Please play to watch.</>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Product 5: SNS Automation Tool (X Semi-Auto Posting) */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-sky-100 text-sky-700 font-bold px-3 py-1 rounded-full text-sm">
              {lang === "ja" ? "SNS運用自動化・ツール販売" : "SNS Automation & Tooling"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              {lang === "ja" ? (
                <>X(Twitter)半自動投稿システム<br />（AI生成 × 承認フロー）</>
              ) : (
                <>X (Twitter) Semi-Auto Posting<br />(AI Generation × Approval Flow)</>
              )}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ja"
                ? "AIがツイート文案を自動生成し、スマホのNotionでワンタップ承認するだけでXへ自動投稿。完全サーバーレス（Google Apps Script）構成で、月額ランニングコストは約300円。「自動化したいが垢BANは避けたい」運用者向けに、人間の承認を挟んだ安全な半自動化を実現します。"
                : "AI auto-generates tweet drafts; approve them with one tap in Notion on your phone, and they post to X automatically. Fully serverless (Google Apps Script) with running costs of about $2/month. Safe semi-automation with a human approval step—built for operators who want automation without risking bans."}
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MdCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "運用方法:" : "Operation:"}</strong>{" "}
                  {lang === "ja"
                    ? "GASが週次でGeminiを呼び出し1週間分の文案をNotionに保存 → スマホで承認＆投稿日時セット → 毎時GASが承認済みを自動投稿。完全放置の暴走が起きない設計。"
                    : "GAS calls Gemini weekly to stash a week of drafts in Notion → approve & schedule on your phone → GAS posts approved tweets hourly. Designed so it never runs wild unattended."}
                </p>
              </div>
              <div className="flex items-start">
                <MdCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "想定ニーズ:" : "Use Cases:"}</strong>{" "}
                  {lang === "ja"
                    ? "個人ブランディング・副業アカウントの運用自動化、コンテンツ発信の継続ハードル低下、ランニングコストを抑えたい個人事業主。"
                    : "Automating personal branding / side-business accounts, lowering the barrier to consistent posting, and solo operators who want minimal running costs."}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              {lang === "ja"
                ? "※ X APIの利用規約を遵守した「人間の承認フロー付き」半自動化ツールです。完全無人の自動投稿ツールではありません。"
                : "* A semi-automation tool with a human approval flow, compliant with the X API terms. Not a fully unattended auto-posting bot."}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Google Apps Script</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Gemini API</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Notion API</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">X API v2</span>
            </div>
            <div className="pt-2">
              {/* TODO: Gumroad/Lemon Squeezy の販売URLが発行できたら href を差し替える */}
              <a
                href={`mailto:${profile.links.email}?subject=${encodeURIComponent(lang === "ja" ? "SNS自動投稿ツールについて" : "About the SNS Auto-Posting Tool")}`}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-sky-600 rounded-full hover:bg-sky-700 transition shadow"
              >
                {lang === "ja" ? "ツールの詳細・購入はこちら（¥3,000〜）" : "Get the Tool (from $20)"}
                <MdArrowForward className="ml-2" size={18} />
              </a>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-w-[320px] mx-auto bg-gray-50 rounded-3xl border-8 border-gray-800 shadow-xl overflow-hidden relative flex flex-col">
              <div className="bg-sky-600 text-white text-center py-3 font-bold text-sm">Notion Approval</div>
              <div className="p-4 flex-1 flex flex-col gap-3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-700">{lang === "ja" ? "AI生成ツイート" : "AI Draft Tweet"}</span>
                    <span className="text-[10px] font-bold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">📝 {lang === "ja" ? "ドラフト" : "Draft"}</span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    {lang === "ja"
                      ? "「継続できない」のは意志の弱さではなく仕組みの問題。今日から3つだけ..."
                      : "Failing to stay consistent isn't weak willpower—it's a systems problem. Start with just three..."}
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 opacity-90">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-700">{lang === "ja" ? "承認済み" : "Approved"}</span>
                    <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">✅ {lang === "ja" ? "投稿待ち" : "Scheduled"}</span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    {lang === "ja" ? "21:00 に自動投稿予約 🚀" : "Auto-post scheduled for 21:00 🚀"}
                  </p>
                </div>
                <div className="mt-auto text-center text-[10px] text-gray-400 font-medium">
                  {lang === "ja" ? "ランニングコスト 約¥300/月" : "Running cost ~$2/month"}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Product 6: Privacy-Preserving Edge AI Inference */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-teal-100 text-teal-700 font-bold px-3 py-1 rounded-full text-sm">
              {lang === "ja" ? "プライバシー保護・エッジAI" : "Privacy-Preserving Edge AI"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              {lang === "ja" ? (
                <>画像を送らないAI推論<br />プライバシー保護型エッジAI基盤</>
              ) : (
                <>AI Inference Without Sending Images<br />Privacy-Preserving Edge AI</>
              )}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ja"
                ? "顔画像などの重い個人データをサーバーに送信せず、クライアント端末側で特徴点（座標）抽出まで完結。サーバーには軽量な座標データのみを送る「エッジ＆クラウド協調型」アーキテクチャで、通信コスト・サーバー負荷・プライバシーリスクを同時に削減します。"
                : "Heavy personal data such as face images never leaves the device—feature extraction (coordinates) is completed on the client. Only lightweight coordinate data is sent to the server. This edge-cloud cooperative architecture cuts bandwidth, server load, and privacy risk all at once."}
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MdCheckCircle className="text-teal-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "技術選定:" : "Model Selection:"}</strong>{" "}
                  {lang === "ja"
                    ? "「とりあえずディープラーニング」ではなく、課題に応じて軽量・高速・説明可能なSVM（サポートベクターマシン）を選定。リアルタイム2値分類を低レイテンシで実現。"
                    : "Rather than defaulting to deep learning, I select a lightweight, fast, and explainable SVM matched to the task—delivering real-time binary classification at low latency."}
                </p>
              </div>
              <div className="flex items-start">
                <MdCheckCircle className="text-teal-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">{lang === "ja" ? "想定ニーズ:" : "Use Cases:"}</strong>{" "}
                  {lang === "ja"
                    ? "個人情報を扱う表情・ジェスチャー認識、店舗の匿名属性分析、医療・ヘルスケアの異常検知など、GDPR・個人情報保護法を意識した現場。"
                    : "Expression/gesture recognition handling personal data, anonymous in-store analytics, and anomaly detection in healthcare—any setting mindful of GDPR / privacy regulations."}
                </p>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">SVM</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">scikit-learn</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">FastAPI</span>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Edge AI</span>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-video bg-white rounded-xl border border-gray-200 shadow-lg p-5 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-2">
                {/* Edge (device) */}
                <div className="flex-1 text-center">
                  <div className="mx-auto w-14 h-20 rounded-lg border-4 border-gray-800 bg-teal-50 flex items-center justify-center relative">
                    <div className="grid grid-cols-3 gap-0.5">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-teal-500"></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-gray-700 mt-2">{lang === "ja" ? "端末: 特徴点抽出" : "Device: Landmarks"}</p>
                </div>
                {/* Arrow with lightweight payload */}
                <div className="flex-1 text-center">
                  <div className="text-[9px] font-mono text-teal-700 bg-teal-50 rounded px-1 py-0.5 mb-1 border border-teal-100">
                    [x,y] × 15
                  </div>
                  <div className="h-0.5 bg-teal-400 w-full relative">
                    <div className="absolute right-0 -top-1 w-0 h-0 border-t-4 border-t-transparent border-l-[6px] border-l-teal-400 border-b-4 border-b-transparent"></div>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-1">{lang === "ja" ? "画像は送らない" : "no image sent"}</p>
                </div>
                {/* Cloud (SVM) */}
                <div className="flex-1 text-center">
                  <div className="mx-auto w-16 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-teal-300">SVM</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-700 mt-2">{lang === "ja" ? "推論 → True/False" : "Infer → True/False"}</p>
                </div>
              </div>
              <div className="mt-4 text-center text-[10px] text-gray-400 font-medium">
                {lang === "ja" ? "低遅延・低通信・プライバシーバイデザイン" : "Low latency · Low bandwidth · Privacy by design"}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* CTA Footer */}
      <footer className="bg-gray-900 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          {lang === "ja" ? "AIで、ビジネスを次のステージへ。" : "Elevate Your Business with AI."}
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          {lang === "ja" ? (
            <>
              「こんなことはAIでできるか？」「アイデアはあるが実装できるエンジニアがいない」<br />
              といった初期段階のご相談から承ります。お気軽にご連絡ください。
            </>
          ) : (
            <>
              "Can AI do this?" "I have an idea but no engineer to implement it."<br />
              I accept consultations from the very early stages. Feel free to contact me.
            </>
          )}
        </p>
        <a
          href={`mailto:${profile.links.email}`}
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition shadow-lg"
        >
          <MdEmail className="mr-2" size={20} />
          {lang === "ja" ? "nakano1017rec@gmail.com へ連絡" : "Contact nakano1017rec@gmail.com"}
        </a>
      </footer>
    </div>
  );
}
