import type { GuideArticle } from "@/types/guide-article";

import { deckBoardSpacingGuideArticle } from "./deck-board-spacing";
import { drywallSheetSizeGuideArticle } from "./drywall-sheet-size";
import { concreteGuideArticle } from "./concrete";
import { fenceGuideArticle } from "./fence";
import { flooringGuideArticle } from "./flooring";
import { gravelDepthGuideArticle } from "./gravel-depth";
import { gravelGuideArticle } from "./gravel";
import { mulchDepthGuideArticle } from "./mulch-depth";
import { paintGuideArticle } from "./paint";
import { roofingGuideArticle } from "./roofing";
import { tileGuideArticle } from "./tile";

export const guideArticles: Record<string, GuideArticle> = {
  [paintGuideArticle.slug]: paintGuideArticle,
  [concreteGuideArticle.slug]: concreteGuideArticle,
  [tileGuideArticle.slug]: tileGuideArticle,
  [gravelGuideArticle.slug]: gravelGuideArticle,
  [flooringGuideArticle.slug]: flooringGuideArticle,
  [fenceGuideArticle.slug]: fenceGuideArticle,
  [gravelDepthGuideArticle.slug]: gravelDepthGuideArticle,
  [mulchDepthGuideArticle.slug]: mulchDepthGuideArticle,
  [roofingGuideArticle.slug]: roofingGuideArticle,
  [deckBoardSpacingGuideArticle.slug]: deckBoardSpacingGuideArticle,
  [drywallSheetSizeGuideArticle.slug]: drywallSheetSizeGuideArticle,
};

export function getGuideArticle(slug: string): GuideArticle | undefined {
  return guideArticles[slug];
}
