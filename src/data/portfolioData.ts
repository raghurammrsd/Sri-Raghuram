export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  repoName: string;
  category: string;
  tagline: string;
  deploymentStatus: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  links: {
    github: string;
    pypi?: string;
    liveDemo?: string;
    docs?: string;
  };
  metrics: { label: string; value: string }[];
  terminalSimulation?: {
    command: string;
    outputLines: string[];
  };
}

export interface InternshipProject {
  id: string;
  systemName: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge: string;
  overview: string;
  keyInnovations: string[];
  techStack: string[];
  verifiedImpact: string[];
  liveUrls?: { label: string; url: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean; detail?: string }[];
}

export const PERSONAL_INFO = {
  name: "Mohan Sri Raghuram",
  brand: "RAGHURAM",
  role: "AI Engineer | Applied AI Developer | Systems Architect",
  title: "I build intelligence into software.",
  supportingText: "AI engineering, deterministic developer tools, and high-concurrency systems built to solve real architectural bottlenecks.",
  location: "India · Available Globally",
  status: "AVAILABLE FOR MISSIONS · BASED IN INDIA",
  email: "msriraghuram@gmail.com",
  phone: "+91 9392380182",
  github: "https://github.com/raghurammrsd",
  linkedin: "https://www.linkedin.com/in/msriraghuram/",
  pypi: "https://pypi.org/project/codegraph-mcp/",
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
      description: "Language models are probabilistic. Software requires exactness. I anchor AI systems to compiler ASTs, strict Pydantic contracts, and verifiable call graphs."
    },
    {
      number: "02",
      title: "Local-First Performance",
      description: "Sub-second queries, zero cloud latency dependencies for local tooling, and incremental SQLite caching designed for extreme developer velocity."
    },
    {
      number: "03",
      title: "Production Resilience",
      description: "AsyncIO concurrency, schema validation across system boundaries, and battle-tested error handling that prevents runtime failures under high loads."
    }
  ]
};

// DEDICATED INTERNSHIP & FOUNDING WORK DETAILS (FOR RECOGNITION)
export const INTERNSHIP_PROJECTS: InternshipProject[] = [
  {
    id: "graph-one-pipeline",
    systemName: "Graph-One 600+ Source Data Pipeline",
    role: "AI Engineer Intern",
    company: "The AI Signal / One Atlas",
    period: "May 2026 – Present",
    location: "Remote",
    badge: "CORE DATA ENGINE",
    overview:
      "Engineered high-throughput asynchronous data infrastructure for Graph-One, ingesting, parsing, and normalizing technical data from over 600 diverse web and API sources into structured PostgreSQL databases.",
    keyInnovations: [
      "Built resilient asynchronous crawler workers leveraging Crawl4AI and Python AsyncIO to bypass bot mitigations and handle rate limiting dynamically",
      "Designed automatic schema conformance checks that discard corrupted responses before entering the data warehouse",
      "Optimized database connection pooling and bulk upsert operations in PostgreSQL, scaling to millions of processed records",
      "Implemented comprehensive retry heuristics and dead-letter queues preventing pipeline failure during network drops"
    ],
    techStack: ["Python", "AsyncIO", "Crawl4AI", "PostgreSQL", "Data Quality", "ETL Pipelines"],
    verifiedImpact: [
      "600+ technical sources continuously monitored and structured",
      "Sub-second extraction throughput per worker",
      "Zero pipeline crash downtime under high concurrency"
    ],
    liveUrls: [
      { label: "Frontier Atlas Ecosystem", url: "https://frontieratlas.co" }
    ]
  },
  {
    id: "llm-entity-extraction",
    systemName: "LLM-Assisted Entity Extraction & Knowledge Graph",
    role: "AI Engineer Intern",
    company: "The AI Signal / One Atlas",
    period: "May 2026 – Present",
    location: "Remote",
    badge: "LLM WORKFLOW ENGINE",
    overview:
      "Designed and deployed automated information extraction workflows utilizing Gemini and Groq model APIs to transform raw technical text into structured knowledge graphs with verified relational links.",
    keyInnovations: [
      "Orchestrated multi-model extraction routing (Groq for ultra-low latency entity classification, Gemini for deep reasoning and synthesis)",
      "Enforced strict JSON schema boundaries via Pydantic to ensure 100% parseable structured outputs from LLM responses",
      "Developed entity deduplication and resolution algorithms to merge identical entities discovered across separate sources",
      "Generated rich semantic metadata and relational graphs powering AI downstream search applications"
    ],
    techStack: ["Gemini API", "Groq API", "Knowledge Graphs", "Pydantic", "Entity Resolution", "Prompt Engineering"],
    verifiedImpact: [
      "Automated extraction with 99.4% schema compliance",
      "Replaced manual data taxonomy classification by 95%",
      "Sub-500ms median extraction latency via Groq"
    ]
  },
  {
    id: "frontier-atlas-platform",
    systemName: "Frontier Atlas & AIOrbit Platform Engineering",
    role: "Founding Member | AI Engineer",
    company: "Frontier Atlas",
    period: "Sep 2026 – Present",
    location: "Remote",
    badge: "FOUNDING AI PRODUCT",
    overview:
      "Founding engineer contributing across the complete AI product stack for frontieratlas.co and aiorbit.club, building backend endpoints, knowledge graphs, and real-time RAG applications.",
    keyInnovations: [
      "Architected backend services and API gateways connecting AI models to client applications",
      "Built semantic search and RAG retrieval pipelines over dense domain knowledge graphs",
      "Developed data quality evaluation scorecards assessing AI dataset integrity and provenance",
      "Engineered automated pipelines for continuous dataset enrichment and validation"
    ],
    techStack: ["Python", "PostgreSQL", "RAG", "NLP", "Knowledge Graphs", "REST APIs", "Crawl4AI"],
    verifiedImpact: [
      "Co-founded and shipped frontieratlas.co and aiorbit.club",
      "Production-grade knowledge graph backend",
      "Live platform serving active AI community members"
    ],
    liveUrls: [
      { label: "frontieratlas.co", url: "https://frontieratlas.co" },
      { label: "aiorbit.club", url: "https://aiorbit.club" }
    ]
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
      pypi: "https://pypi.org/project/codegraph-mcp/",
      liveDemo: "https://pypi.org/project/codegraph-mcp/",
      docs: "https://github.com/raghurammrsd/CODE_GRAPH_MCP#readme"
    },
    metrics: [
      { label: "QUERY LATENCY", value: "< 4.2ms" },
      { label: "EVIDENCE TYPE", value: "AST VERIFIED" },
      { label: "DISTRIBUTION", value: "PYPI DEPLOYED" }
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
      liveDemo: "https://github.com/raghurammrsd/AI_APP_Buildiing_platform#workbench-demo",
      docs: "https://github.com/raghurammrsd/AI_APP_Buildiing_platform#readme"
    },
    metrics: [
      { label: "VALIDATION", value: "PYDANTIC CROSS-LAYER" },
      { label: "WORKBENCH", value: "FASTAPI WORKBENCH" },
      { label: "PIPELINE", value: "MULTI-STAGE DETERMINISTIC" }
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
      liveDemo: "https://github.com/raghurammrsd/DUNDOO#demo",
      docs: "https://github.com/raghurammrsd/DUNDOO#architecture"
    },
    metrics: [
      { label: "BACKEND", value: "FLASK + POSTGRESQL" },
      { label: "SEARCH", value: "MAP NAVIGATION + VOICE" },
      { label: "INTEGRATION", value: "PAYMENTS & INVENTORY" }
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
      { label: "BACKEND", value: "FASTAPI MODULAR" },
      { label: "EVALUATION", value: "LLM RUBRIC-BASED" },
      { label: "QUESTIONING", value: "REAL-TIME ADAPTIVE" }
    ]
  }
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "The AI Signal / One Atlas",
    role: "AI Engineer Intern",
    period: "May 2026 – Present",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Developed backend services for Graph-One, building scalable Python pipelines to ingest, validate, and structure technical data from 600+ sources using AsyncIO, Crawl4AI, and PostgreSQL.",
      "Designed LLM-assisted information extraction workflows integrating Gemini and Groq models to automate entity extraction, knowledge generation, and structured data enrichment.",
      "Contributed to Frontier Atlas by developing evaluation and data quality pipelines for AI datasets, implementing schema validation and automated quality assessment workflows.",
      "Designed reusable Python modules and backend components supporting scalable AI workflows, developer productivity, and maintainable software architecture."
    ],
    technologies: ["Python", "AsyncIO", "Crawl4AI", "PostgreSQL", "Gemini API", "Groq", "Data Quality"]
  },
  {
    company: "Frontier Atlas & AIOrbit.club",
    role: "Founding Member | AI Engineer",
    period: "Sep 2026 – Present",
    location: "Remote",
    type: "Core Contributor",
    bullets: [
      "Contribute to AI product development for Frontier Atlas (frontieratlas.co) and AIOrbit.club across backend systems and AI data pipelines using Python and PostgreSQL.",
      "Build LLM applications using RAG and NLP, structuring and connecting data with knowledge graphs.",
      "Develop web data extraction and data quality workflows supporting AI-driven products."
    ],
    technologies: ["Python", "PostgreSQL", "Knowledge Graphs", "RAG", "NLP", "Data Extraction"]
  }
];

export const EDUCATION_DATA = {
  institution: "Parul University",
  degree: "B.Tech in Computer Science and Engineering (AI)",
  location: "Vadodara, India",
  period: "Jul 2023 – Apr 2027",
  cgpa: "8.21 / 10",
  coursework: ["Machine Learning", "Deep Learning", "Data Structures & Algorithms", "Database Management Systems", "Artificial Intelligence"]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Intelligent Systems",
    description: "Architectures connecting language models to structured code and verifiable reality.",
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
