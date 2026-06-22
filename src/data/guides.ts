import { getGuideArticle } from "@/data/guide-articles";
import { getArticleReadingTime } from "@/lib/reading-time";

export type Guide = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  thumbnail: string;
  heroImage: string;
};

const GUIDE_IMAGE_BASE = "/images/guides";

type GuideInput = Omit<Guide, "thumbnail" | "heroImage">;

function withGuideImages(guide: GuideInput): Guide {
  const imagePath = `${GUIDE_IMAGE_BASE}/${guide.slug}.webp`;
  return {
    ...guide,
    thumbnail: imagePath,
    heroImage: imagePath,
  };
}

const guideDefinitions: GuideInput[] = [
  {
    slug: "how-much-paint-do-i-need",
    title: "How Much Paint Do I Need for a Room?",
    category: "Paint",
    excerpt:
      "Learn the simple formula pros use to estimate paint coverage, including doors, windows, and multiple coats.",
    datePublished: "2025-06-12",
    dateModified: "2026-06-22",
  },
  {
    slug: "concrete-slab-calculator-guide",
    title: "Concrete Slab Calculator: A Complete Guide",
    category: "Concrete",
    excerpt:
      "Step-by-step walkthrough for calculating cubic yards, ordering the right amount, and avoiding short pours.",
    datePublished: "2025-05-28",
    dateModified: "2026-06-22",
  },
  {
    slug: "tile-installation-waste-factor",
    title: "Tile Installation: How Much Extra to Buy",
    category: "Flooring",
    excerpt:
      "Understand waste factors for diagonal layouts, large format tile, and pattern cuts so you never run short.",
    datePublished: "2025-05-15",
    dateModified: "2026-06-22",
  },
  {
    slug: "gravel-driveway-planning",
    title: "Planning a Gravel Driveway: Depth and Coverage",
    category: "Outdoor",
    excerpt:
      "Choose the right gravel depth, calculate tonnage, and prep your base for a driveway that lasts.",
    datePublished: "2025-04-30",
    dateModified: "2026-06-22",
  },
  {
    slug: "gravel-depth-guide",
    title: "Gravel Depth Guide: How Deep Should Gravel Be?",
    category: "Outdoor",
    excerpt:
      "Choose the right gravel depth for driveways, paths, and drainage beds — with depth recommendations by use case.",
    datePublished: "2025-06-20",
    dateModified: "2026-06-22",
  },
  {
    slug: "mulch-depth-guide",
    title: "Mulch Depth Guide: How Much Mulch Do You Need?",
    category: "Outdoor",
    excerpt:
      "Find the ideal mulch depth for garden beds, trees, and pathways — and how to calculate cubic yards or bags.",
    datePublished: "2025-06-20",
    dateModified: "2026-06-22",
  },
  {
    slug: "hardwood-flooring-estimate",
    title: "Hardwood Flooring: How to Estimate Square Footage",
    category: "Flooring",
    excerpt:
      "Measure rooms accurately, account for closets and transitions, and order with the right overage.",
    datePublished: "2025-04-18",
    dateModified: "2026-06-22",
  },
  {
    slug: "fence-post-spacing-guide",
    title: "Fence Post Spacing and Material Estimates",
    category: "Outdoor",
    excerpt:
      "Standard post spacing, panel counts, and hardware estimates for wood and vinyl fencing projects.",
    datePublished: "2025-03-22",
    dateModified: "2026-06-22",
  },
  {
    slug: "roofing-squares-explained",
    title: "Roofing Squares Explained: How to Calculate Roof Area",
    category: "Roofing",
    excerpt:
      "Understand roofing squares, pitch multipliers, and how to order the right amount of shingles for your roof.",
    datePublished: "2025-06-20",
    dateModified: "2026-06-22",
  },
  {
    slug: "deck-board-spacing-guide",
    title: "Deck Board Spacing Guide",
    category: "Lumber",
    excerpt:
      "Learn how board gaps affect decking coverage, material estimates, and seasonal expansion for wood and composite decks.",
    datePublished: "2025-06-22",
    dateModified: "2026-06-22",
  },
  {
    slug: "drywall-sheet-size-guide",
    title: "Drywall Sheet Size Guide",
    category: "Lumber",
    excerpt:
      "Compare 4×8, 4×10, and 4×12 sheet sizes — coverage, waste factors, and when each size makes sense for your project.",
    datePublished: "2025-06-22",
    dateModified: "2026-06-22",
  },
];

export const guides: Guide[] = guideDefinitions.map(withGuideImages);

export { formatDisplayDate as formatGuideDate } from "@/lib/date-format";

export function getGuideReadingTimeLabel(slug: string): string {
  const article = getGuideArticle(slug);
  if (!article) {
    return "1 min read";
  }
  return getArticleReadingTime(article).label;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((guide) => guide.slug);
}
