export function Title(props: { text: string; className?: string }) {
  const { text, className } = props;
  return (
    <div className={`text-7xl font-black ${className}`}>
      {text.split("").map((t, idx) => (
        <span key={`${t + idx}`}> {t} </span>
      ))}
    </div>
  );
}

export function SubTitle(props: { text: string; className?: string }) {
  const { text, className } = props;
  return <div className={`text-2xl font-black ${className}`}> {text} </div>;
}
