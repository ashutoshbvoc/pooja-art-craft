"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function CounterSection() {
  const stats = [
    { label: "Years of Experience", value: 10, suffix: "+" },
    { label: "Client Satisfaction", value: 95, suffix: "%" },
    { label: "Completed Projects", value: 1500, suffix: "+" },
    { label: "Design Options", value: 400, suffix: "+" },
  ];

  return (
    <section className="bg-[#e9f7f7] py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-14"  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, idx) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
            return (
              <div key={idx} ref={ref} className="bg-white rounded-3xl py-12 px-6 shadow-lg flex flex-col items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-bold text-emerald-500">
                  {inView ? <CountUp start={0} end={stat.value} duration={2} /> : 0}
                  {stat.suffix}
                </h3>
                <p className="mt-4 text-[#2a302f] text-lg md:text-xl font-medium text-center">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
