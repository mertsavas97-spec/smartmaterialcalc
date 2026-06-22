import type { GuideArticle } from "@/types/guide-article";

export const roofingGuideArticle: GuideArticle = {
  slug: "roofing-squares-explained",
  calculatorSlug: "roofing-calculator",
  relatedGuideSlugs: [],
  relatedCalculatorSlugs: [],
  intro:
    "Roofing materials are measured and sold in squares — a unit unique to the roofing trade that confuses homeowners planning their first re-roof. One square equals 100 square feet of roof surface, not 100 square feet of floor area inside your home. Because roofs have pitch, overhangs, dormers, and valleys, the roof surface area is always larger than the building footprint. Understanding squares is essential for comparing contractor quotes, ordering shingles and underlayment, and evaluating whether a price per square is fair. This guide explains what a roofing square is, how to measure roof area accounting for pitch, how waste factors apply to shingle bundles, and the practical steps for estimating materials on common roof shapes.",
  whyItMatters: {
    heading: "Why roofing squares matter for accurate estimates",
    paragraphs: [
      "Contractors quote re-roofing projects by the square — typically $400 to $800 per square installed for asphalt shingles, depending on region, pitch, and tear-off requirements. A 2,000-square-foot house might have 25 to 30 squares of actual roof area. Misunderstanding the unit means misreading quotes by a factor that can represent thousands of dollars.",
      "Shingles are packaged in bundles, and it takes three bundles to cover one square for standard three-tab asphalt shingles. Architectural (dimensional) shingles sometimes require four bundles per square because they are thicker. Knowing your square count tells you exactly how many bundles to order and lets you verify the supplier delivery against your calculation.",
      "Underlayment, ice and water shield, drip edge, ridge cap, and ventilation components are all ordered based on square footage derived from the same roof measurements. Getting the square count right cascades into correct quantities for every material on the job.",
    ],
  },
  sections: [
    {
      heading: "What is a roofing square",
      paragraphs: [
        "One roofing square equals 100 square feet of roof surface area. The term comes from the practice of dividing a roof into 10-by-10-foot sections for estimation. Twenty squares means 2,000 square feet of roof — not 2,000 square feet of living space.",
        "Squares are used exclusively in roofing and siding trades in the United States. Shingles, underlayment rolls, and most roofing accessories are priced and specified per square or per the fraction of a square they cover.",
        "Three bundles of standard three-tab asphalt shingles cover one square (100 sq ft). Architectural shingles typically require four bundles per square. Always check the coverage printed on the bundle wrapper for your specific product.",
      ],
    },
    {
      heading: "Measure footprint and apply pitch factor",
      paragraphs: [
        "Start with the building footprint — the length and width of each roof section as if viewed from directly above. For a simple gable roof, multiply length by width for each side (they are usually equal) and add both sides together.",
        "Roof pitch — the rise over a 12-inch run — increases actual surface area over the footprint. A 4/12 pitch (4 inches rise per 12 inches run) adds about 5 percent to footprint area. A 6/12 pitch adds about 12 percent. A 12/12 pitch (45 degrees) adds about 41 percent.",
        "Use a pitch multiplier table or our roofing calculator to apply the factor. Multiply footprint area by the pitch multiplier to get actual roof surface area. Then divide by 100 to convert to squares.",
      ],
    },
    {
      heading: "Account for roof features and complexity",
      paragraphs: [
        "Dormers, hips, valleys, and gables add surface area beyond the simple rectangle calculation. Measure each dormer face separately and add to the total. Hip roofs have four triangular or trapezoidal sections instead of two rectangles.",
        "Overhangs (eaves and rakes) extend the roof beyond the wall line. Include overhang width in your footprint measurement — typically 12 to 24 inches beyond the exterior wall on each side.",
        "Complex roofs with multiple intersecting planes, turrets, or skylights benefit from a scaled drawing or satellite measurement tool. For DIY estimation, break the roof into simple shapes, calculate each, and sum the totals.",
      ],
    },
    {
      heading: "Waste factor for shingles",
      paragraphs: [
        "Simple gable roofs with few valleys: 10 percent waste. This covers cutting waste at rakes, valleys, and the starter course.",
        "Hip roofs and roofs with multiple valleys and dormers: 12 to 15 percent waste. Each valley and hip generates triangular cutoffs that cannot be reused.",
        "Roofs with complex architecture, multiple pitch changes, or skylights: 15 to 20 percent waste. Apply the waste factor to your calculated square count before converting to bundles.",
        "Example: 22 squares of roof area with 10 percent waste equals 24.2 squares. Round up to 25 squares. At 3 bundles per square, order 75 bundles of three-tab shingles.",
      ],
    },
    {
      heading: "Related materials ordered by the square",
      paragraphs: [
        "Underlayment (felt or synthetic): One roll typically covers 4 to 10 squares depending on roll width and overlap pattern. Order based on total squares plus 10 percent for overlap at horizontal seams.",
        "Ice and water shield: Required by code in many climates at eaves (typically 24 inches up from the edge) and in valleys. Calculate linear feet of eaves and valleys separately — this is not a per-square calculation.",
        "Ridge cap shingles: Measure total ridge and hip length in linear feet. Each bundle of ridge cap covers about 25 to 35 linear feet depending on exposure and shingle profile.",
        "Drip edge, starter strip, and ventilation: Ordered by linear feet of eaves, rakes, and ridge. Count these separately from the square-based shingle and underlayment order.",
      ],
    },
  ],
  examples: [
    {
      title: "Simple gable roof ranch",
      scenario:
        "A single-story ranch, 30 by 50 feet footprint, 4/12 pitch gable roof with 1-foot overhangs on all sides. Standard three-tab shingles.",
      outcome:
        "Footprint with overhangs: 32 × 52 = 1,664 sq ft (both sides combined, since gable roof has two equal slopes totaling the full footprint × pitch factor). At 4/12 pitch, multiplier is about 1.054. Roof area: 1,664 × 1.054 = 1,754 sq ft = 17.5 squares. With 10 percent waste: 19.3 squares. Order 20 squares (60 bundles of three-tab).",
    },
    {
      title: "Two-story colonial with dormers",
      scenario:
        "Main roof 28 × 38 feet, 8/12 pitch, plus two dormers each 6 × 8 feet at 6/12 pitch. Architectural shingles requiring 4 bundles per square.",
      outcome:
        "Main roof footprint: 28 × 38 = 1,064 sq ft per side × 2 = 2,128 sq ft. At 8/12 pitch (multiplier ~1.202): 2,558 sq ft. Dormers: 2 × (6 × 8) = 96 sq ft × 1.118 (6/12) = 107 sq ft. Total: 2,665 sq ft = 26.7 squares. With 15 percent waste for complexity: 30.7 squares. Order 31 squares (124 bundles of architectural shingles).",
    },
    {
      title: "Garage roof replacement",
      scenario:
        "A detached two-car garage, 24 × 24 feet, 5/12 pitch hip roof. Three-tab shingles, simple layout.",
      outcome:
        "Hip roof footprint: 24 × 24 = 576 sq ft total surface (hip roofs cover the full footprint once, not doubled like gable). At 5/12 pitch (multiplier ~1.083): 624 sq ft = 6.24 squares. With 12 percent waste for hip cuts: 7 squares. Order 7 squares (21 bundles). Add ridge cap for four hip ridges totaling about 68 linear feet.",
    },
  ],
  commonMistakes: [
    "Confusing roofing squares with floor area squares — a 2,000 sq ft house does not have 20 squares of roof.",
    "Measuring footprint without adding overhang at eaves and rakes, undercounting by 10 to 15 percent.",
    "Ignoring pitch multiplier and calculating flat footprint area, which undercounts shingle needs on any roof steeper than 2/12.",
    "Doubling footprint area for a hip roof the same way as a gable — hip roofs have one continuous surface, not two separate sides.",
    "Using three bundles per square for architectural shingles that require four bundles per square on the product label.",
    "Forgetting waste factor for valleys, hips, and cuts, then running short of shingles on the final course.",
  ],
  recommendedAssumptions: [
    "One roofing square equals 100 square feet of roof surface area.",
    "Standard three-tab shingles require 3 bundles per square; architectural shingles typically require 4 bundles.",
    "Apply pitch multiplier to footprint area before converting to squares — never use flat footprint alone.",
    "Add 10 percent waste for simple gable roofs and 15 percent for hip roofs or complex layouts.",
    "Include eave and rake overhangs (typically 12 to 24 inches) in footprint measurements.",
    "Round up to the next whole square when ordering — partial bundles are not sold.",
  ],
  faqs: [
    {
      question: "How many bundles of shingles do I need per square?",
      answer:
        "Standard three-tab asphalt shingles require 3 bundles to cover one square (100 sq ft). Most architectural (dimensional) shingles require 4 bundles per square. Check the coverage statement on your specific product's bundle wrapper.",
    },
    {
      question: "How do I measure roof pitch?",
      answer:
        "From the attic, measure vertical rise over 12 inches of horizontal run using a level and tape measure. From the ground, use a pitch gauge or estimate from known rafter angle. Our roofing calculator includes common pitch multipliers so you can select your pitch without manual math.",
    },
    {
      question: "Does a higher pitch roof need more shingles?",
      answer:
        "Yes. Steeper roofs have more surface area than the flat footprint. A 12/12 pitch roof has about 41 percent more area than the same footprint at flat. Pitch multiplier accounts for this increase in your square count.",
    },
    {
      question: "What is a typical cost per square installed?",
      answer:
        "Asphalt shingle installation averages $400 to $800 per square depending on region, tear-off requirements, deck repair, and shingle quality. Material alone runs $100 to $200 per square. Always get multiple quotes and verify that each quote uses the same square count.",
    },
    {
      question: "How does a roof square relate to underlayment rolls?",
      answer:
        "Standard synthetic underlayment rolls cover 10 squares each with proper overlap. Felt paper rolls cover 4 squares each. Divide your total squares (with waste) by roll coverage to get the number of rolls needed.",
    },
    {
      question: "Can I use satellite measurement tools for square count?",
      answer:
        "Yes. Google Earth, EagleView, and several roofing apps measure roof area from aerial imagery and apply pitch factors automatically. These tools are accurate within 2 to 3 percent for standard roofs and save time on complex layouts. Cross-check with a manual calculation for verification.",
    },
  ],
  cta: {
    title: "Calculate roofing squares for your project",
    description:
      "Enter roof dimensions and pitch to get square footage, square count, and bundle estimates with waste factor included.",
    calculatorSlug: "roofing-calculator",
    buttonText: "Open Roofing Calculator",
  },
  internalLinks: [
    { href: "/calculators/roofing-calculator", label: "Roofing Calculator" },
    { href: "/categories/roofing", label: "Roofing calculators" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
