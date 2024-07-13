type PropsType = {} & React.HTMLAttributes<HTMLParagraphElement>;

export default function TextBox({ className, children, ...props }: PropsType) {
  return (
    <article {...props} className={` p-2 font-sans ${className}`}>
      {children}
    </article>
  );
}
