import type { DiagramType } from "@/components/calculators/diagrams/CalculatorDiagram";

export type CalculatorExplanation = {
  description: string;
  bullets: string[];
  imageLabel: string;
  diagramType: DiagramType;
};

export const calculatorExplanations: Record<string, CalculatorExplanation> = {
  "paint-calculator": {
    description:
      "Our paint calculator estimates total gallons based on wall surface area, minus typical deductions for doors and windows.",
    bullets: [
      "Wall area = 2 × (width + length) × ceiling height",
      "Door deduction: 20 sq ft per door · Window deduction: 15 sq ft per window",
      "Default coverage assumes standard interior latex (375 sq ft/gallon)",
      "Recommended purchase includes your overage percentage, rounded up to whole gallons",
    ],
    imageLabel: "Room wall area diagram showing width, length, and height",
    diagramType: "wall-area",
  },
  "concrete-calculator": {
    description:
      "Concrete volume is calculated from slab length, width, and thickness. Ready-mix is ordered in cubic yards, with waste added for spillage and uneven subgrade.",
    bullets: [
      "Thickness is converted from inches to feet before volume is calculated",
      "Cubic feet = length × width × thickness (ft)",
      "Cubic yards = cubic feet ÷ 27",
      "Recommended order includes waste and rounds up to the nearest 0.1 yd³",
    ],
    imageLabel: "Concrete slab volume diagram showing length, width, and thickness",
    diagramType: "slab-volume",
  },
  "gravel-calculator": {
    description:
      "Gravel coverage depends on area, depth, and stone density. Suppliers often sell by the ton, so we convert cubic yards using your density assumption.",
    bullets: [
      "Depth is converted from inches to feet before volume is calculated",
      "Cubic yards = (length × width × depth in ft) ÷ 27",
      "Tons = cubic yards × density (default 1.4 tons/yd³)",
      "Recommended tons include waste and round up to the nearest 0.1 ton",
    ],
    imageLabel: "Gravel depth layer diagram showing area and depth",
    diagramType: "depth-layer",
  },
  "mulch-calculator": {
    description:
      "Mulch volume is based on bed area and depth. Results show bulk cubic measure and bag count using your bag size assumption.",
    bullets: [
      "Cubic feet = length × width × depth (ft)",
      "Cubic yards = cubic feet ÷ 27",
      "Bags needed = cubic feet ÷ bag size",
      "Recommended bags include waste and round up to a whole number",
    ],
    imageLabel: "Mulch bed depth layer diagram",
    diagramType: "depth-layer",
  },
  "tile-calculator": {
    description:
      "Tile count is based on floor area divided by individual tile area. A waste factor accounts for cuts, breakage, and pattern layout.",
    bullets: [
      "Floor area = room length × room width (sq ft)",
      "Tile area = (tile length × tile width) ÷ 144 (sq ft)",
      "Tiles needed = floor area ÷ tile area",
      "Recommended tiles include waste and round up to a whole number",
    ],
    imageLabel: "Floor tile grid layout diagram",
    diagramType: "floor-grid",
  },
  "flooring-calculator": {
    description:
      "Flooring material is ordered by the box. We calculate room square footage, add your waste allowance, then divide by box coverage to get an order quantity.",
    bullets: [
      "Floor area = room length × room width (sq ft)",
      "Area with waste = floor area × (1 + waste%)",
      "Boxes needed = area with waste ÷ box coverage",
      "Recommended boxes round up to a whole number",
    ],
    imageLabel: "Flooring plank grid layout diagram",
    diagramType: "floor-grid",
  },
  "drywall-calculator": {
    description:
      "Drywall sheets are estimated from total wall surface area divided by sheet size. A waste factor covers cuts around openings and damaged sheets.",
    bullets: [
      "Wall area = 2 × (length + width) × wall height",
      "Sheet area = sheet width × sheet height",
      "Sheets needed = wall area ÷ sheet area",
      "Recommended sheets include waste and round up to a whole number",
    ],
    imageLabel: "Drywall sheet layout diagram",
    diagramType: "sheet-layout",
  },
  "fence-calculator": {
    description:
      "Fence materials are calculated from total run length, post spacing, rail count per section, and picket dimensions including gap spacing.",
    bullets: [
      "Sections = fence length ÷ post spacing (rounded up)",
      "Posts = sections + 1",
      "Rails = sections × rails per section",
      "Pickets = fence length in inches ÷ (picket width + gap), rounded up",
    ],
    imageLabel: "Fence post spacing diagram",
    diagramType: "post-spacing",
  },
  "paver-calculator": {
    description:
      "Paver count is based on patio area divided by individual paver area. A waste factor accounts for cuts, breakage, and edge fitting.",
    bullets: [
      "Patio area = length × width (sq ft)",
      "Paver area = (paver length × paver width) ÷ 144 (sq ft)",
      "Pavers needed = patio area ÷ paver area",
      "Recommended pavers include waste and round up to a whole number",
    ],
    imageLabel: "Paver patio grid layout diagram",
    diagramType: "floor-grid",
  },
  "concrete-bags-calculator": {
    description:
      "Bag count is calculated from slab volume divided by per-bag yield. Waste covers spillage, uneven pours, and partial bag use.",
    bullets: [
      "Cubic feet = length × width × thickness (ft)",
      "Cubic feet with waste = cubic feet × (1 + waste%)",
      "Bags needed = cubic feet with waste ÷ bag yield",
      "Recommended bags round up to a whole number",
    ],
    imageLabel: "Concrete slab volume diagram for bag yield",
    diagramType: "slab-volume",
  },
  "topsoil-calculator": {
    description:
      "Topsoil volume is based on area and depth. Results show cubic feet and cubic yards with an overage allowance for settling and spillage.",
    bullets: [
      "Cubic feet = length × width × depth (ft)",
      "Cubic yards = cubic feet ÷ 27",
      "Cubic yards with waste = cubic yards × (1 + waste%)",
      "Recommended order rounds up to the nearest 0.1 yd³",
    ],
    imageLabel: "Topsoil depth layer diagram",
    diagramType: "depth-layer",
  },
  "deck-calculator": {
    description:
      "Decking board length is estimated from deck area divided by effective board width including gap spacing, with waste for cuts and defects.",
    bullets: [
      "Deck area = length × width (sq ft)",
      "Board module = (board width + gap) ÷ 12 (ft)",
      "Linear feet = deck area ÷ board module",
      "Recommended linear feet include waste and round up to a whole number",
    ],
    imageLabel: "Deck board spacing diagram",
    diagramType: "board-spacing",
  },
  "roofing-calculator": {
    description:
      "Roofing material is ordered in squares (100 sq ft). Pitch multiplier adjusts flat footprint to sloped surface area.",
    bullets: [
      "Flat area = roof length × roof width",
      "Adjusted area = flat area × pitch multiplier",
      "Squares = adjusted area ÷ 100",
      "Recommended squares include waste and round up to the nearest 0.1 square",
    ],
    imageLabel: "Roof pitch and footprint diagram",
    diagramType: "roof-pitch",
  },
  "wallpaper-calculator": {
    description:
      "Wallpaper rolls are estimated from total wall area divided by roll coverage, with a waste allowance for trimming and layout scraps.",
    bullets: [
      "Wall area = 2 × (length + width) × wall height",
      "Area with waste = wall area × (1 + waste%)",
      "Rolls needed = area with waste ÷ roll coverage",
      "Recommended rolls round up to a whole number",
    ],
    imageLabel: "Room wall area diagram for wallpaper coverage",
    diagramType: "wall-area",
  },
  "stair-calculator": {
    description:
      "Stair geometry is derived from total rise divided into even riser heights, with tread count and total horizontal run calculated from tread depth.",
    bullets: [
      "Risers = total rise ÷ ideal riser height (rounded up)",
      "Actual riser height = total rise ÷ number of risers",
      "Treads = risers − 1",
      "Total run = treads × tread depth",
    ],
    imageLabel: "Stair rise and run diagram",
    diagramType: "stair-rise-run",
  },
};
