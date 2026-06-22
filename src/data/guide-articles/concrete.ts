import type { GuideArticle } from "@/types/guide-article";

export const concreteGuideArticle: GuideArticle = {
  slug: "concrete-slab-calculator-guide",
  calculatorSlug: "concrete-calculator",
  relatedGuideSlugs: ["gravel-driveway-planning"],
  relatedCalculatorSlugs: ["concrete-bags-calculator", "gravel-calculator"],
  intro:
    "Pouring a concrete slab is one of those projects where getting the quantity wrong is expensive in both time and money. Order too little and the truck leaves before you finish — short loads are hard to supplement on the fly, and cold joints weaken the slab. Order too much and you pay for concrete that hardens in the chute or get stuck finding a place to dump excess. Whether you are building a patio, driveway section, shed foundation, or walkway, the calculation itself is simple: length times width times thickness, converted to cubic yards. The skill is in measuring accurately, choosing the right thickness, and adding a sensible waste allowance. This guide covers the full process from site prep through placing your order with the ready-mix supplier.",
  whyItMatters: {
    heading: "Why getting concrete volume right matters",
    paragraphs: [
      "Ready-mix concrete is priced per cubic yard, and most suppliers enforce minimum orders — typically one to two cubic yards for delivery. A short pour on a four-yard slab might mean paying rush fees for a half-yard supplement or hand-mixing dozens of 80-pound bags while the first batch sets up. Either way, the labor cost far exceeds the material savings from under-ordering.",
      "Concrete has a limited working time once water hits the mix. On a warm day, you have roughly 90 minutes from truck arrival to final screed and float. Running out of material mid-pour forces you to rush, cut corners on finishing, or accept a cold joint that may crack later. Having 5 to 10 percent extra lets the crew work at a steady pace without panic.",
      "Thickness errors compound quickly. A 12-by-16-foot slab that should be 4 inches thick but gets calculated at 3.5 inches is short by nearly half a cubic yard. That is the difference between a clean single pour and a slab that is structurally under-spec for vehicle loads or frost heave.",
    ],
  },
  sections: [
    {
      heading: "Measure length, width, and thickness",
      paragraphs: [
        "Measure the slab footprint in feet, not inches. For a rectangular patio, record the longest length and widest width at several points — ground contours and form boards are rarely perfect rectangles. Use the average if measurements vary by more than an inch.",
        "Standard thickness depends on use. Sidewalks and shed bases work at 3.5 to 4 inches. Driveways and garage floors need 4 to 6 inches depending on soil conditions and vehicle weight. Convert thickness from inches to feet by dividing by 12. Four inches equals 0.333 feet.",
        "Volume in cubic feet equals length × width × thickness in feet. A 10-by-12-foot patio at 4 inches thick is 10 × 12 × 0.333 = 40 cubic feet. Divide by 27 to convert to cubic yards: 40 ÷ 27 = 1.48 cubic yards.",
      ],
    },
    {
      heading: "Account for irregular shapes and embedded elements",
      paragraphs: [
        "Circular or curved slabs are common for fire pits and garden features. Calculate the area of the circle (π × radius squared) and multiply by thickness in feet. For half-circles and arcs, use the appropriate fraction of the full circle area.",
        "Steps, thickened edges, and footings add volume beyond the main slab. A monolithic pour with a 12-inch-thick perimeter beam around a 4-inch interior slab can add 20 to 30 percent to your total. Sketch a cross-section and calculate each zone separately.",
        "Post bases, pipe sleeves, and large embedded items displace minimal concrete — usually not enough to adjust your order. Do not subtract for rebar or wire mesh; they occupy negligible volume.",
      ],
    },
    {
      heading: "Add waste and contingency",
      paragraphs: [
        "Professional estimators add 5 to 10 percent to calculated volume for spillage, over-excavation, and uneven subgrade. If your sub-base is not perfectly level, the low spots fill deeper and consume extra concrete. Ten percent on a 2-yard pour is only 0.2 yards — cheap insurance.",
        "Pump trucks lose a small amount in the line, especially on the first pour of the day. If you are pumping a long distance or over a house, ask the pump operator about line volume and add it to your order.",
        "Round up to the nearest quarter yard when calling the plant. Suppliers prefer clean numbers, and the small extra cost beats running short. Never round down.",
      ],
    },
    {
      heading: "Ready-mix versus bagged concrete",
      paragraphs: [
        "Ready-mix delivery makes sense for pours of one cubic yard or more. You get consistent strength, controlled slump, and fast placement. One cubic yard equals 27 cubic feet — roughly forty-five 80-pound bags mixed individually.",
        "For slabs under one cubic yard — a small AC pad, mailbox post footing, or fence post — bagged concrete is often more practical. An 80-pound bag yields about 0.6 cubic feet. Our concrete bags calculator converts your slab dimensions directly to bag count.",
        "Compare total cost including delivery fees, pump rental, and your labor. Hand-mixing three-quarters of a yard in a wheelbarrow is achievable for a fit homeowner on a cool morning but miserable at 90 degrees.",
      ],
    },
    {
      heading: "Placing your order and preparing the site",
      paragraphs: [
        "Call the ready-mix plant at least 48 hours ahead for residential pours. Specify PSI strength (3,000 PSI is standard for patios; 4,000 for driveways), slump (4 to 5 inches for most flatwork), and any admixtures for hot or cold weather.",
        "Have forms set, base compacted, and rebar or wire mesh positioned before the truck arrives. Confirm truck access — a full mixer weighs over 60,000 pounds. If access is tight, schedule a pump truck simultaneously. Patios and walkways often sit on a compacted [gravel base](/guides/gravel-depth-guide) — plan that material separately before pour day.",
        "Line up enough help. Rule of thumb: one person per cubic yard minimum for screeding and finishing, plus one extra for wheelbarrow work if the chute cannot reach the entire pour.",
      ],
    },
  ],
  examples: [
    {
      title: "Backyard patio pour",
      scenario:
        "A rectangular patio 14 feet by 18 feet, 4 inches thick, on a leveled gravel base. No thickened edges or steps.",
      outcome:
        "Volume is 14 × 18 × 0.333 = 84 cubic feet, or 3.11 cubic yards. With 10 percent waste allowance, order 3.5 cubic yards. Schedule one mixer truck and three helpers for screeding and finishing.",
    },
    {
      title: "Single-car driveway extension",
      scenario:
        "A 10-by-20-foot driveway pad, 5 inches thick, intended for passenger vehicles on compacted crushed stone.",
      outcome:
        "Thickness in feet is 0.417. Volume equals 10 × 20 × 0.417 = 83.4 cubic feet, or 3.09 cubic yards. Request 4,000 PSI mix with 10 percent overage for a 3.5-yard order. Confirm forms can handle vehicle edge loads.",
    },
    {
      title: "Small shed foundation",
      scenario:
        "An 8-by-10-foot shed slab, 4 inches thick. Total volume under one cubic yard — evaluating bagged versus ready-mix.",
      outcome:
        "Volume is 8 × 10 × 0.333 = 26.6 cubic feet, or 0.99 cubic yards. That is roughly forty-four 80-pound bags. Ready-mix with a one-yard minimum may cost less in labor. With 10 percent waste, order 1.1 yards delivered or 48 bags.",
    },
  ],
  commonMistakes: [
    "Forgetting to convert thickness from inches to feet, which overstates volume by a factor of 12 and leads to massive over-ordering.",
    "Measuring only one corner of the slab footprint when the form layout is trapezoidal or follows a curve.",
    "Skipping the waste allowance and running short when the subgrade dips in the center of the pour.",
    "Ordering 3,000 PSI mix for a driveway that will carry trucks — local codes often require 4,000 PSI for vehicle-bearing slabs.",
    "Scheduling the truck before forms and reinforcement are complete, burning clock time while the mix waits in the chute.",
    "Assuming bagged and ready-mix are interchangeable on large pours without accounting for the hours needed to hand-mix.",
  ],
  recommendedAssumptions: [
    "Use 4 inches as default thickness for patios, walkways, and shed slabs unless local code specifies otherwise.",
    "Convert all thickness measurements from inches to feet before multiplying (divide inches by 12).",
    "Add 10 percent waste for leveled, well-prepared sites; use 5 percent only on perfectly formed and compacted commercial sub-bases.",
    "Order ready-mix for volumes of 1 cubic yard or greater; compare bag count for anything smaller.",
    "Specify 3,000 PSI for light-duty flatwork and 4,000 PSI for driveways and garage floors.",
    "Round up to the nearest 0.25 cubic yard when placing your order — never round down.",
  ],
  faqs: [
    {
      question: "How many 80-pound bags equal one cubic yard?",
      answer:
        "One cubic yard is 27 cubic feet. An 80-pound bag yields approximately 0.6 cubic feet when mixed. You need about 45 bags per cubic yard. Always buy a few extra bags for spillage and uneven subgrade.",
    },
    {
      question: "What is the minimum order for ready-mix delivery?",
      answer:
        "Most plants enforce a one-yard minimum for residential delivery, though some charge a short-load fee for orders under two yards. Call your local supplier for current minimums and fees before calculating whether bags or truck delivery is cheaper.",
    },
    {
      question: "Should I include rebar in my volume calculation?",
      answer:
        "No. Rebar and wire mesh displace negligible concrete volume. Calculate based on the full cross-section of the slab. Focus rebar planning on spacing and cover depth, not cubic yard adjustments.",
    },
    {
      question: "How thick should a concrete driveway be?",
      answer:
        "Passenger vehicle driveways typically need 4 inches of concrete over 4 to 6 inches of compacted gravel base. Driveways that will see heavy trucks or RVs should go to 5 or 6 inches. Check local building codes for frost depth and reinforcement requirements.",
    },
    {
      question: "Can I pour in sections if I run short?",
      answer:
        "You can, but cold joints between pours are weak points that often crack. If you must stop mid-pour, plan the joint at a control line, roughen the edge before the next pour, and use a bonding agent. It is far better to order enough upfront.",
    },
    {
      question: "Does a pump truck change how much concrete I need?",
      answer:
        "The pump line holds roughly 0.25 to 0.5 cubic yards depending on hose length. This material is recovered at the end of the pour, but some stays in the line. Ask your pump operator and add a small buffer if the line is long.",
    },
  ],
  cta: {
    title: "Calculate cubic yards for your slab",
    description:
      "Enter length, width, and thickness to get cubic yards with a recommended order quantity including waste allowance.",
    calculatorSlug: "concrete-calculator",
    buttonText: "Open Concrete Calculator",
  },
  internalLinks: [
    { href: "/calculators/concrete-calculator", label: "Concrete Calculator" },
    { href: "/calculators/concrete-bags-calculator", label: "Concrete Bags Calculator" },
    { href: "/calculators/gravel-calculator", label: "Gravel Calculator" },
    { href: "/guides/gravel-driveway-planning", label: "Gravel Driveway Planning Guide" },
    { href: "/guides/gravel-depth-guide", label: "Gravel Depth Guide" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
