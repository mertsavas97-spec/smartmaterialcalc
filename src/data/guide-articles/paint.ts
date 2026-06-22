import type { GuideArticle } from "@/types/guide-article";

export const paintGuideArticle: GuideArticle = {
  slug: "how-much-paint-do-i-need",
  calculatorSlug: "paint-calculator",
  relatedGuideSlugs: ["drywall-sheet-size-guide"],
  relatedCalculatorSlugs: ["wallpaper-calculator"],
  intro:
    "Ordering the right amount of paint saves money, reduces waste, and keeps your project on schedule. Too little paint means an extra trip to the store and a visible color mismatch between batches. Too much leaves you with partial gallons that dry out in the garage. The good news is that estimating paint for a room follows a straightforward formula used by professional painters every day. You measure the paintable surface area, subtract openings like doors and windows, multiply by the number of coats, and divide by the coverage rate on your paint can. This guide walks through each step in detail so you can calculate gallons with confidence before you open a single can.",
  whyItMatters: {
    heading: "Why accurate paint estimates matter",
    paragraphs: [
      "Paint is sold by the gallon, and most retailers will not accept returns on custom-tinted products. A gallon of quality interior latex typically costs $35 to $60, so over-ordering by two or three gallons on a whole-house project adds up quickly. Under-ordering is equally frustrating: stopping mid-wall to buy another gallon often means the new batch looks slightly different because tint machines vary and fresh paint sheen differs from paint that has been open for days.",
      "Beyond cost, the right quantity affects project timing. A second coat needs the first coat to dry fully, usually four to six hours for latex paint. Running out halfway through coat two means waiting until the next day to finish, which extends prep time, delays furniture moving, and pushes back other trades if you are renovating an entire room.",
      "Professional estimators also account for surface condition. New drywall absorbs more paint on the first coat than previously painted walls. Textured surfaces like orange peel or knockdown can reduce effective coverage by 10 to 20 percent compared to smooth drywall. Getting the math right upfront means fewer surprises and a cleaner finish.",
    ],
  },
  sections: [
    {
      heading: "Measure your room dimensions",
      paragraphs: [
        "Start by measuring the length and width of the room in feet. For standard rectangular rooms, multiply the perimeter (twice the length plus twice the width) by the ceiling height to get gross wall area. A 12-by-14-foot room with 8-foot ceilings has a perimeter of 52 feet and gross wall area of 416 square feet.",
        "For rooms with alcoves, bay windows, or angled walls, break the space into rectangles, calculate each section separately, and add the totals together. Do not forget closets that you plan to paint — measure their interior walls the same way. If you are painting the ceiling, add length times width as a separate surface.",
        "Round measurements to the nearest half foot. Precision within a few inches does not change your gallon count, but grossly underestimating a bump-out or stairwell wall can leave you short.",
      ],
    },
    {
      heading: "Subtract doors, windows, and fixed openings",
      paragraphs: [
        "Standard interior doors cover roughly 20 square feet of wall space. A typical double-hung window accounts for about 15 square feet. Multiply the count of each opening by these values and subtract from your gross wall area to get net paintable area.",
        "If your doors or windows are non-standard — oversized patio sliders, floor-to-ceiling windows, or small basement hopper windows — measure them individually and subtract their actual area instead of using defaults. Built-in bookcases, fireplaces with surrounding trim, and large archways may also reduce paintable area if you are not painting those surfaces.",
        "When in doubt, subtract the openings. It is better to slightly under-estimate wall area and buy an extra quart than to over-estimate and end up with a full unused gallon of a color you will never use again.",
      ],
    },
    {
      heading: "Factor in coats and paint coverage",
      paragraphs: [
        "Most interior walls need two coats for even color and proper hide, especially when covering a darker existing color or painting new drywall with a bold hue. Multiply your net wall area by the number of coats to get total coverage needed. Two coats on 350 net square feet requires 700 square feet of coverage.",
        "Coverage rates are printed on every paint can, usually between 350 and 400 square feet per gallon for smooth surfaces with one coat. Premium paints with higher solids content often cover closer to 400 square feet, while cheaper paints or deep colors may only achieve 300 to 350 square feet per gallon.",
        "Divide total coverage needed by the per-gallon coverage rate to get raw gallons. For 700 square feet at 375 square feet per gallon, you need 1.87 gallons before overage. Always use the coverage number from your specific product rather than a generic estimate.",
      ],
    },
    {
      heading: "Add overage and choose container sizes",
      paragraphs: [
        "Add 10 to 15 percent overage for touch-ups, cutting-in waste, and uneven surfaces. On textured walls or when rolling near popcorn ceilings, lean toward 15 percent. This buffer also covers the paint left in the tray, on rollers, and in the can rim that you cannot recover.",
        "Round up to practical purchase sizes. Paint is sold in quarts, gallons, and five-gallon buckets. If your calculation comes to 1.7 gallons, buy two gallons rather than one gallon plus two quarts — the price difference is small and having a full spare gallon for future touch-ups is worth it.",
        "For ceilings painted a different color, calculate ceiling area separately with its own coat count and coverage rate. Flat ceiling white often covers in one coat over a previous white ceiling, while walls almost always need two.",
      ],
    },
    {
      heading: "Adjust for surface type and color change",
      paragraphs: [
        "New drywall and patched walls are thirsty. The first coat on bare joint compound and paper face can soak up 30 to 50 percent more paint than a sealed surface. Some painters use a dedicated primer coat first, which changes your gallon math entirely — primer and topcoat are calculated separately.",
        "Dark-to-light color changes require a tinted primer or extra topcoats. Going from navy blue to off-white may need three coats of topcoat even with primer. Going from light to dark usually hides in two coats but uses more product per coat because deep bases have less white pigment.",
        "Bathrooms and kitchens benefit from moisture-resistant formulas, which sometimes have slightly lower coverage than standard latex. Exterior paint calculations follow the same formula but use higher overage (15 to 20 percent) because siding texture, lap joints, and weather conditions increase waste.",
      ],
    },
  ],
  examples: [
    {
      title: "Standard bedroom refresh",
      scenario:
        "A 12-by-12-foot bedroom with 8-foot ceilings, one standard door, two windows, and two coats of eggshell latex over existing light gray walls. Coverage rate is 375 square feet per gallon.",
      outcome:
        "Gross wall area is 384 square feet. Subtract 20 for the door and 30 for two windows to get 334 net square feet. Two coats need 668 square feet of coverage. At 375 per gallon, that is 1.78 gallons. With 10 percent overage, buy 2 gallons total.",
    },
    {
      title: "Living room with tall ceilings",
      scenario:
        "An open living room measuring 16 by 20 feet with 10-foot ceilings, one double door (40 sq ft), three windows, painting walls and ceiling white with two coats. Coverage is 400 square feet per gallon.",
      outcome:
        "Wall gross area is 720 square feet minus 85 for openings equals 635 net wall square feet. Ceiling adds 320 square feet. Total two-coat coverage is 1,910 square feet. Divided by 400 equals 4.78 gallons. With 15 percent overage, purchase 6 gallons or one 5-gallon bucket plus 1 gallon.",
    },
    {
      title: "Bold color change in a home office",
      scenario:
        "A 10-by-11-foot office with 8-foot ceilings, one door, one window, covering dark red with sage green. Three coats planned due to color change. Coverage drops to 350 sq ft per gallon on the deep base topcoat.",
      outcome:
        "Net wall area is 312 square feet. Three coats require 936 square feet of coverage. At 350 per gallon, raw need is 2.67 gallons. With 15 percent overage for the difficult color change, buy 3 gallons plus a quart for cutting in.",
    },
  ],
  commonMistakes: [
    "Forgetting to multiply by the number of coats, which cuts your estimate in half and guarantees a store run mid-project.",
    "Using gross wall area without subtracting doors and windows, leading to over-ordering by one or more gallons in smaller rooms.",
    "Assuming one coat will suffice when covering new drywall, dark colors, or patched walls that need two or three coats for full hide.",
    "Ignoring the coverage rate on the specific paint can and defaulting to 400 sq ft per gallon when your product only covers 325.",
    "Buying quarts to save money when the math calls for nearly two full gallons — two quarts cost almost as much as a gallon and leave you short.",
    "Not budgeting separate paint for ceilings when they are a different color or finish than the walls.",
  ],
  recommendedAssumptions: [
    "Use 20 square feet per standard interior door and 15 square feet per average window unless you measure otherwise.",
    "Plan on two coats for most interior repaints; add a third coat for dramatic color changes or bare drywall.",
    "Default coverage to 375 square feet per gallon for mid-grade interior latex on smooth drywall if the can label is unavailable.",
    "Add 10 percent overage for smooth walls in good condition; use 15 percent for textured surfaces or first-time DIY projects.",
    "Round up to the next whole gallon when your calculated need exceeds 1.5 gallons — partial quarts rarely save meaningful money.",
    "Calculate walls and ceilings separately when they use different products, sheens, or coat counts.",
  ],
  faqs: [
    {
      question: "Does paint type affect how much I need?",
      answer:
        "Yes. Primer, ceiling flat, and high-quality interior latex each have different coverage rates listed on the can. Exterior paints, textured coatings, and elastomeric products cover less area per gallon than smooth interior latex. Always check the label for your specific product.",
    },
    {
      question: "Should I buy extra paint for future touch-ups?",
      answer:
        "Keeping one quart of the exact batch-tinted color is smart for nail holes and scuffs. Custom colors cannot be perfectly re-matched later because tint formulas drift over time. Store the quart sealed, labeled with the room name and purchase date, in a climate-controlled space.",
    },
    {
      question: "How do I estimate paint for an entire house?",
      answer:
        "Calculate each room individually and add the totals together. Hallways, stairwells, and closets add significant area that people often forget. Use the same overage percentage on the combined total rather than per room to avoid rounding errors.",
    },
    {
      question: "Do I need primer in addition to paint?",
      answer:
        "New drywall, stained surfaces, and major color changes benefit from primer. Calculate primer as a separate one-coat pass using the primer's coverage rate, then calculate topcoat separately. Skipping primer on new drywall often means three topcoats instead of two.",
    },
    {
      question: "Can I use the same calculation for exterior siding?",
      answer:
        "The formula is the same — area times coats divided by coverage — but exterior projects need 15 to 20 percent overage for lap siding, rough texture, and cutting around trim. Measure each wall section of the house separately and add totals.",
    },
    {
      question: "What if my room is not rectangular?",
      answer:
        "Break irregular rooms into rectangles or triangles, calculate each section's wall area, and sum the results. For vaulted ceilings, measure wall height at the tallest and shortest points and use the average height for a reasonable estimate.",
    },
  ],
  cta: {
    title: "Calculate your paint needs instantly",
    description:
      "Enter your room dimensions, number of doors and windows, coats, and coverage rate to get a gallon estimate with recommended purchase quantity.",
    calculatorSlug: "paint-calculator",
    buttonText: "Open Paint Calculator",
  },
  internalLinks: [
    { href: "/calculators/paint-calculator", label: "Paint Calculator" },
    { href: "/calculators/wallpaper-calculator", label: "Wallpaper Calculator" },
    { href: "/guides/drywall-sheet-size-guide", label: "Drywall Sheet Size Guide" },
    { href: "/categories/paint", label: "Paint calculators" },
    { href: "/calculators", label: "All Calculators" },
  ],
};
