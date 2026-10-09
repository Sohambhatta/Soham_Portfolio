export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Soham Bhatta',
  displayName: 'Soham Bhatta',
  firstName: 'SOHAM',
  seriesTag: 'THE BUILDER',
  originalLabel: 'A SOHAM ORIGINAL',
  role: 'Engineering Student · University of Michigan',
  tagline: ['Applied AI', 'Computer Vision', 'Software Engineering'],
  intro:
    'I’m Soham, an engineering student at the University of Michigan. I build camera-based prototypes, work with radar data, and write software to explore both.',
  about: 'At BWSI, I worked with Team 4 on drone radar imaging: aligning scans with flight data and finding targets in noisy images. With Doorcam and my stock dashboard, I’ve also worked on the interfaces people use to collect data, change settings, and see results.',
  links: {
    github: 'https://github.com/Sohambhatta',
    linkedin: 'https://www.linkedin.com/in/soham-bhatta',
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
}[] = [
  { school: 'University of Michigan', place: 'Ann Arbor, Michigan', degree: 'College of Engineering', period: '2026–Present', score: '' },
];

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
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'doorcam',
    title: 'Doorcam',
    year: '2023–2026',
    genre: 'Computer Vision · Edge AI',
    logline: 'A Jetson camera prototype that detects people and pets to test when a door should stay locked.',
    stack: ['Python', 'NVIDIA Jetson', 'SSD-MobileNet-V2', 'OpenCV', 'CustomTkinter'],
    build: [
      'Built a live camera pipeline on NVIDIA Jetson using Jetson Inference’s SSD-MobileNet-V2 model to detect people, dogs, cats, and birds.',
      'Used bounding-box area as a rough proximity estimate, with aspect-ratio and position heuristics for pose-specific lock and warning thresholds.',
      'Built a CustomTkinter desktop interface for collecting pet images across orientations, managing saved profiles, and adjusting camera and detection settings.',
      'Door control currently updates application state and output. A physical lock can be connected through the hardware extension point.',
    ],
    features: [
      'Real-time person, cat, dog, and bird detection',
      'Bounding-box area as an approximate proximity cue',
      'Custom pet profiles with image capture across orientations',
      'Adjustable camera, confidence, and distance settings',
      'Software lock state with a hardware integration point',
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
    genre: 'BWSI Team Project · Radar Imaging',
    logline: 'Our BWSI team combined drone radar scans and motion tracking to reconstruct indoor targets.',
    stack: ['Python', 'Pulson Radar', 'OptiTrack', 'NumPy', 'CUDA / CuPy', 'PyTorch'],
    build: [
      'Worked with BWSI Team 4 on indoor imaging with a hexacopter-mounted TDSR Pulson 452 radar and OptiTrack motion capture. Our team won first place in the 2025 course’s final competition.',
      'The pipeline decodes radar scans into range–time–intensity plots and aligns them with aircraft position and orientation. A coarse-to-fine search estimates time and range offsets using known reflectors.',
      'Motion compensation interpolates the 360 Hz pose stream to radar timestamps, filters orientation quaternions with an error-state Kalman filter, and accounts for the radar’s mounting offset.',
      'Phase-coherent backprojection reconstructs a 2D reflectivity map using complex-signal recovery and carrier-phase compensation. Indoor tests resolved soda cans roughly 40–50 cm apart.',
      'The repository includes NumPy/multithreaded CPU, CUDA/CuPy, and PyTorch implementations, plus reflector detection and optional image-denoising filters. It is a demo snapshot of our team’s code.',
    ],
    features: [
      'Python radar interface and live scan processing',
      'Radar and motion-capture data synchronization',
      'Quaternion filtering and radar mounting-offset correction',
      'NumPy, CUDA/CuPy, and PyTorch reconstruction paths',
      'Demo code from BWSI Team 4',
    ],
    metrics: [{ value: '40–50 cm', label: 'target spacing in indoor tests' }],
    github: 'https://github.com/Sohambhatta/BWSI-UAS-SAR-Team-4-DEMO-CODE',
    palette: ocean,
    motif: 'tenants',
  },
  {
    id: 'ai-stock-analysis',
    title: 'AI Stock Analysis',
    year: '2025',
    genre: 'Data Visualization · Sentiment Analysis',
    logline: 'A stock dashboard that compares price trends with the tone of recent news headlines.',
    stack: ['Python', 'Flask', 'yfinance', 'Plotly', 'VADER', 'TextBlob'],
    build: [
      'Built a Flask/Python app with an HTML, CSS, and JavaScript frontend. It retrieves Yahoo Finance prices and company data, shows six months of interactive Plotly history, and supports stock search.',
      'Collected Yahoo Finance and Google News RSS headlines and descriptions. Each article’s sentiment combines VADER at 60% and TextBlob at 40%, then contributes to an aggregate news score.',
      'Combined price-trend signals at 60% with news sentiment at 40% to generate buy, sell, or hold recommendations with reasoning and score breakdowns.',
      'The displayed confidence score is a heuristic based on the signal, news availability, and price movement—not a measured probability of a correct prediction.',
    ],
    features: [
      'Six months of price history in interactive charts',
      'Stock search and autocomplete',
      'Yahoo Finance and news-feed data collection',
      'Technical analysis weighted at 60% and news sentiment at 40%',
      'Separate price-trend and sentiment scores with a combined signal',
    ],
    metrics: [
      { value: '60 / 40', label: 'technical / sentiment weighting' },
      { value: '6 months', label: 'price-history view' },
    ],
    github: 'https://github.com/Sohambhatta/AI-Stock-Analysis',
    palette: jade,
    motif: 'flow',
  },

];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  linkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sar-resolution',
    title: 'Mapping Indoor Targets',
    org: 'UAS SAR Team Project',
    detail: 'Our radar reconstruction distinguished indoor targets spaced roughly 40–50 cm apart.',
    laurel: '40–50 cm',
    link: 'https://github.com/Sohambhatta/BWSI-UAS-SAR-Team-4-DEMO-CODE',
  },
  {
    id: 'edge-ai-doorcam',
    title: 'Person & Pet Detection',
    org: 'Doorcam',
    detail: 'Ran camera detection on NVIDIA Jetson and used pet size and pose to test door-lock rules.',
    laurel: 'Edge AI',
    link: 'https://github.com/Sohambhatta/Doorcam',
  },

];

const linkedIn = profile.links.linkedin;
const wavelengths = 'https://r4.ieee.org/sem/wp-content/uploads/sites/6/2026/07/2026_08_WL.pdf#page=23';

export const awards: Achievement[] = [
  {
    id: 'ieee-wavelengths', title: 'IEEE Wavelengths',
    org: 'IEEE Southeastern Michigan · August 2026', laurel: 'Publication',
    detail: 'My “Future Engineer MIT Report” covers our BWSI radar-imaging project, from collecting scans to the final challenge. Published on pages 23–28.',
    link: wavelengths, linkLabel: 'Read the article',
  },
  {
    id: 'sae-mozley', title: 'Donald and Barbara Mozley Scholarship',
    org: 'SAE International · July 2026', laurel: 'Scholarship',
    detail: 'Received the Donald and Barbara Mozley engineering scholarship.',
    link: linkedIn, linkLabel: 'View on LinkedIn',
  },
  {
    id: 'bwsi-first-place', title: 'First Place at BWSI',
    org: 'UAS–SAR · August 2025', laurel: 'Team Award',
    detail: 'Our Team 4 placed first in the course’s final radar-imaging challenge.',
    link: wavelengths, linkLabel: 'Read the team’s story',
  },
  {
    id: 'mit-ewb-honors', title: 'MIT EWB Competition Honors',
    org: 'Science & Engineering Competition · February 2025', laurel: 'Individual & Team',
    detail: 'Received individual and team honors in the 2025 competition.',
    link: linkedIn, linkLabel: 'View on LinkedIn',
  },
  {
    id: 'science-department', title: 'Science Department Award',
    org: 'International Academy East · June 2025', laurel: 'School Award',
    detail: 'Received the school’s Science Department Award for 2024–2025.',
    link: linkedIn, linkLabel: 'View on LinkedIn',
  },
  {
    id: 'science-olympiad', title: 'Science Olympiad: Fourth Place',
    org: 'State Competition · April 2025', laurel: 'Trial Event',
    detail: 'Placed fourth in a trial event at the state competition.',
    link: linkedIn, linkLabel: 'View on LinkedIn',
  },
  {
    id: 'bowling-awards', title: 'Bowling Awards',
    org: 'March 2025', laurel: 'Scholar Athlete',
    detail: 'Received the Junior Bowling Award and Junior Bowling Scholar Athlete Award.',
    link: linkedIn, linkLabel: 'View on LinkedIn',
  },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; badge: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Building and integrating software',
    skills: [
      { name: 'Python', badge: 'Python' },
      { name: 'HTML', badge: 'HTML' },
      { name: 'CSS', badge: 'CSS' },
      { name: 'JavaScript', badge: 'JS' },
    ],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Edge AI',
    subtitle: 'Live camera detection on Jetson',
    skills: [
      { name: 'OpenCV', badge: 'OpenCV' },
      { name: 'SSD-MobileNet-V2', badge: 'SSD' },
      { name: 'NVIDIA Jetson', badge: 'Jetson' },
      { name: 'PyTorch', badge: 'PyTorch' },
      { name: 'Jetson Inference', badge: 'Jetson Inference' },
    ],
  },
  {
    id: 'signal-processing',
    title: 'Signal Processing',
    subtitle: 'Radar data, motion, and reconstruction',
    skills: [
      { name: 'Synthetic Aperture Radar', badge: 'SAR' },
      { name: 'Backprojection', badge: 'Backprojection' },
      { name: 'CUDA / CuPy', badge: 'CUDA / CuPy' },
      { name: 'NumPy', badge: 'NumPy' },
      { name: 'OptiTrack', badge: 'OptiTrack' },
    ],
  },
  {
    id: 'web-data',
    title: 'Web & Data Applications',
    subtitle: 'Charts, news sentiment, and web interfaces',
    skills: [
      { name: 'Flask', badge: 'Flask' },
      { name: 'Plotly', badge: 'Plotly' },
      { name: 'VADER', badge: 'VADER' },
      { name: 'TextBlob', badge: 'TextBlob' },
      { name: 'yfinance', badge: 'yfinance' },
    ],
  },
  {
    id: 'tools',
    title: 'Hardware & Tools',
    subtitle: 'Devices and development tools',
    skills: [
      { name: 'Raspberry Pi', badge: 'Pi' },
      { name: 'CustomTkinter', badge: 'CustomTkinter' },
      { name: 'Git / GitHub', badge: 'Git / GitHub' },
      { name: 'Yahoo Finance Data', badge: 'Yahoo Finance' },
      { name: 'RSS Feeds', badge: 'RSS' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Doorcam', 'UAS Synthetic Aperture Radar', 'AI Stock Analysis'],
  HTML: ['AI Stock Analysis'], CSS: ['AI Stock Analysis'], JavaScript: ['AI Stock Analysis'],
  OpenCV: ['Doorcam'], 'SSD-MobileNet-V2': ['Doorcam'], 'NVIDIA Jetson': ['Doorcam'],
  'Jetson Inference': ['Doorcam'], CustomTkinter: ['Doorcam'],
  PyTorch: ['UAS Synthetic Aperture Radar'], 'Synthetic Aperture Radar': ['UAS Synthetic Aperture Radar'],
  Backprojection: ['UAS Synthetic Aperture Radar'], 'CUDA / CuPy': ['UAS Synthetic Aperture Radar'],
  NumPy: ['UAS Synthetic Aperture Radar'], OptiTrack: ['UAS Synthetic Aperture Radar'],
  'Raspberry Pi': ['UAS Synthetic Aperture Radar'],
  Flask: ['AI Stock Analysis'], Plotly: ['AI Stock Analysis'], VADER: ['AI Stock Analysis'],
  TextBlob: ['AI Stock Analysis'], yfinance: ['AI Stock Analysis'],
  'Yahoo Finance Data': ['AI Stock Analysis'], 'RSS Feeds': ['AI Stock Analysis'],
  'Git / GitHub': ['Featured project repositories'],
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
    number: 1, title: 'A Camera at the Door', period: 'Doorcam',
    synopsis: 'Detecting people and pets is the first step. Turning those detections into lock-state rules is the next.',
    episodes: [
      { code: 'S01 E01', title: 'Who’s at the Door?', description: 'SSD-MobileNet-V2 detects people, dogs, cats, and birds in a live Jetson camera feed.', tags: ['Jetson Inference', 'Computer Vision'], runtime: 'Live detection', palette: crimson },
      { code: 'S01 E02', title: 'When to Stay Locked', description: 'Bounding-box size and pose heuristics drive lock and warning thresholds. A desktop interface manages pet images and settings.', tags: ['CustomTkinter', 'Pet Profiles'], runtime: 'Software prototype', palette: crimson },
    ],
  },
  {
    number: 2, title: 'Mapping with Radar', period: 'BWSI UAS–SAR · Team 4',
    synopsis: 'Our team combined drone radar scans with motion capture to reconstruct indoor targets.',
    episodes: [
      { code: 'S02 E01', title: 'Aligning the Scans', description: 'Aligning radar scans with OptiTrack timestamps, position, and orientation before image reconstruction.', tags: ['Pulson 452', 'OptiTrack'], runtime: 'Alignment & motion', palette: ocean },
      { code: 'S02 E02', title: 'From Scans to a Map', description: 'Phase-coherent backprojection creates a 2D reflectivity map. Indoor trials resolved soda cans roughly 40–50 cm apart.', tags: ['Backprojection', 'CUDA / CuPy', 'PyTorch'], runtime: 'SAR reconstruction', palette: ocean },
    ],
  },
  {
    number: 3, title: 'Prices & Headlines', period: 'AI Stock Analysis',
    synopsis: 'An experiment in comparing market trends with news sentiment, with both inputs visible in the dashboard.',
    episodes: [
      { code: 'S03 E01', title: 'The Price History', description: 'Yahoo Finance data, searchable stocks, company fundamentals, and six months of interactive price charts.', tags: ['Flask', 'yfinance', 'Plotly'], runtime: 'Stock dashboard', palette: jade },
      { code: 'S03 E02', title: 'Reading the Headlines', description: 'VADER and TextBlob score news text. The app combines sentiment with price trends and explains its recommendation.', tags: ['RSS Feeds', 'VADER', 'TextBlob'], runtime: 'Sentiment & signals', palette: jade },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Camera Vision', title: 'Doorcam', detail: 'People, pets, and lock-state rules', palette: crimson },
  { label: 'Team Radar Project', title: 'UAS SAR', detail: 'Drone scans to indoor target maps', palette: ocean },
  { label: 'Data & Sentiment', title: 'AI Stock Analysis', detail: 'Price trends alongside news sentiment', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Meet Soham', title: 'Hi, I’m Soham.', lines: ['Engineering at the University of Michigan.', 'Here are three projects I’ve worked on.'], chips: ['Python', 'Computer Vision', 'Radar'] },
  { kicker: 'Doorcam', title: 'People. Pets. Proximity.', lines: ['Live camera detection on NVIDIA Jetson.', 'A desktop interface for pet profiles and software lock rules.'], chips: ['SSD-MobileNet-V2', 'OpenCV', 'CustomTkinter'] },
  { kicker: 'BWSI Team 4', title: 'A room, seen by radar.', lines: ['Drone radar scans and OptiTrack motion capture.', 'Indoor targets resolved at roughly 40–50 cm spacing.'], chips: ['Backprojection', 'CUDA / CuPy', 'PyTorch'] },
  { kicker: 'AI Stock Analysis', title: 'Prices meet headlines.', lines: ['Six months of price history, with news sentiment alongside it.', 'An experimental recommendation engine with visible score breakdowns.'], chips: ['Flask', 'Plotly', 'VADER', 'TextBlob'] },
  { kicker: 'Explore', title: 'Take a closer look.', lines: ['Open a project to see the approach, tools, and source code.', 'Or connect with me on LinkedIn.'] },
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
    blurb: 'Ideas & experiments first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Michigan engineering · vision & radar', palette: violet },
  journey: { nav: 'Behind the Work', card: 'Behind the Projects', meta: `${seasons.length} project themes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} featured projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Selected work & ideas', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} focus areas`, palette: ocean },
  moments: { nav: 'Milestones', card: 'Project Milestones', meta: `${achievements.length} project highlights`, palette: crimson },
  story: { nav: 'Profile', card: 'Project Profile', meta: 'Summary · projects · skills', palette: violet },
};
