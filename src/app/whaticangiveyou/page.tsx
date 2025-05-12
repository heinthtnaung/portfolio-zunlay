import { SubTitle, Title } from "@/components/Typography";

export default function WhatICanGiveYouPage() {
  return (
    <div className="bg-[#f9e7e5]w-screen h-screen overflow-auto lg:flex items-center p-8">
      <div className="lg:container mx-auto grid grid-cols-1 gap-4 lg:flex justify-center items-start text-black lg:pt-0 pt-20">
        <div className="h-full grid pt-0 ">
          <Title text="What I can give you?" className="text-pink-400" />
        </div>

        <div className="lg:pl-34">
          <SubTitle
            text="Experience "
            className="text-black mb-4 lg:mt-0 mt-20"
          />
          <p>
            Over 5 years in Marketing fields can offer market analysis and
            competitor analysis, and what is a current trend in market regarding
            to the industry.
          </p>
          <SubTitle
            text="New and Creative Ideas"
            className=" text-black mb-4 mt-20"
          />
          <p>
            Based on the story, we can mix and match the real life with
            imaginary to make it happen a valuable creation for our customer.
          </p>
          <SubTitle text="Quality" className="text-black mb-4 mt-20 " />
          <p>
            The widen you increase your views and thinking are , the sharpen you
            can gets sophisticated ideas.
          </p>
        </div>
      </div>
    </div>
  );
}
