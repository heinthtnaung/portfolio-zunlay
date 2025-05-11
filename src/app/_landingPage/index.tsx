"use client";
import { Title } from "@/components/Typography";

export default function LandingPage() {
  return (
    <div className="gradient-background w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        <Title text="Hi, I'm ZUN" />
        <p className="text-2xl my-4 font-normal">
          who’s fun being in a marketing field
        </p>
      </div>
    </div>
  );
}
