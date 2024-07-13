type PropsType = {} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, children, ...props }: PropsType) {
  return (
    <div {...props} className={`p-5 rounded-md ${className}`}>
      {children}
    </div>
  );
}
