// Components
import { SimpleCard } from "@/components/Card";
import PageTransition from "@/components/Transition/pageTransition";
import { SubTitle, Title } from "@/components/Typography";

// Dataset
import { EventsList } from "@/dataset/events";

export default function EventsPage() {
  return (
    <PageTransition>
      <div className="w-screen h-screen justify-center bg-white lg:flex items-center overflow-auto  p-8 ">
        <div className="container mx-auto grid xl:grid-cols-1 gap-4 items-center text-black lg:pt-0 pt-20">
          <Title text="Events" />
          <SubTitle
            text="Different kinds of category sharpen me in event industry."
            className="font-normal"
          />
          <div className="container mx-auto grid lg:grid-cols-3 gap-4 items-start text-black">
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
    </PageTransition>
  );
}
