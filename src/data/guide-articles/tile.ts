import type { GuideArticle } from "@/types/guide-article";

export const tileGuideArticle: GuideArticle = {
  slug: "tile-installation-waste-factor",
  calculatorSlug: "tile-calculator",
  relatedGuideSlugs: ["hardwood-flooring-estimate"],
  relatedCalculatorSlugs: ["flooring-calculator"],
  intro:
    "Tile is sold by the box, and every box covers a fixed number of square feet printed on the label. The challenge is figuring out how many boxes you need after accounting for cuts, breakage, and the layout pattern you choose. Buy too few tiles and you face a production hold while you hunt for the same lot number — if it even still exists. Buy too many and you are stuck with partial boxes that retailers rarely accept for return. The waste factor is the percentage you add on top of net floor area to cover these losses. Straight grid layouts need less extra than diagonal herringbone or rooms full of odd angles. This guide explains how to calculate tile quantity, choose the right waste factor, and order with confidence for any room in your home.",
  whyItMatters: {
    heading: "Why waste factor makes or breaks a tile job",
    paragraphs: [
      "Tile manufacturing runs in batches called lots or shades. Even the same SKU can vary slightly in color and caliber between lots. If you run short and buy a new batch months later, the mismatch is visible on the floor — especially with large-format porcelain or natural stone where each tile covers significant area.",
      "Cuts consume more tile than many DIYers expect. A 12-inch tile cut diagonally for a border still uses a full tile even though only half appears on the floor. Herringbone and chevron patterns produce triangular offcuts that cannot be reused elsewhere. A bathroom with a diagonal layout can waste 20 percent of purchased tile compared to 8 percent for a simple straight lay.",
      "Breakage happens during shipping, handling, and cutting — particularly with large-format tiles over 15 inches and natural stone with natural fissures. Professional setters plan for this; homeowners who order exact square footage often end up one or two tiles short on the final row.",
    ],
  },
  sections: [
    {
      heading: "Calculate net floor area",
      paragraphs: [
        "Measure the length and width of each tiled area in feet and multiply to get square footage. For L-shaped rooms, break the layout into rectangles, calculate each, and add the totals. Include niches, shower floors, and backsplash sections that will use the same tile.",
        "For wall tile in showers, measure each wall separately: width times height minus any untiled zones like a window or niche opening. Add all four walls together for total wall tile area.",
        "Do not subtract island footprints or cabinet bases from floor area if tile runs underneath — you will cut around them and the offcuts are rarely reusable at full size.",
      ],
    },
    {
      heading: "Convert tile size to coverage per piece",
      paragraphs: [
        "Tile dimensions on the box are in inches. Convert to square feet by multiplying length times width and dividing by 144. A 12-by-24-inch tile covers 2 square feet. A 6-by-6-inch mosaic sheet might cover 0.97 square feet depending on grout joint spacing.",
        "Divide net area by per-tile coverage to get raw tile count. A 100-square-foot bathroom floor using 12-by-24-inch tiles (2 sq ft each) needs 50 tiles before waste.",
        "Box coverage varies by product — one box might contain 10 tiles covering 15.5 square feet while another covers 14.4. Always use the box label for final ordering, not just per-tile math.",
      ],
    },
    {
      heading: "Choose the right waste factor",
      paragraphs: [
        "Straight lay with minimal cuts on a rectangular room: 10 percent waste. This covers normal breakage and a few edge cuts. Most manufacturer recommendations start here for standard layouts.",
        "Diagonal layout, brick pattern offset, or rooms with multiple jogs and closets: 15 percent waste. The angled cuts at walls and transitions consume significantly more full tiles.",
        "Herringbone, chevron, or intricate mosaic patterns: 15 to 20 percent waste. Complex patterns generate triangular offcuts and require more partial tiles at borders. Large-format tile (over 15 inches on the long side): add 5 percent to whatever base factor you chose, because breakage rates during handling and cutting are higher.",
      ],
    },
    {
      heading: "Order strategy and lot numbers",
      paragraphs: [
        "Apply your waste percentage to net square footage, then divide by box coverage and round up to whole boxes. If the math says 8.3 boxes, buy 9. The cost of one extra box is far less than a stalled project.",
        "Buy all boxes from the same lot number printed on the box. Inspect tiles at the store for caliber consistency — tiles that are slightly different sizes create lippage and wide grout joints that look amateur.",
        "Keep one full box unopened after installation for future repairs. Store it in a dry, climate-controlled space. Label it with the product name, color, lot number, and install date.",
      ],
    },
    {
      heading: "Special situations that increase waste",
      paragraphs: [
        "Floor drains, curbless shower entries, and toilet flange cutouts each consume at least one full tile per opening, often more if the cut falls near the center of a tile you cannot split efficiently.",
        "Border tiles and listellos require separate calculations. Measure linear feet of border, divide by tile width, and add 10 percent waste to the border count independently from field tile.",
        "Thin-set and grout are separate calculations but follow the same overage principle. A 10-by-12-foot floor might need two bags of thin-set and one bag of grout — buy one extra bag of each so you do not stop mid-grout because the powder ran out.",
      ],
    },
  ],
  examples: [
    {
      title: "Standard bathroom floor",
      scenario:
        "A 5-by-8-foot bathroom floor (40 sq ft) with 12-by-24-inch porcelain tile in a straight lay. Box covers 15.5 sq ft and contains 10 tiles.",
      outcome:
        "Raw tile need is 40 ÷ 2 = 20 tiles. With 10 percent waste, 40 × 1.10 = 44 sq ft. At 15.5 sq ft per box, 44 ÷ 15.5 = 2.84 boxes. Round up to 3 boxes covering 46.5 sq ft — enough for cuts around the toilet and vanity.",
    },
    {
      title: "Kitchen backsplash diagonal",
      scenario:
        "A backsplash 18 feet long and 18 inches tall (27 sq ft) using 3-by-6-inch subway tile set on a diagonal. Each tile covers 0.125 sq ft.",
      outcome:
        "Raw count is 27 ÷ 0.125 = 216 tiles. Diagonal layout calls for 15 percent waste: 216 × 1.15 = 248 tiles. If tiles come 12 per sheet (1.5 sq ft), you need 248 ÷ 12 = 20.7 sheets — buy 21 sheets or verify box count with supplier.",
    },
    {
      title: "Large-format living area",
      scenario:
        "An open 15-by-20-foot space (300 sq ft) with 24-by-24-inch tile in a running bond pattern. Each tile covers 4 sq ft. Boxes contain 4 tiles covering 16 sq ft.",
      outcome:
        "Raw need is 75 tiles. Large-format adds 5 percent to the 10 percent base: 15 percent total. 300 × 1.15 = 345 sq ft. 345 ÷ 16 = 21.6 boxes. Order 22 boxes and verify all share the same lot number before leaving the store.",
    },
  ],
  commonMistakes: [
    "Ordering exact net square footage with zero waste, then running short on the last row against the wall.",
    "Using the same 10 percent waste factor for herringbone and diagonal layouts that need 15 to 20 percent.",
    "Mixing lot numbers from different purchases, creating visible color shifts across the floor.",
    "Forgetting to include shower walls, niches, or bench tops when calculating a bathroom tile order.",
    "Converting tile dimensions incorrectly — using centimeters or measuring only one side of rectangular tile.",
    "Returning opened boxes after breaking a few tiles during installation, leaving no spares for future chip repairs.",
  ],
  recommendedAssumptions: [
    "Start with 10 percent waste for straight lay on rectangular rooms with standard-size tile (12 inches or smaller).",
    "Increase to 15 percent for diagonal layouts, offset patterns, or rooms with more than two inside corners.",
    "Add an extra 5 percent for large-format tile (any side over 15 inches) due to higher breakage rates.",
    "Convert tile dimensions from inches to square feet by multiplying length × width ÷ 144.",
    "Always round up to whole boxes — never round down to save money on partial box coverage.",
    "Purchase all tile from a single lot number and keep one unopened box for future repairs.",
  ],
  faqs: [
    {
      question: "What waste factor do manufacturers recommend?",
      answer:
        "Most tile manufacturers recommend 10 percent for straight installations and 15 percent for diagonal or patterned layouts. Natural stone and large-format porcelain often suggest 15 percent minimum regardless of pattern due to breakage during cutting.",
    },
    {
      question: "Should I subtract the vanity and toilet from floor area?",
      answer:
        "No for estimation purposes. You will cut tiles around those fixtures and the offcuts are usually too small to reuse. Calculating the full floor area with waste factor covers those cuts adequately.",
    },
    {
      question: "How do I handle a half-tile at the wall?",
      answer:
        "Plan your layout so cut tiles at walls are at least half a tile wide — never a sliver. This may mean shifting the starting point or using a wider grout line. Wider cuts look better and are less likely to crack.",
    },
    {
      question: "Can I return unused tile boxes?",
      answer:
        "Policies vary by retailer. Big-box stores often accept unopened full boxes within 90 days. Specialty tile shops may not accept returns on natural stone or special orders. Confirm before buying and keep one box for repairs regardless.",
    },
    {
      question: "Do I need more waste for mosaic sheets?",
      answer:
        "Mesh-mounted mosaics on sheets follow the same waste percentages as field tile. However, sheet mosaics around curves and drains may need 15 percent even on straight layouts because individual tesserae get damaged when trimming sheets.",
    },
    {
      question: "How does grout joint width affect tile count?",
      answer:
        "Wider grout joints slightly increase the number of tiles needed because each tile plus grout occupies more area. For standard 1/8-inch joints on 12-inch tile, the effect is negligible. On 3-inch penny rounds with 1/8-inch joints, calculate using actual tile face dimensions only.",
    },
  ],
  cta: {
    title: "Calculate tile quantity with waste factor",
    description:
      "Enter room dimensions, tile size, and layout pattern to get tile count and box quantity with the right overage built in.",
    calculatorSlug: "tile-calculator",
    buttonText: "Open Tile Calculator",
  },
  internalLinks: [
    { href: "/calculators/tile-calculator", label: "Tile Calculator" },
    { href: "/calculators/flooring-calculator", label: "Flooring Calculator" },
    { href: "/guides/hardwood-flooring-estimate", label: "Hardwood Flooring Estimate Guide" },
    { href: "/categories/flooring", label: "Flooring calculators" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
