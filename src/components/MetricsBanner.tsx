import React from "react";

export default function MetricsBanner() {
  const metrics = [
    {
      num: "3+",
      label: "Years in Product Design",
      sub: "Designing web & mobile digital products",
    },
    {
      num: "35+",
      label: "High-Fidelity Screens",
      sub: "Bloomwise & HRConnect mobile workflows",
    },
    {
      num: "100%",
      label: "User-Centered Execution",
      sub: "Double Diamond & Design Thinking",
    },
    {
      num: "MCA",
      label: "Computer Applications",
      sub: "Front-end & database technical literacy",
    },
  ];

  return (
    <section className="py-10 border-b border-white/[0.08] bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-light text-white font-mono tracking-tight">
                {item.num}
              </div>
              <div className="text-xs font-medium text-zinc-300">
                {item.label}
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
