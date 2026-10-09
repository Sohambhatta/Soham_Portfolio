export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Soham Bhatta',
  displayName: 'Soham Bhatta',
  firstName: 'SOHAM',
  seriesTag: 'THE BUILDER',
  originalLabel: 'A SOHAM ORIGINAL',
  role: 'Student Developer · Applied AI',
  tagline: ['Applied AI', 'Computer Vision', 'Software Engineering'],
  intro:
    'I build software that turns real-world data into useful decisions — from camera-based safety systems and drone radar imaging to data-driven dashboards and product experiences.',
  links: {
    github: 'https://github.com/Sohambhatta',
  },
  portrait: {
    src: '/assets/soham-mark.svg',
    srcSet: '',
    alt: 'SB monogram with abstract radar and circuit artwork',
  },
  interests: ['Computer Vision', 'Signal Processing', 'Applied Machine Learning', 'Product Design'],
};

export const education: {
  school: string;
  place: string;
  degree: string;
  period: string;
  score: string;
}[] = [];

export const experience: {
  company: string;
  role: string;
  place: string;
  period: string;
  points: string[];
}[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'basketball-hoop-detection',
    title: 'Basketball Hoop Detection',
    year: '2025',
    genre: 'Computer Vision · Applied ML',
    logline: 'A camera-based training system that learns to distinguish made shots from misses and keeps a live score.',
    stack: ['Python', 'Computer Vision', 'PyQt5', 'NVIDIA Jetson'],
    build: [
      'Built a structured application for collecting labeled examples, training and testing a model, and analyzing live camera predictions with a timer and score counter.',
    ],
    features: [
      'Camera-based shot detection',
      'Separate data collection, training, and live testing workflows',
      'PyQt5 interface with timer and score tracking',
      'Designed for NVIDIA Jetson hardware',
    ],
    metrics: [],
    palette: { from: '#1a1003', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'doorcam',
    title: 'Doorcam',
    year: '2023–2026',
    genre: 'Computer Vision · Edge AI · Safety',
    logline: 'A smart-door safety prototype that recognizes people and pets and uses pose-aware proximity rules to decide when to stay locked.',
    stack: ['Python', 'NVIDIA Jetson', 'SSD-MobileNet-V2', 'OpenCV', 'CustomTkinter'],
    build: [
      'Built a Jetson-based door-safety system using SSD-MobileNet-V2 for real-time person and pet detection, with pose-aware proximity rules and a CustomTkinter tool for pet-specific training and configuration.',
    ],
    features: [
      'Real-time person, cat, dog, and bird detection',
      'Pose-aware proximity estimation using bounding-box heuristics',
      'Custom pet profiles and image-capture training workflow',
      'Adjustable camera, confidence, and distance settings',
      'Motor-control logic for a hardware-ready door prototype',
    ],
    metrics: [],
    github: 'https://github.com/Sohambhatta/Doorcam',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'bwsi-uas-sar',
    title: 'UAS Synthetic Aperture Radar',
    year: '2025',
    genre: 'BWSI Team Project · Radar · Signal Processing',
    logline: 'A team-built drone radar-imaging system that combines radar returns with flight motion data to map indoor targets.',
    stack: ['Python', 'Pulson Radar', 'OptiTrack', 'NumPy', 'CUDA / CuPy', 'PyTorch'],
    build: [
      'Worked on a team-built UAV SAR pipeline that aligned Pulson radar data with OptiTrack motion capture and reconstructed indoor target maps using backprojection.',
      'Implemented motion-compensated, phase-coherent processing with quaternion orientation filtering, radar/trajectory time alignment, and Hilbert-transform complex-signal recovery.',
      'Added multithreaded CPU, CUDA, and PyTorch paths for reconstruction and image enhancement, plus Laplacian-of-Gaussian reflector detection.',
    ],
    features: [
      'Team project; describes collaborative work',
      'Radar and motion-capture data synchronization',
      'Quaternion-based motion compensation',
      'NumPy, CUDA/CuPy, and PyTorch reconstruction paths',
      'Public repository is a demonstration snapshot',
    ],
    metrics: [{ value: '40–50 cm', label: 'documented indoor target spacing' }],
    github: 'https://github.com/Sohambhatta/BWSI-UAS-SAR-Team-4-DEMO-CODE',
    palette: ocean,
    motif: 'tenants',
  },
  {
    id: 'ai-stock-analysis',
    title: 'AI Stock Analysis',
    year: '2025',
    genre: 'Python · Data Visualization · NLP',
    logline: 'A Flask dashboard that combines stock-price trends with news sentiment to produce understandable analysis signals.',
    stack: ['Python', 'Flask', 'yfinance', 'Plotly', 'VADER', 'TextBlob'],
    build: [
      'Built a Flask stock-analysis dashboard combining Yahoo Finance market data, technical indicators, and weighted VADER/TextBlob news sentiment to generate confidence-scored buy/sell/hold recommendations.',
    ],
    features: [
      'Approximately six months of market history and interactive charts',
      'Stock search and autocomplete',
      'Yahoo Finance and news-feed data collection',
      'Technical analysis weighted at 60% and news sentiment at 40%',
      'Confidence scores describe input agreement, not investment certainty',
    ],
    metrics: [
      { value: '60 / 40', label: 'technical / sentiment weighting' },
      { value: '6 months', label: 'price-history view' },
    ],
    github: 'https://github.com/Sohambhatta/AI-Stock-Analysis',
    palette: jade,
    motif: 'flow',
  },
  {
    id: 'ventpilot',
    title: 'VentPilot',
    year: '2026',
    genre: 'Product Concept · Web Design · Smart Home',
    logline: 'A smart climate-control concept and product website exploring room-level sensing and more targeted HVAC use.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'],
    build: [
      'Designed and refined a responsive product website explaining VentPilot’s sensor-driven HVAC concept, product tiers, customer benefits, and team vision.',
    ],
    features: [
      'Clear product problem-and-solution story',
      'Responsive, animated presentation website',
      'Product visuals, concept explanation, and demo section',
      'Tiered product and business model',
      'Concept prototype; not evidence of installed HVAC hardware',
    ],
    metrics: [],
    github: 'https://github.com/Sohambhatta/VentPilot',
    palette: violet,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sar-resolution',
    title: 'Resolved Indoor Targets',
    org: 'UAS SAR Team Project',
    detail: 'Documented indoor tests distinguished targets spaced approximately 40–50 cm apart.',
    laurel: '40–50 cm',
    link: 'https://github.com/Sohambhatta/BWSI-UAS-SAR-Team-4-DEMO-CODE',
  },
  {
    id: 'edge-ai-doorcam',
    title: 'Safety Decisions at the Edge',
    org: 'Doorcam',
    detail: 'Combined real-time person and pet detection with pose-aware proximity rules on NVIDIA Jetson.',
    laurel: 'Edge AI',
    link: 'https://github.com/Sohambhatta/Doorcam',
  },
  {
    id: 'end-to-end-builds',
    title: 'From Prototype to Product',
    org: 'Project Portfolio',
    detail: 'Built across camera vision, radar imaging, data dashboards, and responsive product experiences.',
    laurel: '5 Projects',
  },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Building and integrating software',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C++', mono: 'C+' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Edge AI',
    subtitle: 'From camera input to real-time decisions',
    skills: [
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'SSD-MobileNet-V2', mono: 'Sd' },
      { name: 'NVIDIA Jetson', mono: 'Jt' },
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'PyQt5', mono: 'Qt' },
    ],
  },
  {
    id: 'signal-processing',
    title: 'Signal Processing',
    subtitle: 'Radar data, motion, and reconstruction',
    skills: [
      { name: 'Synthetic Aperture Radar', mono: 'Sr' },
      { name: 'Backprojection', mono: 'Bp' },
      { name: 'CUDA / CuPy', mono: 'Cu' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'OptiTrack', mono: 'Ot' },
    ],
  },
  {
    id: 'web-data',
    title: 'Web & Data Applications',
    subtitle: 'Useful interfaces for complex information',
    skills: [
      { name: 'Flask', mono: 'Fl' },
      { name: 'Plotly', mono: 'Pl' },
      { name: 'VADER', mono: 'Va' },
      { name: 'TextBlob', mono: 'Tb' },
      { name: 'Responsive UI', mono: 'UI' },
    ],
  },
  {
    id: 'tools',
    title: 'Hardware & Tools',
    subtitle: 'Prototyping across software and devices',
    skills: [
      { name: 'Raspberry Pi', mono: 'Pi' },
      { name: 'CustomTkinter', mono: 'Tk' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Yahoo Finance Data', mono: 'Yf' },
      { name: 'RSS Feeds', mono: 'Rs' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Doorcam', 'UAS Synthetic Aperture Radar', 'AI Stock Analysis', 'Basketball Hoop Detection'],
  'C++': ['UAS Synthetic Aperture Radar'],
  HTML: ['VentPilot'],
  CSS: ['VentPilot'],
  JavaScript: ['VentPilot', 'AI Stock Analysis'],
  OpenCV: ['Doorcam', 'Basketball Hoop Detection'],
  'SSD-MobileNet-V2': ['Doorcam'],
  'NVIDIA Jetson': ['Doorcam', 'Basketball Hoop Detection'],
  PyTorch: ['UAS Synthetic Aperture Radar'],
  PyQt5: ['Basketball Hoop Detection'],
  'Synthetic Aperture Radar': ['UAS Synthetic Aperture Radar'],
  Backprojection: ['UAS Synthetic Aperture Radar'],
  'CUDA / CuPy': ['UAS Synthetic Aperture Radar'],
  NumPy: ['UAS Synthetic Aperture Radar'],
  OptiTrack: ['UAS Synthetic Aperture Radar'],
  Flask: ['AI Stock Analysis'],
  Plotly: ['AI Stock Analysis'],
  VADER: ['AI Stock Analysis'],
  TextBlob: ['AI Stock Analysis'],
  'Responsive UI': ['VentPilot'],
  'Raspberry Pi': ['UAS Synthetic Aperture Radar'],
  CustomTkinter: ['Doorcam'],
  'Git / GitHub': ['Public project repositories'],
  'Yahoo Finance Data': ['AI Stock Analysis'],
  'RSS Feeds': ['AI Stock Analysis'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Seeing the Game',
    period: 'Computer Vision',
    synopsis: 'Camera-based prototypes that turn visual events into useful decisions.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Made Shot',
        description: 'A training workflow explores how a camera can distinguish basketball makes from misses and keep score live.',
        tags: ['Computer Vision', 'PyQt5', 'NVIDIA Jetson'],
        runtime: 'Basketball Hoop Detection',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Safer Door',
        description: 'Real-time person and pet detection meets pose-aware proximity rules in a hardware-ready safety prototype.',
        tags: ['SSD-MobileNet-V2', 'Edge AI', 'OpenCV'],
        runtime: 'Doorcam',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Imaging the Invisible',
    period: 'Radar & Signal Processing',
    synopsis: 'A collaborative UAV project combines radar reflections with measured motion to reconstruct indoor scenes.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Flight Path',
        description: 'Synchronizing Pulson radar returns with OptiTrack motion-capture data for synthetic aperture radar imaging.',
        tags: ['BWSI Team Project', 'Pulson Radar', 'OptiTrack'],
        runtime: 'UAS Synthetic Aperture Radar',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Reconstruction',
        description: 'Motion-compensated backprojection and accelerated CPU, CUDA, and PyTorch implementations.',
        tags: ['Backprojection', 'CUDA', 'PyTorch'],
        runtime: '40–50 cm documented spacing',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Signals into Stories',
    period: 'Data & Product Experiences',
    synopsis: 'Web experiences that organize information and make a concept easier to understand.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Market Brief',
        description: 'Combining historical price trends and news sentiment in an interactive stock-analysis dashboard.',
        tags: ['Flask', 'Plotly', 'VADER + TextBlob'],
        runtime: 'AI Stock Analysis',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Climate Concept',
        description: 'A responsive product website for a proposed sensor-driven approach to room-level climate control.',
        tags: ['Responsive Web', 'Smart Home', 'Product Design'],
        runtime: 'VentPilot concept',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Edge AI', title: 'Doorcam', detail: 'SSD-MobileNet-V2 · pose-aware safety rules', palette: crimson },
  { label: 'Team radar imaging', title: 'UAS SAR', detail: '40–50 cm documented indoor target spacing', palette: ocean },
  { label: 'Applied computer vision', title: 'Basketball Detection', detail: 'Training workflow · live score tracking', palette: amber },
  { label: 'Data + language', title: 'AI Stock Analysis', detail: 'Technical indicators · weighted news sentiment', palette: jade },
  { label: 'Product storytelling', title: 'VentPilot', detail: 'Responsive site for a smart-home concept', palette: violet },
  { label: 'Current focus', title: 'Build with evidence', detail: 'Prototype, test, and communicate clearly', palette: amber },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Focus',
    title: 'Applied AI.',
    lines: ['Computer vision, signal processing, and software built around real-world data.'],
    chips: ['Python', 'Computer Vision', 'Edge AI'],
  },
  {
    kicker: 'Computer Vision',
    title: 'From camera to decision.',
    lines: ['Basketball Hoop Detection · live scoring prototype', 'Doorcam · person and pet safety on NVIDIA Jetson'],
    chips: ['OpenCV', 'SSD-MobileNet-V2', 'PyQt5'],
  },
  {
    kicker: 'Team Project',
    title: 'Imaging with radar.',
    lines: ['UAS Synthetic Aperture Radar · BWSI Team 4', 'Motion-compensated backprojection · 40–50 cm documented spacing'],
    chips: ['Pulson Radar', 'OptiTrack', 'CUDA'],
  },
  {
    kicker: 'Web & Data',
    title: 'Make information useful.',
    lines: ['AI Stock Analysis · technical indicators + news sentiment', 'VentPilot · product website for a climate-control concept'],
    chips: ['Flask', 'Plotly', 'VADER', 'Responsive UI'],
  },
  {
    kicker: 'Approach',
    title: 'Build. Test. Explain.',
    lines: ['Prototypes grounded in what the project actually demonstrates.', 'Explore the projects and their technical details below.'],
  },
];

export type ProfileId = 'soham' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'soham',
    name: 'Soham',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Projects, skills & highlights first',
    color: '#4cc9ff',
    order: ['originals', 'moments', 'skills', 'about', 'journey', 'picks', 'story'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Technical projects & tools first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Curious',
    blurb: 'Ideas, story arcs & experiments first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'A builder across AI, vision & software', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} project arcs`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} featured projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Selected work & ideas', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} focus areas`, palette: ocean },
  moments: { nav: 'Milestones', card: 'Project Milestones', meta: `${achievements.length} documented highlights`, palette: crimson },
  story: { nav: 'Profile', card: 'Project Profile', meta: 'Summary · projects · skills', palette: violet },
};
