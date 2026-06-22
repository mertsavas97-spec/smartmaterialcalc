import type { GuideArticle } from "@/types/guide-article";

export const fenceGuideArticle: GuideArticle = {
  slug: "fence-post-spacing-guide",
  calculatorSlug: "fence-calculator",
  relatedGuideSlugs: ["concrete-slab-calculator-guide"],
  relatedCalculatorSlugs: ["concrete-bags-calculator"],
  intro:
    "Building a fence starts with a layout plan, and post spacing is the foundation of that plan. Space posts too far apart and panels sag, rails bow, and the fence feels flimsy within a year. Space them too close and you waste money on extra posts, concrete, and hardware without gaining meaningful strength. Most residential wood and vinyl privacy fences use 6-foot or 8-foot post spacing, but the right choice depends on your panel width, fence height, wind exposure, and local building codes. Once spacing is set, you can calculate post count, rail length, picket quantity, and concrete for each footing. This guide expands on standard spacing rules, material estimation formulas, and the details that keep your fence straight, strong, and code-compliant from the first hole to the final cap.",
  whyItMatters: {
    heading: "Why post spacing drives your entire fence budget",
    paragraphs: [
      "Fence posts are the most labor-intensive and material-heavy part of the project. Each post requires digging a hole, setting concrete, checking plumb, and waiting for cure before attaching rails. On a 150-foot property line, the difference between 6-foot and 8-foot spacing is roughly six extra posts — meaning six extra holes, six bags of concrete each, and six sets of brackets or notch cuts.",
      "Incorrect spacing also creates panel mismatch. Pre-built vinyl and composite panels come in fixed widths — usually 6 or 8 feet. If your post layout does not align with panel widths, you end up cutting panels or building custom sections, which adds time and often looks inconsistent compared to full-width panels.",
      "Local building codes and HOA covenants frequently specify maximum post spacing, minimum post depth, and fence height limits. Installing at 10-foot spacing to save money may fail inspection and require rework. Checking requirements before layout prevents expensive corrections after the concrete has set.",
    ],
  },
  sections: [
    {
      heading: "Standard post spacing by fence type",
      paragraphs: [
        "Wood privacy fences (6-foot height): 6-foot or 8-foot spacing on center. Six-foot spacing is stiffer and handles wind loads better. Eight-foot spacing is the industry standard for pre-cut 8-foot rails and matches common panel widths.",
        "Picket and semi-privacy fences (4-foot height): 6-foot to 8-foot spacing works for most designs. Shorter fences carry less wind load, so 8-foot spacing is common and economical.",
        "Chain link and wire fencing: 8-foot to 10-foot spacing with line posts, plus terminal, corner, and gate posts at closer intervals. Chain link uses top rail between posts rather than wood rails.",
        "Vinyl and composite privacy panels: Match spacing exactly to panel width — almost always 6 or 8 feet. Deviating from the manufacturer's specified span voids warranty and causes panel buckling in heat.",
      ],
    },
    {
      heading: "Calculate post count",
      paragraphs: [
        "Divide total fence length in feet by post spacing in feet and round up to get the number of sections. Add one post for the starting point — fences end at a post on each end. Formula: posts = sections + 1, where sections = ceil(length ÷ spacing).",
        "Example: 120 feet of fence at 8-foot spacing gives 120 ÷ 8 = 15 sections and 16 posts. A 120-foot run at 6-foot spacing gives 20 sections and 21 posts — five more posts, five more holes.",
        "Add extra posts at corners, gate locations, and direction changes. A corner post serves two fence lines and must be heavier — typically 4×4 minimum, often 6×6 for tall privacy fences. Gate posts on either side of an opening carry hinge and latch loads and should be set deeper with more concrete.",
      ],
    },
    {
      heading: "Estimate rails and horizontal members",
      paragraphs: [
        "Standard 6-foot privacy fences use two horizontal rails per section — one near the top and one near the bottom, sometimes with a third middle rail for 8-foot-tall fences or in high-wind areas.",
        "Rail count equals sections × rails per section. A 120-foot fence at 8-foot spacing (15 sections) with two rails needs 30 rail boards. Buy rail stock in standard lengths (8, 10, or 16 feet) and plan cuts to minimize waste.",
        "For board-on-board or shadowbox designs, vertical pickets attach to rails rather than prefab panels. Picket count is calculated separately based on picket width and desired gap.",
      ],
    },
    {
      heading: "Calculate picket quantity",
      paragraphs: [
        "Measure picket width and desired gap between pickets in inches. Effective spacing per picket equals picket width plus gap. Divide total fence length in inches by effective spacing and round up.",
        "Example: 120 feet (1,440 inches) with 5.5-inch-wide pickets and 0.5-inch gaps. Effective spacing is 6 inches. 1,440 ÷ 6 = 240 pickets. Add 5 percent for cuts and breakage.",
        "For shadowbox or board-on-board layouts where pickets alternate on both sides, double the count — each visible picket width covers only half the fence face. A shadowbox fence uses roughly twice the pickets of a standard privacy fence.",
      ],
    },
    {
      heading: "Concrete and post depth",
      paragraphs: [
        "Post holes should be one-third the above-ground post height and three times the post width. A 6-foot fence with 4×4 posts needs posts set 2 feet deep minimum — 8 feet total post length with 2 feet below grade and 6 feet above.",
        "Each 4×4 post in a 10-inch-diameter hole, 2 feet deep, requires roughly two 50-pound bags or one 80-pound bag of concrete mix. Gate posts in the same depth with 6×6 lumber need three to four bags each.",
        "Set posts in crushed gravel drainage at the bottom of each hole before pouring concrete. Slope the concrete slightly above grade so water runs off the post base. Allow 24 to 48 hours cure time before attaching rails — longer in cold weather.",
      ],
    },
    {
      heading: "Gates, corners, and property line layout",
      paragraphs: [
        "Standard walk gates are 3 to 4 feet wide; double drive gates span 10 to 12 feet. Gate width determines the opening between gate posts. Use 6×6 gate posts set 3 feet deep with heavy-duty concrete for gates over 4 feet wide.",
        "Survey your property line or hire a surveyor before digging. Encroaching on a neighbor's land by even a few inches creates legal disputes that cost far more than the fence itself. Call 811 for utility locates before any digging.",
        "Run a string line from corner to corner at the finished fence height to visualize the top line. Mark post locations on the string line at your chosen spacing before digging the first hole. Adjust the last section if it would be less than half a panel width — split the difference across the last two sections rather than ending with a narrow sliver.",
      ],
    },
  ],
  examples: [
    {
      title: "Backyard privacy fence",
      scenario:
        "A 96-foot rear property line, 6-foot-tall wood privacy fence, 8-foot post spacing, two rails per section, 5.5-inch pickets with 0.5-inch gaps.",
      outcome:
        "96 ÷ 8 = 12 sections, 13 posts. Rails: 12 × 2 = 24 eight-foot boards. Pickets: 96 ft = 1,152 in ÷ 6 in spacing = 192 pickets, plus 5 percent = 202 pickets. Concrete: 13 posts × 2 bags = 26 fifty-pound bags.",
    },
    {
      title: "Side yard with gate",
      scenario:
        "A 48-foot side fence at 6-foot spacing, one 4-foot walk gate, 6-foot height, vinyl panels (6-foot width).",
      outcome:
        "Fence sections excluding gate: adjust layout so gate opening is 4 feet between two gate posts. Remaining fence divided into 6-foot panel sections. Typically 7 panel posts plus 2 gate posts = 9 posts total. Order 7 vinyl panels, one gate kit, and 9 post caps. Gate posts get triple concrete.",
    },
    {
      title: "Corner lot with two sides",
      scenario:
        "Two fence runs meeting at a corner: 60 feet along the side and 80 feet along the back, 8-foot spacing, board-on-board design with 5.5-inch pickets.",
      outcome:
        "Side: 60 ÷ 8 = 7.5, round to 8 sections, 9 posts. Back: 80 ÷ 8 = 10 sections, 11 posts, minus 1 shared corner = 10 new posts. Total 19 posts (including corner). Shadowbox pickets: (140 ft × 12 in) ÷ 6 in × 2 sides = 560 pickets plus waste.",
    },
  ],
  commonMistakes: [
    "Spacing posts without checking pre-built panel widths, forcing awkward cuts on the last section.",
    "Forgetting to add the end post — dividing length by spacing gives sections, not posts. Always add one.",
    "Setting posts too shallow in frost climates, causing heave that pushes the fence out of alignment every spring.",
    "Using 4×4 posts for wide drive gates — gate posts need 6×6 lumber set deeper with heavier concrete footings.",
    "Not calling 811 before digging, risking utility strikes that cause injury and expensive repair bills.",
    "Calculating pickets for shadowbox or board-on-board as a single-sided fence, running short by nearly half.",
  ],
  recommendedAssumptions: [
    "Use 8-foot on-center post spacing for standard 6-foot wood privacy fences unless wind exposure demands 6-foot spacing.",
    "Plan two horizontal rails for 6-foot fences and three rails for 8-foot fences.",
    "Set posts one-third of total fence height below grade (minimum 24 inches for 6-foot fences).",
    "Budget two 50-pound bags of concrete per 4×4 post in a standard 10-inch hole, 24 inches deep.",
    "Add 5 percent to picket count for cuts, splits, and defective boards.",
    "Match vinyl and composite panel spacing exactly to manufacturer specifications — typically 6 or 8 feet.",
  ],
  faqs: [
    {
      question: "Is 6-foot or 8-foot post spacing better?",
      answer:
        "Eight-foot spacing is standard and works for most 6-foot privacy fences in moderate wind areas. Use 6-foot spacing in exposed locations, for heavier board-on-board designs, or when using full 8-foot rail boards without splicing. Check local codes for maximum allowed spacing.",
    },
    {
      question: "How deep should fence posts be set?",
      answer:
        "One-third of the post's above-ground height, with a minimum of 24 inches for 6-foot fences. In frost zones, dig below the frost line (36 to 48 inches in northern climates). Gate posts should go 36 inches deep regardless of fence height.",
    },
    {
      question: "How many bags of concrete per fence post?",
      answer:
        "A standard 4×4 post in a 10-inch-wide, 24-inch-deep hole needs about two 50-pound bags or one 80-pound bag. Larger 6×6 gate posts in 12-inch holes, 36 inches deep, need three to four bags each. Use our [concrete bags calculator](/calculators/concrete-bags-calculator) to convert footing dimensions to bag count.",
    },
    {
      question: "How do I handle a fence line that is not a perfect length?",
      answer:
        "Adjust the last one or two sections rather than changing spacing along the entire run. If the remainder is less than half a panel width, split the difference across the last two sections so neither looks noticeably narrow.",
    },
    {
      question: "Do I need a permit to build a fence?",
      answer:
        "Most municipalities require a fence permit, especially for fences over 6 feet tall or on corner lots. HOAs often have additional height, material, and setback rules. Apply for permits and HOA approval before purchasing materials.",
    },
    {
      question: "How far from the property line should I set the fence?",
      answer:
        "This varies by jurisdiction — commonly 2 to 6 inches inside your property line, but some areas allow the fence on the line itself. Check your survey and local code. When in doubt, set the fence fully on your side to avoid encroachment disputes.",
    },
  ],
  cta: {
    title: "Estimate fence posts, rails, and pickets",
    description:
      "Enter fence length, post spacing, and design details to get post count, material estimates, and concrete requirements.",
    calculatorSlug: "fence-calculator",
    buttonText: "Open Fence Calculator",
  },
  internalLinks: [
    { href: "/calculators/fence-calculator", label: "Fence Calculator" },
    { href: "/calculators/concrete-bags-calculator", label: "Concrete Bags Calculator" },
    { href: "/guides/concrete-slab-calculator-guide", label: "Concrete Slab Calculator Guide" },
    { href: "/categories/outdoor", label: "Outdoor calculators" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
