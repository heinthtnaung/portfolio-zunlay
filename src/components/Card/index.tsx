"use client";

import { SubTitle } from "../Typography";

export function SimpleCard(props: {
  imagePath: string;
  title: string;
  description: string;
}) {
  const { imagePath, title, description } = props;

  return (
    <div className="max-w-[380px] mx-auto ">
      <picture>
        <img
          src={imagePath}
          alt={`image-${title}`}
          className="rounded-xl h-72 m-auto"
        />
      </picture>

      <SubTitle text={title} className="py-4 text-center" />
      <div className="pb-4 text-lg"> {description} </div>
    </div>
  );
}
