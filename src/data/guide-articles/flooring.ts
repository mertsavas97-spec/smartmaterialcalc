import type { GuideArticle } from "@/types/guide-article";

export const flooringGuideArticle: GuideArticle = {
  slug: "hardwood-flooring-estimate",
  calculatorSlug: "flooring-calculator",
  relatedGuideSlugs: ["tile-installation-waste-factor"],
  relatedCalculatorSlugs: ["tile-calculator"],
  intro:
    "Hardwood flooring transforms a room, but the project starts long before the first plank goes down — it starts with an accurate square footage estimate. Order too little and you halt installation while waiting for a matching batch that may not exist. Order too much and you are storing expensive flooring that the retailer may not take back once the boxes are opened. Measuring rooms sounds simple, but closets, hallways, stair noses, and irregular layouts trip up even experienced DIYers. Add a waste factor for cuts and defects, and you have a reliable order quantity. This guide walks through professional measuring techniques, overage recommendations by layout type, and the details that separate a smooth install from a frustrating one.",
  whyItMatters: {
    heading: "Why precise flooring estimates save your project",
    paragraphs: [
      "Hardwood flooring costs $3 to $12 per square foot for material alone, depending on species, grade, and plank width. On a 400-square-foot open plan, a 10 percent measuring error is 40 square feet — potentially $200 to $500 in unnecessary material or a project-stopping shortage. Engineered and solid hardwood often ship from specific production runs, so getting more of the exact same shade weeks later is not guaranteed.",
      "Waste factor exists because every room has cuts. The last row against the wall is almost never a full-width plank. Doorways, floor registers, and closet openings each consume partial boards. Diagonal and herringbone layouts generate significantly more offcut waste than straight runs parallel to the longest wall.",
      "Accurate estimates also help you plan underlayment, transition strips, and adhesive. These accessories are ordered based on linear feet and square footage derived from the same room measurements. Getting the floor area right cascades into correct quantities for every related material.",
    ],
  },
  sections: [
    {
      heading: "Measure each room and connected space",
      paragraphs: [
        "Measure length and width in feet at the longest points of each room. Multiply for square footage. For L-shaped or T-shaped spaces, divide into rectangles, calculate each section, and sum the totals.",
        "Include closets, alcoves, and pantry floors that will receive the same flooring. Measure inside the closet walls the same way as the main room. Hallways connecting floored rooms should be included in the total — they consume planks and generate cuts just like any other space.",
        "For open floor plans where the same flooring runs through kitchen, dining, and living areas without transitions, measure the entire connected footprint as one area rather than room by room. This avoids double-counting shared boundaries.",
      ],
    },
    {
      heading: "Handle stairs, noses, and landings",
      paragraphs: [
        "Each stair tread is a separate rectangle: measure the tread depth (front to back) and width. Multiply and add all treads together. One flight of 13 stairs at 10 inches deep and 36 inches wide adds roughly 32 square feet.",
        "Stair noses and landing transitions use specialized pieces sold by the linear foot, not square foot. Measure the front edge of each tread for nose length and add landing perimeters separately. Budget one extra nose piece for miscuts.",
        "If you are not flooring the stairs, stop your room measurement at the top tread and plan a transition strip. Do not include stair area in your plank order unless you are installing flooring on the treads.",
      ],
    },
    {
      heading: "Apply the right waste factor",
      paragraphs: [
        "Straight lay parallel to the longest wall: 10 percent overage. This covers standard end-of-row cuts, a few defective boards, and the starter row that gets tongue-cut off.",
        "Diagonal or herringbone layout: 15 percent overage. Angled cuts at walls and transitions waste more material because offcuts from one angle rarely fit elsewhere.",
        "Mixed-width plank installations or rooms with many jogs, columns, and floor vents: 12 to 15 percent. Each obstacle adds two cuts per row crossing it. Wide plank (over 5 inches) may have higher defect rates — add 2 to 3 percent extra.",
      ],
    },
    {
      heading: "Convert square footage to boxes",
      paragraphs: [
        "Box coverage is printed on every carton, typically 15 to 30 square feet depending on plank dimensions. Divide your adjusted square footage (net area plus waste) by box coverage and round up to whole boxes.",
        "Example: 350 square feet with 10 percent waste equals 385 square feet needed. If each box covers 22 square feet, 385 ÷ 22 = 17.5 boxes. Order 18 boxes.",
        "Check whether the manufacturer sells partial boxes or only full cartons. Some premium lines require ordering by the pallet for the best price, which may mean buying slightly more than calculated.",
      ],
    },
    {
      heading: "Acclimation, underlayment, and accessories",
      paragraphs: [
        "Hardwood and engineered flooring must acclimate in the installation room for 48 to 72 hours before laying. Stack boxes flat with spacers between them for air circulation. Do not open every box — you need sealed boxes for the return policy if counts are off.",
        "Underlayment adds cost but not square footage to your plank order. Calculate underlayment using the same net square footage as the flooring. Buy one extra roll to cover miscuts and overlap at seams.",
        "Transition strips, reducers, and T-moldings are measured in linear feet at each doorway and flooring type change. Count every doorway where the new floor meets tile, carpet, or a lower surface and add 10 percent to linear footage for cuts.",
      ],
    },
  ],
  examples: [
    {
      title: "Three-bedroom main floor",
      scenario:
        "Living room 15×18 (270 sq ft), kitchen 12×14 (168 sq ft), hallway 4×16 (64 sq ft), two closets totaling 24 sq ft. Straight lay, 10 percent waste. Boxes cover 20 sq ft.",
      outcome:
        "Net area: 526 sq ft. With 10 percent waste: 579 sq ft. At 20 sq ft per box: 29 boxes. Order 29 boxes and one extra for repairs. Buy underlayment for 526 sq ft plus one roll overage.",
    },
    {
      title: "Master bedroom with diagonal lay",
      scenario:
        "A 14×16 bedroom (224 sq ft) plus 6×8 walk-in closet (48 sq ft). Diagonal layout, 15 percent waste. Boxes cover 22 sq ft.",
      outcome:
        "Net area: 272 sq ft. With 15 percent waste: 313 sq ft. 313 ÷ 22 = 14.2 boxes. Order 15 boxes. Diagonal layout requires more careful planning at walls — expect wider cut planks at two walls.",
    },
    {
      title: "Single room with floor vents",
      scenario:
        "A home office 11×13 (143 sq ft) with three floor registers and one closet (12 sq ft). Straight lay, 10 percent waste.",
      outcome:
        "Net area: 155 sq ft. With 10 percent waste: 170.5 sq ft. Registers add minor extra cuts but are covered by standard waste. At 18 sq ft per box, order 10 boxes covering 180 sq ft.",
    },
  ],
  commonMistakes: [
    "Measuring wall to wall without including closet floors and hallway sections connected to the install area.",
    "Subtracting large areas covered by kitchen islands or built-ins — the flooring runs under them and you cut around legs during install.",
    "Using a 5 percent waste factor copied from tile guides — hardwood standard is 10 percent minimum for straight lay.",
    "Ordering by square footage instead of whole boxes, ending up one partial box short on the final row.",
    "Forgetting to acclimate flooring before install, then discovering boards have expanded and no longer fit with proper expansion gaps.",
    "Not keeping one sealed box after installation for color-matched future repairs.",
  ],
  recommendedAssumptions: [
    "Measure all connected spaces that will receive the same flooring product in one continuous install.",
    "Use 10 percent waste for straight lay and 15 percent for diagonal or herringbone patterns.",
    "Round up to whole boxes — never round down to the nearest box coverage.",
    "Use box coverage from the product label, not plank dimensions alone, because labels account for typical plank lengths per box.",
    "Keep one unopened box after install for future plank replacements.",
    "Buy underlayment and transition strips based on the same room measurements used for flooring.",
  ],
  faqs: [
    {
      question: "Should I include areas under cabinets and islands?",
      answer:
        "For floating and nail-down installs, measure the full room including under cabinets if flooring slides beneath toe kicks. For glue-down in kitchens, some installers stop at cabinet lines. When in doubt, include the full area — waste factor covers cut pieces around obstacles.",
    },
    {
      question: "How much extra flooring should I keep for repairs?",
      answer:
        "Keep one full unopened box if possible. For large installs, two boxes is ideal. Store them flat in the original packaging in a climate-controlled space. Label with product name, color, and install date.",
    },
    {
      question: "Does engineered hardwood use the same waste factor as solid?",
      answer:
        "Yes. Both follow the same 10 percent straight lay and 15 percent diagonal guidelines. Engineered planks may have slightly higher defect rates in budget lines — inspect boards before installing and swap out any with finish flaws.",
    },
    {
      question: "How do I measure for open floor plans?",
      answer:
        "Treat the entire connected area as one rectangle or composite shape. Do not subtract interior walls between kitchen and living room if the same flooring runs through both. Measure the outer perimeter dimensions.",
    },
    {
      question: "What about expansion gaps at walls?",
      answer:
        "Expansion gaps of 1/4 to 1/2 inch at walls are standard and covered by baseboard trim. They do not reduce your order quantity — the waste factor accounts for the small amount of plank length lost to gaps.",
    },
    {
      question: "Can I combine leftover planks from different rooms?",
      answer:
        "Only if the product, lot, and install date match. Using mismatched lots in the same room can create subtle color variation. Leftover planks from the same order are fine for closets or small rooms.",
    },
  ],
  cta: {
    title: "Estimate hardwood flooring square footage",
    description:
      "Enter room dimensions and layout type to get square footage, waste-adjusted totals, and recommended box count.",
    calculatorSlug: "flooring-calculator",
    buttonText: "Open Flooring Calculator",
  },
  internalLinks: [
    { href: "/calculators/flooring-calculator", label: "Flooring Calculator" },
    { href: "/calculators/tile-calculator", label: "Tile Calculator" },
    { href: "/guides/tile-installation-waste-factor", label: "Tile Waste Factor Guide" },
    { href: "/categories/flooring", label: "Flooring calculators" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
