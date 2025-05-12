// Components
import { SimpleCard } from "@/components/Card";
import { Title } from "@/components/Typography";

// Dataset
import { SkillList } from "@/dataset/skills";

export default function EventsPage() {
  return (
    <div className="w-screen h-screen justify-center bg-white lg:flex items-center overflow-auto p-8">
      <div className="lg:container mx-auto grid grid-cols-1 gap-4 items-center text-black lg:pt-0 pt-20">
        <Title text="Special Skills" className="mb-20" />
        <div className="lg:container mx-auto grid lg:grid-cols-3 gap-4 items-start text-black">
          {SkillList.map((ds, idx) => (
            <SimpleCard
              key={"skill" + idx}
              imagePath={ds.imagePath}
              title={ds.title}
              description={ds.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
