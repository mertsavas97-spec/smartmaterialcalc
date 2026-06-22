import type { GuideArticle } from "@/types/guide-article";

export const gravelGuideArticle: GuideArticle = {
  slug: "gravel-driveway-planning",
  calculatorSlug: "gravel-calculator",
  relatedGuideSlugs: ["gravel-depth-guide", "mulch-depth-guide"],
  relatedCalculatorSlugs: ["mulch-calculator", "topsoil-calculator"],
  intro:
    "A well-built gravel driveway handles daily vehicle traffic, sheds water, and lasts for years with occasional top-dressing. A poorly planned one turns into a muddy rut within a single rainy season. The difference comes down to three decisions: preparing a stable base, choosing the right gravel type, and installing it at the correct depth. Before you call the quarry or landscape supply yard, you need to know how many tons of material to order — and that starts with measuring your driveway footprint and converting volume to weight. This guide covers the full planning process from site evaluation through delivery day, so your driveway performs like a professional installation rather than a temporary patch.",
  whyItMatters: {
    heading: "Why driveway planning prevents costly do-overs",
    paragraphs: [
      "Gravel is sold by the ton, and delivery trucks dump the full load whether you have room for it or not. Over-ordering by three or four tons means finding a place to store loose stone or paying dump fees to haul it away. Under-ordering leaves your driveway half-finished with a visible seam between old and new gravel that never compacts uniformly.",
      "Depth is the variable most homeowners get wrong. Two inches of gravel over dirt washes away in the first hard rain. Four to six inches over a properly compacted base creates a surface that supports passenger vehicles year-round. The tonnage difference between 2 inches and 6 inches on a 50-foot driveway is substantial — and so is the performance gap.",
      "Gravel type matters as much as quantity. Round river rock looks attractive but rolls under tire pressure. Angular crushed stone with fines locks together when compacted and forms a stable driving surface. Planning your layers — base stone, middle course, and top dressing — affects both total tonnage and long-term durability.",
    ],
  },
  sections: [
    {
      heading: "Evaluate your site and drainage",
      paragraphs: [
        "Walk the driveway path and note slope, existing soil type, and drainage patterns. Water must flow off the driveway surface, not pool in low spots. A minimum crown of 2 percent (quarter inch per foot) or a consistent side slope directs runoff to ditches or swales.",
        "Mark the driveway edges with stakes and string. Measure total length and average width at three points — entrance, middle, and end — and use the average width for calculations. A driveway that flares at the road needs the flared section measured separately and added to the total.",
        "Remove topsoil, organic matter, and soft spots before placing gravel. Excavate 6 to 8 inches below finished grade to make room for the base layer plus surface gravel. Skipping excavation is the number one reason gravel driveways fail within two years.",
      ],
    },
    {
      heading: "Build the base layer first",
      paragraphs: [
        "The base layer uses larger crushed stone — typically 2 to 3 inches in diameter, often called #2 or #3 stone. Install 4 to 6 inches of base material over geotextile fabric on clay soils to prevent the stone from sinking into mud.",
        "Compact the base with a plate compactor or roller in 2-inch lifts. Each lift must be compacted before the next goes down. An uncompacted base settles unevenly and telegraphs bumps through the surface gravel within months.",
        "Calculate base volume separately from surface gravel. A 100-foot driveway, 10 feet wide, with 4 inches of base is 100 × 10 × 0.333 = 333 cubic feet, or 12.3 cubic yards. At roughly 1.4 tons per cubic yard for crushed stone, that is about 17 tons of base material.",
      ],
    },
    {
      heading: "Choose surface gravel and depth",
      paragraphs: [
        "The driving surface uses smaller crushed stone with fines — often called crusher run, road base, or 57 stone topped with 78 stone. The fines fill voids and bind the surface when compacted. Plan 3 to 4 inches of surface gravel over the compacted base.",
        "For heavy use — daily truck traffic, RV parking, or steep grades — increase surface depth to 4 to 6 inches. Light foot-traffic paths need only 2 to 3 inches over a base and can use pea gravel or decorative stone. See our [gravel depth guide](/guides/gravel-depth-guide) for depth recommendations by use case.",
        "Calculate surface volume the same way: length × width × depth in feet, divided by 27 for cubic yards, multiplied by material density for tons. Add 10 percent for compaction loss and spillage during spreading.",
      ],
    },
    {
      heading: "Convert cubic yards to tons",
      paragraphs: [
        "Suppliers quote and deliver by the ton, not cubic yard. Crushed limestone and granite weigh approximately 1.4 to 1.6 tons per cubic yard depending on moisture content. Pea gravel runs lighter at about 1.3 tons per cubic yard.",
        "Ask your supplier for the specific weight of the product you are buying. A 0.1 ton-per-yard difference adds up on a 20-ton order. Multiply cubic yards by the supplier's conversion factor to get tonnage.",
        "Delivery trucks carry 10 to 20 tons depending on size. Split large orders across multiple deliveries if your staging area cannot hold the full quantity. Have the dump location marked with cones or flags before the truck arrives.",
      ],
    },
    {
      heading: "Installation and ongoing maintenance",
      paragraphs: [
        "Spread gravel in lifts no thicker than 4 inches and compact each lift. Rake to crown before compacting so water sheds properly. A plate compactor works for most residential driveways; rent a roller for long driveways over 200 feet.",
        "Install edging — steel, plastic, or concrete — to keep gravel from migrating into lawn and beds. Without edging, you will rake stone back from the yard every spring indefinitely.",
        "Plan to top-dress with one to two tons every one to two years as fine material washes away and stone works into the base. Keeping extra gravel on hand in a dry corner of the yard makes annual maintenance a half-day job instead of a full reorder and delivery.",
      ],
    },
  ],
  examples: [
    {
      title: "Standard residential driveway",
      scenario:
        "A 60-foot-long driveway, 12 feet wide, with 4 inches of compacted base and 3 inches of surface gravel. Using 1.4 tons per cubic yard.",
      outcome:
        "Base volume: 60 × 12 × 0.333 = 240 cu ft = 8.9 cu yd = 12.5 tons. Surface volume: 60 × 12 × 0.25 = 180 cu ft = 6.7 cu yd = 9.4 tons. Total 21.9 tons; with 10 percent overage, order 24 tons in two deliveries.",
    },
    {
      title: "Long rural driveway",
      scenario:
        "A 300-foot driveway, 10 feet wide, 6 inches of base and 4 inches of surface for heavy clay soil and daily pickup traffic.",
      outcome:
        "Base: 300 × 10 × 0.5 = 1,500 cu ft = 55.6 cu yd = 78 tons. Surface: 300 × 10 × 0.333 = 1,000 cu ft = 37 cu yd = 52 tons. Total 130 tons before overage. Schedule multiple 20-ton deliveries and compact each section before the next load arrives.",
    },
    {
      title: "Parking pad off existing driveway",
      scenario:
        "A 20-by-20-foot parking pad (400 sq ft) with 4 inches of crusher run over existing compacted gravel. No separate base needed.",
      outcome:
        "Volume: 400 × 0.333 = 133 cu ft = 4.9 cu yd. At 1.4 tons per yard, that is 6.9 tons. With 10 percent compaction allowance, order 8 tons. One delivery truck handles this easily.",
    },
  ],
  commonMistakes: [
    "Spreading gravel directly on topsoil without excavation or geotextile fabric, causing the stone to sink into mud within months.",
    "Using round river rock as a driving surface — it rolls and ruts under tires instead of locking together.",
    "Calculating volume in inches without converting to feet, overstating material need by 12 times.",
    "Skipping compaction between lifts, resulting in a spongy surface that settles unevenly after the first rain.",
    "Forgetting to account for the flared entrance area where the driveway meets the road, under-ordering by several tons.",
    "Ordering all material as one stone size instead of planning separate base and surface layers with appropriate aggregate.",
  ],
  recommendedAssumptions: [
    "Use 4 to 6 inches of compacted base stone (#2 or #3 crushed) under any vehicle-grade driveway.",
    "Plan 3 to 4 inches of surface gravel with fines for passenger vehicle driveways.",
    "Convert depth from inches to feet (divide by 12) before calculating volume.",
    "Use 1.4 tons per cubic yard as a default for crushed stone unless your supplier provides a specific figure.",
    "Add 10 percent to calculated tonnage for compaction loss and spreading waste.",
    "Install geotextile fabric between subgrade and base on clay or silty soils to prevent migration.",
  ],
  faqs: [
    {
      question: "How deep should a gravel driveway be?",
      answer:
        "Vehicle driveways need 4 to 6 inches of compacted base stone plus 3 to 4 inches of surface gravel — 7 to 10 inches total. Light foot paths can use 2 to 3 inches over a thin base. See our gravel depth guide for detailed recommendations by use case.",
    },
    {
      question: "What type of gravel is best for driveways?",
      answer:
        "Angular crushed stone with fines — crusher run, road base, or a combination of 57 stone topped with 78 stone — compacts into a stable surface. Avoid round pea gravel and river rock for areas that receive vehicle traffic.",
    },
    {
      question: "Should I use geotextile fabric under gravel?",
      answer:
        "Yes on clay, silt, and organic soils. The fabric prevents the gravel from mixing with soft subgrade and sinking. On well-drained sandy or rocky soil, fabric is optional but still helps reduce weed growth up through the stone.",
    },
    {
      question: "How often should I add gravel to my driveway?",
      answer:
        "Most driveways need a top-dressing of 1 to 2 tons every one to two years. High-traffic or steep driveways may need annual attention. Regular top-dressing is cheaper and easier than a full rebuild.",
    },
    {
      question: "Can I calculate gravel in cubic yards instead of tons?",
      answer:
        "You can calculate in cubic yards first, then convert to tons using your supplier's weight factor. Most quarries sell and deliver by the ton, so the conversion step is necessary for ordering. Our gravel calculator handles both.",
    },
    {
      question: "Do I need a permit for a new gravel driveway?",
      answer:
        "Many municipalities require a permit for new driveway installations, especially where the driveway connects to a public road. Check with your local building department for setback requirements, maximum width, and drainage rules before ordering material.",
    },
  ],
  cta: {
    title: "Calculate gravel tonnage for your driveway",
    description:
      "Enter driveway length, width, and depth to get cubic yards and estimated tons with a recommended order quantity.",
    calculatorSlug: "gravel-calculator",
    buttonText: "Open Gravel Calculator",
  },
  internalLinks: [
    { href: "/calculators/gravel-calculator", label: "Gravel Calculator" },
    { href: "/calculators/mulch-calculator", label: "Mulch Calculator" },
    { href: "/calculators/topsoil-calculator", label: "Topsoil Calculator" },
    { href: "/guides/gravel-depth-guide", label: "Gravel Depth Guide" },
    { href: "/guides/mulch-depth-guide", label: "Mulch Depth Guide" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
