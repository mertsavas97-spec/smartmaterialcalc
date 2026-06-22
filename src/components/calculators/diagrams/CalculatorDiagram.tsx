export type DiagramType =
  | "wall-area"
  | "slab-volume"
  | "depth-layer"
  | "floor-grid"
  | "sheet-layout"
  | "post-spacing"
  | "board-spacing"
  | "roof-pitch"
  | "stair-rise-run";

type CalculatorDiagramProps = {
  type: DiagramType;
  label: string;
};

const diagramFrameClassName =
  "flex aspect-[4/3] items-center justify-center rounded-[var(--radius-lg)] border border-card-border bg-primary-light p-4 sm:p-6";

export function CalculatorDiagram({ type, label }: CalculatorDiagramProps) {
  return (
    <div className={diagramFrameClassName} role="img" aria-label={label}>
      {type === "wall-area" && <WallAreaDiagram />}
      {type === "slab-volume" && <SlabVolumeDiagram />}
      {type === "depth-layer" && <DepthLayerDiagram />}
      {type === "floor-grid" && <FloorGridDiagram />}
      {type === "sheet-layout" && <SheetLayoutDiagram />}
      {type === "post-spacing" && <PostSpacingDiagram />}
      {type === "board-spacing" && <BoardSpacingDiagram />}
      {type === "roof-pitch" && <RoofPitchDiagram />}
      {type === "stair-rise-run" && <StairRiseRunDiagram />}
    </div>
  );
}

function DiagramLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute text-[10px] font-medium uppercase tracking-wide text-primary-dark">
      {children}
    </span>
  );
}

function WallAreaDiagram() {
  return (
    <div className="relative h-full w-full max-w-xs">
      <div className="absolute inset-x-6 bottom-6 top-10 rounded-sm border-2 border-primary bg-white">
        <div className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 -translate-y-full border-x-[48px] border-b-[28px] border-x-transparent border-b-primary/30" />
        <div className="absolute bottom-3 left-3 h-10 w-7 rounded-sm border border-primary-mid bg-primary-light" />
        <div className="absolute bottom-3 right-3 h-8 w-10 rounded-sm border border-primary-mid bg-primary-light" />
        <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-primary-mid" />
      </div>
      <DiagramLabel>Width</DiagramLabel>
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-text-muted">
        Length
      </span>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-text-muted">
        Height
      </span>
    </div>
  );
}

function SlabVolumeDiagram() {
  return (
    <div className="relative h-full w-full max-w-xs">
      <div className="absolute inset-x-8 bottom-8 top-16">
        <div className="h-full w-full rounded-sm border-2 border-primary bg-white/80" />
        <div
          className="absolute -bottom-3 -right-3 h-full w-full rounded-sm border-2 border-dashed border-primary-mid bg-primary/10"
          aria-hidden="true"
        />
      </div>
      <span className="absolute left-8 top-6 text-[10px] text-text-muted">Length</span>
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-medium text-primary-dark">
        Thickness
      </span>
      <span className="absolute right-6 top-1/2 text-[10px] text-text-muted">Width</span>
    </div>
  );
}

function DepthLayerDiagram() {
  return (
    <div className="relative h-full w-full max-w-xs">
      <div className="absolute inset-x-10 bottom-10 top-14 overflow-hidden rounded-sm border border-card-border bg-white">
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-primary/20" />
        <div className="absolute inset-x-0 bottom-1/3 h-1/3 bg-primary/40" />
        <div className="absolute inset-x-0 bottom-2/3 h-1/3 bg-primary/60" />
        <div className="absolute inset-x-2 top-2 border-t-2 border-dashed border-primary" />
      </div>
      <span className="absolute right-4 top-1/2 text-[10px] text-primary-dark">Depth</span>
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-text-muted">
        Area (L × W)
      </span>
    </div>
  );
}

function FloorGridDiagram() {
  return (
    <div className="grid h-full w-full max-w-xs grid-cols-4 grid-rows-3 gap-1 p-2">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="rounded-[2px] border border-primary-mid bg-white"
        />
      ))}
    </div>
  );
}

function SheetLayoutDiagram() {
  return (
    <div className="grid h-full w-full max-w-xs grid-cols-2 grid-rows-2 gap-2 p-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="relative rounded-sm border-2 border-primary bg-white"
        >
          <span className="absolute bottom-1 right-1 text-[8px] text-text-muted">
            4×8
          </span>
        </div>
      ))}
    </div>
  );
}

function PostSpacingDiagram() {
  return (
    <div className="relative h-full w-full max-w-xs">
      <div className="absolute inset-x-4 bottom-12 top-8 flex items-end justify-between">
        {[0, 1, 2, 3].map((post) => (
          <div key={post} className="flex flex-col items-center gap-1">
            <div className="h-16 w-2 rounded-sm bg-primary" />
            {post < 3 && (
              <div className="absolute top-10 h-1 w-[calc(25%-8px)] translate-x-[calc(50%+4px)] bg-primary-mid" style={{ left: `${post * 25 + 12}%`, width: "18%" }} />
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-8 h-1 bg-primary-mid" />
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-text-muted">
        Post spacing
      </span>
    </div>
  );
}

function BoardSpacingDiagram() {
  return (
    <div className="flex h-full w-full max-w-xs flex-col justify-center gap-1 p-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center gap-1">
          <div className="h-3 flex-1 rounded-sm bg-primary" />
          <div className="h-3 w-1 rounded-sm bg-primary-light" />
        </div>
      ))}
      <span className="mt-2 text-center text-[10px] text-text-muted">
        Board + gap module
      </span>
    </div>
  );
}

function RoofPitchDiagram() {
  return (
    <div className="relative h-full w-full max-w-xs">
      <div className="absolute inset-x-6 bottom-10 top-16">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-text-muted" />
          <div className="absolute bottom-0 left-0 h-full w-0.5 bg-text-muted" />
          <div className="absolute bottom-0 left-0 right-0 origin-bottom-left skew-y-[-18deg] border-t-4 border-primary bg-primary/10" style={{ height: "55%" }} />
        </div>
      </div>
      <span className="absolute right-4 top-12 text-[10px] text-primary-dark">Pitch</span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-text-muted">
        Footprint
      </span>
    </div>
  );
}

function StairRiseRunDiagram() {
  return (
    <div className="relative h-full w-full max-w-xs">
      <div className="absolute inset-x-8 bottom-10 flex flex-col justify-end gap-0">
        {[0, 1, 2, 3].map((step) => (
          <div key={step} className="flex">
            <div
              className="h-4 border border-primary bg-white"
              style={{ width: `${40 + step * 20}px` }}
            />
            <div className="h-4 w-4 border border-primary bg-primary-light" />
          </div>
        ))}
      </div>
      <span className="absolute left-6 top-10 text-[10px] text-primary-dark">Rise</span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-text-muted">
        Run
      </span>
    </div>
  );
}
