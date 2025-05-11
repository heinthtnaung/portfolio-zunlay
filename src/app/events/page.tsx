// Components
import { SimpleCard } from "@/components/Card";
import { SubTitle, Title } from "@/components/Typography";

// Dataset
import { EventsList } from "@/dataset/events";

export default function EventsPage() {
  return (
    <div className="w-screen min-h-screen justify-center bg-white flex items-center overflow-auto">
      <div className="container mx-auto grid grid-cols-1 gap-4 items-center text-black">
        <Title text="Events" />
        <SubTitle
          text="Different kinds of category sharpen me in event industry."
          className="font-normal"
        />
        <div className="container mx-auto grid grid-cols-3 gap-4 items-start text-black">
          {EventsList.map((ds, idx) => (
            <SimpleCard
              key={"event" + idx}
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
