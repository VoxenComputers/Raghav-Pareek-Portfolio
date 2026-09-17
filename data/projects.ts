import { ReactNode } from "react";

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  sourceLink?: string;
  content: string; // Markdown-like or just plain text for now, or HTML string
  gradient: string; // For the placeholder visual
}

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: "voxen-computers",
    title: "Voxen Computers",
    category: "E-Commerce",
    description: "Complete brand website featuring a structured product catalog, promotional content, and optimized SEO.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO Optimization"],
    liveLink: "https://voxencomputers.shop",
    gradient: "from-blue-600 to-cyan-400",
    content: `
      Voxen Computers is a comprehensive e-commerce platform designed to showcase high-performance computing hardware. 
      
      **Key Features:**
      - **Dynamic Product Catalog:** A structured inventory system that allows users to easily browse and filter products.
      - **SEO Optimization:** Implemented advanced SEO strategies to ensure high visibility in search engine results, driving organic traffic.
      - **Promotional Integration:** Seamless integration of marketing reels and promotional content to engage users.
      - **Responsive Design:** A fully mobile-responsive interface ensuring a seamless shopping experience across all devices.
      
      The project focused on performance and scalability, ensuring fast load times even with high-resolution product imagery.
    `
  },
  {
    id: 2,
    slug: "gemini-alexa-skill",
    title: "Gemini Alexa Skill",
    category: "AI Integration",
    description: "Natural language voice assistant integrating Google Gemini API with Alexa using Node.js.",
    techStack: ["Node.js", "Alexa Skills Kit", "Google Gemini API", "AWS Lambda"],
    gradient: "from-purple-600 to-pink-500",
    content: `
      This project bridges the gap between traditional voice assistants and modern Large Language Models (LLMs).
      By integrating Google's Gemini API with the Alexa Skills Kit, this skill allows users to have natural, open-ended conversations with Alexa.
      
      **Technical Challenges:**
      - **Latency Management:** Optimizing API calls to ensure responses are delivered within Alexa's strict timeout limits.
      - **Context Retention:** Implementing a context-aware system that remembers previous turns of conversation for a more fluid experience.
      - **Voice VUI Design:** Designing a voice user interface that handles complex queries gracefully.
    `
  },
  {
    id: 3,
    slug: "x1smartech",
    title: "X1smartech",
    category: "Frontend Dev",
    description: "Responsive product pages and navigation UI with a focus on mobile usability and performance.",
    techStack: ["React", "CSS Modules", "Responsive Design", "Performance Optimization"],
    liveLink: "https://x1smartech.com",
    gradient: "from-green-500 to-emerald-400",
    content: `
      X1smartech needed a modern, high-performance frontend overhaul to improve user engagement and sales conversion.
      
      **Implementation Details:**
      - **Mobile-First Approach:** Designed and developed with a focus on mobile telematics and usability, ensuring critical paths like checkout were frictionless.
      - **Performance Tuning:** achieved a 95+ Google Lighthouse score by optimizing assets and code splitting.
      - **Interactive UI:** Implemented smooth transitions and micro-interactions to give the site a premium feel.
      
      The result was a significant decrease in bounce rates and an increase in average session duration.
    `
  },
  {
    id: 4,
    slug: "voxen-ai",
    title: "Voxen Ai",
    category: "AI Chatbot",
    description: "All-in-one AI technical assistant accessible via WhatsApp, Discord, and Telegram.",
    techStack: ["Python", "Telegram API", "Discord.js", "WhatsApp Business API", "OpenAI API"],
    gradient: "from-orange-500 to-amber-400",
    content: `
      Voxen Ai is a ubiquitous technical assistant designed to be where the user is. 
      Instead of requiring a dedicated app, it lives inside the messaging platforms users already use daily.
      
      **Core Functionality:**
      - **Cross-Platform Sync:** Conversations are synced across WhatsApp, Discord, and Telegram, allowing users to switch devices seamlessly.
      - **Tech Support Specialist:** Fine-tuned specifically for troubleshooting technical issues, writing code snippets, and explaining complex concepts.
      - **Instant Access:** No login walls or complex setups—just message the bot and get help immediately.
    `
  },
  {
    id: 5,
    slug: "sanjivni",
    title: "Sanjivni",
    category: "Healthcare App",
    description: "Comprehensive digital healthcare platform streamlining medical records, emergency access, and patient-doctor workflows across web and mobile.",
    techStack: ["React.js", "TypeScript", "Capacitor", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveLink: "https://sanjivni-sih.vercel.app",
    sourceLink: "https://github.com/VoxenComputers/Sanjivni-SIH-Project",
    gradient: "from-teal-500 to-emerald-400",
    content: `
      Sanjivni is a full-stack healthcare ecosystem developed for the Smart India Hackathon (SIH), built to bridge communication gaps between patients, healthcare providers, and emergency services through real-time data access.
      
      **Key Features:**
      - **Unified Health Records:** Centralized dashboard allowing patients to securely store, manage, and retrieve diagnostic reports and prescriptions.
      - **Cross-Platform Accessibility:** Packaged and optimized for native Android performance alongside a responsive web interface.
      - **Real-Time Data Sync:** Secure cloud backend integration enabling instant updates for patient vitals, appointments, and medical alerts.
    `
  },
  {
    id: 6,
    slug: "fruit-fly-brain-simulation",
    title: "Fruit Fly Brain Simulation",
    category: "Neuroscience / AI",
    description: "Interactive computational neural network modeling Drosophila melanogaster brain circuitry, sensory inputs, and real-time behavioral responses.",
    techStack: ["Python", "NumPy", "Three.js", "Neural Modeling", "JavaScript", "PyTorch", "Multi-agent Systems", "Computer Vision", "Neural Networks"],
    sourceLink: "https://github.com/VoxenComputers/fruitfly-football",
    gradient: "from-rose-500 to-violet-500",
    content: `
      A computational biology and modeling project that simulates connectome-level neural dynamics of the fruit fly (Drosophila), translating sensory stimuli into simulated biological movements and reflex patterns.
      
      **Key Features:**
      - **Connectome Mapping:** Models biological neuron clusters and synaptic weights to replicate realistic signal propagation pathways.
      - **Dynamic Behavioral Modeling:** Simulates stimulus-to-action feedback loops, such as olfactory tracking and collision avoidance mechanisms.
      - **Interactive Visualization:** Renders real-time activation maps and firing rates to observe network behavior under changing environmental parameters.
    `
  }
];
