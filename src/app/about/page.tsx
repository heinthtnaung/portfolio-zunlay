import { Title } from "@/components/Typography";

export default function AboutPage() {
  return (
    <div className="w-screen h-screen bg-[#f9e7e5] text-black flex items-center">
      <div className="container mx-auto grid xl:grid-cols-2 md-grid-cols-1 gap-4 items-center">
        <div className="h-full grid">
          <Title text="Who Am I?" className="text-pink-400" />
          <div className="text-black xl:max-w-3/5 max-w-full">
            A visual thinker who thrives on creativity and innovation. Creating
            something new and unique is my passion. Seeing my ideas come to life
            in the city, capturing people's attention, fills me with pride and
            makes me forget the workload and pressure I faced during the
            project.
          </div>
        </div>
        <div>
          <img src={"/photo.png"} alt="profilePhoto" />
        </div>
      </div>
    </div>
  );
}
