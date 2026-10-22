export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  badge?: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: {
    github?: string;
    pypi?: string;
    live?: string;
  };
  terminalSnippet?: {
    command: string;
    output: string[];
  };
}

export interface PoolRule {
  id: string;
  number: string;
  title: string;
  description?: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface SprintPhase {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  artifacts: string[];
  icon: string;
}
