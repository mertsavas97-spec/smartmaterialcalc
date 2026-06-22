import type { GuideArticle } from "@/types/guide-article";

export const deckBoardSpacingGuideArticle: GuideArticle = {
  slug: "deck-board-spacing-guide",
  calculatorSlug: "deck-calculator",
  relatedGuideSlugs: ["fence-post-spacing-guide"],
  relatedCalculatorSlugs: ["fence-calculator", "concrete-bags-calculator"],
  intro:
    "Deck board spacing affects how many linear feet of decking you need, how the surface drains, and how the finished deck handles seasonal wood movement. Gap too narrow and boards may buckle when they expand in humid weather. Gap too wide and the deck feels uneven underfoot while wasting material on fewer boards per row. Most pressure-treated and composite decks use an eighth-inch to quarter-inch gap between boards, but the right spacing depends on board width, material type, and whether you are using hidden fasteners or face screws. This guide explains how spacing fits into material estimates, how to plan for expansion, and how to avoid the ordering mistakes that leave you one board short on the final row.",
  whyItMatters: {
    heading: "Why board spacing changes your decking order",
    paragraphs: [
      "Decking is sold by the linear foot or in standard board lengths — commonly 8, 12, or 16 feet. Your order quantity comes from deck area divided by effective board coverage per row, and that coverage includes the gap between boards. A 5.5-inch board with a quarter-inch gap covers about 5.75 inches per row. Ignore the gap and you under-order by roughly 4 percent — enough to come up short on a large deck.",
      "Spacing also affects drainage and drying. Tight gaps trap moisture between boards, which accelerates rot on natural wood and can void composite manufacturer warranties. Wider gaps improve airflow but may feel less comfortable for bare feet and can allow small debris to collect.",
      "Hidden fastener systems often require a specific gap — usually 1/8 inch — because the clip determines the spacing. Face-screwed boards give you more flexibility, but you still need a consistent gap for a professional appearance and predictable material math.",
    ],
  },
  sections: [
    {
      heading: "Standard gap sizes by decking material",
      paragraphs: [
        "Pressure-treated southern yellow pine: 1/8 to 1/4 inch gap when installed dry. If boards are wet at install, use a thinner gap — they shrink as they dry. Many installers use a 16d nail (about 1/8 inch) as a temporary spacer.",
        "Cedar and redwood: 1/4 inch is common for kiln-dried boards. These species move more with humidity changes than composite, so consistent spacing prevents binding.",
        "Composite and PVC decking: follow manufacturer specs — typically 1/8 to 3/16 inch. Deviating from specified spacing can void the warranty and cause edge mushrooming at fasteners.",
        "Hardwood decking (ipe, tigerwood): 1/8 inch is typical. Dense tropical hardwood moves less than softwood but still needs room for thermal expansion in direct sun.",
      ],
    },
    {
      heading: "How spacing fits the material formula",
      paragraphs: [
        "Effective board module equals actual board width plus gap, converted to feet. Example: 5.5-inch board plus 0.25-inch gap equals 5.75 inches, or 0.479 feet per row module.",
        "Linear feet of decking equals deck area in square feet divided by board module in feet. A 12×16 deck (192 sq ft) with the example module needs about 401 linear feet before waste.",
        "Add 10 percent waste for straight runs — more if the deck has many cutouts, angles, or stairs. Round up to the next full board length available at your supplier to minimize seams.",
      ],
    },
    {
      heading: "Planning board lengths and butt joints",
      paragraphs: [
        "Stagger butt joints across joists — never align end joints on consecutive rows. A common pattern offsets joints by at least two joist spaces for structural and visual reasons.",
        "Choose board lengths that minimize waste on your deck dimensions. A 12-foot-wide deck may work well with 16-foot boards run lengthwise, while a 10-foot depth may favor 12-foot boards with fewer cuts.",
        "Calculate linear feet first, then convert to board count by dividing by your chosen board length. Buying all one length simplifies ordering but may waste more than mixing lengths.",
      ],
    },
    {
      heading: "Hidden fasteners vs face screws",
      paragraphs: [
        "Hidden clip systems require a specific edge gap and often a starter clip at the house wall. Order 10 to 15 percent extra clips — they break during install and manufacturers specify clips per square foot.",
        "Face screws allow adjustable spacing but need pre-drilling on hardwood and composite to prevent splitting. Two screws per joist crossing is standard; use joist spacing (usually 16 inches on center) to estimate fastener count separately from board linear feet.",
        "Whether you use clips or screws, include the gap in your linear foot estimate. The Deck Calculator accepts board width and gap as inputs for this reason.",
      ],
    },
    {
      heading: "Seasonal movement and initial install",
      paragraphs: [
        "Install boards when moisture content is typical for your climate if using natural wood. Wet boards installed with a tight gap will open up as they dry — sometimes more than planned.",
        "Composite boards expand and contract with temperature more than moisture. Install in moderate temperatures when possible, and follow the manufacturer's end-gap requirements at board ends abutting walls or trim.",
        "Check board ends for square before installing. Cumulative error from slightly long boards reduces the gap on the last few rows — plan the final row width before you reach it.",
      ],
    },
  ],
  examples: [
    {
      title: "Standard rectangular deck",
      scenario:
        "A 12×16 foot deck (192 sq ft), 5.5-inch boards with 1/4-inch gap, 10 percent waste.",
      outcome:
        "Board module: 5.75 in = 0.479 ft. Linear feet: 192 ÷ 0.479 ≈ 401 ft. With 10% waste: 441 ft. At 16-ft boards, order 28 boards (448 ft).",
    },
    {
      title: "Composite deck with hidden fasteners",
      scenario:
        "A 10×14 foot deck (140 sq ft), 5.5-inch composite with 1/8-inch gap per manufacturer spec, 10 percent waste.",
      outcome:
        "Board module: 5.625 in = 0.469 ft. Linear feet: 140 ÷ 0.469 ≈ 299 ft. With waste: 329 ft. Order 21 sixteen-foot boards and clip fasteners per manufacturer chart for 140 sq ft plus 10 percent.",
    },
    {
      title: "Deck with picture frame border",
      scenario:
        "Main field 11×13 ft plus a single-board picture frame border on all sides using the same board width.",
      outcome:
        "Calculate field area separately from border linear feet. Field: 143 sq ft. Border: roughly 2×(11+13) = 48 linear feet plus corners. Sum both before applying waste — border cuts often generate more offcuts than the field.",
    },
  ],
  commonMistakes: [
    "Calculating board count using nominal width only and ignoring the gap between boards.",
    "Using the same gap for wet pressure-treated boards as for kiln-dried composite.",
    "Ordering exact linear feet with zero waste, then coming up short on the last row.",
    "Forgetting that picture-frame borders and stair treads add linear feet beyond the main field.",
    "Mixing board widths on the same surface without recalculating module coverage.",
    "Installing composite without checking manufacturer gap requirements.",
  ],
  recommendedAssumptions: [
    "Use 1/4-inch gap for most pressure-treated and cedar decking unless boards are wet at install.",
    "Use manufacturer-specified gap for composite — typically 1/8 inch.",
    "Add 10 percent waste for straight rectangular decks; 12 to 15 percent for decks with cutouts or stairs.",
    "Include gap in the board module when estimating linear feet.",
    "Verify joist spacing (typically 16 inches on center) before ordering — it affects fastener count separately.",
    "Use the Deck Calculator to test different board widths and gap settings before ordering.",
  ],
  faqs: [
    {
      question: "What gap should I leave between deck boards?",
      answer:
        "Most wood decks use 1/8 to 1/4 inch. Composite usually requires 1/8 inch per the manufacturer. Use a consistent spacer throughout the install for even gaps.",
    },
    {
      question: "Does board gap affect how much decking I need to buy?",
      answer:
        "Yes. Wider gaps mean fewer boards per row, which increases total linear feet needed. Always add gap to board width when calculating coverage.",
    },
    {
      question: "Should I butt boards tight and let them gap naturally?",
      answer:
        "Not for most installs. Planned spacing prevents binding when boards expand. Wet pressure-treated boards shrink — if installed tight, gaps may become too wide later.",
    },
    {
      question: "How much extra decking should I order?",
      answer:
        "Add 10 percent for simple rectangular decks. Complex shapes, stairs, and picture-frame borders may need 12 to 15 percent.",
    },
    {
      question: "Do hidden fasteners change spacing?",
      answer:
        "Yes. Clip systems set a fixed gap — usually 1/8 inch. Order the clip brand matched to your decking profile and follow their spacing chart.",
    },
  ],
  cta: {
    title: "Estimate decking linear feet",
    description:
      "Enter deck dimensions, board width, and gap to get a linear foot estimate with typical waste included.",
    calculatorSlug: "deck-calculator",
    buttonText: "Open Deck Calculator",
  },
  internalLinks: [
    { href: "/calculators/deck-calculator", label: "Deck Calculator" },
    { href: "/calculators/fence-calculator", label: "Fence Calculator" },
    { href: "/calculators/concrete-bags-calculator", label: "Concrete Bags Calculator" },
    { href: "/guides/fence-post-spacing-guide", label: "Fence Post Spacing Guide" },
    { href: "/categories/lumber", label: "Lumber calculators" },
    { href: "/calculators", label: "All calculators" },
  ],
};
