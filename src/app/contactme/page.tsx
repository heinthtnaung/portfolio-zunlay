import { SubTitle, Title } from "@/components/Typography";

export default function LandingPage() {
  return (
    <div className="w-screen min-h-screen grid items-start justify-center bg-white overflow-auto">
      <div className="min-h-2/3 flex gradient-background w-screen items-end justify-start lg:px-20 lg:pb-20 px-4 pt-20">
        <div>
          <Title
            text="Looking forward to hearing from you!"
            className="lg:max-w-5xl mb-10"
          />
          <p className="text-2xl my-4 font-normal">
            I will be very happy if I get a call xD
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 items-center lg:px-20 px-4 ">
        <div>
          <SubTitle text="Phone " className="text-pink-400 mb-4 md:mt-4" />
          <p className="text-black">(+65) 98000538</p>
        </div>
        <div>
          <SubTitle text="Email " className="text-pink-400 mb-4 md:mt-4" />
          <p className="text-black">zunlaynwe6@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
