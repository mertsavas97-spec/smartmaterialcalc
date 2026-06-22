import { type ComponentType } from "react";
import type { Calculator } from "@/data/calculators";
import { ConcreteBagsCalculatorForm } from "./ConcreteBagsCalculatorForm";
import { ConcreteCalculatorForm } from "./ConcreteCalculatorForm";
import { DeckCalculatorForm } from "./DeckCalculatorForm";
import { DrywallCalculatorForm } from "./DrywallCalculatorForm";
import { FenceCalculatorForm } from "./FenceCalculatorForm";
import { FlooringCalculatorForm } from "./FlooringCalculatorForm";
import { GenericCalculatorForm } from "./GenericCalculatorForm";
import { GravelCalculatorForm } from "./GravelCalculatorForm";
import { MulchCalculatorForm } from "./MulchCalculatorForm";
import { PaintCalculatorForm } from "./PaintCalculatorForm";
import { PaverCalculatorForm } from "./PaverCalculatorForm";
import { RoofingCalculatorForm } from "./RoofingCalculatorForm";
import { StairCalculatorForm } from "./StairCalculatorForm";
import { TileCalculatorForm } from "./TileCalculatorForm";
import { TopsoilCalculatorForm } from "./TopsoilCalculatorForm";
import { WallpaperCalculatorForm } from "./WallpaperCalculatorForm";

const CALCULATOR_FORMS: Record<string, ComponentType> = {
  "paint-calculator": PaintCalculatorForm,
  "concrete-calculator": ConcreteCalculatorForm,
  "concrete-bags-calculator": ConcreteBagsCalculatorForm,
  "gravel-calculator": GravelCalculatorForm,
  "mulch-calculator": MulchCalculatorForm,
  "topsoil-calculator": TopsoilCalculatorForm,
  "tile-calculator": TileCalculatorForm,
  "flooring-calculator": FlooringCalculatorForm,
  "drywall-calculator": DrywallCalculatorForm,
  "deck-calculator": DeckCalculatorForm,
  "fence-calculator": FenceCalculatorForm,
  "roofing-calculator": RoofingCalculatorForm,
  "wallpaper-calculator": WallpaperCalculatorForm,
  "stair-calculator": StairCalculatorForm,
  "paver-calculator": PaverCalculatorForm,
};

export function renderCalculatorForm(slug: string, calculator: Calculator) {
  const Form = CALCULATOR_FORMS[slug];
  if (Form) {
    return <Form />;
  }
  return <GenericCalculatorForm calculator={calculator} />;
}
