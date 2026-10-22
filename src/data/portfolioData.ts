export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  links: {
    github?: string;
    pypi?: string;
    live?: string;
  };
  metrics?: { label: string; value: string }[];
  terminalSimulation?: {
    command: string;
    outputLines: string[];
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Mohan Sri Raghuram",
  brand: "raghuram",
  role: "AI Engineer | Applied AI Developer | Software Engineer",
  title: "I build intelligence into software.",
  supportingText: "AI engineering, intelligent developer tools, and products built to solve real problems.",
  location: "India",
  status: "AVAILABLE FOR WORK · BASED IN INDIA",
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
  subhead: "The gap between an AI demo and a production system is vast. I engineer the architecture that bridges it.",
  narrative: [
    "Most AI projects fail when prototypes meet reality: context windows get overwhelmed, agents hallucinate non-existent imports, and brittle pipelines crash on unexpected edge cases.",
    "My focus is practical AI engineering: building deterministic tools, local-first codebase intelligence, and high-concurrency data systems that provide verifiable ground truth rather than guesswork.",
    "From AST static analysis that maps entire repositories in milliseconds, to asynchronous data pipelines that ingest and normalize hundreds of technical sources, I build software that executes reliably in the real world."
  ],
  pillars: [
    {
      number: "01",
      title: "Deterministic Ground Truth",
      description: "Language models are probabilistic. Software requires exactness. I anchor AI systems to compiler ASTs, strict schemas, and verifiable call graphs."
    },
    {
      number: "02",
      title: "Local-First Performance",
      description: "Sub-second queries, zero cloud latency dependencies for local tools, and incremental caching designed for developer velocity."
    },
    {
      number: "03",
      title: "Production Resilience",
      description: "AsyncIO concurrency, Pydantic validation across system boundaries, and battle-tested error handling that prevents runtime failures."
    }
  ]
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "codegraph-mcp",
    number: "01",
    title: "CodeGraph MCP",
    category: "INTELLIGENT DEVELOPER TOOLS",
    tagline: "Local-first MCP server that gives AI agents structured, deterministic, evidence-backed access to codebases.",
    summary:
      "Autonomous coding agents fail when they blindly grep and ingest thousands of file lines. CodeGraph MCP turns codebases into queryable intelligence graphs: resolving symbols, imports, callers, callees, API routes, database models, and runtime traces with exact file:line evidence.",
    challenge:
      "LLM-based coding tools frequently hallucinate imports and call chains because raw vector embeddings lack structural syntax awareness. Grepping raw files exhausts token windows and wastes user compute.",
    solution:
      "Engineered an MCP server based on Python AST static analysis paired with an incremental SQLite index. Resolves symbols, dependencies, and call trees in single-digit milliseconds, providing line-level verified evidence directly to agents.",
    architectureHighlights: [
      "Deterministic symbol resolution and call-graph traversal with precise file:line citations",
      "Routes & services linked directly to ORM models, SQL queries, and database tables",
      "Local-first SQLite incremental cache eliminating redundant parsing passes",
      "Published on PyPI; seamlessly compatible with Claude Desktop, Cursor, and any MCP client"
    ],
    techStack: ["Python", "MCP Protocol", "AST Analysis", "SQLite", "Static Analysis", "PyPI"],
    links: {
      github: "https://github.com/raghurammrsd",
      pypi: "https://pypi.org/project/codegraph-mcp/"
    },
    metrics: [
      { label: "QUERY LATENCY", value: "< 5ms" },
      { label: "EVIDENCE TYPE", value: "AST VERIFIED" },
      { label: "DISTRIBUTION", value: "PYPI PACKAGE" }
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
    id: "dundoo",
    number: "02",
    title: "DUNDOO",
    category: "HYPERLOCAL COMMERCE PLATFORM",
    tagline: "Hyperlocal commerce platform connecting customers with nearby merchants and automated inventory management.",
    summary:
      "A complete full-stack platform enabling local discovery and commerce with map-based navigation, multilingual voice search, and real-time inventory management.",
    challenge:
      "Local merchants often struggle with complex software interfaces, while consumers need instant geospatial discovery and localized voice-assisted ordering across dynamic catalog inventories.",
    solution:
      "Architected a scalable Flask and PostgreSQL backend supporting spatial geo-queries, dynamic inventory synchronization, and intuitive RESTful workflows with voice-enabled query parsing.",
    architectureHighlights: [
      "Geospatial catalog querying and distance calculation for merchant radius matching",
      "Multilingual voice query parsing tailored for regional merchants and customers",
      "Transactional order workflows with real-time stock allocation checks",
      "Clean RESTful services designed for mobile and web client consumption"
    ],
    techStack: ["Flask", "PostgreSQL", "REST APIs", "Python", "Geospatial Search", "Voice AI"],
    links: {
      github: "https://github.com/raghurammrsd/DUNDOO"
    },
    metrics: [
      { label: "BACKEND", value: "FLASK + POSTGRESQL" },
      { label: "SEARCH", value: "GEOSPATIAL + VOICE" },
      { label: "ARCHITECTURE", value: "RESTFUL SERVICES" }
    ]
  },
  {
    id: "ai-app-compiler",
    number: "03",
    title: "AI App Compiler Platform",
    category: "SOFTWARE ARCHITECTURE SYNTHESIS",
    tagline: "Transforms natural language requirements into production-ready software architectures using deterministic multi-stage pipelines.",
    summary:
      "An automated engineering system that converts high-level natural language specifications into validated multi-tier software blueprints with strict cross-layer verification.",
    challenge:
      "Naive LLM generation of full applications fails because individual layers (schemas, APIs, auth, RBAC) become inconsistent and conflict with one another.",
    solution:
      "Created a multi-stage deterministic pipeline leveraging Pydantic cross-layer validation across APIs, databases, authentication, and state workflows before generating executable code.",
    architectureHighlights: [
      "Multi-stage specification compiler validating schema integrity across system tiers",
      "Pydantic-based cross-layer validation catching integration bugs prior to code generation",
      "FastAPI workbench with live runtime simulation and CRUD architecture visualization",
      "Eliminates 90%+ of common structural integration errors in generative workflows"
    ],
    techStack: ["Python", "FastAPI", "Pydantic v2", "State Machines", "AsyncIO", "Docker"],
    links: {
      github: "https://github.com/raghurammrsd"
    },
    metrics: [
      { label: "VALIDATION", value: "PYDANTIC CROSS-LAYER" },
      { label: "WORKBENCH", value: "FASTAPI WORKBENCH" },
      { label: "EXECUTION", value: "MULTI-STAGE PIPELINE" }
    ]
  },
  {
    id: "realmock-ai",
    number: "04",
    title: "RealMockAI",
    category: "AI INTERVIEW PREPARATION SYSTEM",
    tagline: "Real-time AI-powered technical interview simulation with adaptive questioning and LLM-based evaluation.",
    summary:
      "An interactive platform providing realistic simulated technical interviews with dynamic follow-up questioning and structured multi-criteria performance feedback.",
    challenge:
      "Static interview prep fails to simulate real-time conversational pressure or provide objective, actionable rubric feedback on answers.",
    solution:
      "Developed modular FastAPI backend services integrating LLM APIs for dynamic adaptive question generation and real-time response evaluation against technical rubrics.",
    architectureHighlights: [
      "Modular FastAPI services integrating LLM endpoints for contextual dialog",
      "Adaptive questioning engine adjusting difficulty based on candidate response depth",
      "Multi-dimensional rubric scoring across technical accuracy, communication, and edge cases",
      "Real-time evaluation response generation with streaming updates"
    ],
    techStack: ["FastAPI", "Python", "LLM APIs", "REST APIs", "Prompt Engineering"],
    links: {
      github: "https://github.com/raghurammrsd"
    },
    metrics: [
      { label: "BACKEND", value: "FASTAPI MICROSERVICES" },
      { label: "EVALUATION", value: "RUBRIC-DRIVEN" },
      { label: "MODE", value: "ADAPTIVE SIMULATION" }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "The AI Signal / One Atlas",
    role: "AI Engineer Intern",
    period: "May 2026 – Present",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Developed backend data services for Graph-One, building scalable Python pipelines to ingest, validate, and structure technical data from 600+ sources using AsyncIO, Crawl4AI, and PostgreSQL.",
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
      "Contribute to AI product development for Frontier Atlas and AIOrbit.club across backend systems and data pipelines using Python and PostgreSQL.",
      "Build LLM applications using RAG and NLP, structuring and connecting data with knowledge graphs.",
      "Develop web data extraction and data quality workflows that support AI-driven products."
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
    description: "Architectures that connect language models to structured reality.",
    skills: [
      { name: "Model Context Protocol (MCP)", highlight: true },
      { name: "Deterministic AST Analysis", highlight: true },
      { name: "RAG & Semantic Search", highlight: true },
      { name: "Knowledge Graphs", highlight: true },
      { name: "LLM Applications & Prompt Engineering" },
      { name: "Entity Resolution" },
      { name: "PyTorch & Computer Vision" },
      { name: "Data Extraction (Crawl4AI)" }
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
