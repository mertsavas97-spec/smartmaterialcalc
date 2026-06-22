import type { GuideArticle } from "@/types/guide-article";

export const mulchDepthGuideArticle: GuideArticle = {
  slug: "mulch-depth-guide",
  calculatorSlug: "mulch-calculator",
  relatedGuideSlugs: [
    "gravel-depth-guide",
    "gravel-driveway-planning",
  ],
  relatedCalculatorSlugs: ["gravel-calculator", "topsoil-calculator"],
  intro:
    "Mulch does more than make garden beds look tidy. A properly depth-applied layer suppresses weeds, retains soil moisture, regulates root-zone temperature, and slowly adds organic matter as it decomposes. Apply too little and weeds push through within weeks while soil dries out fast in summer heat. Apply too much and you suffocate plant roots, trap excess moisture against trunks, and waste money on cubic yards that slide off slopes before they ever settle. Most landscaping guides say '2 to 4 inches' without explaining when to use which end of that range or how to calculate the cubic yards you need to order. This guide covers depth recommendations by mulch type and application, measurement techniques for beds of every shape, and the seasonal maintenance that keeps your mulch performing year after year.",
  whyItMatters: {
    heading: "Why mulch depth affects plant health and your budget",
    paragraphs: [
      "Mulch depth is the primary control for weed suppression. Weed seeds need light to germinate. A 2-inch layer blocks most sunlight, but vigorous weeds like nutsedge and bindweed can push through. Three inches handles most residential beds. Four inches is reserved for large open areas with heavy weed pressure and no delicate plantings nearby.",
      "Too much mulch causes real damage. The 'mulch volcano' — piled against tree trunks — traps moisture on bark, encourages rot and insect entry, and causes girdling roots that strangle the tree. More than 4 inches anywhere can prevent rainfall from reaching soil and reduce oxygen exchange at the root zone, stressing shrubs and perennials.",
      "Mulch is sold by the cubic yard, and depth is the multiplier that converts bed area to volume. A 500-square-foot bed at 2 inches needs 3.1 cubic yards. At 4 inches, that doubles to 6.2 cubic yards. Knowing your target depth before ordering prevents both the cost of over-ordering and the frustration of spreading a batch that runs out halfway through the last bed.",
    ],
  },
  sections: [
    {
      heading: "Recommended depth by mulch type",
      paragraphs: [
        "Shredded hardwood and bark mulch: 2 to 3 inches for established beds, 3 inches for new beds with weed pressure. Shredded mulch interlocks and stays in place on moderate slopes.",
        "Pine bark nuggets: 2 to 3 inches. Nuggets float and wash away in heavy rain more easily than shredded mulch — avoid on steep slopes and do not exceed 3 inches.",
        "Cocoa bean hulls and fine organic mulches: 1 to 2 inches maximum. These materials are dense and compact quickly. More than 2 inches restricts water penetration.",
        "Rubber mulch and inorganic mulches: 1.5 to 2 inches. Rubber does not decompose or settle like organic mulch, so less depth provides equivalent coverage. It also does not improve soil over time.",
        "Straw and pine straw: 3 to 4 inches for vegetable gardens and newly seeded areas. Straw is light and settles fast — the initial application looks thick but compacts to 2 inches within weeks.",
      ],
    },
    {
      heading: "Depth for different bed types",
      paragraphs: [
        "Established perennial and shrub beds: 2 to 3 inches refreshed annually. Rake old mulch before adding new to prevent buildup beyond 4 inches total.",
        "New beds after planting: 3 inches after settling. Fluff and spread evenly, keeping mulch 2 to 3 inches away from plant stems and tree trunks.",
        "Tree rings and specimen plantings: 2 to 3 inches in a flat ring extending to the drip line. Never pile against the trunk — taper down to bare soil within 3 inches of the bark.",
        "Vegetable gardens: 2 to 3 inches of straw or compost between rows. Replenish mid-season as material decomposes. Avoid dyed decorative mulch in edible gardens.",
        "Sloped areas and erosion control: 3 inches of shredded hardwood maximum. Steeper slopes may need erosion fabric underneath and periodic top-dressing after heavy rains wash material downhill.",
      ],
    },
    {
      heading: "Measuring bed area accurately",
      paragraphs: [
        "Measure length and width of rectangular beds in feet and multiply for square footage. For curved beds, break the area into sections — rectangles for straight portions and approximate triangles or arcs for curved edges.",
        "Include the full bed footprint, not just the open soil around plants. Mulch covers the entire bed surface including the spaces between shrubs where weeds would otherwise grow. Adjacent paths and driveways need separate [gravel depth](/guides/gravel-depth-guide) planning — mulch and stone orders are calculated independently.",
        "For beds around trees, measure a circle using the drip line diameter (twice the canopy radius) or the area you want mulched, whichever is smaller. A 10-foot-diameter tree ring is about 78 square feet.",
      ],
    },
    {
      heading: "Converting area and depth to cubic yards",
      paragraphs: [
        "Volume in cubic feet equals square footage times depth in feet. Convert depth from inches by dividing by 12. Three inches is 0.25 feet. A 200-square-foot bed at 3 inches deep is 200 × 0.25 = 50 cubic feet.",
        "Divide cubic feet by 27 to get cubic yards. Fifty cubic feet equals 1.85 cubic yards. Mulch suppliers sell and deliver by the cubic yard — bagged mulch at garden centers typically covers 2 cubic feet per bag, so one cubic yard equals 13.5 bags.",
        "Add 5 to 10 percent for uneven bed surfaces, settling, and spillage during spreading. On heavily contoured beds with mounds and dips, use 10 percent. Flat beds with smooth edges need only 5 percent.",
      ],
    },
    {
      heading: "Seasonal maintenance and refresh schedule",
      paragraphs: [
        "Organic mulch decomposes at roughly 1 inch per year in humid climates, faster in warm wet regions and slower in arid areas. Annual spring top-dressing of 1 to 2 inches restores appearance and weed suppression without building excessive total depth.",
        "Before adding new mulch, rake and fluff existing material. Remove matted layers that have formed a water-repelling crust. If total depth already exceeds 4 inches after fluffing, skip the refresh or remove old mulch first.",
        "Fall mulching around tender perennials and newly planted trees provides winter root insulation. Apply 2 to 3 inches after the first hard frost but before sustained freezing. Pull mulch back from crowns of sensitive perennials in spring to prevent rot during thaw cycles.",
      ],
    },
  ],
  examples: [
    {
      title: "Front foundation beds",
      scenario:
        "Two beds totaling 120 square feet along the front of a house. Shredded hardwood mulch at 3 inches depth for spring refresh.",
      outcome:
        "Volume: 120 × 0.25 = 30 cu ft = 1.11 cu yd. With 10 percent overage, order 1.25 cubic yards or about 17 two-cubic-foot bags. Keep mulch 3 inches from siding and plant stems.",
    },
    {
      title: "Large backyard planting island",
      scenario:
        "An irregular bed approximately 400 square feet around existing shrubs and a small tree. Three inches of pine bark nuggets.",
      outcome:
        "Volume: 400 × 0.25 = 100 cu ft = 3.7 cu yd. With 10 percent overage, order 4 cubic yards delivered. Taper mulch away from the tree trunk and spread evenly around shrub bases without burying lower branches.",
    },
    {
      title: "Vegetable garden paths",
      scenario:
        "A 20-by-30-foot vegetable garden with 2-foot-wide straw-mulched paths between four rows. Path area is roughly 120 square feet at 3 inches.",
      outcome:
        "Volume: 120 × 0.25 = 30 cu ft = 1.11 cu yd. Straw bales cover roughly 80 square feet at 3 inches per bale — two bales handle this with a little extra. Replenish mid-summer as straw decomposes.",
    },
  ],
  commonMistakes: [
    "Piling mulch against tree trunks in 'mulch volcanoes' that cause bark rot and girdling roots.",
    "Applying 5 or 6 inches thinking more is better, which blocks water and air from reaching plant roots.",
    "Calculating depth in inches without converting to feet, resulting in an order 12 times too large.",
    "Adding fresh mulch every year without checking total depth, eventually building up 8 or more inches that harm plants.",
    "Using fine mulch at 4 inches on slopes where it washes away in the first heavy rain.",
    "Forgetting to account for existing mulch depth before ordering — refreshing 2 inches on a bed that already has 3 inches may exceed the safe total.",
  ],
  recommendedAssumptions: [
    "Use 2 to 3 inches for most established landscape beds with shredded hardwood mulch.",
    "Apply 3 inches for new beds and areas with moderate to heavy weed pressure.",
    "Never exceed 4 inches total mulch depth including existing material.",
    "Convert depth from inches to feet (divide by 12) before calculating cubic volume.",
    "Add 5 to 10 percent overage for spreading waste and uneven bed surfaces.",
    "Keep mulch 2 to 3 inches away from plant stems, tree trunks, and building foundations.",
  ],
  faqs: [
    {
      question: "How deep should mulch be around trees?",
      answer:
        "Apply 2 to 3 inches in a flat ring extending to the drip line, but keep mulch pulled back 3 inches from the trunk. Never pile mulch against bark — the cone-shaped 'mulch volcano' is one of the most common landscaping mistakes and causes long-term tree damage.",
    },
    {
      question: "How many bags of mulch equal a cubic yard?",
      answer:
        "One cubic yard equals 27 cubic feet. Standard bags contain 2 cubic feet each, so one cubic yard is 13.5 bags. Some stores sell 3-cubic-foot bags — adjust accordingly. Bulk delivery is usually cheaper for orders over 2 cubic yards.",
    },
    {
      question: "Should I remove old mulch before adding new?",
      answer:
        "Usually no — rake and fluff existing mulch, then top-dress with 1 to 2 inches annually. Remove old mulch only if total depth would exceed 4 inches after refresh, or if the old layer is matted and hydrophobic (water beads on top instead of soaking in).",
    },
    {
      question: "Does mulch depth differ for spring versus fall application?",
      answer:
        "Apply the same 2 to 3 inch target depth in either season. Spring mulching suppresses early weeds and retains spring moisture. Fall mulching insulates roots through winter. Do not apply fall mulch before the first frost on tender perennials.",
    },
    {
      question: "How long does mulch last before needing refresh?",
      answer:
        "Shredded hardwood decomposes at about 1 inch per year in most climates. Nuggets last 2 to 3 years. Plan annual spring top-dressing of 1 to 2 inches for shredded mulch and every-other-year refresh for nuggets.",
    },
    {
      question: "Can I use mulch on a slope?",
      answer:
        "Yes, but use shredded hardwood at 2 to 3 inches maximum and consider erosion fabric underneath on slopes over 15 degrees. Nuggets and pine straw wash away easily. Check slopes after heavy rain and top-dress as needed.",
    },
  ],
  cta: {
    title: "Calculate mulch cubic yards by depth",
    description:
      "Enter bed area and desired mulch depth to get cubic yards and bag count for your landscaping project.",
    calculatorSlug: "mulch-calculator",
    buttonText: "Open Mulch Calculator",
  },
  internalLinks: [
    { href: "/calculators/mulch-calculator", label: "Mulch Calculator" },
    { href: "/calculators/gravel-calculator", label: "Gravel Calculator" },
    { href: "/calculators/topsoil-calculator", label: "Topsoil Calculator" },
    { href: "/guides/gravel-depth-guide", label: "Gravel Depth Guide" },
    { href: "/guides/gravel-driveway-planning", label: "Gravel Driveway Planning Guide" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
