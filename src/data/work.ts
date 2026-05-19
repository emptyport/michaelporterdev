export type WorkHighlight = {
  title: string;
  eyebrow: string;
  summary: string;
  impact: Array<{
    value: string;
    label: string;
  }>;
  stack: string[];
};

export const workHighlights: WorkHighlight[] = [
  {
    title: "AI workflow automation platform",
    eyebrow: "Principal Software Engineer",
    summary:
      "Built an internal platform for AI-assisted workflows, including reusable agents, custom tool creation, and database context for coding agents.",
    impact: [
      { value: "70+", label: "person-hours saved in the first month" },
      { value: "100/mo", label: "person-hours expected from browser automation" },
      { value: "2 min", label: "for feasibility checks that previously took hours" },
    ],
    stack: ["TypeScript", "Python", "PostgreSQL", "NestJS", "AWS", "MCP", "LLMs"],
  },
  {
    title: "ML services and data ingestion pipelines",
    eyebrow: "Staff / Senior Software Engineer",
    summary:
      "Supported production ML-backed writing services and built data ingestion pipelines for large editorial datasets.",
    impact: [
      { value: "9h to 3h", label: "for Thesaurus.com data ingestion" },
      { value: "24h to 4h", label: "for Dictionary.com data ingestion" },
      { value: "Fewer spikes", label: "from queueing traffic before ML inference" },
    ],
    stack: ["Python", "Node.js", "FastAPI", "GraphQL", "Kubernetes", "Terraform", "AWS"],
  },
  {
    title: "Delivery platform integrations",
    eyebrow: "Senior Software Engineer",
    summary:
      "Built serverless integrations connecting retail systems with third-party ordering and delivery platforms.",
    impact: [
      { value: "$1M/day", label: "in sales through supported integrations" },
      { value: "2 launches", label: "led across Google Food Ordering and Postmates delivery work" },
      { value: "5x", label: "expanded delivery visibility through routing changes" },
    ],
    stack: ["Node.js", "MongoDB", "AWS Lambda", "Swagger", "Jest", "New Relic"],
  },
  {
    title: "SharePoint authentication modernization",
    eyebrow: "Senior Software Engineer",
    summary:
      "Improved Microsoft SharePoint authentication flows to support enterprise customer requirements and unblock expansion work.",
    impact: [
      { value: "Multi-Geo", label: "support added for enterprise SharePoint deployments" },
      { value: "New auth flow", label: "reduced dependency on customer-managed service accounts" },
      { value: "Months", label: "of reduced test confidence traced to a backend CI coverage gap" },
    ],
    stack: ["Node.js", "MongoDB", "AWS Lambda", "Jest", "Microsoft APIs"],
  },
  {
    title: "Bugs with Mike",
    eyebrow: "Independent project",
    summary:
      "Built a large content site using structured insect data, AI-assisted generation, and cost-aware publishing workflows.",
    impact: [
      { value: "63k+", label: "unique pages generated" },
      { value: "OpenAI APIs", label: "used for seeded technical content at SEO scale" },
      { value: "Batch workflows", label: "for web scraping, generation, and content quality checks" },
    ],
    stack: ["Next.js", "MongoDB", "OpenAI APIs", "Content generation", "SEO"],
  },
];

export const metrics = [
  { value: "70+", label: "person-hours saved during the first month of an AI workflow rollout" },
  { value: "2 min", label: "to complete feasibility checks that previously took hours" },
  { value: "80%", label: "faster data ingestion for a major editorial workflow" },
  { value: "63k+", label: "pages generated for an independent technical content project" },
];
