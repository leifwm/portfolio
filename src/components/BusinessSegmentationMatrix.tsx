const segments = [
  { title: "Digital entrepreneur", description: "Already comfortable using social platforms and messaging to run their business.", position: "top-left" },
  { title: "Established + digitally mature", description: "A more structured business that has already incorporated digital tools into its operation.", position: "top-right" },
  { title: "Informal / emerging seller", description: "A lightweight or informal operation beginning to explore digital channels.", position: "bottom-left" },
  { title: "Traditional physical business", description: "An established physical operation with limited experience selling digitally.", position: "bottom-right" },
];

export function BusinessSegmentationMatrix() {
  return (
    <figure className="my-12 w-full">
      <div className="relative">
        <div className="hidden min-h-130 grid-cols-[72px_1fr] grid-rows-[1fr_52px] md:grid">
          <div className="relative row-start-1 border-r border-default-300">
            <span className="absolute text-right top-0 -translate-x-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-widest text-default-500">High digital<br />maturity</span>
            <span className="absolute bottom-0 text-right -translate-x-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-widest text-default-500">Low digital<br />maturity</span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap uppercase font-bold text-accent tracking-[2px]">Digital maturity</span>
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            <MatrixCell title={segments[0].title} description={segments[0].description} className="border-b border-r" />
            <MatrixCell title={segments[1].title} description={segments[1].description} className="border-b" />
            <MatrixCell title={segments[2].title} description={segments[2].description} className="border-r" />
            <MatrixCell title={segments[3].title} description={segments[3].description} />
          </div>
          <div />
          <div className="relative border-t border-default-300">
            <span className="absolute left-0 top-4 text-xs font-medium uppercase tracking-widest text-default-500">Low physical<br />structure</span>
            <span className="absolute text-right right-0 top-4 text-xs font-medium uppercase tracking-widest text-default-500">High physical<br />structure</span>
            <span className="absolute left-1/2 top-4 -translate-x-1/2 uppercase font-bold text-accent tracking-[2px]">Physical structure</span>
          </div>
        </div>
        <div className="grid gap-4 md:hidden">
          <div className="mb-2">
            <p className="text-sm font-medium">Segmentation dimensions</p>
            <p className="mt-1 text-sm text-default-500">Physical structure × Digital maturity</p>
          </div>
          {segments.map((segment) => (
            <div key={segment.title} className="rounded-lg border border-default-200 p-5">
              <h4 className="font-semibold">{segment.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-default-600">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

function MatrixCell({ title, description, className = "" }: { title: string; description: string; className?: string }) {
  return (
    <div className={`flex min-h-57.5 flex-col justify-center p-6 ${className} border-default-300`}>
      <h4 className="max-w-xs text-lg font-semibold tracking-tight">{title}</h4>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-default-600">{description}</p>
    </div>
  );
}