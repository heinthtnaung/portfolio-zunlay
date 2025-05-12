import { Title } from "@/components/Typography";

export default function SaymorePage() {
  return (
    <div className="w-screen h-screen justify-center bg-white lg:flex items-center overflow-auto p-8">
      <div className="lg:container mx-auto grid grid-cols-1 gap-4 items-center">
        <Title
          text="What I want to say more?"
          className="lg:max-w-5xl mb-10 text-black mt-20"
        />
        <div>
          <div className="text-xl font-black text-cyan-500 mb-20">
            Marketing is all about promoting products to encourage customer
            engagement, and in the same way, I am here to promote myself as the
            right candidate for this role. I was genuinely surprised to find
            myself becoming a marketing executive, especially as an introvert.
            However, I’ve discovered that I enjoy brainstorming ideas from
            various perspectives—stretching my thinking to capture the attention
            of my target audience.
          </div>
          <div className="text-xl font-black text-red-500 mb-20">
            My strengths include being punctual, adaptable, and flexible, and I
            truly enjoy working with a team. I am a proactive and friendly
            person who likes to connect daily life with real-world trends. On
            the other hand, my biggest weakness is that I am highly
            detail-oriented, which sometimes means my team members need to push
            me to move forward faster.
          </div>
          <div className="text-xl font-black text-purple-500 mb-20">
            Despite this, I am confident in my abilities and strongly believe I
            am 75% fit for your organization. I leave the remaining 25% as room
            for growth and learning to fully integrate into your team.
          </div>
          <div className="text-xl font-black text-yellow-500 mb-20">
            Ultimately, my dream is to work in a branding company or creative
            agency. I understand that meeting customer needs and deadlines can
            be challenging, but as I mentioned earlier, seeing my work make an
            impact in the real world gives me a sense of fulfillment that I
            can’t get enough of. I am eager to give my best effort and become a
            valuable part of your team.
          </div>
        </div>
      </div>
    </div>
  );
}
