export type CalculatorInput = {
  id: string;
  label: string;
  type: "number" | "select";
  unit?: string;
  placeholder?: string;
  defaultValue?: string | number;
  options?: { value: string; label: string }[];
};

export type CalculatorOutput = {
  id: string;
  label: string;
  unit?: string;
};

export type Calculator = {
  slug: string;
  title: string;
  seoTitle: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  badge?: string;
  icon: string;
  inputs: CalculatorInput[];
  outputs: CalculatorOutput[];
  relatedGuideSlugs: string[];
  updatedAt: string;
  popular?: boolean;
  mostUsed?: boolean;
};

export const calculators: Calculator[] = [
  {
    slug: "paint-calculator",
    title: "Paint Calculator",
    seoTitle: "Paint Calculator — How Many Gallons Do I Need?",
    category: "Paint",
    shortDescription:
      "Estimate gallons needed for walls based on room size, coats, and openings.",
    longDescription:
      "Enter your room dimensions to estimate how much paint you need for walls. Adjust for doors, windows, coverage rate, and overage to get a planning estimate — verify before purchase.",
    badge: "Most popular",
    icon: "🎨",
    inputs: [
      { id: "roomWidth", label: "Room width", type: "number", unit: "ft", defaultValue: 12 },
      { id: "roomLength", label: "Room length", type: "number", unit: "ft", defaultValue: 14 },
      { id: "ceilingHeight", label: "Ceiling height", type: "number", unit: "ft", defaultValue: 8 },
      {
        id: "coats",
        label: "Number of coats",
        type: "select",
        defaultValue: "2",
        options: [
          { value: "1", label: "1 coat" },
          { value: "2", label: "2 coats" },
          { value: "3", label: "3 coats" },
        ],
      },
      { id: "doors", label: "Doors", type: "number", defaultValue: 1 },
      { id: "windows", label: "Windows", type: "number", defaultValue: 2 },
      { id: "coverage", label: "Coverage per gallon", type: "number", unit: "sq ft", defaultValue: 375 },
      { id: "overage", label: "Waste / overage", type: "number", unit: "%", defaultValue: 15 },
    ],
    outputs: [
      { id: "paintNeeded", label: "Paint needed", unit: "gallons" },
      { id: "recommendedPurchase", label: "Recommended purchase", unit: "gallons" },
      { id: "totalPaintableArea", label: "Total paintable area", unit: "sq ft" },
      { id: "netWallArea", label: "Net wall area", unit: "sq ft" },
    ],
    relatedGuideSlugs: ["how-much-paint-do-i-need"],
    updatedAt: "2026-06-22",
    popular: true,
    mostUsed: true,
  },
  {
    slug: "concrete-calculator",
    title: "Concrete Calculator",
    seoTitle: "Concrete Calculator — How Many Cubic Yards Do I Need?",
    category: "Concrete",
    shortDescription:
      "Estimate cubic yards of concrete for slabs, footings, and driveways.",
    longDescription:
      "Enter your project dimensions to estimate the cubic yards of ready-mix concrete needed. Typical for slabs, patios, footings, and driveway pours.",
    icon: "🧱",
    inputs: [
      { id: "length", label: "Project length", type: "number", unit: "ft", defaultValue: 20 },
      { id: "width", label: "Project width", type: "number", unit: "ft", defaultValue: 20 },
      { id: "depth", label: "Depth / thickness", type: "number", unit: "in", defaultValue: 4 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedOrder", label: "Recommended ready-mix order", unit: "yd³" },
      { id: "cubicYards", label: "Cubic yards", unit: "yd³" },
      { id: "cubicFeet", label: "Cubic feet", unit: "ft³" },
    ],
    relatedGuideSlugs: ["concrete-slab-calculator-guide"],
    updatedAt: "2026-06-22",
    popular: true,
    mostUsed: true,
  },
  {
    slug: "concrete-bags-calculator",
    title: "Concrete Bags Calculator",
    seoTitle: "Concrete Bags Calculator — How Many Bags Do I Need?",
    category: "Concrete",
    shortDescription:
      "Estimate how many bags of concrete mix you need for small pours and repairs.",
    longDescription:
      "Enter slab dimensions and bag yield to estimate how many bags of concrete mix you need for post holes, small pads, and patch jobs.",
    icon: "📦",
    inputs: [
      { id: "length", label: "Project length", type: "number", unit: "ft", defaultValue: 10 },
      { id: "width", label: "Project width", type: "number", unit: "ft", defaultValue: 10 },
      { id: "depth", label: "Depth / thickness", type: "number", unit: "in", defaultValue: 4 },
      { id: "bagYield", label: "Bag yield", type: "number", unit: "ft³", defaultValue: 0.45 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedBags", label: "Recommended bags", unit: "bags" },
      { id: "cubicFeet", label: "Volume", unit: "ft³" },
    ],
    relatedGuideSlugs: ["concrete-slab-calculator-guide"],
    updatedAt: "2026-06-22",
  },
  {
    slug: "gravel-calculator",
    title: "Gravel Calculator",
    seoTitle: "Gravel Calculator — How Much Gravel Do I Need?",
    category: "Outdoor",
    shortDescription:
      "Calculate tons or cubic yards of gravel for driveways and landscaping.",
    longDescription:
      "Enter the length, width, and depth of your gravel area to estimate tonnage and volume. Ideal for driveways, paths, and drainage beds.",
    icon: "🪨",
    inputs: [
      { id: "length", label: "Project length", type: "number", unit: "ft", defaultValue: 20 },
      { id: "width", label: "Project width", type: "number", unit: "ft", defaultValue: 10 },
      { id: "depth", label: "Depth", type: "number", unit: "in", defaultValue: 3 },
      { id: "density", label: "Density", type: "number", unit: "tons/yd³", defaultValue: 1.4 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedTons", label: "Recommended tons", unit: "tons" },
      { id: "tons", label: "Tons needed", unit: "tons" },
      { id: "cubicYards", label: "Cubic yards", unit: "yd³" },
    ],
    relatedGuideSlugs: ["gravel-driveway-planning", "gravel-depth-guide"],
    updatedAt: "2026-06-22",
    popular: true,
    mostUsed: true,
  },
  {
    slug: "mulch-calculator",
    title: "Mulch Calculator",
    seoTitle: "Mulch Calculator — How Much Mulch Do I Need?",
    category: "Outdoor",
    shortDescription:
      "Estimate cubic yards of mulch for garden beds and landscaping.",
    longDescription:
      "Calculate how much mulch you need based on bed dimensions and desired depth. Helps you order the right amount without waste.",
    icon: "🌿",
    inputs: [
      { id: "length", label: "Bed length", type: "number", unit: "ft", defaultValue: 12 },
      { id: "width", label: "Bed width", type: "number", unit: "ft", defaultValue: 8 },
      { id: "depth", label: "Mulch depth", type: "number", unit: "in", defaultValue: 3 },
      { id: "bagSize", label: "Bag size", type: "number", unit: "ft³", defaultValue: 2 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedBags", label: "Recommended bags", unit: "bags" },
      { id: "cubicYards", label: "Cubic yards", unit: "yd³" },
      { id: "cubicFeet", label: "Cubic feet", unit: "ft³" },
    ],
    relatedGuideSlugs: ["mulch-depth-guide"],
    updatedAt: "2026-06-22",
    mostUsed: true,
  },
  {
    slug: "topsoil-calculator",
    title: "Topsoil Calculator",
    seoTitle: "Topsoil Calculator — How Much Topsoil Do I Need?",
    category: "Outdoor",
    shortDescription:
      "Calculate cubic yards of topsoil for lawns, gardens, and raised beds.",
    longDescription:
      "Estimate topsoil volume for new lawns, garden beds, and grading projects. Enter area dimensions and desired depth to get your order quantity.",
    icon: "🌱",
    inputs: [
      { id: "length", label: "Area length", type: "number", unit: "ft", defaultValue: 12 },
      { id: "width", label: "Area width", type: "number", unit: "ft", defaultValue: 8 },
      { id: "depth", label: "Soil depth", type: "number", unit: "in", defaultValue: 6 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedCubicYards", label: "Recommended order", unit: "yd³" },
      { id: "cubicYards", label: "Cubic yards", unit: "yd³" },
      { id: "cubicFeet", label: "Cubic feet", unit: "ft³" },
    ],
    relatedGuideSlugs: ["mulch-depth-guide", "gravel-depth-guide"],
    updatedAt: "2026-06-22",
  },
  {
    slug: "tile-calculator",
    title: "Tile Calculator",
    seoTitle: "Tile Calculator — How Many Tiles Do I Need?",
    category: "Flooring",
    shortDescription:
      "Figure out tile count with waste factor included for floors and walls.",
    longDescription:
      "Enter your room or surface dimensions to estimate the number of tiles needed, including a standard waste allowance for cuts and breakage.",
    icon: "🔲",
    inputs: [
      { id: "length", label: "Surface length", type: "number", unit: "ft", defaultValue: 12 },
      { id: "width", label: "Surface width", type: "number", unit: "ft", defaultValue: 10 },
      { id: "tileLength", label: "Tile length", type: "number", unit: "in", defaultValue: 12 },
      { id: "tileWidth", label: "Tile width", type: "number", unit: "in", defaultValue: 12 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedTiles", label: "Recommended tiles", unit: "tiles" },
      { id: "tilesNeeded", label: "Tiles needed", unit: "tiles" },
      { id: "squareFeet", label: "Total area", unit: "sq ft" },
    ],
    relatedGuideSlugs: ["tile-installation-waste-factor"],
    updatedAt: "2026-06-22",
    popular: true,
    mostUsed: true,
  },
  {
    slug: "flooring-calculator",
    title: "Flooring Calculator",
    seoTitle: "Flooring Calculator — How Much Flooring Do I Need?",
    category: "Flooring",
    shortDescription:
      "Estimate hardwood, laminate, or vinyl flooring square footage with overage.",
    longDescription:
      "Calculate total flooring material needed for your room, including a recommended overage for cuts, waste, and future repairs.",
    icon: "🪵",
    inputs: [
      { id: "length", label: "Room length", type: "number", unit: "ft", defaultValue: 12 },
      { id: "width", label: "Room width", type: "number", unit: "ft", defaultValue: 10 },
      { id: "boxCoverage", label: "Box coverage", type: "number", unit: "sq ft", defaultValue: 20 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedBoxes", label: "Recommended boxes", unit: "boxes" },
      { id: "areaWithWaste", label: "Area with waste", unit: "sq ft" },
      { id: "squareFeet", label: "Floor area", unit: "sq ft" },
    ],
    relatedGuideSlugs: ["hardwood-flooring-estimate"],
    updatedAt: "2026-06-22",
    popular: true,
    mostUsed: true,
  },
  {
    slug: "drywall-calculator",
    title: "Drywall Calculator",
    seoTitle: "Drywall Calculator — How Many Sheets Do I Need?",
    category: "Lumber",
    shortDescription:
      "Estimate drywall sheet count for walls based on room size and sheet dimensions.",
    longDescription:
      "Enter room dimensions and sheet size to estimate how many drywall sheets you need, with a waste allowance for cuts and damaged sheets.",
    icon: "📋",
    inputs: [
      { id: "length", label: "Room length", type: "number", unit: "ft", defaultValue: 12 },
      { id: "width", label: "Room width", type: "number", unit: "ft", defaultValue: 10 },
      { id: "height", label: "Wall height", type: "number", unit: "ft", defaultValue: 8 },
      { id: "sheetWidth", label: "Sheet width", type: "number", unit: "ft", defaultValue: 4 },
      { id: "sheetHeight", label: "Sheet height", type: "number", unit: "ft", defaultValue: 8 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedSheets", label: "Recommended sheets", unit: "sheets" },
      { id: "sheetsNeeded", label: "Sheets needed", unit: "sheets" },
      { id: "squareFeet", label: "Wall area", unit: "sq ft" },
    ],
    relatedGuideSlugs: ["drywall-sheet-size-guide"],
    updatedAt: "2026-06-22",
  },
  {
    slug: "deck-calculator",
    title: "Deck Calculator",
    seoTitle: "Deck Calculator — How Much Decking Do I Need?",
    category: "Lumber",
    shortDescription:
      "Estimate decking linear feet from deck size, board width, and gap spacing.",
    longDescription:
      "Enter deck dimensions, board width, and gap spacing to estimate total decking linear feet with waste — surface boards only, not joists or hardware.",
    icon: "🏗️",
    inputs: [
      { id: "length", label: "Deck length", type: "number", unit: "ft", defaultValue: 16 },
      { id: "width", label: "Deck width", type: "number", unit: "ft", defaultValue: 12 },
      { id: "boardWidth", label: "Board width", type: "number", unit: "in", defaultValue: 5.5 },
      { id: "boardGap", label: "Board gap", type: "number", unit: "in", defaultValue: 0.125 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedLinearFeet", label: "Recommended linear feet", unit: "ft" },
      { id: "linearFeet", label: "Linear feet needed", unit: "ft" },
      { id: "squareFeet", label: "Deck area", unit: "sq ft" },
    ],
    relatedGuideSlugs: ["deck-board-spacing-guide"],
    updatedAt: "2026-06-22",
  },
  {
    slug: "fence-calculator",
    title: "Fence Calculator",
    seoTitle: "Fence Calculator — How Many Posts and Pickets Do I Need?",
    category: "Outdoor",
    shortDescription:
      "Estimate fence posts, rails, and pickets from run length and spacing.",
    longDescription:
      "Enter fence length, post spacing, rail count, and picket dimensions to estimate posts, sections, rails, and pickets — not panels, height, or concrete.",
    icon: "🚧",
    inputs: [
      { id: "length", label: "Fence length", type: "number", unit: "ft", defaultValue: 100 },
      { id: "postSpacing", label: "Post spacing", type: "number", unit: "ft", defaultValue: 8 },
      { id: "railsPerSection", label: "Rails per section", type: "number", defaultValue: 2 },
      { id: "picketWidth", label: "Picket width", type: "number", unit: "in", defaultValue: 5.5 },
      { id: "picketGap", label: "Picket gap", type: "number", unit: "in", defaultValue: 0.5 },
    ],
    outputs: [
      { id: "posts", label: "Fence posts", unit: "posts" },
      { id: "sections", label: "Fence sections", unit: "sections" },
      { id: "rails", label: "Rails", unit: "rails" },
      { id: "pickets", label: "Pickets", unit: "pickets" },
    ],
    relatedGuideSlugs: ["fence-post-spacing-guide"],
    updatedAt: "2026-06-22",
    popular: true,
  },
  {
    slug: "roofing-calculator",
    title: "Roofing Calculator",
    seoTitle: "Roofing Calculator — How Many Squares Do I Need?",
    category: "Roofing",
    shortDescription:
      "Estimate roofing squares from footprint and pitch-adjusted roof area.",
    longDescription:
      "Enter roof dimensions and a pitch multiplier to estimate roofing squares (100 sq ft units) with waste included — a planning estimate for shingles and underlayment orders.",
    icon: "🏠",
    inputs: [
      { id: "length", label: "Roof length", type: "number", unit: "ft", defaultValue: 40 },
      { id: "width", label: "Roof width", type: "number", unit: "ft", defaultValue: 25 },
      { id: "pitchMultiplier", label: "Pitch multiplier", type: "number", defaultValue: 1.12 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "squares", label: "Roofing squares", unit: "squares" },
      { id: "adjustedArea", label: "Adjusted roof area", unit: "sq ft" },
    ],
    relatedGuideSlugs: ["roofing-squares-explained"],
    updatedAt: "2026-06-22",
  },
  {
    slug: "wallpaper-calculator",
    title: "Wallpaper Calculator",
    seoTitle: "Wallpaper Calculator — How Many Rolls Do I Need?",
    category: "Paint",
    shortDescription:
      "Estimate wallpaper rolls from room size, roll coverage, and waste allowance.",
    longDescription:
      "Enter room dimensions, roll coverage, and waste percentage to estimate how many wallpaper rolls to buy. Doors and windows are not deducted — increase waste for openings or pattern matching.",
    icon: "🖼️",
    inputs: [
      { id: "length", label: "Room length", type: "number", unit: "ft", defaultValue: 12 },
      { id: "width", label: "Room width", type: "number", unit: "ft", defaultValue: 10 },
      { id: "height", label: "Wall height", type: "number", unit: "ft", defaultValue: 8 },
      { id: "rollCoverage", label: "Roll coverage", type: "number", unit: "sq ft", defaultValue: 30 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 15 },
    ],
    outputs: [
      { id: "recommendedRolls", label: "Recommended rolls", unit: "rolls" },
      { id: "rollsNeeded", label: "Rolls needed", unit: "rolls" },
      { id: "squareFeet", label: "Wall area", unit: "sq ft" },
    ],
    relatedGuideSlugs: ["how-much-paint-do-i-need"],
    updatedAt: "2026-06-22",
  },
  {
    slug: "stair-calculator",
    title: "Stair Calculator",
    seoTitle: "Stair Calculator — What Rise and Run Do I Need?",
    category: "Lumber",
    shortDescription:
      "Calculate stair risers, treads, and total run from rise and tread depth.",
    longDescription:
      "Enter total rise and tread depth to estimate riser count, actual riser height, tread count, and horizontal run — layout math only, not stringer lumber.",
    icon: "📐",
    inputs: [
      { id: "totalRise", label: "Total rise", type: "number", unit: "in", defaultValue: 108 },
      { id: "idealRiserHeight", label: "Ideal riser height", type: "number", unit: "in", defaultValue: 7 },
      { id: "treadDepth", label: "Tread depth", type: "number", unit: "in", defaultValue: 10 },
    ],
    outputs: [
      { id: "risers", label: "Risers", unit: "risers" },
      { id: "treads", label: "Treads", unit: "treads" },
      { id: "totalRun", label: "Total run", unit: "in" },
      { id: "riserHeight", label: "Actual riser height", unit: "in" },
    ],
    relatedGuideSlugs: ["deck-board-spacing-guide"],
    updatedAt: "2026-06-22",
  },
  {
    slug: "paver-calculator",
    title: "Paver Calculator",
    seoTitle: "Paver Calculator — How Many Pavers Do I Need?",
    category: "Outdoor",
    shortDescription:
      "Estimate paver count for patios, walkways, and driveways.",
    longDescription:
      "Enter your patio or walkway dimensions and paver size to calculate the number of pavers needed, including a standard waste factor.",
    icon: "🧱",
    inputs: [
      { id: "length", label: "Area length", type: "number", unit: "ft", defaultValue: 12 },
      { id: "width", label: "Area width", type: "number", unit: "ft", defaultValue: 10 },
      { id: "paverLength", label: "Paver length", type: "number", unit: "in", defaultValue: 8 },
      { id: "paverWidth", label: "Paver width", type: "number", unit: "in", defaultValue: 4 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", defaultValue: 10 },
    ],
    outputs: [
      { id: "recommendedPavers", label: "Recommended pavers", unit: "pavers" },
      { id: "paversNeeded", label: "Pavers needed", unit: "pavers" },
      { id: "squareFeet", label: "Patio area", unit: "sq ft" },
    ],
    relatedGuideSlugs: ["gravel-depth-guide", "gravel-driveway-planning"],
    updatedAt: "2026-06-22",
  },
];

export const popularCalculators = calculators.filter((c) => c.popular);
export const mostUsedCalculators = calculators.filter((c) => c.mostUsed);

export function getCalculatorBySlug(slug: string): Calculator | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function getAllCalculatorSlugs(): string[] {
  return calculators.map((c) => c.slug);
}

export function getCalculatorsByCategory(categoryName: string): Calculator[] {
  return calculators.filter((c) => c.category === categoryName);
}
