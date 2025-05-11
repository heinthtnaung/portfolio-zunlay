import { SubTitle, Title } from "@/components/Typography";

export default function WhatICanGiveYouPage() {
  return (
    <div className="w-screen h-screen bg-[#f9e7e5] text-black flex items-center">
      <div className="container mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-4 items-center">
        <div className="h-full grid">
          <Title text="What I can give you?" className="text-pink-400" />
        </div>

        <div className="xl:pl-34">
          <SubTitle text="Experience " className="text-black mb-4 md:mt-4" />
          <p>
            Over 5 years in Marketing fields can offer market analysis and
            competitor analysis, and what is a current trend in market regarding
            to the industry.
          </p>
          <SubTitle
            text="New and Creative Ideas"
            className="lg:mt-20 text-black mb-4"
          />
          <p>
            Based on the story, we can mix and match the real life with
            imaginary to make it happen a valuable creation for our customer.
          </p>
          <SubTitle text="Quality" className="text-black mb-4 lg:mt-20" />
          <p>
            The widen you increase your views and thinking are , the sharpen you
            can gets sophisticated ideas.
          </p>
        </div>
      </div>
    </div>
  );
}
