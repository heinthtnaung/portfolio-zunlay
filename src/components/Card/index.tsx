import { SubTitle } from "../Typography";

export function SimpleCard(props: {
  imagePath: string;
  title: string;
  description: string;
}) {
  const { imagePath, title, description } = props;

  return (
    <div className="max-w-md">
      <img src={imagePath} alt={`image-${title}`} className="rounded-xl h-72" />
      <SubTitle text={title} className="py-4"/>
      <div className="pb-4"> {description} </div>
    </div>
  );
}
