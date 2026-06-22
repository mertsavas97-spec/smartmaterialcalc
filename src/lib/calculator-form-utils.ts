import type { ConcreteBagsCalculatorInputs } from "./concrete-bags-calculator";
import type { ConcreteCalculatorInputs } from "./concrete-calculator";
import type { DeckCalculatorInputs } from "./deck-calculator";
import type { DrywallCalculatorInputs } from "./drywall-calculator";
import type { FenceCalculatorInputs } from "./fence-calculator";
import type { FlooringCalculatorInputs } from "./flooring-calculator";
import type { GravelCalculatorInputs } from "./gravel-calculator";
import type { MulchCalculatorInputs } from "./mulch-calculator";
import type { PaintCalculatorInputs } from "./paint-calculator";
import type { PaverCalculatorInputs } from "./paver-calculator";
import type { RoofingCalculatorInputs } from "./roofing-calculator";
import type { StairCalculatorInputs } from "./stair-calculator";
import type { TileCalculatorInputs } from "./tile-calculator";
import type { TopsoilCalculatorInputs } from "./topsoil-calculator";
import type { WallpaperCalculatorInputs } from "./wallpaper-calculator";

export const CALCULATOR_EMPTY_MESSAGE =
  "Enter your project dimensions and click Calculate to see your estimate.";

function requirePositive(
  ...fields: Array<{ label: string; value: number }>
): string | null {
  for (const { label, value } of fields) {
    if (!Number.isFinite(value) || value <= 0) {
      return `${label} must be greater than zero.`;
    }
  }
  return null;
}

function requireNonNegative(
  label: string,
  value: number
): string | null {
  if (!Number.isFinite(value) || value < 0) {
    return `${label} must be zero or greater.`;
  }
  return null;
}

function firstError(...errors: Array<string | null>): string | null {
  return errors.find((error) => error !== null) ?? null;
}

export function validatePaintInputs(inputs: PaintCalculatorInputs): string | null {
  return firstError(
    requirePositive(
      { label: "Room width", value: inputs.roomWidth },
      { label: "Room length", value: inputs.roomLength },
      { label: "Ceiling height", value: inputs.ceilingHeight },
      { label: "Coverage per gallon", value: inputs.coveragePerGallon }
    ),
    inputs.coats < 1 ? "Number of coats must be at least 1." : null,
    requireNonNegative("Waste / overage", inputs.overagePercent),
    requireNonNegative("Doors", inputs.doors),
    requireNonNegative("Windows", inputs.windows)
  );
}

export function validateConcreteInputs(
  inputs: ConcreteCalculatorInputs
): string | null {
  return firstError(
    requirePositive(
      { label: "Length", value: inputs.length },
      { label: "Width", value: inputs.width },
      { label: "Thickness", value: inputs.thicknessInches }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateConcreteBagsInputs(
  inputs: ConcreteBagsCalculatorInputs
): string | null {
  return firstError(
    requirePositive(
      { label: "Length", value: inputs.length },
      { label: "Width", value: inputs.width },
      { label: "Thickness", value: inputs.thicknessInches },
      { label: "Bag yield", value: inputs.bagYieldCubicFeet }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateGravelInputs(inputs: GravelCalculatorInputs): string | null {
  return firstError(
    requirePositive(
      { label: "Length", value: inputs.length },
      { label: "Width", value: inputs.width },
      { label: "Depth", value: inputs.depthInches },
      { label: "Density", value: inputs.densityTonsPerCubicYard }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateMulchInputs(inputs: MulchCalculatorInputs): string | null {
  return firstError(
    requirePositive(
      { label: "Length", value: inputs.length },
      { label: "Width", value: inputs.width },
      { label: "Depth", value: inputs.depthInches },
      { label: "Bag size", value: inputs.bagSizeCubicFeet }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateTopsoilInputs(
  inputs: TopsoilCalculatorInputs
): string | null {
  return firstError(
    requirePositive(
      { label: "Length", value: inputs.length },
      { label: "Width", value: inputs.width },
      { label: "Depth", value: inputs.depthInches }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateTileInputs(inputs: TileCalculatorInputs): string | null {
  return firstError(
    requirePositive(
      { label: "Surface length", value: inputs.roomLength },
      { label: "Surface width", value: inputs.roomWidth },
      { label: "Tile length", value: inputs.tileLengthInches },
      { label: "Tile width", value: inputs.tileWidthInches }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateFlooringInputs(
  inputs: FlooringCalculatorInputs
): string | null {
  return firstError(
    requirePositive(
      { label: "Room length", value: inputs.roomLength },
      { label: "Room width", value: inputs.roomWidth },
      { label: "Box coverage", value: inputs.boxCoverageSqFt }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateDrywallInputs(
  inputs: DrywallCalculatorInputs
): string | null {
  return firstError(
    requirePositive(
      { label: "Room length", value: inputs.roomLength },
      { label: "Room width", value: inputs.roomWidth },
      { label: "Wall height", value: inputs.wallHeight },
      { label: "Sheet width", value: inputs.sheetWidth },
      { label: "Sheet height", value: inputs.sheetHeight }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateDeckInputs(inputs: DeckCalculatorInputs): string | null {
  return firstError(
    requirePositive(
      { label: "Deck length", value: inputs.deckLength },
      { label: "Deck width", value: inputs.deckWidth },
      { label: "Board width", value: inputs.boardWidthInches }
    ),
    requireNonNegative("Board gap", inputs.boardGapInches),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateFenceInputs(inputs: FenceCalculatorInputs): string | null {
  return firstError(
    requirePositive(
      { label: "Fence length", value: inputs.fenceLength },
      { label: "Post spacing", value: inputs.postSpacing },
      { label: "Picket width", value: inputs.picketWidthInches }
    ),
    inputs.railsPerSection < 1
      ? "Rails per section must be at least 1."
      : null,
    requireNonNegative("Picket gap", inputs.picketGapInches)
  );
}

export function validateRoofingInputs(
  inputs: RoofingCalculatorInputs
): string | null {
  return firstError(
    requirePositive(
      { label: "Roof length", value: inputs.roofLength },
      { label: "Roof width", value: inputs.roofWidth },
      { label: "Pitch multiplier", value: inputs.pitchMultiplier }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateWallpaperInputs(
  inputs: WallpaperCalculatorInputs
): string | null {
  return firstError(
    requirePositive(
      { label: "Room length", value: inputs.roomLength },
      { label: "Room width", value: inputs.roomWidth },
      { label: "Wall height", value: inputs.wallHeight },
      { label: "Roll coverage", value: inputs.rollCoverageSqFt }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}

export function validateStairInputs(inputs: StairCalculatorInputs): string | null {
  return firstError(
    requirePositive(
      { label: "Total rise", value: inputs.totalRiseInches },
      { label: "Ideal riser height", value: inputs.idealRiserHeightInches },
      { label: "Tread depth", value: inputs.treadDepthInches }
    )
  );
}

export function validatePaverInputs(inputs: PaverCalculatorInputs): string | null {
  return firstError(
    requirePositive(
      { label: "Area length", value: inputs.patioLength },
      { label: "Area width", value: inputs.patioWidth },
      { label: "Paver length", value: inputs.paverLengthInches },
      { label: "Paver width", value: inputs.paverWidthInches }
    ),
    requireNonNegative("Waste allowance", inputs.wastePercent)
  );
}
