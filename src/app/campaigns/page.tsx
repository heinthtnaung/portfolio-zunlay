// Components
import { SimpleCard } from "@/components/Card";
import { Title } from "@/components/Typography";

// Dataset
import { CampaignsList } from "@/dataset/campaigns";

export default function EventsPage() {
  return (
    <div className="w-screen min-h-screen justify-center bg-white flex items-center overflow-auto">
      <div className="container mx-auto grid grid-cols-1 gap-4 items-center text-black">
        <Title text="Campaigns" className="mb-20" />
        <div className="container mx-auto grid grid-cols-3 gap-4 items-start text-black">
          {CampaignsList.map((ds, idx) => (
            <SimpleCard
              key={"campaigns" + idx}
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
