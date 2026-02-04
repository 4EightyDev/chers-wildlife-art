// src/data/site-data.ts

export const ARTWORKS = [
  // SERIES 01: AVIAN MASTERWORKS
  {
    id: "the-hunter",
    title: "The Hunter",
    subject: "Peregrine Falcon",
    collectionId: "avian",
    description:
      "A definitive study in hyper-realism, capturing the precise moment of focus before a strike. Rendered feather-by-feather over six months.",
    fieldNotes:
      "Observed in the high cliffs of the Pacific Northwest. This reference was captured after four days of tracking, documenting the precise light of a late September afternoon.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/the-hunter.avif",
    inSituImage: "/images/art/in-situ-hunter.avif",
    status: "Available",
    span: "lg:col-span-2", // Masterpiece span
    original: { dimensions: '14" x 18"', medium: "Acrylic on Board" },
    editions: {
      dimensions: '18" x 24"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
    provenance: [
      "Signature Member, Artists for Conservation (AFC)",
      "International Exhibit Tour 2023-2024",
      "Award of Excellence - Realism Category",
    ],
  },
  {
    id: "the-great-debate",
    title: "The Great Debate",
    subject: "Flamingos",
    collectionId: "avian",
    description:
      "An intricate social study of form and color, depicting the vibrant energy and movement of a flamingo colony.",
    fieldNotes:
      "Photographed during an expedition to the coastal wetlands. The social hierarchy of the colony was captured in a burst of 20 frames per second to find this singular moment of tension.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/the-great-debate.avif",
    status: "Available",
    span: "lg:col-span-1",
    original: { dimensions: '48" x 36"', medium: "Acrylic on Canvas" },
    editions: {
      dimensions: '40" x 30"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
  },
  {
    id: "aussie-rosellas",
    title: "Aussie Rosellas",
    subject: "Crimson Rosellas",
    collectionId: "avian",
    description:
      "Inspired by Cher's travels to Australia, capturing the brilliant crimson and blue plumage of the Rosella in its native habitat.",
    fieldNotes:
      "Documented in the rainforests of Queensland. The Rosellas moved with a speed that required a high-shutter lens; the painting seeks to freeze that vibrant chaos into a moment of stillness.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/aussie-rosellas.avif",
    status: "Available",
    span: "lg:col-span-1",
    original: { dimensions: '24" x 36"', medium: "Acrylic on Board" },
    editions: {
      dimensions: '18" x 24"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
  },

  // SERIES 02: THE APEX SERIES
  {
    id: "gladiators",
    title: "Gladiators",
    subject: "Leopards",
    collectionId: "apex",
    description:
      "A large-scale masterpiece exploring the power and silent tension of two leopards in the African brush.",
    fieldNotes:
      "A dawn encounter in the South Luangwa Valley. These two brothers were observed for hours; the painting represents the split-second of eye contact that changed the energy of the clearing.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/gladiators.avif",
    status: "Available",
    span: "lg:col-span-2", // Masterpiece span
    original: { dimensions: '48" x 36"', medium: "Acrylic on Canvas" },
    editions: {
      dimensions: '40" x 30"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
  },
  {
    id: "pounce",
    title: "Pounce!",
    subject: "Juvenile Mountain Lion",
    collectionId: "apex",
    description:
      "Capturing the playful yet lethal instinct of a young mountain lion in mid-movement.",
    fieldNotes:
      "A rare encounter with a juvenile cougar in the high country. The intensity in the gaze was the exact second before the feline vanished back into the brush.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/pounce.avif",
    status: "Available",
    span: "lg:col-span-1",
    original: { dimensions: '14.6" x 10.5"', medium: "Acrylic on Board" },
    editions: {
      dimensions: '20" x 15"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
  },
  {
    id: "missing-lynx",
    title: "Missing Lynx",
    subject: "Canada Lynx",
    collectionId: "apex",
    description:
      "A high-contrast study of the elusive lynx, emphasizing the tufted ears and thick winter fur.",
    fieldNotes:
      "Deep winter reference. The Lynx is a phantom of the forest; documenting the subtle greys of the winter coat against the snow required a primary witness's eye for low-light detail.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/missing-lynx.avif",
    status: "Available",
    span: "lg:col-span-1",
    original: { dimensions: '10" x 8"', medium: "Acrylic on Board" },
    editions: {
      dimensions: '14" x 11"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
  },
  {
    id: "fire-in-the-sky",
    title: "Fire in the Sky",
    subject: "African Lion",
    collectionId: "apex",
    description:
      "A sunset-lit portrait of the king of the savannah, rendered with warm ambers and deep shadows.",
    fieldNotes:
      "Golden hour on the plains. The light was fading fast, hitting the mane with a fiery rim-light that felt as if the lion itself were burning.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/fire-in-the-sky.avif",
    status: "Private Collection",
    span: "lg:col-span-2", // Large scale
    original: { dimensions: '36" x 48"', medium: "Acrylic on Canvas" },
    editions: {
      dimensions: '30" x 40"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
  },

  // SERIES 03: THE COASTAL ARCHIVE
  {
    id: "steller-appearance",
    title: "Steller Appearance",
    subject: "Steller Sea Lion",
    collectionId: "coastal",
    description:
      "An exploration of the heavy textures of the coastal rocks against the sleek, wet fur of the sea lion.",
    fieldNotes:
      "Captured from a low-profile boat off the coast. The challenge was documenting the wet sheen of the fur against the prehistoric texture of the barnacle-covered rocks.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/steller-appearance.avif",
    status: "Available",
    span: "lg:col-span-2",
    original: { dimensions: '20" x 16"', medium: "Acrylic on Board" },
    editions: {
      dimensions: '24" x 18"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
  },
  {
    id: "miss-mallard",
    title: "Miss Mallard",
    subject: "Mallard Hen",
    collectionId: "coastal",
    description:
      "Focusing on the iridescent beauty found in the everyday, this piece studies the water droplets and feather patterns of a mallard.",
    fieldNotes:
      "A study in tranquility. The focus here was the tension of the water surface and the individual droplets resting on the oil-slick feathers.",
    witnessBadge: "Original Field Reference by Artist",
    image: "/images/art/miss-mallard.avif",
    status: "Available",
    span: "lg:col-span-1",
    original: { dimensions: '14" x 8.9"', medium: "Acrylic on Board" },
    editions: {
      dimensions: '16" x 12"',
      medium: "Limited Edition Studio Edition on Canvas",
    },
  },

  // LEGACY & COLLECTIONS (SMALLER WORKS / STUDIES)
  {
    id: "blush",
    title: "Blush",
    subject: "Animal Study",
    collectionId: "legacy",
    description:
      "A soft, intimate rendering in colored pencil exploring subtle light and shadow.",
    image: "/images/art/blush.avif",
    status: "Available",
    span: "lg:col-span-1",
    original: { dimensions: '11" x 9"', medium: "Colored Pencils" },
    editions: { dimensions: '11" x 9"', medium: "Fine Art Paper Print" },
  },
  {
    id: "sedona-colors",
    title: "Sedona Colors",
    subject: "Landscape Study",
    collectionId: "legacy",
    description:
      "A watercolor departure focusing on the geological textures and light of the American Southwest.",
    image: "/images/art/sedona-colors.avif",
    status: "Available",
    span: "lg:col-span-1",
    original: { dimensions: '5.75" x 10.6"', medium: "Watercolors" },
    editions: { dimensions: '8" x 12"', medium: "Fine Art Paper Print" },
  },
];

export const COLLECTIONS = [
  {
    id: "avian",
    type: "series",
    title: "Avian Masterworks",
    eyebrow: "Series 01",
    description:
      "A multi-year study into the aerodynamics, social structures, and preservation of the world's most majestic bird species.",
    featuredImage: "/images/collection-images/the-avian-masterworks.avif",
    link: "/collections/avian",
    offset: "lg:translate-y-0",
  },
  {
    id: "apex",
    type: "series",
    title: "The Apex Series",
    eyebrow: "Series 02",
    description:
      "Intimate, high-contrast encounters with the world's most formidable predators in the high country.",
    featuredImage: "/images/collection-images/the-apex-series.avif",
    link: "/collections/apex",
    offset: "lg:translate-y-24",
  },
  {
    id: "coastal",
    type: "series",
    title: "The Coastal Archive",
    eyebrow: "Series 03",
    description:
      "Exploring the resilient spirits found at the intersection of land and sea.",
    featuredImage: "/images/collection-images/the-coastal-archive.avif",
    link: "/collections/coastal",
    offset: "lg:-translate-y-12",
  },
  {
    id: "legacy",
    type: "archive",
    title: "Studies & Legacy",
    eyebrow: "The Archive",
    description:
      "Intimate works on paper, colored pencil studies, and earlier explorations in color and form.",
    featuredImage: "/images/collection-images/legacy-archive.avif",
    link: "/collections/legacy",
    offset: "",
  },
];

export const ARTIST_CONTENT = {
  name: "Cher",
  studioPortrait: "/images/bio/studio-portrait.jpg",
  bioPortrait: "/images/bio/bio-portrait.jpg",
  eyeDetail: "/images/bio/eye-detail.jpg",
  quote: "To capture the eyes is to glimpse the soul of the wild.",
  bio: [
    "From her studio in the Pacific Northwest, Cher translates a lifelong reverence for nature into masterworks of hyper-realism.",
    "As a Signature Member of Artists for Conservation, her work serves a dual purpose: to honor the raw beauty of the animal kingdom and to ensure its survival.",
  ],
};

export const HOME_CONTENT = {
  hero: {
    eyebrow: "The 2026 Exhibition",
    titleFirstPart: "The Spirit",
    titleItalicPart: "of the",
    titleLastPart: "Wild",
    featuredArtworkId: "the-hunter",
    description:
      "Cher’s Wildlife Art explores the profound connection between the observer and the observed. Each stroke is an act of conservation, capturing the raw dignity of Earth’s most majestic inhabitants.",
  },
};

export const MISSION_CONTENT = {
  eyebrow: "The Mission",
  title: "A Voice for the Voiceless",
  statement:
    "The purpose of my work is to evoke an emotional response to the beauty of the natural world, hoping to inspire a collective desire to protect and preserve our planet's vanishing heritage.",
  primaryWitness: {
    title: "The Primary Witness",
    image: "/images/primary-witness.jpg",
    subtitle: "From Lens to Brush",
    description:
      "Unlike many who rely on stock imagery, Cher is the sole author of every reference. She travels into the heart of the wild to photograph her subjects in their native habitats.",
    insight:
      "This 'Primary Witness' approach ensures that every stroke is informed by a true encounter with the animal's spirit, light, and environment.",
  },
  partnerships: [
    {
      image: "/images/partnerships/artists-for-conservation.jpg",
      org: "Artists for Conservation",
      role: "Signature Member",
      description:
        "As a member of this elite world-leading non-profit, Cher represents a global movement of artists using their talent to support environmental causes.",
    },
    {
      org: "David Shepherd Wildlife Foundation",
      role: "Wildlife Artist of the Year Finalist",
      description:
        "Cher’s work has been selected for exhibition at the prestigious Mall Galleries in London, supporting DSWF’s fight against wildlife crime.",
    },
  ],
  pillars: [
    {
      title: "Visual Advocacy",
      text: "Creating hyper-realistic portraits that demand attention for endangered species.",
    },
    {
      title: "Direct Support",
      text: "A portion of every acquisition goes directly to frontline conservation projects.",
    },
    {
      title: "Global Reach",
      text: "Partnering with organizations in over 30 countries to ensure art remains a catalyst for change.",
    },
  ],
};

// HELPER FUNCTIONS
export const getArtworkById = (id: string) =>
  ARTWORKS.find((art) => art.id === id);
export const getCollectionById = (id: string) =>
  COLLECTIONS.find((col) => col.id === id);
export const getArtworksByCollection = (collectionId: string) =>
  ARTWORKS.filter((art) => art.collectionId === collectionId);

// EXHIBITION DATA
export const RECOGNITION_CONTENT = {
  eyebrow: "Institutional Validation",
  title: "Merit & Provenance",
  description:
    "A comprehensive record of international exhibitions, elite signature memberships, and curated publications in the world's leading art journals.",

  // High-Level Honors
  distinctions: [
    {
      title: "Signature Member",
      org: "Artists for Conservation (AFC)",
      year: "Permanent",
    },
    {
      title: "1st Prize Winner",
      org: "International Artist Magazine",
      year: "Challenge #123",
    },
    {
      title: "Artist of the Decade",
      org: "ArtTour International",
      year: "2020",
    },
    {
      title: "Wildlife Artist of the Year Finalist",
      org: "David Shepherd Wildlife Foundation",
      year: "2023",
    },
  ],

  // International Gallery History
  exhibitions: [
    {
      year: "2023",
      event: "Wildlife Artist of the Year",
      venue: "Mall Galleries",
      location: "London, UK",
    },
    {
      year: "2022",
      event: "The Art of Conservation",
      venue: "AFC International Exhibit",
      location: "Vancouver, BC",
    },
    {
      year: "2020",
      event: "IGOR Spring Salon",
      venue: "International Guild of Realism",
      location: "Global",
    },
    {
      year: "2019",
      event: "AFC World Tour",
      venue: "Lanwan Art Museum",
      location: "Qingdao, China",
    },
    {
      year: "2018",
      event: "Silent Skies Mural Project",
      venue: "27th Int. Ornithological Congress",
      location: "Vancouver, BC",
    },
    {
      year: "2017",
      event: "Puma: Past & Present",
      venue: "Arizona-Sonora Desert Museum",
      location: "Tucson, AZ",
    },
  ],

  // Professional Bibliography
  publications: [
    {
      title: "AcrylicWorks 6: Creative Energy",
      source: "North Light Books",
      year: "2019",
      note: "Featured Master Artist",
    },
    {
      title: "Challenge 123: Wildlife Portfolio",
      source: "International Artist Magazine",
      year: "2021",
      note: "Grand Prize Recipient",
    },
    {
      title: "Splash 22: Creative Sparks",
      source: "Watercolor Artist Magazine",
      year: "2020",
      note: "Selected Feature",
    },
    {
      title: "AcrylicWorks 5: Bold Values",
      source: "North Light Books",
      year: "2018",
      note: "Curated Selection",
    },
    {
      title: "Top 60 Masters of Contemporary Art",
      source: "ArtTour International",
      year: "2020",
      note: "Artist of the Decade Award",
    },
  ],

  // The Logos of Authority
  pressLogos: [
    { name: "Artists for Conservation", src: "/images/logos/afc-monotone.png" },
    {
      name: "David Shepherd Wildlife Foundation",
      src: "/images/logos/dswf-monotone.png",
    },
    {
      name: "North Light Books",
      src: "/images/logos/northlight-monotone.webp",
    },
    { name: "Mall Galleries London", src: "/images/logos/mall-galleries.png" },
    {
      name: "International Artist Magazine",
      src: "/images/logos/iam-monotone.png",
    },
  ],
};
