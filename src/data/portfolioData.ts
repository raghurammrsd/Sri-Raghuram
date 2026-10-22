import { Project, PoolRule, FAQItem, SprintPhase } from '../types';

export const PERSONAL_INFO = {
  name: "Mohan Sri Raghuram",
  brand: "raghuram—",
  title: "Founding AI Engineer & Systems Builder",
  location: "Hyderabad, India · Operating Globally",
  status: "AVAILABLE FOR SELECT MISSIONS",
  email: "msriraghuram@gmail.com",
  phone: "+91 9392380182",
  github: "https://github.com/raghurammrsd",
  linkedin: "https://linkedin.com/in/msriraghuram",
  pypi: "https://pypi.org/project/codegraph-mcp/",
  frontierAtlas: "https://frontieratlas.co",
  aiOrbit: "https://aiorbit.club",
  copyrightYear: "2026",
};

export const STATS = [
  { label: "PYPI DOWNLOADS", value: "ACTIVE ENGINE" },
  { label: "CODE INTELLIGENCE", value: "AST-LEVEL GROUND TRUTH" },
  { label: "RETRIEVAL METHOD", value: "DETERMINISTIC + KNOWLEDGE GRAPH" },
  { label: "CORE PROTOCOL", value: "MCP NATIVE" },
];

export const CAPABILITIES = [
  {
    number: "01",
    title: "Repository Intelligence & AST Analysis",
    description:
      "I build local-first intelligence engines that allow autonomous coding agents to inspect abstract syntax trees, cross-file symbol call graphs, API routes, and database models with line-level deterministic evidence—no blind file-reading required.",
    tags: ["AST Parser", "MCP Protocol", "Call Graphs", "Symbol Trees", "SQLite Incremental Index"],
  },
  {
    number: "02",
    title: "Zero-Hallucination LLM & RAG Pipelines",
    description:
      "Naive semantic search is broken for precision systems. I architect hybrid retrieval systems combining vector embeddings, dense knowledge graphs, and schema-constrained validators that guarantee verifiable citations.",
    tags: ["Hybrid RAG", "Knowledge Graphs", "Gemini & Groq", "Entity Resolution", "Crawl4AI"],
  },
  {
    number: "03",
    title: "High-Throughput Async Backend Architecture",
    description:
      "Rock-solid backend engineering built on Python AsyncIO, FastAPI, and PostgreSQL. Designed to handle massive web extraction workflows, continuous schema validation, and real-time streaming AI interactions.",
    tags: ["FastAPI", "AsyncIO", "PostgreSQL", "Data Pipelines", "Schema Locks"],
  },
  {
    number: "04",
    title: "AI Architecture Compilers & Workbenches",
    description:
      "Converting fuzzy natural language specs into deterministic, multi-layer software blueprints. Cross-layer validation with Pydantic across database schemas, RBAC, REST endpoints, and execution paths.",
    tags: ["Pydantic v2", "State Machines", "Architecture Synthesis", "Runtime Simulation"],
  },
];

export const HOW_I_WORK_STEPS = [
  {
    number: "01",
    title: "One Bottleneck",
    subtitle: "We don't chase papercuts. We annihilate the core bottleneck.",
    description:
      "Most AI systems fail because of one fatal flaw: naive context retrieval, hallucinated schemas, or fragile backend I/O. I isolate the single highest-friction failure point in your engineering pipeline and concentrate maximum technical leverage to solve it permanently.",
  },
  {
    number: "02",
    title: "Two-Week Sprints",
    subtitle: "Cadence is survival. We ship at the speed of light.",
    description:
      "No 6-month discovery decks. I operate in tight two-week engineering cycles. Every 14 days, you receive battle-tested, benchmarked, production-ready code: custom MCP servers, indexed AST graphs, or high-throughput async pipelines.",
  },
  {
    number: "03",
    title: "Zero Hallucinations",
    subtitle: "Mathematical ground truth over stochastic gambling.",
    description:
      "AI is only as good as its underlying deterministic anchors. By binding language models to verifiable static analysis, schema-enforced Pydantic contracts, and structured relational indexes, the software performs with surgical accuracy.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "codegraph-mcp",
    number: "01",
    title: "CodeGraph MCP",
    category: "REPOSITORY INTELLIGENCE ENGINE",
    badge: "PUBLISHED ON PYPI",
    tagline: "Local-first MCP server that deterministically maps codebases for AI agents.",
    description:
      "Autonomous coding agents fail when they blindly grep and ingest thousands of file lines. CodeGraph MCP turns codebases into queryable intelligence graphs: resolving symbols, imports, callers, callees, API routes, database models, and runtime traces with exact file:line evidence.",
    highlights: [
      "Engineered on Python AST static analysis with incremental SQLite index for instantaneous queries",
      "Evidence-backed retrieval separating verified structural relationships from inferred assumptions",
      "Routes & services linked directly to ORM models, SQL queries, and DB columns",
      "Published on PyPI; native compatibility with Claude Desktop, Cursor, and any MCP client",
    ],
    stack: ["Python", "MCP Protocol", "AST Analysis", "SQLite", "Static Analysis", "PyPI"],
    links: {
      github: "https://github.com/raghurammrsd",
      pypi: "https://pypi.org/project/codegraph-mcp/",
    },
    terminalSnippet: {
      command: "mcp-query --tool codegraph --action resolve_symbol --symbol get_user_analytics",
      output: [
        "✓ Symbol resolved in 4.2ms [file: src/services/analytics.py:42]",
        "  ├─ Defined: function get_user_analytics(user_id: UUID) -> AnalyticsReport",
        "  ├─ Callers: [api/routes/dashboard.py:108, jobs/report_worker.py:54]",
        "  ├─ DB Models: UserModel (users table), EventLog (events table)",
        "  └─ Evidence: 100% Deterministic AST match · 0 tokens wasted on file grep",
      ],
    },
  },
  {
    id: "ai-app-compiler",
    number: "02",
    title: "AI App Compiler Platform",
    category: "DETERMINISTIC ARCHITECTURE SYNTHESIS",
    badge: "BENCHMARK PLATFORM",
    tagline: "Translating natural language requirements into validated multi-tier software architectures.",
    description:
      "An automated engineering pipeline that converts high-level specs into production-grade backend architectures. Implements multi-stage Pydantic cross-layer validation across APIs, databases, authentication, and state workflows.",
    highlights: [
      "Deterministic multi-stage pipeline converting prompt specs into verified schemas",
      "Cross-layer Pydantic consistency validation catching integration bugs before code generation",
      "FastAPI workbench with live runtime simulation, CRUD validation, and architecture graph visualization",
      "Pre-empts 90% of structural errors common to naive LLM code generators",
    ],
    stack: ["Python", "FastAPI", "Pydantic v2", "State Machines", "AsyncIO", "Docker"],
    links: {
      github: "https://github.com/raghurammrsd",
    },
    terminalSnippet: {
      command: "compiler-run --spec './spec/ecommerce_tier.yaml' --validate --strict",
      output: [
        "✓ Multi-tier schema compiled successfully (8 modules)",
        "✓ Cross-layer validation: RBAC policies ↔ REST endpoints ↔ DB tables verified",
        "✓ 0 cyclic dependencies detected",
        "✓ Generated typed FastAPI router & Alembic migrations ready for deployment",
      ],
    },
  },
  {
    id: "frontier-atlas",
    number: "03",
    title: "Frontier Atlas & AIOrbit.club",
    category: "FOUNDING AI ENGINEER",
    badge: "PRODUCTION ECOSYSTEM",
    tagline: "Building the intelligence graph and high-throughput data pipelines for frontier AI.",
    description:
      "Founding member and AI engineer driving data extraction, LLM pipelines, and knowledge graph engineering. Architected backend pipelines that ingest and synthesize complex web intelligence for frontieratlas.co and aiorbit.club.",
    highlights: [
      "Built resilient asynchronous data extraction pipelines using Crawl4AI and AsyncIO",
      "Structured dense domain knowledge into scalable relational and graph formats in PostgreSQL",
      "Implemented Gemini and Groq LLM-assisted entity extraction workflows for high-precision data enrichment",
      "Automated evaluation and data quality scorecards ensuring pristine production datasets",
    ],
    stack: ["Python", "PostgreSQL", "Crawl4AI", "Gemini API", "Groq", "Knowledge Graphs"],
    links: {
      live: "https://frontieratlas.co",
    },
    terminalSnippet: {
      command: "frontier-pipeline --sync --source web --enrich-llm --target postgres",
      output: [
        "✓ Ingested 12,450 entities across distributed web crawlers",
        "✓ Entity resolution: 99.4% precision via Groq/Gemini schema validation",
        "✓ PostgreSQL Knowledge Graph updated in 1.4s",
      ],
    },
  },
  {
    id: "dundoo",
    number: "04",
    title: "DUNDOO Commerce",
    category: "HYPERLOCAL COMMERCE PLATFORM",
    badge: "FULL-STACK ARCHITECTURE",
    tagline: "Real-time hyperlocal backend with map-based search and multilingual voice processing.",
    description:
      "Engineered the core backend and spatial search engines for a next-generation hyperlocal commerce platform. Scaled inventory management, geospatial queries, and voice-assisted ordering across dynamic merchant networks.",
    highlights: [
      "Architected high-concurrency Flask and PostgreSQL backend for spatial catalog search",
      "Designed real-time inventory synchronization and fault-tolerant checkout workflows",
      "Integrated multilingual voice query parsing for regional merchant accessibility",
      "Optimized query latencies to sub-50ms under peak search loads",
    ],
    stack: ["Flask", "PostgreSQL", "PostGIS", "REST APIs", "Voice AI", "Payment Gateways"],
    links: {
      github: "https://github.com/raghurammrsd",
    },
  },
];

export const SPRINT_PHASES: SprintPhase[] = [
  {
    number: "01",
    title: "The Rendezvous",
    subtitle: "Problem Isolation & First Principles",
    description:
      "We strip away the noise. We analyze the exact data topology, token budgets, and runtime constraints. Like a tactical war room, we define the non-negotiable invariants before writing a single line of code.",
    artifacts: ["Invariants Spec", "Data Flow Topology", "Strict Schema Contracts"],
    icon: "Compass",
  },
  {
    number: "02",
    title: "The Submerged Build",
    subtitle: "Quiet, Intense Engineering",
    description:
      "Radio silence while the heavy lifting happens. AST indexers, custom MCP tools, AsyncIO ingestion pipelines, and schema-enforcing Pydantic models are forged with mathematical precision.",
    artifacts: ["Core Engine Module", "AST Parser / MCP Server", "Unit & Integration Tests"],
    icon: "Code2",
  },
  {
    number: "03",
    title: "The Crucible",
    subtitle: "Stress Testing & Benchmarks",
    description:
      "We stress-test everything against the worst real-world anomalies: malformed JSON, truncated context windows, network latency spikes, and edge queries. If it breaks, it breaks in our lab, never in production.",
    artifacts: ["Latency Benchmarks", "Accuracy Scorecards", "Stress Profiling Reports"],
    icon: "ShieldAlert",
  },
  {
    number: "04",
    title: "The Exhibition & Shipping",
    subtitle: "Production Deployment & Delivery",
    description:
      "Every two weeks, you receive fully functional, documented, and packaged software ready to deploy immediately — whether as a PyPI package, a Docker container, or an integrated FastAPI microservice.",
    artifacts: ["Published Package / Container", "Interactive Documentation", "Sprint Walkthrough"],
    icon: "Rocket",
  },
];

export const POOL_RULES: PoolRule[] = [
  {
    id: "01",
    number: "001",
    title: "CODE IS PROOF, VIBES ARE CHEAP.",
    description: "Don't tell me what an AI model might do. Show me the benchmark, the AST traversal, and the test run.",
  },
  {
    id: "02",
    number: "002",
    title: "NEVER LET AN AI GUESS WHAT A COMPILER CAN VERIFY.",
    description: "Static analysis, type checking, and AST parsing are deterministic. Use them as ground truth.",
  },
  {
    id: "03",
    number: "003",
    title: "CONTEXT EFFICIENCY IS SPEED OF THOUGHT.",
    description: "Sending 50,000 lines of file spam to an LLM is technical bankruptcy. Feed only the surgical 10 lines that matter.",
  },
  {
    id: "04",
    number: "004",
    title: "BUILD TOOLS YOU WOULD BET YOUR CAREER ON.",
    description: "If an MCP tool crashes mid-session or returns ambiguous JSON, it is an obstacle, not an asset.",
  },
  {
    id: "05",
    number: "005",
    title: "LOCAL-FIRST BY DEFAULT; CLOUD WHEN EARNED.",
    description: "A developer tool that requires an internet connection to parse a local repository is already obsolete.",
  },
  {
    id: "06",
    number: "006",
    title: "IF YOUR RAG CAN'T CITE EXACT LINE NUMBERS, IT'S A TOY.",
    description: "Vague paragraph embeddings are useless for mission-critical software engineering.",
  },
  {
    id: "07",
    number: "007",
    title: "ASYNC ALL I/O, PROFILE EVERY BOTTLENECK.",
    description: "Network requests and disk lookups should never block event loops. Concurrency is not optional.",
  },
  {
    id: "08",
    number: "008",
    title: "PUSH COMPLEXITY INTO THE TOOL, KEEP INTERFACES LEAN.",
    description: "The simpler the API boundary, the more robust the agentic execution on top of it.",
  },
  {
    id: "09",
    number: "009",
    title: "GREAT SOFTWARE FEELS LIKE MAGIC BECAUSE THE MATH IS SOUND.",
    description: "When data topologies, schema invariants, and graph traversals are locked down, reliability follows naturally.",
  },
  {
    id: "10",
    number: "010",
    title: "SHIP RELENTLESSLY, BUT LEAVE NO UNTOUCHED EDGE CASES.",
    description: "Speed without error handling is just rushing toward a production outage.",
  },
  {
    id: "11",
    number: "011",
    title: "INTERESTING BUILDERS ARE RELENTLESSLY CURIOUS.",
    description: "Deconstruct protocols, read source code, inspect AST dumps, and understand how every layer executes.",
  },
  {
    id: "12",
    number: "012",
    title: "EAT YOUR OWN CODEBASE EVERY SINGLE MORNING.",
    description: "Use the tools you build daily. You will feel their friction before your users ever do.",
  },
  {
    id: "13",
    number: "013",
    title: "CHURN OUT MASTERFUL CRAFT EVEN WHEN NO ONE IS LOOKING.",
    description: "Clean commits, typed signatures, and structured error logs are the mark of an engineer who respects the craft.",
  },
  {
    id: "14",
    number: "014",
    title: "BE ORIGINAL. IF NOT ORIGINAL, BE EXPONENTIALLY BETTER.",
    description: "The world doesn't need another generic wrapper. Build weapons that redefine how software is engineered.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "01",
    number: "001",
    question: "What kind of missions do you take on?",
    answer:
      "I partner with founding teams, AI labs, and high-velocity engineering organizations to build custom repository intelligence (MCP servers), zero-hallucination RAG & knowledge graphs, and high-throughput async backend pipelines. If you have an intractable AI context or backend performance bottleneck, we should talk.",
  },
  {
    id: "02",
    number: "002",
    question: "Why deterministic AST analysis over standard vector search?",
    answer:
      "Standard vector search is probabilistic. When asking an AI coding agent to refactor a function, probabilistic chunking often misses imports, callers, and database schemas. AST analysis is 100% deterministic: it extracts the exact symbol tree, call hierarchy, and file line numbers, guaranteeing that your agent operates with surgical ground truth.",
  },
  {
    id: "03",
    number: "003",
    question: "Can you build full-stack systems end-to-end?",
    answer:
      "Yes. While my core specialty is AI systems engineering, knowledge graphs, and backend pipelines (FastAPI, AsyncIO, PostgreSQL), I build complete end-to-end solutions including interactive workbenches, CLI tooling, published PyPI packages, and production Docker deployments.",
  },
  {
    id: "04",
    number: "004",
    question: "How do you work with remote and distributed teams?",
    answer:
      "I operate asynchronously with high communication fidelity. I run in disciplined two-week sprints with clear milestone deliverables, benchmark reports, and interactive demos. You get working software and transparent progress, not endless status meetings.",
  },
  {
    id: "05",
    number: "005",
    question: "What is your primary technology stack?",
    answer:
      "Python is my native language (AST, AsyncIO, FastAPI, Pydantic, Crawl4AI, PyTorch). On databases: PostgreSQL, SQLite, and Vector indexes. On protocols: Model Context Protocol (MCP), REST, and WebSockets. Plus Docker, Git, Cloudflare Workers, and modern TypeScript when client interfaces are required.",
  },
];
