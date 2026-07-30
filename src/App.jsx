import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, Code2, Zap, Shield, GitBranch, Menu, ChevronDown,
  BrainCircuit, Mail, Rocket, Bot, MessageSquare, Search, Camera, AudioLines,
  Download, MapPin, Building2, ClipboardCheck, RefreshCw, BookOpen, AlertTriangle,
  BarChart3, CheckCircle2, XCircle, KeyRound, ShieldAlert, Lock, Scale, Cog, Eye,
  HardDrive, MessageCircle, Brain, BookMarked, Radio, DoorOpen, Clock, Briefcase,
  ExternalLink, Compass, Command, CornerDownLeft, ArrowUpDown, FileText, GitCommitHorizontal,
  Sparkles, Server, Network, Layers, IdCard,
} from 'lucide-react';
import clinicalRagImage from './assets/projects/clinical-rag.svg';
import enterpriseSafetyImage from './assets/projects/enterprise-safety.svg';
import conversationalAgentImage from './assets/projects/conversational-agent.svg';

const MotionLink = motion(Link);

// Brand icons (not included in lucide-react)
function GithubIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

// Navigation items
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'systems', label: 'Systems' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'writing', label: 'Writing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

// Hero section data
const heroData = {
  name: "Subhash Mothukuru",
  title: "Full-Stack AI Engineer",
  tagline: "AI/ML engineering, backend systems, and distributed architecture — end to end",
  bio: "5+ years building production ML and generative AI systems — not just models, but the backend services, pipelines, and architecture that keep them reliable once real users depend on them. Currently applying that as a contract engineer on agentic AI workflows at Scale AI.",
  cta: {
    email: "meet.subhashmothukuru@gmail.com",
    github: "https://github.com/SubhashMOthukuri",
    linkedin: "https://www.linkedin.com/in/subhash-m-ab0407399/",
    resumeUrl: "/Subhash_Mothukuru_Resume.pdf",
  },
};

// Experience data — condensed from resume, real companies/roles/metrics
const experience = [
  {
    company: "Scale AI",
    role: "AI/ML Engineer (Contract)",
    period: "Jul 2024 – Present",
    location: "San Francisco, CA",
    impact: [
      { metric: "5+", label: "Enterprise RAG products" },
      { metric: "18%", label: "Accuracy lift via fine-tuning" },
      { metric: "28%", label: "Lower inference cost" },
      { metric: "35%", label: "Faster deployment turnaround" },
    ],
    highlights: [
      "Design and ship agentic AI workflows using LangChain and LangGraph — decomposing multi-step enterprise tasks into tool-calling chains with MCP integrations and structured fallback handling.",
      "Fine-tune transformer models (GPT, BERT, LLaMA 3) with LoRA, QLoRA, and PEFT, raising accuracy up to 18% over baseline on internal evaluation sets.",
      "Build RAG pipelines over Pinecone, Weaviate, FAISS, and ChromaDB — tuning chunking, embedding, and semantic reranking across 5+ enterprise products.",
      "Run LLM evaluation with RAGAS, DeepEval, and LangSmith to gate releases and enforce AI guardrails before production rollout.",
      "Own end-to-end MLOps/LLMOps in MLflow, Kubeflow, Docker, and Kubernetes across Azure ML and GCP Vertex AI.",
      "Optimize low-latency inference with ONNX, TensorRT, vLLM, and Ray Serve behind FastAPI microservices, cutting serving cost roughly 28%.",
    ],
  },
  {
    company: "Meta",
    role: "ML Engineer",
    period: "Jun 2020 – May 2023",
    location: "Hyderabad, India",
    impact: [
      { metric: "10M+", label: "Daily prediction requests" },
      { metric: "<100ms", label: "P99 serving latency" },
      { metric: "5%+", label: "Validated A/B uplift" },
    ],
    highlights: [
      "Fine-tuned transformer-based text and image encoders in PyTorch to learn ad creative embeddings, improving click-through rate prediction.",
      "Engineered two-tower candidate retrieval and neural ranking models over sparse user/advertiser embeddings with negative sampling and calibration.",
      "Optimized low-latency serving via ONNX export, TorchScript tracing, and int8 quantization — holding p99 latency under 100ms at 10M+ daily predictions.",
      "Ran canary rollouts and online A/B tests through FBLearner Flow, validating 5%+ incremental uplift before full release.",
      "Built petabyte-scale batch and streaming pipelines in Spark SQL, PySpark, Kafka, and Hive into a reusable feature store.",
      "Partnered with Responsible AI on brand-safety and content-classification filters using SHAP/LIME explainability.",
    ],
  },
];

// Company wordmark badges for the Experience section
const companyBrand = {
  "Scale AI": { bg: "bg-ink", text: "text-white", label: "Scale" },
  "Meta": { bg: "bg-[#0668E1]", text: "text-white", label: "meta" },
};

// Hero visual: four capabilities radiating from one integrated engineer
const capabilities = [
  { label: "AI / ML Engineering", icon: Sparkles, x: 12, y: 30 },
  { label: "Backend & APIs", icon: Server, x: 12, y: 70 },
  { label: "Distributed Systems", icon: Network, x: 88, y: 30 },
  { label: "System Design & Architecture", icon: Layers, x: 88, y: 70 },
];

// Different AI paradigms — each with its own real path from problem to production
const domainPipelines = [
  {
    domain: "Computer Vision",
    icon: Camera,
    steps: ["Image/Video Data", "CNN Feature Extraction", "Training & Evaluation"],
  },
  {
    domain: "NLP",
    icon: MessageSquare,
    steps: ["Text Corpus", "Tokenization & Embedding", "Transformer Fine-Tuning"],
  },
  {
    domain: "Audio",
    icon: AudioLines,
    steps: ["Audio Signal", "Spectrogram Features", "Sequence Modeling"],
  },
  {
    domain: "Agentic AI",
    icon: Bot,
    steps: ["Task Definition", "Tool / Function Calling", "Multi-Step Reasoning (LangGraph)"],
  },
  {
    domain: "LLMs",
    icon: BrainCircuit,
    steps: ["Pretrained Model", "LoRA / QLoRA Fine-Tuning", "RLHF Alignment"],
  },
  {
    domain: "RAG Systems",
    icon: Search,
    steps: ["Document Chunking", "Embedding + Vector Store", "Retrieval + Reranking"],
  },
];

// Projects data
const projects = [
  {
    id: 1,
    name: "Clinical Medication Reconciliation AI",
    slug: "clinical-rag",
    tagline: "Production RAG system for healthcare",
    problem: "Small specialty practices run on basic EHR software with no pharmacist and no reconciliation team — a nurse checks medication lists from memory, and a missed interaction can end with a patient in the ER.",
    solution: "A RAG system that checks every drug pair against FDA labels and clinical literature, and would rather hand back an FDA-only answer than let an LLM guess at a citation it can't back up.",
    keywords: ["RAG", "Healthcare AI", "LLMs", "FastAPI", "Production"],
    image: clinicalRagImage,
    stats: [
      { metric: "95%+", label: "Citation Accuracy" },
      { metric: "440K+", label: "Knowledge Chunks" },
      { metric: "8.6s", label: "Avg Response" },
      { metric: "99.5%", label: "Availability" },
    ],
    architecture: [
      {
        stage: "1. Input Validation",
        description: "Patient medication list input",
        tools: "Pydantic v2",
        icon: ClipboardCheck,
      },
      {
        stage: "2. Normalization",
        description: "Convert drug names to RxCUI using RxNorm API",
        tools: "RxNorm API",
        icon: RefreshCw,
      },
      {
        stage: "3. Enrichment",
        description: "Fetch FDA labels and metadata for each drug",
        tools: "FDA openFDA API",
        icon: BookOpen,
      },
      {
        stage: "4. Interaction Detection",
        description: "Pairwise interaction checking (parallel processing)",
        tools: "Python async/await",
        icon: AlertTriangle,
      },
      {
        stage: "5. Semantic Retrieval",
        description: "Embed query and find similar medical articles",
        tools: "OpenAI text-embedding-3-small, Pinecone",
        icon: Search,
      },
      {
        stage: "6. Re-ranking",
        description: "Rerank results by relevance",
        tools: "CrossEncoder (ms-marco-MiniLM-L-6-v2)",
        icon: BarChart3,
      },
      {
        stage: "7. LLM Generation",
        description: "Generate response with primary/fallback",
        tools: "Gemini 2.0 Flash (primary), Groq Llama 3.3 (fallback)",
        icon: Bot,
      },
      {
        stage: "8. Multi-stage Validation",
        description: "JSON schema, citation verification, hallucination check",
        tools: "Pydantic, custom validators",
        icon: CheckCircle2,
      },
    ],
    production: {
      deployment: "Local FastAPI + Uvicorn — Docker/Kubernetes are a Phase 3 roadmap item, not yet written",
      database: "Pinecone Starter (vector search) + PostgreSQL (durable drug cache)",
      cache: "Redis, 24h TTL — hot-path drug-lookup cache in front of PostgreSQL",
      monitoring: "None yet — Prometheus /metrics + Grafana dashboards are Phase 2/3 roadmap items",
      scaling: "Single instance, no autoscaling configured yet",
      availability: "Dual LLM provider (Gemini → Groq) with independent circuit breakers — no infra-level redundancy yet",
    },
    techStack: [
      "FastAPI", "Gemini 2.0 Flash", "Groq Llama 3.3", "Pinecone", "OpenAI Embeddings",
      "CrossEncoder", "RxNorm API", "FDA API", "Kubernetes", "Python 3.13", "Pydantic v2",
    ],
    github: "https://github.com/SubhashMOthukuri/Clinical_Rag",
    metrics: [
      "9,634 StatPearls medical articles indexed",
      "440,800 vector chunks in Pinecone",
      "110 commits with detailed architecture",
      "95%+ citation accuracy achieved",
      "99.5% system availability",
      "8.6s average response time",
    ],
    caseStudy: {
      subtitle: "A clinical RAG pipeline that only ever tells a nurse what it can prove — grounded in FDA labels and 9,634 StatPearls articles.",
      status: "Phase 1 complete and benchmarked. Full StatPearls ingest paused at 82% (Pinecone Starter write-unit limit); Phase 2 auth/observability and Phase 3 deployment hardening are on the roadmap, not yet built.",
      overview:
        "MedReconcile AI takes a nurse's medication list, checks every drug pair for interactions, retrieves grounding evidence from FDA labels and StatPearls clinical articles, and returns a structured warning with severity, recommended action, and cited sources. The defining constraint is that it must never guess: every LLM-generated claim is checked against the evidence actually retrieved, and if the model can't produce a fully-cited answer, the system falls back to an FDA-label-only response rather than showing the nurse something unverified.",
      problemNarrative:
        "This isn't built for large hospital systems — they already have medication-reconciliation solutions and dedicated pharmacists. It's built for small specialty practices (dermatology, ophthalmology, orthopedic surgery centers) running on basic EHR software like ModMed, where there's no pharmacist and no reconciliation team — the nurse does it manually, and the doctor often prescribes from memory. The real failure mode: a specialist prescribes a new drug without the patient's full medication list, it conflicts with something the primary care doctor already prescribed, nobody catches it, and the patient ends up in the ER. That's the gap this fills.",
      principles: [
        "Never lie by omission — every LLM-cited source is checked against what retrieval actually returned; an invented citation gets the whole response rejected, not silently trusted.",
        "Every failure path still answers the nurse — the generation step never raises; if the LLM or any dependency is down, the pipeline degrades to an FDA-label-only response with a confidence flag instead of an error.",
        "Stale interaction data is a patient-safety issue, not a data-quality issue — a two-layer cache (Redis hot path, PostgreSQL durable store) refreshes on a 7-day cycle to catch FDA's monthly label updates.",
      ],
      architecturePhases: [
        {
          title: "Input & Enrichment",
          stages: "Stages 1–2 · Input Validation, Normalization",
          narrative:
            "Drug names are validated against a strict allowlist regex before anything else happens, plus a secondary scan for prompt-injection phrases — this system puts drug names directly into LLM prompts, so a nurse (or an attacker) typing \"ignore previous instructions and...\" as a drug name has to be caught at the door. That combination passed 55/55 adversarial inputs in testing: homoglyphs, zero-width characters, RTL overrides, null bytes, newline smuggling. Past that gate, each drug is normalized to an RxCUI via RxNorm and enriched with FDA label text in parallel.",
        },
        {
          title: "Interaction Detection & Retrieval",
          stages: "Stages 3–5 · Interaction Check, Semantic Retrieval, Re-ranking",
          narrative:
            "Every drug pair is pre-screened with keyword-based severity checks, then each flagged pair triggers semantic retrieval: the query is embedded with OpenAI's text-embedding-3-small, matched against 440K+ StatPearls chunks in Pinecone (top-10 ANN), and re-ranked down to the top 3 with a cross-encoder. In benchmarking, reranking is actually the single largest chunk of pipeline latency — heavier than the embed and vector-query steps combined — which is the kind of thing you only learn by measuring instead of assuming the vector search is the bottleneck.",
        },
        {
          title: "Grounded Generation",
          stages: "Stage 6 · LLM Generation",
          narrative:
            "Gemini 2.0 Flash generates the structured warning; Groq (Llama 3.3 70B) is the fallback if Gemini is unavailable, each behind its own independent circuit breaker so a Groq rate-limit storm can't trip the Gemini breaker and vice versa. Temperature is fixed at 0 on both — a medication-interaction report has no business being creative. In practice the Groq fallback path runs roughly 3x faster than Gemini when it's invoked, which is a useful thing to know for capacity planning even though it's the secondary path.",
        },
        {
          title: "Validation & Fallback",
          stages: "Stages 7–8 · Multi-stage Validation",
          narrative:
            "The generated response is checked against the actual retrieved chunk IDs — if the model cites a source that wasn't in the retrieval set, that's treated as a hallucination and the entire response is rejected in favor of the FDA-only fallback, flagged with confidence 0.5 so the nurse knows to double-check with the physician rather than trust it as fully reasoned. This is the concrete implementation of a dual-model guardrail: one model generates, a second check acts as the skeptic.",
        },
      ],
      complianceNarrative:
        "What's actually deployed right now is Phase 1: the reconciliation pipeline itself, running locally, fully tested (13 pytest suites covering every component), and benchmarked. What's on the documented roadmap but not yet built is everything the marketing version of this story would normally lead with — Kubernetes manifests, JWT/mTLS authentication, rate limiting, a HIPAA-audit-log middleware, Docker Compose, and a frontend. That's a deliberate sequencing choice, not an oversight: get the reasoning correct and provably-grounded first, add the operational shell once the core logic is trustworthy.",
      resultsNarrative:
        "Across 100 benchmark runs (external calls mocked, so this measures pipeline overhead rather than live network variance), the full reconcile path averages 3.36s end-to-end (p95 4.17s, p99 4.38s), breaking down to roughly 336ms embedding, 145ms Pinecone query, 917ms re-ranking, and 1.32s Gemini generation (471ms on the Groq fallback path). All 100 runs returned SUCCESS with zero errors. Separately, the ingested knowledge base sits at 440,800 of a planned 534,760 StatPearls chunks (82.4%) — ingestion is paused because the Pinecone Starter tier's write-unit quota was hit, not because of any pipeline issue.",
      whatsNext:
        "Two phases are scoped and waiting: Phase 2 (reliability & observability) adds retry-with-backoff before the circuit breaker trips, a half-open breaker state, OpenTelemetry spans, a Prometheus /metrics endpoint, structured logging, JWT/mTLS auth, and resuming the paused StatPearls ingest. Phase 3 (production hardening) adds HIPAA audit-log middleware, PII redaction in logs, Kubernetes manifests, Grafana dashboards, Docker Compose for local dev, and — only after auth exists — a frontend.",
    },
  },
  {
    id: 2,
    name: "Enterprise AI Safety & Transparency Platform",
    slug: "enterprise-safety",
    tagline: "OWASP LLM Top-10 compliant system",
    problem: "Teams deploying LLMs into production inherit their web-app security posture and assume it's enough — it isn't. A prompt can manipulate model behavior in ways the OWASP Top 10 was never written for, and most enterprises have no audit trail explaining why a model produced a given output.",
    solution: "A security and compliance layer that treats prompt injection and unaudited model behavior as first-class risks — the same way a traditional platform treats SQL injection — mapped against all 10 OWASP LLM Top-10 categories.",
    keywords: ["Enterprise", "Security", "OWASP LLM", "Compliance", "FastAPI"],
    image: enterpriseSafetyImage,
    stats: [
      { metric: "10/10", label: "OWASP Compliance" },
      { metric: "100+", label: "API Endpoints" },
      { metric: "8", label: "API Routers" },
      { metric: "95%", label: "Complete" },
    ],
    architecture: [
      { stage: "1. API Gateway", description: "Rate limiting, load balancing, TLS 1.3", tools: "Kong/AWS API Gateway", icon: DoorOpen },
      { stage: "2. Authentication", description: "JWT tokens, 2FA TOTP, API key management", tools: "PyJWT, pyotp", icon: KeyRound },
      { stage: "3. Security Pipeline", description: "Prompt injection detection, PII masking, input sanitization", tools: "Transformers (BERT for injection), regex patterns", icon: ShieldAlert },
      { stage: "4. Access Control", description: "Role-based access control, permission checks", tools: "SQLAlchemy ORM with role tables", icon: Lock },
      { stage: "5. Ethics Checker", description: "Bias detection, content moderation, safety guardrails", tools: "OpenAI Moderation API, custom classifiers", icon: Scale },
      { stage: "6. Request Processing", description: "Async queue, load balancing, retry logic", tools: "Celery + Redis, exponential backoff", icon: Cog },
      { stage: "7. Monitoring & Alerts", description: "Real-time anomaly detection, threat intelligence", tools: "Prometheus, Grafana, ELK stack", icon: Eye },
      { stage: "8. Data Layer", description: "Encrypted PII, audit trails, retention policies", tools: "PostgreSQL with encryption, TimescaleDB", icon: HardDrive },
    ],
    production: {
      deployment: "Docker + Kubernetes on Azure/AWS",
      database: "PostgreSQL + TimescaleDB for audit logs",
      cache: "Redis for rate limiting + sessions",
      queue: "Celery for async jobs",
      monitoring: "ELK stack + custom dashboards",
      compliance: "GDPR/CCPA/SOC 2/ISO 27001 ready",
    },
    techStack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Celery", "PyJWT", "OpenAI Moderation", "ELK Stack", "Prometheus", "Grafana"],
    github: "https://github.com/SubhashMOthukuri/AgenticAi-Safety-Transparency",
    metrics: [
      "100+ API endpoints across 8 routers",
      "10/10 OWASP LLM Top-10 compliance",
      "JWT + 2FA TOTP authentication",
      "0 known security vulnerabilities",
      "Real-time threat detection",
      "24/7 automated monitoring",
      "Complete audit trail logging",
    ],
    caseStudy: {
      subtitle: "Building OWASP LLM Top-10 compliant infrastructure for enterprise AI deployment",
      status: "~95% complete — core security pipeline, access control, and audit layer implemented",
      overview:
        "The Enterprise AI Safety & Transparency Platform is a security and compliance layer purpose-built for organizations deploying LLMs in production. It treats prompt injection, data leakage, and unaudited model behavior as first-class security concerns — the same way a traditional platform treats SQL injection or broken authentication. The system currently sits at roughly 95% completion: the security pipeline, access control, monitoring, and audit-logging layers are implemented and map to all 10 OWASP LLM Top-10 categories. Remaining work is concentrated in expanding automated test coverage and a formal third-party penetration test.",
      problemNarrative:
        "Most teams adopting LLMs inherit their existing web-application security posture and assume it's sufficient. It isn't. An LLM endpoint introduces attack surface that doesn't map cleanly onto the traditional OWASP Top 10: a user can manipulate model behavior through the prompt itself, models can leak sensitive information surfaced through context, and — critically for regulated industries — there's often no audit trail explaining why a model produced a given output. Meanwhile, compliance frameworks like GDPR, CCPA, SOC 2, and ISO 27001 were written before generative AI existed, leaving enterprises to interpret how requirements like data minimization apply to a system that generates novel text on demand. This platform exists to close that gap.",
      principles: [
        "Defense in depth — no single control is trusted to catch everything; each layer assumes the one before it can fail.",
        "Everything is audited — every request, decision, and moderation action is logged with enough context to reconstruct what happened and why.",
        "Compliance is a design input, not a retrofit — GDPR, SOC 2, and ISO 27001 requirements shaped the data layer from the start.",
      ],
      architecturePhases: [
        {
          title: "Perimeter & Identity",
          stages: "Stages 1–2 · API Gateway, Authentication",
          narrative:
            "Every request passes through two checkpoints before it touches application logic. The gateway handles rate limiting and TLS 1.3 termination — cheap, stateless checks that stop the bulk of automated abuse before it costs any compute. Authentication then closes the single most common enterprise breach vector: a leaked credential. JWT sessions are paired with TOTP-based 2FA, and API keys are scoped and rotated independently of user sessions, so a compromised key doesn't imply a compromised account.",
        },
        {
          title: "Content Safety Pipeline",
          stages: "Stages 3, 5 · Security Pipeline, Ethics Checker",
          narrative:
            "This is the layer that doesn't exist in a traditional web stack, because the attack surface it defends against didn't exist before LLMs. A BERT-based classifier screens every incoming prompt for injection patterns before it reaches the model, while PII masking strips sensitive fields out of both the input and the eventual context window. On the output side, generated content runs through OpenAI's Moderation API plus custom classifiers tuned to the platform's specific risk areas — bias and policy-violating content get caught before a response reaches a user, not after a complaint.",
        },
        {
          title: "Authorization & Resilience",
          stages: "Stages 4, 6 · Access Control, Request Processing",
          narrative:
            "Role-based access control is enforced at the ORM layer rather than the API layer, which matters more than it sounds — a bug in a route handler can accidentally skip an API-level check, but it can't bypass a query that's already scoped by role. Downstream, request processing runs through an async queue with exponential backoff, so a slow or failing dependency degrades response time instead of taking the whole request down with it.",
        },
        {
          title: "Observability & Accountability",
          stages: "Stages 7–8 · Monitoring & Alerts, Data Layer",
          narrative:
            "Real-time anomaly detection watches the full request stream continuously, not on a polling schedule — the goal is catching an attack pattern while it's still forming. Underneath that, the data layer is where compliance claims either become real or stay theoretical: PII is encrypted at rest, every action writes to an immutable audit trail, and retention policies are explicit rather than implied. It's also why PostgreSQL is paired with TimescaleDB specifically — a general-purpose relational database struggles with the time-series query patterns an actual audit (\"show every access to this record in the last 90 days\") requires.",
        },
      ],
      complianceNarrative:
        "Deployment runs on Docker and Kubernetes across Azure and AWS, with PostgreSQL plus TimescaleDB handling audit-log data specifically — a general-purpose relational database alone struggles with the query patterns compliance audits actually need, like surfacing every access to a given user's data in a fixed window. Redis handles rate-limiting and session state; Celery processes async jobs. The result maps onto all 10 OWASP LLM Top-10 categories, with the data layer structured to support GDPR, CCPA, SOC 2, and ISO 27001 audit requirements.",
      resultsNarrative:
        "As it stands: 100+ API endpoints across 8 routers, full OWASP LLM Top-10 coverage, JWT + 2FA TOTP authentication, and zero known security vulnerabilities in the current implementation. Monitoring runs continuously rather than on a scheduled basis, and every action — authentication, moderation decisions, data access — is captured in the audit trail.",
      whatsNext:
        "The remaining work is concentrated in two places: expanding automated test coverage around the anomaly-detection thresholds, which are currently tuned manually against synthetic attack patterns, and a formal third-party penetration test before treating any compliance claim as audit-ready rather than architecturally-ready.",
    },
  },
  {
    id: 3,
    name: "Conversational Agent with Web Search",
    slug: "conversational-agent",
    tagline: "Real-time reasoning with live web search",
    problem: "Users need conversational AI that can access current information beyond training data cutoff, without a hardcoded rule for when to search.",
    solution: "A minimal LangGraph agent — two nodes and one conditional edge — where GPT-4o decides for itself whether to call Tavily's search tool, then streams the result back over SSE with a persistent multi-turn checkpointer.",
    keywords: ["Agentic AI", "LangGraph", "Web Search", "TypeScript", "Streaming"],
    image: conversationalAgentImage,
    stats: [
      { metric: "SSE", label: "Token Streaming" },
      { metric: "2-Node", label: "LangGraph Design" },
      { metric: "GPT-4o", label: "Native Tool-Calling" },
      { metric: "Multi-turn", label: "Checkpointed Memory" },
    ],
    architecture: [
      { stage: "1. Request Intake", description: "Accept the message plus an optional checkpoint_id for existing conversations", tools: "FastAPI, Query parameters", icon: MessageCircle },
      { stage: "2. Model Decision", description: "GPT-4o, bound to the Tavily tool, decides per turn whether to answer directly or search first", tools: "ChatOpenAI (gpt-4o), bind_tools", icon: Brain },
      { stage: "3. Conditional Routing", description: "Router reads the model's last message for tool_calls and picks the next node", tools: "LangGraph StateGraph, conditional edges", icon: GitBranch },
      { stage: "4. Web Search", description: "Tavily executes the model-chosen query; results wrap into a ToolMessage", tools: "Tavily Search API", icon: Search },
      { stage: "5. Grounded Re-generation", description: "The model sees search results in the same message history and generates a grounded answer", tools: "LangGraph add_messages", icon: Bot },
      { stage: "6. Event Streaming", description: "LangGraph's internal events are translated into an SSE protocol the client consumes", tools: "astream_events, Server-Sent Events", icon: Radio },
      { stage: "7. Conversation Memory", description: "Multi-turn state persists via a checkpoint_id the client stores and replays", tools: "LangGraph MemorySaver", icon: BookMarked },
    ],
    production: {
      deployment: "Dockerized backend, documented for Render; Next.js frontend deployed separately",
      realtime: "Server-Sent Events (astream_events) — no WebSocket layer",
      search: "Tavily Search API, model-triggered",
      llm: "GPT-4o via native OpenAI tool-calling, single provider (no fallback)",
      cache: "None — LangGraph's in-memory MemorySaver only, resets on server restart",
      monitoring: "None yet — no test suite or usage analytics wired up",
    },
    techStack: ["Python", "FastAPI", "LangGraph", "LangChain", "GPT-4o", "Tavily Search API", "TypeScript", "Next.js", "React", "Server-Sent Events", "Docker"],
    github: "https://github.com/SubhashMOthukuri/perplexity-2.0",
    metrics: [
      "Real-time SSE streaming, token by token",
      "Native GPT-4o tool-calling — no hardcoded query classifier",
      "Multi-turn memory via LangGraph MemorySaver checkpointing",
      "Live web search grounding via Tavily when the model decides it's needed",
      "Dockerized backend, deployment documented for Render",
      "Minimal 2-node graph — model + tool_node behind one conditional edge",
    ],
    caseStudy: {
      subtitle: "A minimal LangGraph agent — two nodes, one conditional edge — that decides for itself when to search the live web.",
      status: "Functional end-to-end: streaming chat, tool-augmented search, and multi-turn memory all work. No automated tests, auth, or production hardening yet — a working prototype, not a hardened service.",
      overview:
        "Plexa is a from-scratch reimplementation of the \"ask a question, get a web-grounded answer\" pattern using LangGraph instead of a prebuilt agent framework. The entire decision loop — answer directly, or search first? — is two graph nodes and one conditional edge. There's no separate classification step: GPT-4o decides whether to call the Tavily search tool through native OpenAI tool-calling, and LangGraph's router just reads that decision and routes accordingly.",
      problemNarrative:
        "A model's training cutoff means it can't answer questions about anything that happened after it was trained, and users notice immediately when a chat assistant confidently gets current events wrong. The fix doesn't need to be complicated — it needs the model to recognize when it's out of its depth and pull in a live source before answering, then stream the result back so the wait doesn't feel like a hang.",
      principles: [
        "Let the model decide, don't hardcode a router — GPT-4o is bound to a single tool (Tavily search); whether to call it is a model decision made through native function-calling, not an if/else on keywords.",
        "State is just the message list — LangGraph's add_messages annotation accumulates conversation history automatically; there's no separate context-builder module to keep in sync with it.",
        "Stream the reasoning, not just the answer — the client receives a search_start event carrying the actual query the model chose to run, so a user can see when and why a search happened, not just wait for a final blob of text.",
      ],
      architecturePhases: [
        {
          title: "Decide",
          stages: "model node",
          narrative:
            "A single node wraps ChatOpenAI(model=\"gpt-4o\") with bind_tools([TavilySearchResults(max_results=4)]). On every turn, the model either answers directly or emits a tool call — there's no separate classification prompt or keyword heuristic sitting in front of it; tool selection is native to GPT-4o's function-calling.",
        },
        {
          title: "Search",
          stages: "tools_router + tool_node",
          narrative:
            "tools_router inspects the model's last message: if it contains tool calls, execution goes to tool_node; otherwise the graph ends. tool_node runs the Tavily call, wraps the result in a ToolMessage, and routes back to model — so the model sees the search results as part of the same message history on its next pass, with no manual context-stitching required.",
        },
        {
          title: "Stream & Remember",
          stages: "SSE streaming + MemorySaver checkpointing",
          narrative:
            "Responses stream token-by-token over Server-Sent Events by consuming graph.astream_events and translating LangGraph's internal event types — on_chat_model_stream, on_tool_end, and friends — into a small SSE protocol the Next.js client understands: content chunks, a search_start signal, and a search_results event carrying just the source URLs. Multi-turn memory comes from LangGraph's MemorySaver, keyed by a checkpoint_id the client stores and replays on the next message — no database, no session table.",
        },
      ],
      complianceNarrative:
        "The backend is Dockerized and documented for deployment on Render; the Next.js frontend deploys separately. A few things are prototype-grade by choice, not accident: CORS currently allows all origins, there's no authentication or rate limiting, and conversation memory lives in LangGraph's in-memory checkpointer — it resets on server restart rather than persisting anywhere. There's also a single LLM provider (GPT-4o); unlike the medication-reconciliation project, there's no fallback model if OpenAI is degraded.",
      resultsNarrative:
        "There's no formal benchmark suite backing specific latency numbers here — unlike the medication-reconciliation project's 100-run baseline, this one hasn't been load-tested. What's concretely true from the code: streaming works over SSE with visible time-to-first-token, tool-calling correctly routes between direct answers and search-augmented ones, and multi-turn memory persists correctly within a server session via the checkpointer.",
      whatsNext:
        "The gaps are the ones you'd expect from a prototype: no automated test suite yet (the medication-reconciliation project has 13; this one has none), no persistent conversation storage, no fallback LLM provider if OpenAI has an outage, and CORS/auth that need locking down before this could sit behind a real user base. On the product side, surfacing citations inline in the response text — not just as a source list — would close the gap with how Perplexity itself presents grounded answers.",
    },
  },
];

// Tech Stack — from resume's Technical Skills section
const techStackCategories = [
  {
    category: "Programming & ML Frameworks",
    items: ["Python", "SQL", "Java", "Bash", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM", "Hugging Face Transformers", "Pandas", "NumPy"],
  },
  {
    category: "AI, ML & Deep Learning",
    items: ["Generative AI", "Deep Learning", "NLP", "Computer Vision", "Transformers", "Reinforcement Learning (RLHF)", "Transfer Learning", "Feature Engineering", "Hyperparameter Optimization", "Distributed GPU Training", "Multimodal AI"],
  },
  {
    category: "Generative AI & LLMs",
    items: ["GPT", "BERT", "LLaMA", "RAG", "Agentic AI", "LangChain", "LangGraph", "Model Context Protocol (MCP)", "Prompt Engineering", "LoRA / QLoRA", "PEFT", "Tool / Function Calling", "AI Guardrails"],
  },
  {
    category: "Recommendation, Ranking & Retrieval",
    items: ["Two-Tower Networks", "Candidate Retrieval", "Learning-to-Rank", "Collaborative Filtering", "CTR Prediction", "Embeddings", "Semantic / Hybrid Search", "Pinecone", "Weaviate", "FAISS", "ChromaDB", "NDCG", "Recall@K"],
  },
  {
    category: "MLOps, LLMOps & Evaluation",
    items: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Model Monitoring", "Drift Detection", "RAGAS", "DeepEval", "LangSmith", "ONNX", "TensorRT", "vLLM", "Ray Serve"],
  },
  {
    category: "Data Engineering & Cloud",
    items: ["Apache Spark", "PySpark", "Spark SQL", "Airflow", "Kafka", "Hive", "Presto", "AWS (SageMaker, EC2, S3, Lambda)", "Azure ML", "Azure Databricks", "GCP Vertex AI"],
  },
  {
    category: "AI Engineering & Development",
    items: ["FastAPI", "REST APIs", "Microservices", "Low-Latency Inference", "SHAP", "LIME", "Explainable AI", "System Design", "Git", "Agile / Scrum"],
  },
];

// Certifications — from resume
const certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/en-us/users/mothukurusubhash-6703/credentials/75fa15d4c548b6c7",
  },
  { title: "AWS Educate: Introduction to Generative AI", issuer: "AWS Educate" },
  { title: "LangChain for LLM Application Development", issuer: "DeepLearning.AI" },
  { title: "AI Agents in LangGraph", issuer: "DeepLearning.AI" },
  { title: "Building Ambient Agents with LangGraph", issuer: "DeepLearning.AI" },
  { title: "Building AI Voice Agents for Production", issuer: "DeepLearning.AI" },
  { title: "Fine-Tuning Language Models with Azure AI Foundry", issuer: "Azure AI Foundry" },
];

// Writing — published notes on production ML
const writing = [
  {
    title: "My model scored R² 0.89, then I watched it fail in production",
    teaser: "A field note on the gap between offline metrics and real-world reliability — and what actually broke.",
    url: "https://subhashmothukuru.hashnode.dev/my-model-scored-r-0-89-then-i-watched-it-fail-in-production",
  },
];

// FAQ data
const faqItems = [
  {
    q: "What's your experience with production ML systems?",
    a: "5+ years building and scaling production ML, recommendation, and generative AI systems. Started with ranking and recommendation models at Meta (10M+ daily predictions), now building agentic AI and RAG systems at Scale AI. Comfortable owning everything end-to-end — data pipelines, backend APIs, distributed training, and deployment architecture.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Python, PyTorch, Hugging Face, LangChain, LangGraph, FastAPI, Kubernetes, and distributed data tooling (Spark, Kafka, Airflow) across AWS, Azure, and GCP. Full-stack across the ML lifecycle: model development, backend services, system design, and MLOps/LLMOps.",
  },
  {
    q: "What's your approach to building production systems?",
    a: "Focus on resilience first. Multi-stage validation, graceful degradation, comprehensive monitoring, clear observability. Every system should have fallback patterns. Metrics-driven development with clear SLOs.",
  },
  {
    q: "Have you worked on healthcare projects?",
    a: "Yes. Clinical RAG system for medication reconciliation with 95%+ accuracy and comprehensive FDA compliance. Experience with healthcare data pipelines, HIPAA considerations, and regulatory requirements.",
  },
  {
    q: "Do you do consulting or contract work?",
    a: "Yes. Currently on a contract engagement at Scale AI, and open to additional architecture consultations, system design reviews, and specialized projects with technical depth and long-term impact.",
  },
  {
    q: "What's your preferred way to communicate?",
    a: "Email preferred for initial contact. Available for calls after initial conversation. Timezone: US Central. Response time: <24 hours typically.",
  },
];

export default function ModernCleanPortfolioFull() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/projects/:slug/case-study" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CommandPalette />
    </>
  );
}

// 404 — catch-all for unmatched routes
function NotFoundPage() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 rounded-full bg-signal/15 text-blue-600 flex items-center justify-center mx-auto mb-6">
          <Compass size={28} />
        </div>
        <p className="font-mono text-sm text-muted mb-2">404</p>
        <h1 className="text-3xl font-display font-semibold text-ink mb-3">Page not found</h1>
        <p className="text-ink/70 mb-8">
          That route doesn't exist. It might've been a typo, or a link that moved.
        </p>
        <Link
          to="/"
          className="gradient-spectrum inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-medium shadow-[0_12px_30px_-10px_rgba(91,75,230,0.5)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </motion.div>
    </div>
  );
}

// Command Palette — Cmd/Ctrl+K quick navigation across sections, projects, and links
function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = React.useRef(null);

  const paletteItems = [
    ...navItems.map((item) => ({
      key: `section-${item.id}`,
      label: item.label,
      hint: 'Section',
      icon: ArrowRight,
      action: { type: 'section', target: item.id },
    })),
    ...projects.map((p) => ({
      key: `project-${p.slug}`,
      label: p.name,
      hint: 'Project',
      icon: FileText,
      action: { type: 'route', target: `/projects/${p.slug}` },
    })),
    {
      key: 'email',
      label: 'Email',
      hint: heroData.cta.email,
      icon: Mail,
      action: { type: 'external', target: `mailto:${heroData.cta.email}` },
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      hint: 'Open profile',
      icon: LinkedinIcon,
      action: { type: 'external', target: heroData.cta.linkedin },
    },
    {
      key: 'github',
      label: 'GitHub',
      hint: 'Open profile',
      icon: GithubIcon,
      action: { type: 'external', target: heroData.cta.github },
    },
    {
      key: 'resume',
      label: 'Download Résumé',
      hint: 'PDF',
      icon: Download,
      action: { type: 'download', target: heroData.cta.resumeUrl },
    },
  ];

  const filtered = paletteItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSelect = (item) => {
    if (!item) return;
    const { action } = item;
    if (action.type === 'section') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(action.target)?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      } else {
        document.getElementById(action.target)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.type === 'route') {
      navigate(action.target);
    } else if (action.type === 'external') {
      window.open(action.target, '_blank', 'noopener,noreferrer');
    } else if (action.type === 'download') {
      const a = document.createElement('a');
      a.href = action.target;
      a.download = '';
      a.click();
    }
    setOpen(false);
  };

  const handleKeyNav = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(filtered[activeIndex]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="print-hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-ink text-white rounded-full shadow-lg hover:scale-105 transition text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        <Command size={14} />
        <span>Search</span>
        <span className="hidden sm:inline text-white/50 text-xs border border-white/20 rounded px-1.5 py-0.5">
          ⌘K
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <React.Fragment>
            <motion.div
              className="fixed inset-0 bg-black/40 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-[min(560px,90vw)] bg-white rounded-2xl shadow-2xl border border-black/8 z-[61] overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-black/8">
                <Search size={18} className="text-muted flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyNav}
                  placeholder="Jump to a section, project, or link…"
                  className="flex-1 outline-none text-ink placeholder:text-secondary bg-transparent"
                />
                <kbd className="text-xs text-muted border border-black/10 rounded px-1.5 py-0.5">esc</kbd>
              </div>

              <div className="max-h-[50vh] overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <p className="px-5 py-6 text-sm text-muted text-center">No matches.</p>
                )}
                {filtered.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.key}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                        i === activeIndex ? 'bg-signal/10' : ''
                      }`}
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface text-blue-600 flex-shrink-0">
                        <Icon size={15} />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-medium text-ink truncate">{item.label}</span>
                        <span className="block text-xs text-muted truncate">{item.hint}</span>
                      </span>
                      {i === activeIndex && <CornerDownLeft size={14} className="text-muted flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-4 px-5 py-3 border-t border-black/8 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <ArrowUpDown size={12} /> navigate
                </span>
                <span className="flex items-center gap-1">
                  <CornerDownLeft size={12} /> select
                </span>
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </>
  );
}

function timeAgo(dateString) {
  const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

const GITHUB_USERNAME = heroData.cta.github.split('/').pop();

// Live proof-of-activity strip — pulls the most recent public push from GitHub
function GithubActivityStrip() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    let cancelled = false;
    // GitHub's public events feed no longer includes commit messages in the push
    // payload (privacy change) — it only gives the head SHA, so fetch the commit
    // detail separately to get the actual message.
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((events) => {
        if (cancelled) return Promise.reject();
        const pushEvent = events.find((e) => e.type === 'PushEvent' && e.payload?.head);
        if (!pushEvent) return Promise.reject();
        return fetch(`https://api.github.com/repos/${pushEvent.repo.name}/commits/${pushEvent.payload.head}`)
          .then((res) => (res.ok ? res.json() : Promise.reject()))
          .then((commitData) => {
            if (cancelled) return;
            setActivity({
              message: commitData.commit.message.split('\n')[0],
              repo: pushEvent.repo.name.replace(`${GITHUB_USERNAME}/`, ''),
              url: commitData.html_url,
              date: pushEvent.created_at,
            });
          });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!activity) return null;

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 -mt-10 mb-10">
      <motion.a
        href={activity.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="inline-flex items-center gap-2.5 text-sm text-muted hover:text-blue-600 transition-colors group max-w-full"
      >
        <span className="relative flex w-1.5 h-1.5 flex-shrink-0">
          <span className="absolute inline-flex w-full h-full rounded-full bg-success opacity-75 animate-ping" />
          <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-success" />
        </span>
        <GitCommitHorizontal size={14} className="flex-shrink-0" />
        <span className="truncate">
          Latest on GitHub:{' '}
          <span className="text-ink/80 group-hover:text-blue-600 transition-colors">{activity.message}</span> in{' '}
          {activity.repo} · {timeAgo(activity.date)}
        </span>
      </motion.a>
    </div>
  );
}

// Home Page Component
function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(heroData.cta.email).catch(() => {});
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactMethods = [
    {
      href: `mailto:${heroData.cta.email}`,
      icon: Mail,
      label: "Email",
      detail: emailCopied ? "Copied to clipboard!" : heroData.cta.email,
      external: false,
      onClick: handleEmailClick,
    },
    {
      href: heroData.cta.linkedin,
      icon: LinkedinIcon,
      label: "LinkedIn",
      detail: "Connect and follow for updates",
      external: true,
    },
    {
      href: heroData.cta.github,
      icon: GithubIcon,
      label: "GitHub",
      detail: "Check out my repositories",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-base">
      {/* NAVIGATION BAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-base shadow-[0_1px_0_rgba(12,11,20,0.08)]' : 'bg-base/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-xl font-display font-semibold text-ink"
            whileHover={{ scale: 1.05 }}
          >
            subhash.mothukuru
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-medium text-sm text-ink/70 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-black/5 rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} className="text-ink" />
          </button>
        </div>

        {/* Mobile Menu Scrim */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden fixed left-0 right-0 bottom-0 top-16 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden relative z-50 bg-base border-t border-black/8 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block font-medium text-ink/70 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Add padding to account for fixed nav */}
      <div className="pt-20">
        {/* HOME SECTION */}
        <section id="home" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left: Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <motion.span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/8 text-sm font-medium text-ink/70 mb-4"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-success opacity-75 animate-ping" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-success" />
                  </span>
                  Currently building agentic AI @ Scale AI
                </motion.span>
                <motion.h1
                  className="text-5xl md:text-6xl font-display font-semibold text-ink mb-3 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {heroData.name}
                </motion.h1>
                <motion.p
                  className="text-2xl text-gradient-spectrum font-display font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {heroData.title}
                </motion.p>
                <motion.p
                  className="text-lg text-muted mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {heroData.tagline}
                </motion.p>
              </div>

              <motion.p
                className="text-ink/80 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {heroData.bio}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-4 pt-2 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href={`mailto:${heroData.cta.email}`}
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="gradient-spectrum inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-medium shadow-[0_12px_30px_-10px_rgba(91,75,230,0.5)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  <Mail size={18} />
                  {emailCopied ? 'Email Copied!' : 'Get in Touch'}
                </motion.a>
                <motion.a
                  href={heroData.cta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black/10 text-ink rounded-xl font-medium hover:border-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  <GithubIcon size={18} />
                  View GitHub
                </motion.a>
                <motion.a
                  href={heroData.cta.resumeUrl}
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black/10 text-ink rounded-xl font-medium hover:border-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  <Download size={18} />
                  Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Visual — four capabilities radiating from one integrated hub */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 md:h-full bg-gradient-to-br from-surface to-blue-50 rounded-3xl border border-black/8 overflow-hidden"
            >
              {/* Connecting lines — drawn once on mount, no continuous animation */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {capabilities.map((cap, i) => (
                  <motion.line
                    key={`line-${cap.label}`}
                    x1={cap.x} y1={cap.y} x2="50" y2="50"
                    stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.06 }}
                  />
                ))}
              </svg>

              {/* Hub — static centering wrapper is separate from the motion element,
                  since framer-motion takes ownership of `transform` when animating
                  scale/x/y and would silently clobber a manual translate(-50%,-50%). */}
              <div className="absolute left-1/2 top-1/2 z-10" style={{ transform: 'translate(-50%, -50%)' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="relative"
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-blue-400/40"
                    style={{ willChange: 'transform, opacity' }}
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <BrainCircuit size={34} className="text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Capability nodes — same separation: outer div centers, inner motion.div animates */}
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.label}
                    className="absolute z-10"
                    style={{ left: `${cap.x}%`, top: `${cap.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-1.5 w-20 md:w-28"
                      initial={{ opacity: 0, x: cap.x < 50 ? -8 : 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.65 + i * 0.1 }}
                    >
                      <span className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-sm border border-black/8 text-blue-600">
                        <Icon size={18} />
                      </span>
                      <span className="hidden md:block w-full text-[11px] font-semibold text-ink/70 text-center leading-tight">
                        {cap.label}
                      </span>
                      <span className="sr-only">{cap.label}</span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        <GithubActivityStrip />

        {/* WORK SECTION */}
        <section id="work" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto bg-surface">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-semibold text-ink mb-2">Featured Projects</h2>
            <p className="text-lg text-muted">
              Production systems solving real-world problems at scale
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <MotionLink
                key={project.id}
                to={`/projects/${project.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group block cursor-pointer bg-white border border-black/8 rounded-3xl overflow-hidden hover:border-black/15 hover:shadow-[0_20px_60px_-20px_rgba(12,11,20,0.2)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              >
                <div className="grid md:grid-cols-3 gap-6 p-8">
                  {/* Project Image */}
                  <div className="md:col-span-1">
                    <div className="h-64 md:h-full bg-black/5 rounded-2xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="mb-3">
                        <span className="font-mono text-xs text-muted">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-2xl font-display font-semibold text-ink mb-2 group-hover:text-blue-600 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-muted font-medium">{project.tagline}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-ink/70 mb-3 uppercase tracking-wide">
                          The Problem
                        </h4>
                        <p className="text-ink/80 line-clamp-2">{project.problem}</p>
                      </div>
                    </div>

                    {/* Stats & Tags */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="bg-surface p-3 rounded-xl">
                            <div className="text-lg font-display font-semibold text-blue-600">
                              {stat.metric}
                            </div>
                            <div className="text-xs text-muted">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2">
                        {project.keywords.map((keyword, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-signal/15 text-blue-700 text-sm rounded-full font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      {/* View Details */}
                      <span className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors mt-2">
                        View Details
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </MotionLink>
            ))}
          </div>
        </section>

        {/* SYSTEMS SECTION — different AI paradigms, each with its own path to production */}
        <section id="systems" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-semibold text-ink mb-2">From Problem to Production</h2>
            <p className="text-lg text-muted max-w-2xl">
              Different AI paradigms need different pipelines. Here's the real path each one takes to a deployed system.
            </p>
          </motion.div>

          <div className="space-y-4">
            {domainPipelines.map((lane, i) => {
              const LaneIcon = lane.icon;
              return (
                <motion.div
                  key={lane.domain}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white border border-black/8 rounded-2xl p-5 md:p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal/15 text-blue-700 font-semibold text-sm flex-shrink-0">
                      <LaneIcon size={16} />
                      {lane.domain}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {lane.steps.map((step) => (
                        <React.Fragment key={step}>
                          <span className="px-3 py-1.5 rounded-lg bg-surface text-ink/80 text-sm font-medium">
                            {step}
                          </span>
                          <ArrowRight size={14} className="text-muted flex-shrink-0" />
                        </React.Fragment>
                      ))}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/10 text-success text-sm font-semibold">
                        <Rocket size={14} />
                        Production
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section id="stack" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto bg-surface">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-semibold text-ink mb-2">The Full Stack</h2>
            <p className="text-lg text-muted max-w-2xl">
              Research to deployment — the tools behind everything above.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {techStackCategories.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-black/8 rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-ink mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-surface text-ink/70 text-xs font-mono rounded-md border border-black/8"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-semibold text-ink mb-2">Where I've Shipped</h2>
            <p className="text-lg text-muted">
              5+ years across recommendation systems, ranking, and generative AI in production
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-black/8 rounded-3xl p-6 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex items-center justify-center w-12 h-12 rounded-2xl flex-shrink-0 font-display font-bold ${
                        companyBrand[job.company]?.label.length > 4 ? 'text-xs' : 'text-sm'
                      } ${companyBrand[job.company]?.bg || 'bg-signal/15'} ${
                        companyBrand[job.company]?.text || 'text-blue-600'
                      }`}
                    >
                      {companyBrand[job.company]?.label || <Building2 size={22} />}
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-ink">{job.role}</h3>
                      <p className="text-muted font-medium">{job.company}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-semibold text-ink/70">{job.period}</p>
                    <p className="text-sm text-muted flex items-center gap-1 sm:justify-end">
                      <MapPin size={13} />
                      {job.location}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {job.impact.map((stat) => (
                    <div key={stat.label} className="bg-surface p-3 rounded-xl">
                      <div className="text-lg font-display font-semibold text-blue-600">{stat.metric}</div>
                      <div className="text-xs text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-ink/80 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto bg-surface">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-display font-semibold text-ink mb-6">About Me</h2>
              <div className="space-y-6 text-lg max-w-3xl">
                <p className="text-ink/80 leading-relaxed">
                  AI has moved past being a research exercise — the real problem now is building systems reliable
                  enough to run in production and valuable enough for a business to actually depend on. That's the
                  part of this work I care about most.
                </p>
                <p className="text-ink/80 leading-relaxed">
                  I'm a Full-Stack AI Engineer with 5+ years of production experience, starting with ranking and
                  recommendation models at Meta and evolving into agentic AI systems today — RAG pipelines, LLM
                  fine-tuning, and the infrastructure that keeps them running once they leave a notebook.
                </p>
                <p className="font-display text-2xl md:text-3xl font-semibold text-ink leading-snug border-l-4 border-signal pl-5">
                  Every line of code should have a fallback.
                </p>
                <p className="text-ink/80 leading-relaxed">
                  That's not a slogan — it's the discipline behind the resilience patterns, monitoring, and graceful
                  degradation in everything I ship. Right now I'm applying it as a contract AI/ML engineer at Scale
                  AI, focused on RAG pipelines and LLM fine-tuning for enterprise agentic workflows.
                </p>
                <p className="text-ink/80 leading-relaxed">
                  What I enjoy most is the ambiguous part — before a system's shape is obvious, deciding how a model
                  should fail safely, how to keep inference fast enough to matter, how to make an agent's behavior
                  explainable to the person relying on it. Turning that ambiguity into something a team can actually
                  trust in production is the work I find most worth doing.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-display font-semibold text-ink mb-6">Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, i) => {
                  const CardTag = cert.url ? motion.a : motion.div;
                  return (
                    <CardTag
                      key={i}
                      {...(cert.url ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`group p-6 bg-white border border-black/8 rounded-2xl hover:border-blue-300 hover:shadow-[0_20px_60px_-25px_rgba(12,11,20,0.25)] transition-shadow ${
                        cert.url ? 'block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50' : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                        {cert.url && (
                          <ExternalLink
                            size={14}
                            className="text-muted group-hover:text-blue-600 transition-colors flex-shrink-0"
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-display font-semibold text-ink mb-2 mt-1 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted font-medium">{cert.issuer}</p>
                    </CardTag>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* WRITING SECTION */}
        <section id="writing" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto bg-surface">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-semibold text-ink mb-2">Writing</h2>
            <p className="text-lg text-muted max-w-2xl">
              Notes from production — where the metrics and the real world disagree.
            </p>
          </motion.div>

          <div className="space-y-5">
            {writing.map((post, i) => (
              <motion.a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group flex items-start justify-between gap-6 bg-white border border-black/8 rounded-2xl p-6 md:p-8 hover:border-blue-300 hover:shadow-[0_20px_60px_-25px_rgba(12,11,20,0.25)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              >
                <div>
                  <h3 className="text-xl font-display font-semibold text-ink mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-ink/70">{post.teaser}</p>
                </div>
                <ExternalLink
                  size={20}
                  className="text-muted flex-shrink-0 mt-1 group-hover:text-blue-600 transition-colors"
                />
              </motion.a>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-display font-semibold text-ink mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <FAQItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto bg-surface">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start"
          >
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  Open to architecture consulting & advisory work
                </span>
                <h2 className="text-4xl font-display font-semibold text-ink mb-4">Let's Talk</h2>
                <p className="text-lg text-muted mb-8">
                  Always happy to discuss AI/ML systems, architecture, or opportunities. Email is the fastest way to reach me.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={item.onClick}
                      className="flex items-center gap-4 p-6 bg-white border border-black/8 rounded-2xl hover:border-blue-300 hover:shadow-[0_20px_60px_-25px_rgba(12,11,20,0.25)] transition-shadow group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span
                        className="flex items-center justify-center w-12 h-12 flex-shrink-0 rounded-full bg-signal/15 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: -6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Icon size={20} />
                      </motion.span>
                      <div>
                        <h3 className="font-semibold text-ink group-hover:text-blue-600 transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-sm text-muted mt-0.5">{item.detail}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Business Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-ink rounded-3xl p-7 md:p-8 overflow-hidden"
            >
              {/* Ambient accents */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-1 gradient-spectrum" />

              <div className="relative">
                {/* Identity */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BrainCircuit size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white leading-tight">{heroData.name}</p>
                    <p className="text-sm text-white/60">{heroData.title}</p>
                  </div>
                </div>

                <div className="h-px bg-white/10 mb-6" />

                {/* Facts */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-signal flex-shrink-0">
                      <MapPin size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">San Francisco, CA</p>
                      <p className="text-xs text-white/50">Pacific Time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-signal flex-shrink-0">
                      <Clock size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">Usually within 24 hours</p>
                      <p className="text-xs text-white/50">Typical response time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-signal flex-shrink-0">
                      <Briefcase size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">Contract @ Scale AI</p>
                      <p className="text-xs text-white/50">Open to consulting on the side</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/10 my-6" />

                {/* Footer */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-xs font-mono text-white/40 truncate">{heroData.cta.email}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-success flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    Open to consulting
                  </span>
                </div>

                <motion.a
                  href="/subhash-mothukuru.vcf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-ink rounded-xl font-medium text-sm hover:bg-white/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-blue-400"
                >
                  <IdCard size={16} />
                  Save Contact
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="bg-ink text-white pt-16 pb-8 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
              <div>
                <div className="text-2xl font-display font-semibold mb-3">subhash.mothukuru</div>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Full-Stack AI Engineer building production ML, recommendation, and generative AI systems — from
                  data pipelines to deployed architecture.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white/80">Navigate</h4>
                <ul className="space-y-2 text-sm">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-white/60 hover:text-white transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white/80">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href={`mailto:${heroData.cta.email}`}
                      onClick={handleEmailClick}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {emailCopied ? 'Copied to clipboard!' : 'Email'}
                    </a>
                  </li>
                  <li>
                    <a
                      href={heroData.cta.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={heroData.cta.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={heroData.cta.resumeUrl}
                      download
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      Download Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50">
              <p>© 2026 Subhash Mothukuru. All rights reserved.</p>
              <p>Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      className="bg-white border border-black/8 rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 flex justify-between items-center hover:bg-black/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
      >
        <h3 className="text-lg font-semibold text-ink text-left">{question}</h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={24} className="text-muted" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-black/8 bg-surface p-6"
          >
            <p className="text-ink/80 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Project Detail Page — routed at /projects/:slug
function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-base flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="text-xl text-ink/80">Project not found.</p>
        <Link to="/" className="text-blue-600 font-medium hover:underline">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="sticky top-0 bg-base/95 backdrop-blur-sm border-b border-black/8 z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-5 flex items-start justify-between gap-4">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted hover:text-blue-600 font-medium transition-colors mb-3"
            >
              <ArrowLeft size={18} />
              Back to projects
            </Link>
            <h1 className="text-3xl font-display font-semibold text-ink">{project.name}</h1>
            <p className="text-muted mt-1">{project.tagline}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 md:p-8 space-y-12">
        {/* Project Image */}
        <div className="rounded-3xl overflow-hidden h-96 bg-black/5 border border-black/8">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-display font-semibold text-ink mb-4 flex items-center gap-2">
              <XCircle size={26} className="text-red-500" /> The Problem
            </h3>
            <p className="text-ink/80 text-lg leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-display font-semibold text-ink mb-4 flex items-center gap-2">
              <CheckCircle2 size={26} className="text-success" /> The Solution
            </h3>
            <p className="text-ink/80 text-lg leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Pipeline */}
        <div>
          <h3 className="text-2xl font-display font-semibold text-ink mb-6 flex items-center gap-2">
            <Code2 size={28} className="text-blue-600" />
            Architecture & Production Pipeline
          </h3>

          <div className="space-y-4">
            {project.architecture.map((step, i) => {
              const StepIcon = step.icon;
              return (
              <motion.div
                key={i}
                className="bg-white border border-black/8 rounded-2xl p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0">
                    <StepIcon size={22} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-ink mb-2">
                      {step.stage}
                    </h4>
                    <p className="text-ink/80 mb-2">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.split(",").map((tool, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-surface text-ink/70 text-sm rounded-lg border border-black/8 font-mono"
                        >
                          {tool.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Production Deployment */}
        <div className="bg-white border border-black/8 rounded-3xl p-8">
          <h3 className="text-2xl font-display font-semibold text-ink mb-6 flex items-center gap-2">
            <Zap size={28} className="text-purple-600" />
            Production Deployment
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(project.production).map(([key, value]) => (
              <div key={key}>
                <h4 className="font-semibold text-ink mb-2 capitalize">
                  {key}
                </h4>
                <p className="text-ink/70">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-display font-semibold text-ink mb-6 flex items-center gap-2">
            <GitBranch size={28} className="text-blue-600" />
            Technology Stack
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {project.techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="bg-white p-4 rounded-xl border border-black/8 text-center font-mono text-sm text-ink hover:shadow-[0_12px_30px_-12px_rgba(12,11,20,0.2)] transition-shadow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white border border-black/8 rounded-3xl p-8">
          <h3 className="text-2xl font-display font-semibold text-ink mb-6 flex items-center gap-2">
            <Shield size={28} className="text-success" />
            Proven Results
          </h3>

          <ul className="space-y-3">
            {project.metrics.map((metric, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-ink/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                {metric}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-spectrum px-8 py-3 text-white rounded-xl font-medium shadow-[0_12px_30px_-10px_rgba(91,75,230,0.5)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            View on GitHub
          </a>
          {project.caseStudy ? (
            <Link
              to={`/projects/${project.slug}/case-study`}
              className="px-8 py-3 border-2 border-black/10 text-ink rounded-xl font-medium hover:border-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 inline-flex items-center gap-2"
            >
              <FileText size={18} />
              View Case Study
            </Link>
          ) : (
            <button
              onClick={() => alert("Case study coming soon for this project")}
              className="px-8 py-3 border-2 border-black/10 text-ink rounded-xl font-medium hover:border-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Case Study Coming Soon
            </button>
          )}
        </div>

        {/* Related Systems */}
        <div className="pt-8 border-t border-black/8">
          <h3 className="text-2xl font-display font-semibold text-ink mb-6">Related Systems</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group block bg-white border border-black/8 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-[0_20px_60px_-25px_rgba(12,11,20,0.25)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                >
                  <div className="h-36 bg-black/5 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-ink group-hover:text-blue-600 transition-colors line-clamp-1">
                      {p.name}
                    </h4>
                    <p className="text-sm text-muted mt-1 line-clamp-2">{p.tagline}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Long-form Case Study — routed at /projects/:slug/case-study
function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen bg-base flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="text-xl text-ink/80">No case study available for this project yet.</p>
        <Link to={project ? `/projects/${project.slug}` : '/'} className="text-blue-600 font-medium hover:underline">
          ← Back to project
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;
  const pdfUrl = `/case-studies/${project.slug}-case-study.pdf`;
  let sectionIndex = 0;
  const nextSectionNumber = () => String(++sectionIndex).padStart(2, '0');

  return (
    <div className="min-h-screen bg-base">
      {/* Header */}
      <div className="print-hidden sticky top-0 bg-base/95 backdrop-blur-sm border-b border-black/8 z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-muted hover:text-blue-600 font-medium transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to project
          </Link>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-white rounded-lg font-medium text-sm hover:bg-ink/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 md:px-10 py-14 md:py-20">
        {/* Title block */}
        <div className="mb-14">
          <p className="font-mono text-sm font-semibold text-blue-600 uppercase tracking-[0.15em] mb-5">
            Case Study
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-ink leading-[1.05] mb-5">
            {project.name}
          </h1>
          <p className="text-2xl text-ink/70 leading-relaxed mb-7 max-w-3xl">{cs.subtitle}</p>
          <span className="flex items-start gap-3 px-5 py-4 rounded-xl bg-gold/15 text-amber-800 font-medium leading-relaxed max-w-3xl">
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-1.5" />
            {cs.status}
          </span>
        </div>

        <div className="rounded-3xl overflow-hidden h-80 md:h-[28rem] bg-black/5 border border-black/8 mb-20">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </div>

        {/* Overview */}
        <section className="mb-20">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-mono text-sm text-secondary">{nextSectionNumber()}</span>
            <h2 className="text-3xl font-display font-semibold text-ink">Overview</h2>
          </div>
          <p className="text-ink/80 text-xl leading-[1.7] max-w-3xl">{cs.overview}</p>
        </section>

        {/* Problem */}
        <section className="mb-20">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-mono text-sm text-secondary">{nextSectionNumber()}</span>
            <h2 className="text-3xl font-display font-semibold text-ink">The Problem</h2>
          </div>
          <p className="text-ink/80 text-xl leading-[1.7] max-w-3xl">{cs.problemNarrative}</p>
        </section>

        {/* Principles */}
        <section className="mb-20">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-secondary">{nextSectionNumber()}</span>
            <h2 className="text-3xl font-display font-semibold text-ink">Design Principles</h2>
          </div>
          <ul className="space-y-4">
            {cs.principles.map((p, i) => (
              <li key={i} className="flex gap-4 text-ink/80 text-xl leading-[1.7] max-w-3xl">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-3.5 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture deep-dive */}
        <section className="mb-20">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-mono text-sm text-secondary">{nextSectionNumber()}</span>
            <h2 className="text-3xl font-display font-semibold text-ink">Architecture Deep-Dive</h2>
          </div>
          <p className="text-muted text-lg mb-8 ml-[calc(1.5rem+1rem)]">
            How the 8 pipeline stages (see the project overview) group into four defensive layers.
          </p>
          <div className="space-y-6">
            {cs.architecturePhases.map((phase, i) => (
              <div key={phase.title} className="bg-white border border-black/8 rounded-2xl p-7 md:p-9">
                <div className="flex items-start gap-5">
                  <span className="font-mono text-sm text-muted flex-shrink-0 pt-1.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-ink mb-1.5">{phase.title}</h3>
                    <p className="text-xs font-mono text-muted uppercase tracking-wider mb-4">{phase.stages}</p>
                    <p className="text-ink/80 text-lg leading-[1.7]">{phase.narrative}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Production & Compliance */}
        <section className="mb-20">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-mono text-sm text-secondary">{nextSectionNumber()}</span>
            <h2 className="text-3xl font-display font-semibold text-ink">Production & Compliance</h2>
          </div>
          <p className="text-ink/80 text-xl leading-[1.7] max-w-3xl mb-8">{cs.complianceNarrative}</p>
          <div className="grid sm:grid-cols-2 gap-6 bg-surface rounded-2xl p-7 md:p-8">
            {Object.entries(project.production).map(([key, value]) => (
              <div key={key}>
                <h4 className="font-semibold text-ink mb-1.5 capitalize">{key}</h4>
                <p className="text-ink/70">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-20">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-mono text-sm text-secondary">{nextSectionNumber()}</span>
            <h2 className="text-3xl font-display font-semibold text-ink">Results</h2>
          </div>
          <p className="text-ink/80 text-xl leading-[1.7] max-w-3xl mb-8">{cs.resultsNarrative}</p>
          <ul className="space-y-3">
            {project.metrics.map((metric, i) => (
              <li key={i} className="flex items-center gap-3 text-ink/80 text-lg">
                <span className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                {metric}
              </li>
            ))}
          </ul>
        </section>

        {/* What's Next */}
        <section className="mb-20">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-mono text-sm text-secondary">{nextSectionNumber()}</span>
            <h2 className="text-3xl font-display font-semibold text-ink">What's Next</h2>
          </div>
          <p className="text-ink/80 text-xl leading-[1.7] max-w-3xl">{cs.whatsNext}</p>
        </section>

        {/* Tech stack */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-secondary">{nextSectionNumber()}</span>
            <h2 className="text-3xl font-display font-semibold text-ink">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3.5 py-2 bg-surface text-ink/80 text-sm font-mono rounded-lg border border-black/8"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="print-hidden flex gap-4 flex-wrap pt-8 border-t border-black/8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-spectrum px-8 py-3 text-white rounded-xl font-medium shadow-[0_12px_30px_-10px_rgba(91,75,230,0.5)] transition inline-flex items-center gap-2"
          >
            View on GitHub
            <ExternalLink size={16} />
          </a>
          <Link
            to={`/projects/${project.slug}`}
            className="px-8 py-3 border-2 border-black/10 text-ink rounded-xl font-medium hover:border-black/20 transition"
          >
            Back to project overview
          </Link>
        </div>
      </article>
    </div>
  );
}
