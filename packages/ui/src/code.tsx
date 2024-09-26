export function Code({
  children,
  className,
  title
}: {
  children: React.ReactNode;
  className?: string;
  title:string
}): JSX.Element {
  return <div className={className}>
          <div>{title}</div>
            {children}
         </div>;
}
