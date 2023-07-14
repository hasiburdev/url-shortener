interface PageProps {
  params: {
    link: string;
  };
}
export default function Page({ params }: PageProps): JSX.Element {
  return <div>{params.link}</div>;
}
