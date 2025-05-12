"use client";

// Components
import { SimpleCard } from "@/components/Card";
import { Title } from "@/components/Typography";

// Dataset
import { CampaignsList } from "@/dataset/campaigns";
import PageTransition from "@/components/Transition/pageTransition";

export default function CampaignsPage() {
  return (
    <PageTransition>
      <div className="w-screen h-screen justify-center bg-white lg:flex items-center overflow-auto overflow-x-hidden p-8">
        <div className="lg:container mx-auto grid grid-cols-1 gap-4 items-center text-black lg:pt-0 pt-20">
          <Title text="Campaigns" className="mb-20" />
          <div className="lg:container mx-auto grid lg:grid-cols-3 gap-4 items-start text-black">
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
    </PageTransition>
  );
}
