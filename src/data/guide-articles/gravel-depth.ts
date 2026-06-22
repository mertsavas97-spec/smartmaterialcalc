import type { GuideArticle } from "@/types/guide-article";

export const gravelDepthGuideArticle: GuideArticle = {
  slug: "gravel-depth-guide",
  calculatorSlug: "gravel-calculator",
  relatedGuideSlugs: [
    "gravel-driveway-planning",
    "mulch-depth-guide",
  ],
  relatedCalculatorSlugs: ["mulch-calculator", "topsoil-calculator"],
  intro:
    "Gravel depth is the single most important variable in any crushed-stone project, yet it is the one homeowners most often guess wrong. Too shallow and the stone scatters, ruts, and disappears into the soil within a season. Too deep and you pay for material that adds little structural benefit while making walking and driving uncomfortable. The right depth depends entirely on how the surface will be used — a garden path, a patio base, a parking pad, and a daily-use driveway each demand different thicknesses and often different stone sizes in layered applications. This guide breaks down recommended depths by project type, explains how to measure and calculate volume at each layer, and helps you order the correct tonnage without waste.",
  whyItMatters: {
    heading: "Why depth determines gravel performance and cost",
    paragraphs: [
      "Gravel depth directly controls load-bearing capacity. A 2-inch layer of crushed stone on bare earth spreads under a car tire and pushes into the mud below. Six inches of properly compacted base stone distributes vehicle weight across a wide area and stays stable through freeze-thaw cycles. The tonnage — and cost — difference between 2 inches and 6 inches on a 400-square-foot area is roughly 12 tons versus 37 tons.",
      "Depth also affects drainage. Gravel acts as a permeable layer that lets water drain through rather than pooling on the surface. But if the layer is too thin, water reaches the soil interface quickly and turns the subgrade to mud. Adequate depth keeps the drainage zone above the problem soil layer.",
      "Different projects need different total depths composed of different stone sizes. A driveway is not one uniform layer — it is a structural base of large aggregate topped by a finer surface course. Understanding each layer's purpose and depth prevents the common mistake of ordering one stone type at one thickness and expecting it to perform like a professionally built road base.",
    ],
  },
  sections: [
    {
      heading: "Depth recommendations by project type",
      paragraphs: [
        "Decorative paths and stepping stone surrounds: 2 to 3 inches of pea gravel or small crushed stone over landscape fabric. No vehicle traffic — depth is for appearance and weed suppression, not structural support.",
        "Patios and sitting areas (pedestrian only): 3 to 4 inches of compacted crushed stone over 2 to 3 inches of larger base stone. Total system depth of 5 to 7 inches handles foot traffic and patio furniture without rutting.",
        "Parking pads and occasional vehicle use: 4 to 6 inches of base stone plus 3 to 4 inches of surface gravel. Total 7 to 10 inches. Compaction between layers is essential.",
        "Daily-use driveways: 4 to 6 inches of compacted #2 or #3 base stone plus 3 to 4 inches of crusher run or 57 stone surface. Total 7 to 10 inches minimum. Heavy clay soils may need deeper base or geotextile fabric. For full driveway planning — base prep, ordering, and maintenance — see our [gravel driveway planning guide](/guides/gravel-driveway-planning).",
      ],
    },
    {
      heading: "Understanding layered gravel systems",
      paragraphs: [
        "Layer 1 — Subgrade preparation: Remove topsoil and organic material to firm mineral soil or compacted fill. This is not a gravel layer but determines how deep you excavate before stone goes in.",
        "Layer 2 — Base course: Large angular stone (#2, #3, or road base) at 4 to 6 inches compacted thickness. This layer carries structural loads and provides drainage away from the surface. Compact in 2-inch lifts with a plate compactor.",
        "Layer 3 — Surface course: Smaller crushed stone with fines (crusher run, 57 stone, or 78 stone) at 3 to 4 inches. The fines bind together when compacted to form a smooth, stable driving or walking surface. Top-dress every one to two years as fines wash away.",
      ],
    },
    {
      heading: "How to measure depth accurately",
      paragraphs: [
        "Drive grade stakes at each corner of the project area. Run string lines between stakes at the desired finished surface height. Measure down from the string to the excavated bottom at multiple points to confirm consistent depth.",
        "Account for compaction — loose stone settles 10 to 15 percent when compacted. If you want 4 inches of compacted base, place roughly 4.5 inches loose and compact down to target. This is why ordering 10 percent extra material is standard practice.",
        "For projects over existing gravel, measure the depth of material already in place and subtract from your target. Top-dressing a driveway that already has 3 inches of decent base may need only 2 to 3 inches of surface stone, not a full rebuild depth.",
      ],
    },
    {
      heading: "Calculating volume at the correct depth",
      paragraphs: [
        "Volume in cubic feet equals area in square feet times depth in feet. Convert depth from inches by dividing by 12. Four inches is 0.333 feet. A 500-square-foot driveway pad at 4 inches deep is 500 × 0.333 = 167 cubic feet.",
        "Convert cubic feet to cubic yards by dividing by 27. Then multiply cubic yards by material density (typically 1.4 tons per cubic yard for crushed stone) to get order weight in tons.",
        "Calculate each layer separately if using different stone types at different depths. Base and surface layers have different densities and prices — combining them into one calculation loses the ability to order the right product for each lift.",
      ],
    },
    {
      heading: "Adjusting depth for soil conditions",
      paragraphs: [
        "Clay and silt soils hold water and expand when frozen. Increase base depth by 2 inches and always use geotextile fabric between subgrade and base on clay. Sandy and gravelly soils drain well and may allow slightly shallower base layers.",
        "High water table areas need additional drainage — consider a French drain alongside the gravel area rather than simply adding more stone depth. More gravel over saturated soil eventually sinks into the mud regardless of depth.",
        "Steep grades (over 10 percent slope) need deeper surface gravel at the low end where water and material migrate downhill. Check depth at the bottom of slopes annually and top-dress as needed.",
      ],
    },
  ],
  examples: [
    {
      title: "Garden walkway",
      scenario:
        "A 3-foot-wide, 40-foot-long path (120 sq ft) with 3 inches of decorative crushed stone over landscape fabric. Pedestrian use only.",
      outcome:
        "Depth: 3 in = 0.25 ft. Volume: 120 × 0.25 = 30 cu ft = 1.1 cu yd. At 1.4 tons/yd, order 1.5 tons with 10 percent overage. No separate base layer needed on firm soil.",
    },
    {
      title: "RV parking pad",
      scenario:
        "A 12-by-20-foot pad (240 sq ft) for occasional RV parking. Six inches of base plus 4 inches of surface gravel on clay soil with geotextile fabric.",
      outcome:
        "Base: 240 × 0.5 = 120 cu ft = 4.4 cu yd = 6.2 tons. Surface: 240 × 0.333 = 80 cu ft = 3 cu yd = 4.2 tons. Total 10.4 tons; with 10 percent overage, order 12 tons. Compact each layer before adding the next.",
    },
    {
      title: "Top-dressing existing driveway",
      scenario:
        "A 200-foot driveway, 10 feet wide (2,000 sq ft), with adequate base already in place. Adding 2 inches of 57 stone surface course.",
      outcome:
        "Depth: 2 in = 0.167 ft. Volume: 2,000 × 0.167 = 334 cu ft = 12.4 cu yd = 17.3 tons. With 10 percent overage, order 19 tons. Spread in lifts and compact with a roller.",
    },
  ],
  commonMistakes: [
    "Using 2 inches of gravel for a driveway and expecting it to support vehicle traffic without rutting.",
    "Calculating depth in inches but plugging the number directly into the formula without converting to feet.",
    "Ordering one stone type at one depth instead of planning separate base and surface layers.",
    "Ignoring compaction loss and ordering exact calculated volume, ending up short after each lift is compacted.",
    "Placing gravel on unprepared topsoil without excavation, so the stone sinks regardless of depth.",
    "Using the same depth recommendation for clay soil as for well-drained sandy soil without adjustment.",
  ],
  recommendedAssumptions: [
    "Use 2 to 3 inches for decorative paths, 3 to 4 inches for pedestrian patios, and 7 to 10 inches total for vehicle driveways.",
    "Convert depth from inches to feet (divide by 12) before calculating volume.",
    "Plan separate base (large stone, 4 to 6 inches) and surface (small stone with fines, 3 to 4 inches) layers for any vehicle-use area.",
    "Add 10 percent to calculated volume for compaction settlement and spreading waste.",
    "Use 1.4 tons per cubic yard as default density for crushed stone unless your supplier specifies otherwise.",
    "Install geotextile fabric between subgrade and base on clay or organic soils.",
  ],
  faqs: [
    {
      question: "How deep should gravel be for a driveway?",
      answer:
        "Daily-use driveways need 4 to 6 inches of compacted base stone plus 3 to 4 inches of surface gravel — 7 to 10 inches total. Light-use parking pads can reduce surface depth to 3 inches but should keep the full base layer.",
    },
    {
      question: "Can I use one depth for the entire project?",
      answer:
        "For small decorative areas and paths, a single layer at 2 to 3 inches is fine. Any surface that receives vehicle traffic needs at least two layers at different depths with different stone sizes for proper load distribution.",
    },
    {
      question: "Does gravel depth include compaction?",
      answer:
        "Recommended depths are compacted thickness — the final height after compaction. Place 10 to 15 percent more loose material than the target compacted depth to account for settlement during compaction.",
    },
    {
      question: "How do I check if my existing gravel is deep enough?",
      answer:
        "Dig a small test hole through the gravel to the subgrade at a low spot. Measure the total gravel thickness. If it is under 4 inches on a vehicle area or you hit mud immediately below, plan a full rebuild with proper base depth rather than just top-dressing.",
    },
    {
      question: "Is deeper always better?",
      answer:
        "Beyond recommended depths, additional gravel adds cost without proportional benefit. Ten inches of base under a pedestrian patio does not make it more walkable — it just wastes material. Match depth to actual use and soil conditions.",
    },
    {
      question: "How does depth affect the cost calculation?",
      answer:
        "Volume — and cost — scales linearly with depth. Doubling depth doubles tonnage and price. This is why choosing the correct depth for your use case matters more than any other variable in the estimate.",
    },
  ],
  cta: {
    title: "Calculate gravel volume by depth",
    description:
      "Enter area dimensions and target depth to get cubic yards and estimated tons for your gravel project.",
    calculatorSlug: "gravel-calculator",
    buttonText: "Open Gravel Calculator",
  },
  internalLinks: [
    { href: "/calculators/gravel-calculator", label: "Gravel Calculator" },
    { href: "/calculators/mulch-calculator", label: "Mulch Calculator" },
    { href: "/calculators/topsoil-calculator", label: "Topsoil Calculator" },
    { href: "/guides/gravel-driveway-planning", label: "Gravel Driveway Planning Guide" },
    { href: "/guides/mulch-depth-guide", label: "Mulch Depth Guide" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
