export type CalculatorMaterialList = {
  slug: string;
  title: string;
  materials: string[];
  note: string;
};

export const calculatorMaterials: Record<string, CalculatorMaterialList> = {
  "paint-calculator": {
    slug: "paint-calculator",
    title: "Typical materials for a paint project",
    materials: ["Paint", "Primer", "Rollers", "Paint tray", "Painter's tape"],
    note:
      "Use your gallon estimate as a starting point. Verify coverage rates on product labels before purchase.",
  },
  "tile-calculator": {
    slug: "tile-calculator",
    title: "Typical materials for a tile project",
    materials: ["Tile", "Grout", "Spacers", "Thinset", "Sealer"],
    note:
      "Order tile using your calculated count plus waste. Mortar and grout quantities depend on tile size and joint width.",
  },
  "flooring-calculator": {
    slug: "flooring-calculator",
    title: "Typical materials for a flooring project",
    materials: [
      "Flooring",
      "Underlayment",
      "Transition strips",
      "Expansion spacers",
    ],
    note:
      "Box counts are a planning estimate. Confirm box coverage on the product label before ordering.",
  },
  "concrete-calculator": {
    slug: "concrete-calculator",
    title: "Typical materials for a concrete pour",
    materials: ["Concrete mix", "Reinforcement", "Trowels", "Screed board"],
    note:
      "Ready-mix volume is an estimate. Add waste for spillage and uneven subgrade, then verify with your supplier.",
  },
  "concrete-bags-calculator": {
    slug: "concrete-bags-calculator",
    title: "Typical materials for a bagged concrete project",
    materials: ["Bagged concrete mix", "Wheelbarrow", "Trowel", "Screed board"],
    note:
      "Bag counts assume standard yield per bag. Check the label on your specific product.",
  },
  "gravel-calculator": {
    slug: "gravel-calculator",
    title: "Typical materials for a gravel project",
    materials: ["Gravel", "Landscape fabric", "Edging", "Compactor rental"],
    note:
      "Tonnage depends on stone type and compaction. Verify depth requirements for your use case.",
  },
  "mulch-calculator": {
    slug: "mulch-calculator",
    title: "Typical materials for a mulch project",
    materials: ["Mulch", "Landscape fabric", "Edging", "Garden rake"],
    note:
      "Bag counts are based on your bag size assumption. Bulk delivery may be more economical for large beds.",
  },
  "topsoil-calculator": {
    slug: "topsoil-calculator",
    title: "Typical materials for a topsoil project",
    materials: ["Topsoil", "Compost", "Landscape rake", "Wheelbarrow"],
    note:
      "Volume estimates assume uniform depth. Settling may reduce visible depth after spreading.",
  },
  "drywall-calculator": {
    slug: "drywall-calculator",
    title: "Typical materials for a drywall project",
    materials: [
      "Drywall sheets",
      "Joint compound",
      "Drywall tape",
      "Screws",
      "Corner bead",
    ],
    note:
      "Sheet counts are a planning estimate. Add waste for cuts around openings and damaged sheets.",
  },
  "deck-calculator": {
    slug: "deck-calculator",
    title: "Typical materials for a decking project",
    materials: [
      "Decking boards",
      "Joists",
      "Deck screws",
      "Hidden fasteners",
      "Railing hardware",
    ],
    note:
      "Linear feet cover decking surface only. Framing lumber and hardware are ordered separately.",
  },
  "fence-calculator": {
    slug: "fence-calculator",
    title: "Typical materials for a fence project",
    materials: ["Posts", "Rails", "Pickets or panels", "Concrete mix", "Screws"],
    note:
      "Post and picket counts depend on spacing assumptions. Verify local code requirements before building.",
  },
  "paver-calculator": {
    slug: "paver-calculator",
    title: "Typical materials for a paver patio",
    materials: ["Pavers", "Base gravel", "Sand bedding", "Polymeric sand", "Edging"],
    note:
      "Paver count covers surface area only. Base and bedding materials are ordered separately.",
  },
  "roofing-calculator": {
    slug: "roofing-calculator",
    title: "Typical materials for a roofing project",
    materials: [
      "Shingles",
      "Underlayment",
      "Drip edge",
      "Flashing",
      "Roofing nails",
    ],
    note:
      "Square counts are planning estimates. Complex roofs may need additional waste for valleys and hips.",
  },
  "wallpaper-calculator": {
    slug: "wallpaper-calculator",
    title: "Typical materials for a wallpaper project",
    materials: ["Wallpaper rolls", "Adhesive", "Smoothing tool", "Utility knife", "Primer"],
    note:
      "Roll counts assume your entered coverage rate. Patterned paper may need extra for matching.",
  },
  "stair-calculator": {
    slug: "stair-calculator",
    title: "Typical materials for a stair project",
    materials: ["Stringers", "Treads", "Risers", "Construction adhesive", "Fasteners"],
    note:
      "Layout results are planning math only. Verify riser and tread dimensions against local building codes.",
  },
};

export function getCalculatorMaterials(
  slug: string
): CalculatorMaterialList | undefined {
  return calculatorMaterials[slug];
}
