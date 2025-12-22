export default function BlogContainer({ children }: any) {
  return <div className="container mx-auto px-5 md:px-0">{children}</div>;
}

export function NormalContainer({ children }: any) {
  return <div className=" mx-auto px-5 md:px-0">{children}</div>;
}
