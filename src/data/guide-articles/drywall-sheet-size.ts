import type { GuideArticle } from "@/types/guide-article";

export const drywallSheetSizeGuideArticle: GuideArticle = {
  slug: "drywall-sheet-size-guide",
  calculatorSlug: "drywall-calculator",
  relatedGuideSlugs: ["how-much-paint-do-i-need"],
  relatedCalculatorSlugs: ["paint-calculator"],
  intro:
    "Drywall sheet size is one of the first decisions in any wall or ceiling finish project, and it directly affects how many sheets you order, how many seams you tape, and how much waste you generate. The standard 4×8 foot sheet covers 32 square feet, but 4×12 and 4×10 sheets reduce seam count on long walls and tall rooms. Choosing the wrong size means extra joints to finish, more joint compound, and cutoffs that may not fit elsewhere. This guide explains common sheet dimensions, when to use each size, how sheet choice affects your order quantity, and the planning assumptions that keep you from running short mid-project.",
  whyItMatters: {
    heading: "Why sheet size affects your drywall order",
    paragraphs: [
      "Drywall is priced per sheet, not per square foot — but your order quantity comes from total wall area divided by sheet coverage. A room with 480 square feet of wall surface needs 15 sheets at 4×8 coverage, but only 10 sheets if you use 4×12 on walls that can accept the longer dimension.",
      "Fewer seams mean less taping, mudding, and sanding time. On a large open wall, a 4×12 sheet horizontal reduces butt joints by roughly one-third compared to stacked 4×8 sheets. The labor savings often outweigh the slightly higher per-sheet cost of longer boards.",
      "Sheet size also affects waste. Small rooms, closets, and walls with many openings generate offcuts that may not fit another area. Larger sheets produce larger offcuts — sometimes reusable on adjacent walls, sometimes not.",
    ],
  },
  sections: [
    {
      heading: "Standard drywall sheet dimensions",
      paragraphs: [
        "4×8 feet (32 sq ft): the most common size. Available everywhere, easiest to transport in standard trucks, and simplest for solo DIY handling. Best for small rooms, repairs, and ceilings in rooms with limited access.",
        "4×12 feet (48 sq ft): popular for long walls in open floor plans and tall walls where vertical seams are minimized. Requires two people or a drywall lift for ceiling installs.",
        "4×10 feet (40 sq ft): a middle option when 4×12 is too long for the room but 4×8 creates too many seams. Less common in stock but available at most lumber yards.",
        "Thickness: 1/2 inch for most walls and ceilings. 5/8 inch for fire-rated assemblies, garage ceilings, and some commercial codes. 1/4 inch for curved surfaces and overlay repairs.",
      ],
    },
    {
      heading: "Choosing sheet size by room layout",
      paragraphs: [
        "Measure each wall height and length. If wall height is 8 feet or less, 4×8 sheets fit vertically with no horizontal cut. If height is 9 or 10 feet, 4×10 or 4×12 sheets may run vertically with fewer joints.",
        "On walls longer than 12 feet, 4×12 sheets run horizontally to span the length with one vertical seam per row instead of two or three with 4×8 sheets.",
        "Closets, bathrooms, and utility rooms often work best with 4×8 sheets because longer boards are harder to maneuver in tight spaces.",
      ],
    },
    {
      heading: "Calculating sheet count",
      paragraphs: [
        "Total wall area equals room perimeter times wall height, minus large openings if you choose to deduct them. Divide by sheet coverage (width times height in feet) for base sheet count.",
        "Add 10 to 15 percent waste for rooms with standard doors and windows. Rooms with many openings, soffits, or angled ceilings may need 15 to 20 percent.",
        "Round up to whole sheets. Partial sheet calculations always round up — you cannot buy half a sheet at the store.",
      ],
    },
    {
      heading: "Ceiling vs wall sheet orientation",
      paragraphs: [
        "Ceilings: install perpendicular to joists or trusses. Sheet length should span multiple joist bays for stiffness — 4×12 sheets on a 12-foot-wide room need fewer butt joints than 4×8 sheets.",
        "Walls: vertical orientation places factory tapered edges at corners for easier taping. Horizontal orientation on long walls reduces vertical butt joints.",
        "Use a drywall lift for ceiling sheets — especially 4×12 boards. Attempting to hand-hold a full sheet overhead leads to broken boards and poor screw placement.",
      ],
    },
    {
      heading: "Related materials beyond sheets",
      paragraphs: [
        "Joint compound and tape quantities scale with seam length, not just sheet count. Fewer seams from larger sheets means less mud work — a secondary savings beyond the sheet order itself.",
        "Drywall screws: plan roughly one screw every 12 inches on walls and 8 inches on ceilings. A 4×8 sheet uses about 32 screws; larger sheets use proportionally more.",
        "Corner bead, joint tape (paper or mesh), and primer/sealer are ordered separately. Your sheet estimate is the starting point — finishing materials depend on layout choices. After taping and sanding, see our [paint coverage guide](/guides/how-much-paint-do-i-need) for gallon estimates.",
      ],
    },
  ],
  examples: [
    {
      title: "Standard bedroom",
      scenario:
        "A 12×14 foot bedroom with 8-foot ceilings, one door and one window. Using 4×8 sheets, 10 percent waste.",
      outcome:
        "Perimeter: 52 ft. Wall area: 52 × 8 = 416 sq ft. Sheets: 416 ÷ 32 = 13 sheets. With 10% waste: 14.3 → order 15 sheets.",
    },
    {
      title: "Great room with tall walls",
      scenario:
        "A 16×20 foot room with 10-foot ceilings. Long walls run 20 feet — using 4×12 sheets horizontally.",
      outcome:
        "Perimeter: 72 ft. Wall area: 720 sq ft. At 4×12 (48 sq ft): 15 sheets base. With 12% waste for tall walls: 17 sheets. Fewer horizontal butt joints than 4×8 layout.",
    },
    {
      title: "Small bathroom remodel",
      scenario:
        "An 8×10 bathroom with 8-foot ceilings, multiple openings for vanity, toilet, and tub surround.",
      outcome:
        "Net wall area after openings: roughly 180 sq ft. At 4×8: 6 sheets base. With 15% waste for many cuts: 7 sheets. Use 4×8 for easier handling in the small space.",
    },
  ],
  commonMistakes: [
    "Using 4×8 sheet coverage (32 sq ft) when actually ordering 4×12 sheets (48 sq ft).",
    "Forgetting ceiling area when estimating a room that gets both wall and ceiling drywall.",
    "Ordering exact calculated sheets with zero waste, then running short on the last wall.",
    "Choosing 4×12 sheets for a room that cannot fit the board length through doorways.",
    "Mixing sheet sizes without recalculating coverage per size.",
    "Ignoring thickness requirements for fire-rated walls or garage ceilings.",
  ],
  recommendedAssumptions: [
    "Use 4×8 sheets (32 sq ft) as the default planning size unless room layout clearly favors longer sheets.",
    "Add 10 percent waste for simple rectangular rooms; 15 percent for rooms with multiple openings.",
    "Round up to whole sheets for your order quantity.",
    "Verify sheet size availability at your supplier before finalizing the count.",
    "Use the Drywall Calculator to test different sheet dimensions against your room measurements.",
    "Verify local code for required thickness on fire-rated and garage assemblies.",
  ],
  faqs: [
    {
      question: "What is the most common drywall sheet size?",
      answer:
        "4×8 feet is the standard — 32 square feet per sheet. It is the most widely stocked and easiest to handle for DIY projects.",
    },
    {
      question: "When should I use 4×12 drywall sheets?",
      answer:
        "Use 4×12 on long walls (over 12 feet) and tall rooms where vertical seams can be minimized. You need help handling and installing them, especially on ceilings.",
    },
    {
      question: "How much waste should I add for drywall?",
      answer:
        "Add 10 percent for simple rooms and 15 percent for rooms with many doors, windows, or soffits. Always round up to whole sheets.",
    },
    {
      question: "Should I deduct doors and windows from wall area?",
      answer:
        "For planning estimates, deducting standard openings is reasonable. Small openings and cutouts around fixtures are often covered by your waste allowance.",
    },
    {
      question: "Does sheet thickness change the count?",
      answer:
        "Thickness does not change sheet coverage area — a 4×8 sheet is 32 sq ft whether 1/2 or 5/8 inch. Thickness affects code compliance and fire rating, not area math.",
    },
  ],
  cta: {
    title: "Estimate drywall sheet count",
    description:
      "Enter room dimensions and sheet size to get a sheet count estimate with typical waste included.",
    calculatorSlug: "drywall-calculator",
    buttonText: "Open Drywall Calculator",
  },
  internalLinks: [
    { href: "/calculators/drywall-calculator", label: "Drywall Calculator" },
    { href: "/calculators/paint-calculator", label: "Paint Calculator" },
    { href: "/guides/how-much-paint-do-i-need", label: "How Much Paint Do I Need" },
    { href: "/categories/lumber", label: "Lumber calculators" },
    { href: "/calculators", label: "All calculators" },
  ],
};
