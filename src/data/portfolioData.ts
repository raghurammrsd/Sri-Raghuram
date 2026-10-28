export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  repoName?: string;
  category: string;
  tagline: string;
  deploymentStatus: string;
  accentColor: 'orange' | 'cyan' | 'emerald' | 'amber' | 'purple';
  summary: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  links: {
    github?: string;
    pypi?: string;
    liveDemo?: string;
    docs?: string;
  };
  metrics: { label: string; value: string; color?: string }[];
  terminalSimulation?: {
    command: string;
    outputLines: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  color: string;
  skills: { name: string; highlight?: boolean; detail?: string }[];
}

export const PERSONAL_INFO = {
  name: "Mohan Sri Raghuram",
  brand: "RAGHURAM",
  role: "AI Engineer | Applied AI Developer | Systems Architect",
  title: "I build intelligence into software.",
  supportingText: "AI engineering, deterministic developer tools, and high-concurrency systems built to solve real architectural bottlenecks.",
  location: "India · Operating Globally",
  status: "AVAILABLE FOR MISSIONS · BASED IN INDIA",
  email: "msriraghuram@gmail.com",
  phone: "+91 9392380182",
  github: "https://github.com/raghurammrsd",
  linkedin: "https://www.linkedin.com/in/msriraghuram/",
  pypi: "https://pypi.org/project/codegraph-engine/3.0.1/",
  resumePdf: "/Mohan_Sri_Raghuram_resume.pdf",
  copyrightYear: "2026",
};

export const STORY_SECTION = {
  headline: "NOT JUST MODELS. SYSTEMS THAT WORK.",
  subhead: "The gap between an AI demo and a production system is vast. I engineer the deterministic architecture that bridges it.",
  narrativeText:
    "Most AI projects fail when prototypes meet reality. Context windows get overwhelmed with thousands of lines of noisy file grepping, agents hallucinate non-existent imports, and brittle pipelines crash the second an unhandled edge case hits production. My focus is practical AI engineering: building deterministic tools, local-first repository intelligence, and high-concurrency data systems that provide verifiable ground truth rather than generative guesswork.",
  pillars: [
    {
      number: "01",
      title: "Deterministic Ground Truth",
      color: "orange",
      description: "Language models are probabilistic. Software requires exactness. I anchor AI systems to compiler ASTs, strict Pydantic contracts, and verifiable call graphs."
    },
    {
      number: "02",
      title: "Local-First Performance",
      color: "cyan",
      description: "Sub-second queries, zero cloud latency dependencies for local tooling, and incremental SQLite caching designed for extreme developer velocity."
    },
    {
      number: "03",
      title: "Production Resilience",
      color: "emerald",
      description: "AsyncIO concurrency, schema validation across system boundaries, and battle-tested error handling that prevents runtime failures under high loads."
    }
  ]
};

// INTERNSHIP & FOUNDING WORK — BUILT EXACTLY IN THE SAME RICH CASE STUDY FORMAT AS PROJECTS
export const INTERNSHIP_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "graph-one-pipeline",
    number: "01",
    title: "Graph-One 600+ Source Data Pipeline",
    repoName: "The AI Signal / One Atlas",
    category: "HIGH-CONCURRENCY DATA INGESTION",
    tagline: "Scalable asynchronous Python data pipelines ingesting, validating, and structuring technical data from 600+ sources.",
    deploymentStatus: "PRODUCTION INGESTION ENGINE",
    accentColor: "cyan",
    summary:
      "Engineered resilient data pipelines using AsyncIO, Crawl4AI, and PostgreSQL to ingest and structure technical data from 600+ disparate sources with automatic validation and dead-letter queues.",
    challenge:
      "Managing high-concurrency scraping across 600+ technical sources with frequent bot mitigations, rate limits, schema drift, and network volatility without pipeline crashes.",
    solution:
      "Built an asynchronous worker pool utilizing Crawl4AI and AsyncIO with exponential backoff, dynamic proxy rotation, schema conformance filters, and bulk PostgreSQL upserts.",
    architectureHighlights: [
      "Scalable asynchronous data crawler pool running on AsyncIO and Crawl4AI",
      "Dynamic schema validation and corrupted payload filtering prior to DB writes",
      "PostgreSQL connection pooling with batch upserts scaling to millions of records",
      "Automated evaluation scorecards assessing data quality, freshness, and completeness"
    ],
    techStack: ["Python", "AsyncIO", "Crawl4AI", "PostgreSQL", "ETL Pipelines", "Data Quality"],
    links: {
      github: "https://github.com/raghurammrsd",
      liveDemo: "https://frontieratlas.co",
      docs: "https://frontieratlas.co"
    },
    metrics: [
      { label: "MONITORED SOURCES", value: "600+ SOURCES", color: "text-cyan-400" },
      { label: "PIPELINE CONCURRENCY", value: "ASYNCIO HIGH-THROUGHPUT", color: "text-emerald-400" },
      { label: "DOWNTIME", value: "0 CRASH DOWNTIME", color: "text-electric-orange" }
    ],
    terminalSimulation: {
      command: "graphone-pipeline --ingest --concurrency 64 --sources 600 --sink postgres",
      outputLines: [
        "✓ Ingestion workers spawned: 64 concurrent coroutines active",
        "✓ Monitored endpoints: 600+ technical feeds checked (0 latency degradation)",
        "✓ Schema validation: 12,840 payloads parsed, 0 schema violations",
        "✓ Bulk upsert to PostgreSQL completed in 840ms with ACID guarantees"
      ]
    }
  },
  {
    id: "llm-entity-extraction",
    number: "02",
    title: "LLM-Assisted Automated Extraction Engine",
    repoName: "The AI Signal / One Atlas",
    category: "LLM WORKFLOWS & KNOWLEDGE GRAPHS",
    tagline: "Automated information extraction workflows using Gemini and Groq models for entity resolution and knowledge generation.",
    deploymentStatus: "MULTI-MODEL ORCHESTRATION",
    accentColor: "emerald",
    summary:
      "Designed and deployed automated extraction workflows integrating Gemini and Groq models to convert raw unstructured text into structured knowledge graphs with 99.4% schema accuracy.",
    challenge:
      "Raw technical web data contains noisy taxonomies and unstructured formatting that standard regex or naive embeddings fail to categorize reliably.",
    solution:
      "Designed a dual-LLM pipeline routing: Groq for sub-second entity classification and Gemini for deep contextual synthesis, enforced by strict Pydantic JSON schemas.",
    architectureHighlights: [
      "Multi-model routing optimizing for both sub-500ms latency and deep synthesis",
      "Strict Pydantic JSON output enforcement guaranteeing 100% parseable structured data",
      "Entity resolution and graph linkage eliminating duplicate nodes",
      "Automated quality evaluation pipeline with continuous accuracy scorecards"
    ],
    techStack: ["Gemini API", "Groq API", "Knowledge Graphs", "Pydantic v2", "Entity Resolution", "Python"],
    links: {
      github: "https://github.com/raghurammrsd",
      liveDemo: "https://frontieratlas.co"
    },
    metrics: [
      { label: "SCHEMA COMPLIANCE", value: "99.4% ACCURACY", color: "text-emerald-400" },
      { label: "MANUAL WORK CUT", value: "95% AUTOMATION", color: "text-cyan-400" },
      { label: "MEDIAN LATENCY", value: "< 500ms GROQ", color: "text-amber-400" }
    ],
    terminalSimulation: {
      command: "llm-extract --model groq-llama-3 --enrich-gemini --strict-schema",
      outputLines: [
        "✓ Model router: Groq (low-latency entity parse) + Gemini (deep synthesis)",
        "✓ Extracted 1,420 relational entities across unstructured technical articles",
        "✓ Pydantic validation: 99.4% precision · 0 schema drift errors",
        "✓ Relational edges synced to Knowledge Graph in PostgreSQL"
      ]
    }
  },
  {
    id: "frontier-atlas-platform",
    number: "03",
    title: "Frontier Atlas & AIOrbit Platform Engineering",
    repoName: "frontieratlas.co | aiorbit.club",
    category: "FOUNDING AI PRODUCT ECOSYSTEM",
    tagline: "Building the backend intelligence graph, data pipelines, and RAG systems for frontier AI products.",
    deploymentStatus: "LIVE IN PRODUCTION",
    accentColor: "orange",
    summary:
      "Founding AI engineer driving backend product development for frontieratlas.co and aiorbit.club, building semantic RAG search over knowledge graphs.",
    challenge:
      "Building a unified intelligence ecosystem that synthesizes community data, frontier AI updates, and technical research into instant searchable insights.",
    solution:
      "Architected backend services using Python, PostgreSQL, and modern RAG retrieval, connecting extracted web intelligence directly into responsive user interfaces.",
    architectureHighlights: [
      "Production backend services supporting frontieratlas.co and aiorbit.club",
      "Hybrid RAG retrieval combining vector search with dense relational graphs",
      "Automated dataset evaluation workflows verifying data freshness and completeness",
      "Real-time API endpoints serving live community members and AI researchers"
    ],
    techStack: ["Python", "PostgreSQL", "RAG", "Knowledge Graphs", "REST APIs", "Crawl4AI"],
    links: {
      github: "https://github.com/raghurammrsd",
      liveDemo: "https://frontieratlas.co",
      docs: "https://aiorbit.club"
    },
    metrics: [
      { label: "ECOSYSTEM", value: "FRONTIER ATLAS & AIORBIT", color: "text-electric-orange" },
      { label: "RETRIEVAL", value: "HYBRID RAG + GRAPH", color: "text-cyan-400" },
      { label: "STATUS", value: "LIVE DEPLOYED", color: "text-emerald-400" }
    ],
    terminalSimulation: {
      command: "frontier-status --verify-endpoints --service all",
      outputLines: [
        "✓ Service 'frontieratlas.co': ONLINE (200 OK)",
        "✓ Service 'aiorbit.club': ONLINE (200 OK)",
        "✓ Knowledge Graph cluster: 100% healthy · PostgreSQL connection pool active",
        "✓ RAG semantic retrieval latency: 38ms P99"
      ]
    }
  }
];

// 4 VERIFIED PROJECTS FROM RESUME WITH DIRECT GITHUB & DEPLOYMENT LINKS
export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "codegraph-mcp",
    number: "01",
    title: "CodeGraph MCP",
    repoName: "CODE_GRAPH_MCP",
    category: "REPOSITORY INTELLIGENCE ENGINE",
    tagline: "Local-first MCP server that gives AI coding agents structured, deterministic, evidence-backed access to codebases.",
    deploymentStatus: "PUBLISHED ON PYPI & CLAUDE / CURSOR READY",
    accentColor: "orange",
    summary:
      "Autonomous coding agents fail when they repeatedly grep and read entire files. CodeGraph MCP turns codebases into deterministic intelligence graphs: resolving symbols, imports, callers, callees, API routes, database models, and runtime behavior with exact file:line evidence.",
    challenge:
      "AI agents repeatedly grep and ingest entire repositories, blowing through context limits and hallucinating non-existent functions or imports because raw text lacks AST syntax awareness.",
    solution:
      "Engineered a local-first MCP server utilizing Python AST static analysis and an incremental SQLite index. Resolves symbols, imports, callers, API routes, and cross-file references with line-level evidence in under 4ms.",
    architectureHighlights: [
      "Deterministic code-intelligence pipeline on Python AST with incremental SQLite index",
      "Evidence-backed retrieval separating verified structural relationships from inferred assumptions",
      "Routes & services linked directly to ORM models, SQL queries, and database tables",
      "Published on PyPI; native compatibility with Claude Desktop, Cursor, and any MCP client"
    ],
    techStack: ["Python", "MCP Protocol", "AST Static Analysis", "SQLite", "Git Analysis", "PyPI"],
    links: {
      github: "https://github.com/raghurammrsd/CODE_GRAPH_MCP",
      pypi: "https://pypi.org/project/codegraph-engine/3.0.1/",
      liveDemo: "https://pypi.org/project/codegraph-engine/3.0.1/",
      docs: "https://github.com/raghurammrsd/CODE_GRAPH_MCP#readme"
    },
    metrics: [
      { label: "QUERY LATENCY", value: "< 4.2ms", color: "text-cyan-400" },
      { label: "EVIDENCE TYPE", value: "AST VERIFIED", color: "text-emerald-400" },
      { label: "DISTRIBUTION", value: "PYPI PACKAGE", color: "text-electric-orange" }
    ],
    terminalSimulation: {
      command: "codegraph query --symbol get_user_analytics --evidence",
      outputLines: [
        "✓ Symbol resolved in 3.8ms [file: src/services/analytics.py:42]",
        "  ├─ Defined: def get_user_analytics(user_id: UUID) -> AnalyticsReport",
        "  ├─ Callers: [api/routes/dashboard.py:108, workers/reports.py:54]",
        "  ├─ ORM Bindings: UserModel (users table), EventLog (events table)",
        "  └─ Citation: 100% Deterministic AST match · 0 wasted tokens"
      ]
    }
  },
  {
    id: "ai-app-compiler",
    number: "02",
    title: "AI App Compiler Platform",
    repoName: "AI_APP_Buildiing_platform",
    category: "DETERMINISTIC ARCHITECTURE PLATFORM",
    tagline: "Transforms natural language requirements into production-ready software architectures using a deterministic multi-stage pipeline.",
    deploymentStatus: "INTERACTIVE FASTAPI WORKBENCH",
    accentColor: "cyan",
    summary:
      "An automated engineering compiler that converts high-level natural language specifications into validated software blueprints with automated consistency checks across APIs, databases, RBAC, and workflows.",
    challenge:
      "Naive generative prompts create structural discrepancies between frontend contracts, REST endpoints, database schemas, and permission models.",
    solution:
      "Implemented a multi-stage deterministic pipeline featuring Pydantic-based cross-layer validation. Built a FastAPI workbench with runtime simulation, CRUD validation, auth testing, and architecture visualization.",
    architectureHighlights: [
      "Deterministic multi-stage pipeline converting prompt specs into verified architectures",
      "Pydantic-based cross-layer consistency validation across APIs, databases, and RBAC",
      "FastAPI workbench with runtime simulation, CRUD validation, and architecture graph visualization",
      "Pre-empts integration errors early before any code generation begins"
    ],
    techStack: ["Python", "FastAPI", "Pydantic v2", "State Machines", "AsyncIO", "Docker"],
    links: {
      github: "https://github.com/raghurammrsd/AI_APP_Buildiing_platform",
      liveDemo: "https://ai-app-buildiing-platform.onrender.com",
      docs: "https://github.com/raghurammrsd/AI_APP_Buildiing_platform#readme"
    },
    metrics: [
      { label: "VALIDATION", value: "PYDANTIC CROSS-LAYER", color: "text-cyan-400" },
      { label: "WORKBENCH", value: "FASTAPI WORKBENCH", color: "text-emerald-400" },
      { label: "PIPELINE", value: "MULTI-STAGE DETERMINISTIC", color: "text-amber-400" }
    ],
    terminalSimulation: {
      command: "compiler-run --spec './spec/ecommerce_tier.yaml' --validate --strict",
      outputLines: [
        "✓ Multi-tier schema compiled successfully (8 modules)",
        "✓ Cross-layer validation: RBAC policies ↔ REST endpoints ↔ DB tables verified",
        "✓ 0 cyclic dependencies detected across entity relation graph",
        "✓ Generated typed FastAPI router & Alembic migrations ready for deployment"
      ]
    }
  },
  {
    id: "dundoo",
    number: "03",
    title: "DUNDOO",
    repoName: "DUNDOO",
    category: "AI HYPERLOCAL COMMERCE PLATFORM",
    tagline: "Hyperlocal commerce platform connecting customers with nearby shops via map-based navigation and multilingual voice search.",
    deploymentStatus: "BACKEND API & GEOSPATIAL SEARCH",
    accentColor: "emerald",
    summary:
      "A hyperlocal commerce platform featuring geospatial merchant discovery, multilingual voice search, payment integration, and real-time inventory management.",
    challenge:
      "Local shopkeepers lack digital visibility and conventional e-commerce platforms favor large sellers without localized geospatial and voice intelligence.",
    solution:
      "Architected a scalable Flask and PostgreSQL backend supporting spatial map navigation, multilingual voice search parsing, and transactional inventory management.",
    architectureHighlights: [
      "Flask & PostgreSQL backend with map-based navigation and payment integration",
      "RESTful services for product search, inventory management, and payment workflows",
      "Multilingual voice query parsing for regional accessibility",
      "Low-latency geospatial catalog search for nearby merchant matching"
    ],
    techStack: ["Flask", "PostgreSQL", "REST APIs", "Python", "Geospatial Navigation", "Voice AI"],
    links: {
      github: "https://github.com/raghurammrsd/DUNDOO",
      liveDemo: "https://main.dundoo-app.pages.dev",
      docs: "https://github.com/raghurammrsd/DUNDOO#architecture"
    },
    metrics: [
      { label: "BACKEND", value: "FLASK + POSTGRESQL", color: "text-emerald-400" },
      { label: "SEARCH", value: "MAP NAVIGATION + VOICE", color: "text-cyan-400" },
      { label: "INTEGRATION", value: "PAYMENTS & INVENTORY", color: "text-electric-orange" }
    ]
  },
  {
    id: "realmock-ai",
    number: "04",
    title: "RealMockAI",
    repoName: "realmockai",
    category: "AI INTERVIEW PREPARATION SYSTEM",
    tagline: "AI-powered mock interview system with real-time simulation, adaptive questioning, and LLM-based response evaluation.",
    deploymentStatus: "VOICE INTERACTION & LLM STREAMING",
    accentColor: "amber",
    summary:
      "An interactive platform providing simulated technical interviews with real-time dynamic questioning and automated LLM-based candidate response evaluation.",
    challenge:
      "Static interview prep lacks real-time dialog adaptivity and objective evaluation against technical competency rubrics.",
    solution:
      "Developed modular FastAPI backend services integrating LLM APIs for adaptive questioning and real-time candidate response evaluation.",
    architectureHighlights: [
      "Modular FastAPI services integrating LLM APIs for adaptive technical questioning",
      "Real-time interview simulation engine reacting to candidate answers",
      "LLM-based multi-criteria response evaluation against structured rubrics",
      "Clean RESTful API architecture ready for real-time frontend integration"
    ],
    techStack: ["FastAPI", "Python", "LLM APIs", "REST APIs", "Adaptive Questioning"],
    links: {
      github: "https://github.com/raghurammrsd/realmockai",
      liveDemo: "https://github.com/raghurammrsd/realmockai#live-simulation",
      docs: "https://github.com/raghurammrsd/realmockai#api-docs"
    },
    metrics: [
      { label: "BACKEND", value: "FASTAPI MODULAR", color: "text-amber-400" },
      { label: "EVALUATION", value: "LLM RUBRIC-BASED", color: "text-cyan-400" },
      { label: "QUESTIONING", value: "REAL-TIME ADAPTIVE", color: "text-emerald-400" }
    ]
  }
];

export const EDUCATION_DATA = {
  institution: "Parul University",
  degree: "B.Tech in Computer Science and Engineering (AI)",
  location: "Vadodara, India",
  period: "Jul 2023 – Apr 2027",
  cgpa: "8.21",
  coursework: ["Machine Learning", "Deep Learning", "Data Structures & Algorithms", "Database Management Systems", "Artificial Intelligence"]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Intelligent Systems",
    description: "Architectures connecting language models to structured code and verifiable reality.",
    color: "from-orange-500/20 to-amber-500/5",
    skills: [
      { name: "Model Context Protocol (MCP)", highlight: true },
      { name: "Deterministic AST Analysis", highlight: true },
      { name: "RAG & Semantic Search", highlight: true },
      { name: "Knowledge Graphs", highlight: true },
      { name: "LLM Applications & Prompt Engineering" },
      { name: "Entity Resolution" },
      { name: "PyTorch & Computer Vision" },
      { name: "Data Extraction (Crawl4AI)", highlight: true }
    ]
  },
  {
    title: "Backend & Systems",
    description: "High-throughput asynchronous servers and reliable REST architectures.",
    color: "from-cyan-500/20 to-blue-500/5",
    skills: [
      { name: "Python", highlight: true },
      { name: "FastAPI & AsyncIO", highlight: true },
      { name: "Flask", highlight: true },
      { name: "RESTful API Design" },
      { name: "Pydantic v2 Schema Validation", highlight: true },
      { name: "C Programming" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational ground truth, incremental indexes, and embeddings.",
    color: "from-emerald-500/20 to-teal-500/5",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "SQLite & Incremental Indexes", highlight: true },
      { name: "Vector Databases" },
      { name: "MySQL" },
      { name: "MongoDB" }
    ]
  },
  {
    title: "Tools & Infrastructure",
    description: "Testing, containerization, and modern development workflows.",
    color: "from-purple-500/20 to-indigo-500/5",
    skills: [
      { name: "Docker", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Cloudflare Workers" },
      { name: "React & TypeScript" },
      { name: "Linux / Shell" },
      { name: "Postman" }
    ]
  }
];
