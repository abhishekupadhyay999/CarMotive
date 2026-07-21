import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import StatCard from "./StatCard";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="bg-[#09090B] py-28">
      <Container>
        <SectionHeading
          badge="TRUSTED NATIONWIDE"
          title="Driven by"
          highlight="Trust & Excellence"
          description="Thousands of satisfied customers have trusted Carmotive India to make their dream car ownership journey smooth, transparent, and memorable."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}