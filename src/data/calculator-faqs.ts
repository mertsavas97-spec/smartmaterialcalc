export type FaqItem = {
  question: string;
  answer: string;
};

export const calculatorFaqs: Record<string, FaqItem[]> = {
  "paint-calculator": [
    {
      question: "How much paint do I need for a 12×12 room?",
      answer:
        "A 12×12 room with 8-foot ceilings has about 384 sq ft of wall area before deducting doors and windows. With two coats and standard coverage (375 sq ft per gallon), you typically need about 2 gallons. Use our paint calculator for your room dimensions.",
    },
    {
      question: "How many coats of paint should I apply?",
      answer:
        "Most interior walls need two coats for even color and durability. One coat may work for touch-ups or when covering a similar color. Dark-to-light color changes often need a primer plus two finish coats.",
    },
    {
      question: "Does paint coverage vary by brand?",
      answer:
        "Yes. Most interior latex paints cover 350–400 sq ft per gallon per coat, but premium and textured paints may cover less. Check the label on your specific product and enter that number in the calculator.",
    },
    {
      question: "Should I deduct doors and windows from wall area?",
      answer:
        "Yes. Standard practice deducts about 20 sq ft per door and 15 sq ft per window. Our calculator applies these defaults so you do not over-order.",
    },
    {
      question: "How much extra paint should I buy?",
      answer:
        "Add 10–15% overage for touch-ups, roller absorption, and uneven surfaces. The calculator includes a waste percentage and rounds recommended purchase up to whole gallons.",
    },
    {
      question: "Does this calculator include ceiling paint?",
      answer:
        "This tool estimates wall paint based on room perimeter and ceiling height. Ceiling area is not included. Add ceiling square footage separately if you plan to paint the ceiling.",
    },
    {
      question: "How long does unused paint last?",
      answer:
        "Unopened latex paint lasts 2–10 years when stored properly. Opened cans last 1–2 years. Buying one extra gallon for touch-ups is still a good idea even if shelf life is limited.",
    },
    {
      question: "Can I use this for exterior paint?",
      answer:
        "The formula works for any flat wall surface, but exterior paint often has different coverage rates and may require more coats. Adjust coverage and coats to match your exterior product.",
    },
  ],
  "concrete-calculator": [
    {
      question: "How much concrete do I need for a 20×20 slab?",
      answer:
        "A 20×20 slab at 4 inches thick needs about 4.9 cubic yards of concrete before waste. At 6 inches thick, you need about 7.4 cubic yards. Enter your dimensions in the calculator for a planning estimate.",
    },
    {
      question: "What thickness should a patio slab be?",
      answer:
        "Residential patios and walkways are typically 4 inches thick. Driveways and heavy-load areas often use 5–6 inches. Always check local building codes for your project.",
    },
    {
      question: "How many cubic yards are in a cubic foot?",
      answer:
        "There are 27 cubic feet in one cubic yard. Our calculator converts automatically so you can order ready-mix by the cubic yard.",
    },
    {
      question: "Should I add extra concrete when ordering?",
      answer:
        "Yes. Add 5–10% for spillage, uneven subgrade, and form variations. Running short on a pour is costly. The calculator includes a waste allowance.",
    },
    {
      question: "When should I use bags instead of ready-mix?",
      answer:
        "Bagged concrete suits small projects under about 1 cubic yard — post holes, small pads, and repairs. Larger slabs are usually cheaper with ready-mix delivery.",
    },
    {
      question: "How do I measure slab thickness accurately?",
      answer:
        "Measure form height at several points across the pour area. Slabs should be uniform depth; low spots may need additional fill before placing concrete.",
    },
    {
      question: "Does this include a gravel base?",
      answer:
        "No. This calculator estimates concrete volume only. A compacted gravel base is recommended under most slabs but is ordered separately.",
    },
  ],
  "tile-calculator": [
    {
      question: "How much extra tile should I buy?",
      answer:
        "Add 10% for straight layouts and 15–20% for diagonal patterns, large-format tile, or complex cuts. The calculator applies your waste percentage and rounds up to whole tiles.",
    },
    {
      question: "How do I calculate tile for a 10×10 room?",
      answer:
        "A 10×10 room is 100 sq ft. With 12×12 inch tiles (1 sq ft each), you need about 100 tiles before waste. Use the calculator to match your tile size.",
    },
    {
      question: "Does tile size affect how many I need?",
      answer:
        "Yes. Larger tiles cover more area per piece but may have higher breakage rates. Enter your actual tile length and width in inches for an accurate count.",
    },
    {
      question: "Should I count closets and alcoves?",
      answer:
        "Include any floor area that will be tiled. Measure each section separately if layouts differ, then add the square footage together.",
    },
    {
      question: "Do I need more tile for wall installations?",
      answer:
        "Wall tile uses the same area formula. Vertical surfaces often have more cuts around outlets and corners — consider 15% waste or more.",
    },
    {
      question: "What about grout and thinset?",
      answer:
        "This calculator estimates tile count only. Grout and thinset quantities depend on tile size and joint width — check manufacturer coverage charts separately.",
    },
  ],
  "flooring-calculator": [
    {
      question: "How much flooring do I need for a 12×10 room?",
      answer:
        "A 12×10 room is 120 sq ft. With 10% waste, order about 132 sq ft. If your box covers 20 sq ft, that is roughly 7 boxes. Use the calculator for your box coverage.",
    },
    {
      question: "How much waste should I add for flooring?",
      answer:
        "Add 10% for standard straight installs. Use 12–15% for diagonal layouts, herringbone patterns, or rooms with many corners and closets.",
    },
    {
      question: "Do box coverage amounts vary by product?",
      answer:
        "Yes. Laminate, vinyl plank, and hardwood boxes cover different square footage. Check your product label and enter the box coverage shown on the packaging.",
    },
    {
      question: "Should I include closets in my measurement?",
      answer:
        "Yes, if you plan to floor the closet continuously with the room. Measure all connected areas that will receive the same flooring.",
    },
    {
      question: "Does this work for vinyl plank and laminate?",
      answer:
        "Yes. Enter room dimensions and box coverage for any flooring sold by the box or square foot. Adjust waste based on your install pattern.",
    },
    {
      question: "Should I keep extra flooring after installation?",
      answer:
        "Keep one extra box when possible. Styles are discontinued over time, and spare planks make future repairs much easier.",
    },
  ],
  "gravel-calculator": [
    {
      question: "How much gravel do I need for a driveway?",
      answer:
        "A 20×10 driveway at 3 inches deep needs about 1.85 cubic yards or roughly 2.6 tons at standard density. Depth of 4–6 inches is common for driveways — adjust depth in the calculator.",
    },
    {
      question: "What depth of gravel should I use?",
      answer:
        "Walkways and patios often use 2–3 inches. Driveways typically need 4–6 inches over a compacted base. Heavier traffic requires greater depth.",
    },
    {
      question: "How many tons are in a cubic yard of gravel?",
      answer:
        "It depends on stone type. Most crushed stone weighs about 1.4 tons per cubic yard. Dense river rock can be heavier. The calculator uses your density assumption.",
    },
    {
      question: "Should I order extra gravel?",
      answer:
        "Add 10% for compaction, spillage, and uneven spread. Gravel settles after installation, so a slightly generous order prevents mid-project shortages.",
    },
    {
      question: "Do I need a base layer under gravel?",
      answer:
        "Yes, for driveways and high-traffic areas. A compacted base layer improves drainage and prevents sinking. This calculator estimates top gravel volume only.",
    },
    {
      question: "Can I use this for pea gravel and crushed stone?",
      answer:
        "Yes. Adjust the density value to match your material. Lighter decorative gravel may be closer to 1.2 tons per cubic yard; heavier stone may exceed 1.5.",
    },
  ],
  "concrete-bags-calculator": [
    {
      question: "How many bags of concrete do I need for a 10×10 slab?",
      answer:
        "A 10×10 slab at 4 inches thick is about 33 cubic feet (roughly 1.2 cubic yards) before waste. With a bag yield of 0.45 cubic feet, you need about 74 bags before waste. Enter your dimensions and bag yield in the calculator.",
    },
    {
      question: "What bag yield should I use?",
      answer:
        "Enter the cubic feet yield printed on your bag label. A common default is about 0.45 cubic feet per bag, but yields vary by brand and mix type — check your product packaging.",
    },
    {
      question: "When should I use bagged concrete instead of ready-mix?",
      answer:
        "Bagged mix suits post holes, small pads, and repairs under roughly one cubic yard. Larger pours are usually cheaper and faster with ready-mix delivery by the truck.",
    },
    {
      question: "How much waste should I add for bagged concrete?",
      answer:
        "Add 10% for spillage, uneven pours, and partial bag use. Running short mid-pour is difficult to fix, so a small overage is worthwhile on small projects.",
    },
    {
      question: "How do I convert cubic feet to bags?",
      answer:
        "Divide total cubic feet (with waste) by the cubic feet each bag yields. The calculator performs this conversion and rounds up to whole bags.",
    },
    {
      question: "Does this calculator include rebar or gravel base?",
      answer:
        "No. This tool estimates bagged concrete volume only. Rebar, wire mesh, and compacted base materials are ordered separately.",
    },
  ],
  "topsoil-calculator": [
    {
      question: "How much topsoil do I need for a lawn?",
      answer:
        "Measure area length and width in feet and depth in inches. For new lawns, 4–6 inches of topsoil is common. The calculator converts to cubic feet and cubic yards with your waste allowance.",
    },
    {
      question: "How deep should topsoil be for a garden bed?",
      answer:
        "Most vegetable and flower beds use 6–12 inches of quality topsoil over existing soil. Shallow top-dressing for lawns may only need 1–2 inches.",
    },
    {
      question: "How many cubic yards are in a cubic foot of soil?",
      answer:
        "Divide cubic feet by 27 to get cubic yards. Suppliers often sell bulk topsoil by the cubic yard and bagged soil by the cubic foot.",
    },
    {
      question: "Should I add extra topsoil for settling?",
      answer:
        "Yes. Add 10–15% for settling, spillage, and uneven spreading. Loose soil compacts after watering and installation.",
    },
    {
      question: "Is bagged or bulk topsoil cheaper?",
      answer:
        "Bulk delivery by the cubic yard is usually more economical above about one cubic yard. Bagged soil suits small beds and spot filling.",
    },
    {
      question: "Does this include compost or mulch?",
      answer:
        "No. This calculator estimates topsoil volume only. Compost amendments and mulch top layers are separate materials with different depth targets.",
    },
  ],
  "mulch-calculator": [
    {
      question: "How much mulch do I need for garden beds?",
      answer:
        "Measure bed length and width in feet and depth in inches. Most beds use 2–3 inches of mulch. The calculator shows cubic yards and bag count based on your bag size assumption.",
    },
    {
      question: "How deep should mulch be?",
      answer:
        "Apply 2–3 inches for maintenance and weed suppression. New beds may use 3–4 inches initially. Deeper than 4 inches can harm plant roots.",
    },
    {
      question: "How do I convert mulch volume to bags?",
      answer:
        "Divide total cubic feet by the cubic feet per bag listed on the product label. Common bag sizes are 2 or 3 cubic feet. The calculator rounds up with your waste percentage.",
    },
    {
      question: "Should I order extra mulch?",
      answer:
        "Add 10% for uneven beds, spillage, and settling. Mulch compresses over time, so a modest overage prevents thin spots.",
    },
    {
      question: "Is bulk mulch cheaper than bags?",
      answer:
        "Bulk delivery by the cubic yard is usually cheaper for projects over about one cubic yard. Bagged mulch suits small beds and container gardens.",
    },
    {
      question: "Does mulch type affect volume calculations?",
      answer:
        "Volume math is the same for wood, bark, and rubber mulch. Density affects weight, not the cubic volume you need to cover an area at a given depth.",
    },
  ],
  "drywall-calculator": [
    {
      question: "How many drywall sheets do I need for a room?",
      answer:
        "Calculate wall area from room perimeter times wall height, then divide by your sheet size (for example, 32 sq ft for a 4×8 sheet). The calculator adds waste and rounds up to whole sheets.",
    },
    {
      question: "Should I use 4×8 or 4×12 sheets?",
      answer:
        "4×8 sheets are standard and easiest to handle. 4×12 sheets reduce seams on long walls but are heavier and harder to maneuver in tight spaces.",
    },
    {
      question: "How much drywall waste should I add?",
      answer:
        "Add 10% for simple rectangular rooms and 15% for rooms with many doors, windows, or soffits. Always round up to whole sheets.",
    },
    {
      question: "Does this calculator include the ceiling?",
      answer:
        "This tool estimates wall surface area from room perimeter and height. Add ceiling square footage separately if you plan to drywall the ceiling.",
    },
    {
      question: "Are doors and windows deducted?",
      answer:
        "No. This calculator uses gross wall area. Your waste percentage typically covers standard opening cuts, but very large openings may need a higher waste factor.",
    },
    {
      question: "Does this include joint compound and tape?",
      answer:
        "No. Sheet count only. Joint compound, tape, and screws depend on seam length and install method — order those separately.",
    },
  ],
  "deck-calculator": [
    {
      question: "How do I estimate decking linear feet?",
      answer:
        "Deck area divided by effective board width including gap gives linear feet of decking. Enter deck length, width, board width, and gap — the calculator includes waste and rounds up.",
    },
    {
      question: "Why does board gap affect my order?",
      answer:
        "Gap between boards reduces how much area each row covers. Ignoring gap leads to under-ordering. A 5.5-inch board with a quarter-inch gap covers 5.75 inches per row.",
    },
    {
      question: "How much extra decking should I buy?",
      answer:
        "Add 10% for straight runs to cover cuts, defects, and length mismatches. Complex layouts, stairs, and picture frames may need 12–15%.",
    },
    {
      question: "Does this include joists and railing?",
      answer:
        "No. This calculator estimates decking board linear feet only. Joists, posts, hardware, and railing are separate material lists.",
    },
    {
      question: "What board width should I enter?",
      answer:
        "Use actual nominal width — for example, 5.5 inches for a 2×6 deck board. Composite products list their exact face width on the packaging.",
    },
    {
      question: "Is this estimate code-compliant?",
      answer:
        "This is a material planning estimate only. Joist spacing, ledger attachment, and guardrail requirements must meet local building codes.",
    },
  ],
  "fence-calculator": [
    {
      question: "How do I calculate fence post spacing?",
      answer:
        "Divide total fence length by your post spacing in feet and round up for sections. Posts equal sections plus one. Enter spacing that matches your panel or rail layout.",
    },
    {
      question: "How many pickets do I need?",
      answer:
        "Divide fence length in inches by picket width plus gap between pickets, then round up. The calculator uses your picket width and gap inputs.",
    },
    {
      question: "What post spacing is standard for wood fences?",
      answer:
        "Most privacy fences use posts every 6 or 8 feet on center. Match spacing to your panel width or rail length for the cleanest layout.",
    },
    {
      question: "Should I add extra pickets for waste?",
      answer:
        "This calculator counts pickets without a separate waste percentage. Add a few extra pickets manually for cuts, defects, and gate sections.",
    },
    {
      question: "How many rails per fence section?",
      answer:
        "Typical 6-foot privacy fences use two rails per section. Taller fences or high-wind areas may use three. Enter rails per section in the calculator.",
    },
    {
      question: "Does this include concrete for posts?",
      answer:
        "No. Post, rail, and picket counts only. Concrete bags per post depend on hole size and depth — plan separately.",
    },
  ],
  "roofing-calculator": [
    {
      question: "What is a roofing square?",
      answer:
        "One roofing square equals 100 square feet of roof area. This calculator estimates square count from footprint and pitch — convert to shingle bundles using the coverage on your product label.",
    },
    {
      question: "How does roof pitch affect material quantity?",
      answer:
        "Steeper roofs have more surface area than flat footprint. Enter a pitch multiplier to adjust footprint area — for example, 1.12× for a moderate 6/12 pitch.",
    },
    {
      question: "How much roofing waste should I add?",
      answer:
        "Simple gable roofs often need 10% waste. Complex roofs with valleys, hips, and dormers may need 12–15% or more.",
    },
    {
      question: "Does this calculator include underlayment?",
      answer:
        "Squares estimated from roof area apply to both shingles and underlayment ordered by the square. Flashing, drip edge, and ridge caps are separate.",
    },
    {
      question: "How do I measure roof footprint?",
      answer:
        "Measure the horizontal length and width of the roof section at ground level or from plans. The calculator applies your pitch multiplier to estimate sloped surface area.",
    },
    {
      question: "Can I use footprint area without pitch adjustment?",
      answer:
        "Flat footprint underestimates sloped roofs. Use a pitch multiplier of 1.0 only for flat roofs or when you have already measured sloped surface area.",
    },
  ],
  "wallpaper-calculator": [
    {
      question: "How many wallpaper rolls do I need?",
      answer:
        "Calculate total wall area from room perimeter and height, add your waste percentage, then divide by roll coverage in square feet. The calculator rounds up to whole rolls.",
    },
    {
      question: "How much waste should I add for wallpaper?",
      answer:
        "Add 10–15% for pattern matching, trimming, and mistakes. Large repeats and complex patterns may need 15–20%.",
    },
    {
      question: "Are doors and windows deducted?",
      answer:
        "No. This calculator uses gross wall area. Waste percentage typically accounts for standard openings, but rooms with many openings may need a higher allowance.",
    },
    {
      question: "How do I find roll coverage?",
      answer:
        "Check the wallpaper label or retailer listing for square feet per roll. Single rolls and double rolls cover different amounts — enter the value for the product you are buying.",
    },
    {
      question: "Does pattern repeat affect roll count?",
      answer:
        "Yes. Patterns with large repeats require more wallpaper to align seams. Increase your waste percentage when matching bold or vertical patterns.",
    },
    {
      question: "Does this include wallpaper adhesive?",
      answer:
        "No. Roll count only. Paste or adhesive requirements depend on wallpaper type — prepasted, peel-and-stick, and traditional paste-the-wall products differ.",
    },
  ],
  "stair-calculator": [
    {
      question: "How do I calculate the number of stair risers?",
      answer:
        "Divide total rise in inches by your target riser height and round up to a whole number of risers. Actual riser height equals total rise divided by the number of risers.",
    },
    {
      question: "What is a comfortable riser height?",
      answer:
        "Residential stairs commonly use 7 to 7.75 inches per riser. Building codes often limit maximum riser height — verify local requirements before construction.",
    },
    {
      question: "How many treads are there?",
      answer:
        "Treads equal risers minus one. The top landing counts as the final step surface, so a flight with 14 risers has 13 treads.",
    },
    {
      question: "What tread depth should I use?",
      answer:
        "Most residential stairs use 10-inch tread depth. Enter your planned tread depth to calculate total horizontal run.",
    },
    {
      question: "Are these results building-code compliant?",
      answer:
        "No. This calculator provides layout math only. Riser height, tread depth, headroom, and handrail rules vary by jurisdiction — verify with local code.",
    },
    {
      question: "Does this include stringer lumber length?",
      answer:
        "The calculator outputs riser count, tread count, and total run. Stringer board length depends on layout geometry and cutting method — plan lumber separately.",
    },
  ],
  "paver-calculator": [
    {
      question: "How many pavers do I need for a patio?",
      answer:
        "Divide patio square footage by the area of one paver in square feet, then add your waste percentage. Enter paver length and width in inches for accurate piece size.",
    },
    {
      question: "How much paver waste should I add?",
      answer:
        "Add 10% for straight layouts and 12–15% for curves, borders, and diagonal patterns. Running short at edges is common without adequate waste.",
    },
    {
      question: "Do paver sizes include spacing?",
      answer:
        "This calculator uses paver face dimensions only. Narrow joint gaps between pavers have minimal impact on total count for most patios.",
    },
    {
      question: "Does this include base gravel and sand?",
      answer:
        "No. Paver count only. Compact gravel base and bedding sand are ordered by volume separately from patio area and depth.",
    },
    {
      question: "Can I use this for brick or natural stone?",
      answer:
        "Yes. Enter the length and width of any rectangular unit in inches. Irregular stone layouts may need a higher waste percentage.",
    },
    {
      question: "Should I buy extra pavers for future repairs?",
      answer:
        "Keep a few matching pavers after install. Styles and colors are discontinued over time, making future repairs difficult without spares.",
    },
  ],
};

export function getCalculatorFaqs(slug: string): FaqItem[] {
  return calculatorFaqs[slug] ?? [];
}
