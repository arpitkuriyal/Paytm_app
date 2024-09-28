export function Card({
  title,
  children,

}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-4   ">
      <h2 className="border-b text-xl font-bold">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
