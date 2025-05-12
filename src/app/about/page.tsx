"use client";

import PageTransition from "@/components/Transition/pageTransition";
import { Title } from "@/components/Typography";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="w-screen h-screen bg-[#f9e7e5] text-black lg:flex items-center p-8 overflow-auto">
        <div className="lg:container lg:grid-cols-2 lg:pt-0 md:grid-cols-1 mx-auto grid  gap-4 items-center pt-20">
          <div className="h-full grid">
            <Title text="Who Am I?" className="text-pink-400" />
            <div className="text-black lg:max-w-3/5 max-w-full lg:pt-0 pt-20">
              A visual thinker who thrives on creativity and innovation.
              Creating something new and unique is my passion. Seeing my ideas
              come to life in the city, capturing people&apos;s attention, fills
              me with pride and makes me forget the workload and pressure I
              faced during the project.
            </div>
          </div>
          <div>
            <picture>
              <img src={"/photo.png"} alt="profilePhoto" />
            </picture>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
