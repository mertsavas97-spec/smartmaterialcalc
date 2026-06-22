export type CategoryFaq = {
  question: string;
  answer: string;
};

export type CategoryContentSection = {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

export type Category = {
  slug: string;
  title: string;
  name: string;
  description: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  calculatorSlugs: string[];
  guideSlugs: string[];
  faqs: CategoryFaq[];
  updatedAt: string;
  calculatorCount: number;
  whatThisCategoryHelps: CategoryContentSection;
  whichCalculator: CategoryContentSection;
  commonMistakes: CategoryContentSection;
  howCalcHiveEstimates: CategoryContentSection;
};

const categoryDefinitions: Omit<Category, "calculatorCount">[] = [
  {
    slug: "paint",
    title: "Paint",
    name: "Paint",
    description: "Wall, ceiling, wallpaper, and exterior paint estimators.",
    longDescription:
      "Plan interior and exterior paint projects with calculators that estimate gallons, account for doors and windows, and include waste for touch-ups. Whether you are refreshing a bedroom or repainting trim, start here.",
    metaTitle: "Paint Calculators",
    metaDescription:
      "Free paint and wallpaper calculators — estimate gallons for walls, ceilings, and rooms with waste included.",
    icon: "🎨",
    calculatorSlugs: ["paint-calculator", "wallpaper-calculator"],
    guideSlugs: ["how-much-paint-do-i-need"],
    updatedAt: "2026-06-22",
    whatThisCategoryHelps: {
      heading: "What paint calculators help you estimate",
      paragraphs: [
        "Paint projects fail when you buy too little and stop mid-job, or buy too much and waste money on unused gallons. SmartMaterialCalc paint tools estimate wall coverage based on room dimensions, openings, coats, and manufacturer coverage rates.",
        "Use these calculators before shopping to get a realistic gallon count rounded for store purchase.",
      ],
    },
    whichCalculator: {
      heading: "Which calculator should you use?",
      paragraphs: [
        "Use the Paint Calculator for interior or exterior wall paint by room size. Use the Wallpaper Calculator when ordering rolls instead of gallons.",
      ],
      listItems: [
        "Paint Calculator — gallons for walls with door/window deductions",
        "Wallpaper Calculator — rolls based on wall area and roll coverage",
      ],
    },
    commonMistakes: {
      heading: "Common paint planning mistakes",
      paragraphs: [],
      listItems: [
        "Forgetting to deduct doors and windows from total wall area",
        "Using one coat when two are needed for color changes",
        "Ignoring label coverage rates that vary by brand and finish",
        "Skipping waste allowance for touch-ups and roller absorption",
        "Mixing ceiling paint into wall calculations without measuring ceiling separately",
      ],
    },
    howCalcHiveEstimates: {
      heading: "How SmartMaterialCalc estimates paint materials",
      paragraphs: [
        "We calculate wall area from room perimeter and height, subtract standard opening deductions, multiply by coats, and divide by your coverage rate. Recommended purchase includes your waste percentage and rounds up to practical buying units.",
        "See our methodology page for formula details and limitations.",
      ],
    },
    faqs: [
      {
        question: "Which paint calculator should I use?",
        answer:
          "Use the Paint Calculator for latex or enamel wall paint in gallons. Use the Wallpaper Calculator if you are covering walls with patterned or solid rolls instead of paint.",
      },
      {
        question: "How do I estimate paint for walls and ceilings?",
        answer:
          "Enter room length, width, and ceiling height for walls. The Paint Calculator focuses on wall surface area — add ceiling square footage separately if you plan to paint the ceiling too.",
      },
      {
        question: "Should I include waste or extra paint?",
        answer:
          "Yes. Add 10–15% overage for touch-ups, texture, and application loss. The calculator includes a waste setting and rounds recommended purchase up to whole gallons.",
      },
      {
        question: "How many coats should I plan for?",
        answer:
          "Two coats is standard for most color changes. One coat may work over similar color. Dark-to-light transitions often need primer plus two finish coats.",
      },
      {
        question: "Does paint brand affect the estimate?",
        answer:
          "Coverage varies from about 350–400 sq ft per gallon for many interior latex products. Enter the rate listed on your specific can for the best result.",
      },
    ],
  },
  {
    slug: "concrete",
    title: "Concrete",
    name: "Concrete",
    description: "Slabs, footings, bags, and driveway calculators.",
    longDescription:
      "Estimate ready-mix cubic yards or bagged concrete for slabs, patios, footings, and small pours. Compare delivery vs bags before you order.",
    metaTitle: "Concrete Calculators",
    metaDescription:
      "Free concrete calculators for slabs, patios, and footings — cubic yards, bags, and waste allowance included.",
    icon: "🧱",
    calculatorSlugs: ["concrete-calculator", "concrete-bags-calculator"],
    guideSlugs: ["concrete-slab-calculator-guide"],
    updatedAt: "2026-06-22",
    whatThisCategoryHelps: {
      heading: "What concrete calculators help you estimate",
      paragraphs: [
        "Concrete is ordered by volume — cubic yards for ready-mix or bag count for small projects. These calculators convert your slab or pad dimensions into an order quantity with waste for spillage and uneven subgrade.",
      ],
    },
    whichCalculator: {
      heading: "Which calculator should you use?",
      paragraphs: [
        "Choose based on project size and how you plan to purchase material.",
      ],
      listItems: [
        "Concrete Calculator — cubic yards for ready-mix delivery",
        "Concrete Bags Calculator — bag count for post holes, pads, and repairs",
      ],
    },
    commonMistakes: {
      heading: "Common concrete planning mistakes",
      paragraphs: [],
      listItems: [
        "Measuring thickness in feet instead of inches for residential slabs",
        "Ordering exact volume with no waste allowance",
        "Using bags for large pours when ready-mix is cheaper",
        "Ignoring subgrade prep and base material (not included in volume calc)",
        "Pouring without confirming local minimum delivery requirements",
      ],
    },
    howCalcHiveEstimates: {
      heading: "How SmartMaterialCalc estimates concrete volume",
      paragraphs: [
        "Volume equals length × width × thickness converted to feet, then to cubic yards (÷ 27). Bag counts use per-bag yield with waste applied. Recommended orders round up to practical units — 0.1 yd³ for ready-mix or whole bags.",
      ],
    },
    faqs: [
      {
        question: "Should I use the concrete calculator or concrete bags calculator?",
        answer:
          "Use the Concrete Calculator for ready-mix orders over about one cubic yard. Use the Concrete Bags Calculator for small pads, post holes, and patch work under roughly one cubic yard.",
      },
      {
        question: "What is the difference between cubic yards and bags?",
        answer:
          "Ready-mix is sold by the cubic yard and delivered by truck. Bagged mix is sold by the bag with a yield printed on the label — enter that cubic feet value in the bags calculator.",
      },
      {
        question: "How thick should a patio slab be?",
        answer:
          "Residential patios and walkways are commonly 4 inches thick. Driveways and heavy-load areas often use 5–6 inches. Check local codes for your project.",
      },
      {
        question: "How much extra concrete should I order?",
        answer:
          "Add at least 5–10% for spillage, form overfill, and uneven base. Running short during a pour is costly and difficult to fix on site.",
      },
      {
        question: "Does the calculator include rebar or gravel base?",
        answer:
          "No. These tools estimate concrete volume only. Rebar, wire mesh, and compacted base layers are separate materials.",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Flooring",
    name: "Flooring",
    description: "Tile, hardwood, laminate, and vinyl tools.",
    longDescription:
      "Calculate tile counts, flooring box quantities, and waste allowances for hardwood, laminate, vinyl, and ceramic projects. Measure once, order with confidence.",
    metaTitle: "Flooring Calculators",
    metaDescription:
      "Free tile and flooring calculators — square footage, waste factor, and box counts for your install.",
    icon: "🪵",
    calculatorSlugs: ["tile-calculator", "flooring-calculator"],
    guideSlugs: ["tile-installation-waste-factor", "hardwood-flooring-estimate"],
    updatedAt: "2026-06-22",
    whatThisCategoryHelps: {
      heading: "What flooring calculators help you estimate",
      paragraphs: [
        "Flooring materials are sold by the box, square foot, or tile count. SmartMaterialCalc tools convert room dimensions into order quantities with waste for cuts, breakage, and pattern layout.",
      ],
    },
    whichCalculator: {
      heading: "Which calculator should you use?",
      paragraphs: [
        "Tile and sheet/plank flooring use different math — pick the tool that matches your product.",
      ],
      listItems: [
        "Tile Calculator — individual tile count from tile dimensions",
        "Flooring Calculator — square footage and boxes for plank or laminate",
      ],
    },
    commonMistakes: {
      heading: "Common flooring planning mistakes",
      paragraphs: [],
      listItems: [
        "Using 10% waste for diagonal tile layouts that need 15–20%",
        "Forgetting closets and transitions in total square footage",
        "Mixing box coverage from different product lines",
        "Not keeping a spare box for future repairs",
        "Measuring in inches but entering feet in the calculator",
      ],
    },
    howCalcHiveEstimates: {
      heading: "How SmartMaterialCalc estimates flooring materials",
      paragraphs: [
        "Tile count divides floor area by individual tile area plus waste. Flooring boxes use room square footage with waste divided by box coverage from your product label.",
      ],
    },
    faqs: [
      {
        question: "How much flooring waste should I add?",
        answer:
          "Add 10% for straight plank or laminate installs. Use 10–15% for tile on straight layouts and 15–20% for diagonal or complex patterns.",
      },
      {
        question: "Is tile calculated differently from laminate flooring?",
        answer:
          "Yes. Tile is counted by piece based on tile length and width. Laminate and vinyl plank are usually ordered by box using square footage coverage per box.",
      },
      {
        question: "Should I include closets in my measurements?",
        answer:
          "Yes, if you plan to run the same flooring into closets continuously. Measure each connected area and sum the totals.",
      },
      {
        question: "How do I find box coverage?",
        answer:
          "Check the product label or retailer listing — box coverage is listed in square feet and varies by plank size and brand.",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Outdoor",
    name: "Outdoor",
    description: "Gravel, mulch, topsoil, fence, and paver tools.",
    longDescription:
      "Estimate gravel tonnage, mulch bags, topsoil volume, fence materials, and paver counts for driveways, beds, patios, and landscaping projects.",
    metaTitle: "Outdoor & Landscaping Calculators",
    metaDescription:
      "Free outdoor calculators for gravel, mulch, topsoil, fence, and paver projects — volume, weight, and material counts.",
    icon: "🌿",
    calculatorSlugs: [
      "gravel-calculator",
      "mulch-calculator",
      "topsoil-calculator",
      "fence-calculator",
      "paver-calculator",
    ],
    guideSlugs: [
      "gravel-driveway-planning",
      "gravel-depth-guide",
      "mulch-depth-guide",
      "fence-post-spacing-guide",
    ],
    updatedAt: "2026-06-22",
    whatThisCategoryHelps: {
      heading: "What outdoor calculators help you estimate",
      paragraphs: [
        "Outdoor projects span bulk landscape materials, fencing, and hardscape. These calculators convert length, width, and depth into cubic yards, tons, bags, posts, pickets, or paver counts so you can order the right amount from your supplier.",
      ],
    },
    whichCalculator: {
      heading: "Which calculator should you use?",
      paragraphs: [
        "Match the calculator to the material you are buying.",
      ],
      listItems: [
        "Gravel Calculator — cubic yards and tons for driveways and paths",
        "Mulch Calculator — bags or volume for garden beds",
        "Topsoil Calculator — cubic yards for lawns and grading",
        "Fence Calculator — posts, rails, and pickets",
        "Paver Calculator — paver count for patios and walkways",
      ],
    },
    commonMistakes: {
      heading: "Common outdoor project mistakes",
      paragraphs: [],
      listItems: [
        "Using path depth for a driveway that needs thicker gravel",
        "Ordering mulch by bags when bulk delivery is cheaper above ~1 yd³",
        "Ignoring compacted base layers under gravel or pavers",
        "Wrong post spacing leading to sagging fence sections",
        "Skipping waste on pavers and running short at edges",
      ],
    },
    howCalcHiveEstimates: {
      heading: "How SmartMaterialCalc estimates outdoor materials",
      paragraphs: [
        "Bulk materials use volume (length × width × depth) converted to cubic yards or cubic feet, with density for tonnage where needed. Fence and paver tools use spacing and module width math with standard waste rounding.",
      ],
    },
    faqs: [
      {
        question: "How do I estimate gravel, mulch, and soil?",
        answer:
          "Measure area length and width in feet and depth in inches. Each calculator converts to the right unit — tons for gravel, bags or cubic yards for mulch, cubic yards for topsoil.",
      },
      {
        question: "Should I buy bulk or bagged landscape materials?",
        answer:
          "Bagged mulch and soil suit small beds. Bulk delivery by the cubic yard is usually cheaper for projects over about one cubic yard.",
      },
      {
        question: "How deep should gravel be for a driveway?",
        answer:
          "Driveways commonly need 4–6 inches of gravel over a compacted base. Paths may only need 2–3 inches.",
      },
      {
        question: "How deep should mulch be in garden beds?",
        answer:
          "Apply 2–3 inches for maintenance and weed suppression. New beds may use 3–4 inches initially.",
      },
      {
        question: "What post spacing should I use for a fence?",
        answer:
          "Wood and vinyl privacy fences typically use posts every 6–8 feet. The Fence Calculator uses your spacing input to count posts and sections.",
      },
      {
        question: "Do paver calculators include a base layer?",
        answer:
          "No. Paver calculators estimate paver count only. Sand and gravel base materials are ordered separately.",
      },
    ],
  },
  {
    slug: "lumber",
    title: "Lumber",
    name: "Lumber",
    description: "Framing, decking, drywall, and stair estimators.",
    longDescription:
      "Estimate decking linear feet, drywall sheets, stair geometry, and structural layout inputs for carpentry and finish projects.",
    metaTitle: "Lumber & Carpentry Calculators",
    metaDescription:
      "Free lumber calculators for decking, drywall, and stairs — linear feet, sheets, and layout estimates.",
    icon: "🪚",
    calculatorSlugs: ["drywall-calculator", "deck-calculator", "stair-calculator"],
    guideSlugs: ["deck-board-spacing-guide", "drywall-sheet-size-guide"],
    updatedAt: "2026-06-22",
    whatThisCategoryHelps: {
      heading: "What lumber calculators help you estimate",
      paragraphs: [
        "Carpentry projects need planning estimates for decking, drywall sheets, or stair layout dimensions. These tools translate project measurements into material lists before you visit the lumber yard.",
      ],
    },
    whichCalculator: {
      heading: "Which calculator should you use?",
      paragraphs: [
        "Each tool matches a specific carpentry or finish task.",
      ],
      listItems: [
        "Deck Calculator — linear feet of decking boards",
        "Drywall Calculator — sheet count for walls",
        "Stair Calculator — risers, treads, and total run",
      ],
    },
    commonMistakes: {
      heading: "Common lumber project mistakes",
      paragraphs: [],
      listItems: [
        "Forgetting board gap when calculating deck coverage",
        "Drywall estimates that ignore ceiling or openings",
        "Stair riser heights that do not divide evenly into total rise",
        "Ordering exact linear feet with no cut waste",
        "Mixing nominal and actual board dimensions",
      ],
    },
    howCalcHiveEstimates: {
      heading: "How SmartMaterialCalc estimates lumber materials",
      paragraphs: [
        "Decking uses deck area divided by effective board width including gap. Drywall divides wall area by sheet size with waste. Stairs divide total rise into even riser heights and calculate tread count from your tread depth.",
      ],
    },
    faqs: [
      {
        question: "How do I estimate deck boards or fence materials?",
        answer:
          "Use the Deck Calculator for decking linear feet based on board width and gap. For fence posts and pickets, use the Outdoor Fence Calculator.",
      },
      {
        question: "Why do post spacing and board gaps matter?",
        answer:
          "Spacing determines how many posts and sections you need. Board gap affects how many decking boards cover each square foot of deck area.",
      },
      {
        question: "How much extra decking should I buy?",
        answer:
          "Add 10% waste for straight runs to cover cuts, defects, and board length mismatches.",
      },
      {
        question: "Does the drywall calculator include ceilings?",
        answer:
          "It estimates wall surface area from room perimeter and height. Add ceiling area separately if needed.",
      },
      {
        question: "Are stair results code-compliant?",
        answer:
          "The Stair Calculator provides layout math only. Verify riser height and tread depth against local building codes before construction.",
      },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    name: "Roofing",
    description: "Shingle, underlayment, and pitch calculators.",
    longDescription:
      "Estimate roofing squares from footprint and pitch-adjusted area, with waste included for re-roof planning.",
    metaTitle: "Roofing Calculators",
    metaDescription:
      "Free roofing calculator — estimate squares and pitch-adjusted roof area for your project.",
    icon: "🏠",
    calculatorSlugs: ["roofing-calculator"],
    guideSlugs: ["roofing-squares-explained"],
    updatedAt: "2026-06-22",
    whatThisCategoryHelps: {
      heading: "What roofing calculators help you estimate",
      paragraphs: [
        "Roofing is ordered in squares (100 sq ft of coverage). Sloped roofs need more material than flat footprint area. The Roofing Calculator adjusts for pitch and waste so you order enough shingles and underlayment.",
      ],
    },
    whichCalculator: {
      heading: "Which calculator should you use?",
      paragraphs: [
        "Use the Roofing Calculator for shingle and underlayment estimates from roof dimensions and pitch multiplier.",
      ],
      listItems: [
        "Roofing Calculator — squares with pitch adjustment and waste",
      ],
    },
    commonMistakes: {
      heading: "Common roofing planning mistakes",
      paragraphs: [],
      listItems: [
        "Using flat footprint without pitch multiplier",
        "Ignoring waste for hips, valleys, and starter courses",
        "Confusing bundles per square for different shingle products",
        "Not accounting for dormers and complex roof planes",
        "Ordering exact squares with zero waste on a cut-up roof",
      ],
    },
    howCalcHiveEstimates: {
      heading: "How SmartMaterialCalc estimates roofing materials",
      paragraphs: [
        "Flat area is length × width. Adjusted area multiplies by your pitch factor. Squares equal adjusted area ÷ 100, with waste applied and results rounded to practical order units.",
      ],
    },
    faqs: [
      {
        question: "What is a roofing square?",
        answer:
          "One roofing square covers 100 square feet of roof area. Shingles are typically sold in bundles — usually three bundles per square for standard three-tab products, but check your product.",
      },
      {
        question: "How does pitch affect roof area?",
        answer:
          "Steeper roofs have more surface area than the flat footprint. A pitch multiplier adjusts footprint area — for example, 1.12× for a moderate 6/12 pitch.",
      },
      {
        question: "How much waste should I add for roofing?",
        answer:
          "Simple gable roofs may need 10% waste. Complex roofs with valleys and hips often need 12–15% or more.",
      },
      {
        question: "Does the calculator include underlayment?",
        answer:
          "The tool estimates roofing squares from area, which applies to both shingles and underlayment ordered by the square. Flashing and drip edge are separate.",
      },
    ],
  },
];

export const categories: Category[] = categoryDefinitions.map((def) => ({
  ...def,
  calculatorCount: def.calculatorSlugs.length,
}));

export const filterChips = ["All", ...categories.map((c) => c.name)];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryByName(name: string): Category | undefined {
  return categories.find((category) => category.name === name);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((category) => category.slug);
}

export function getCategorySlugByName(name: string): string | undefined {
  return getCategoryByName(name)?.slug;
}
