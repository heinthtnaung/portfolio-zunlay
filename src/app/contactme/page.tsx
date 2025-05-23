"use client";

import PageTransition from "@/components/Transition/pageTransition";
import { SubTitle, Title } from "@/components/Typography";

export default function ContactMePage() {
  return (
    <PageTransition>
      <div className="w-full lg:pb-28 grid items-start justify-center bg-white overflow-hidden">
        <div className="min-h-2/3 flex gradient-background w-screen items-end justify-start lg:px-20 pb-20 pt-24 px-8">
          <div className="lg:container mx-auto ">
            <Title
              text="Looking forward to hearing from you!"
              className="lg:max-w-5xl mb-10"
            />
            <p className="text-2xl my-4 font-normal">
              I will be very happy if I get a call xD
            </p>
          </div>
        </div>
        <div className="lg:container w-full lg:px-0 p-10 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4 items-center ">
          <div>
            <SubTitle text="Phone " className="text-pink-400 mb-4 md:mt-4" />
            <p className="text-black text-lg">(+65) 98000538</p>
          </div>
          <div>
            <SubTitle text="Email " className="text-pink-400 mb-4 md:mt-4" />
            <p className="text-black">
              <a href="mailto:zunlaynwe6@gmail.com" className="text-lg">zunlaynwe6@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
