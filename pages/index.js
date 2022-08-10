import { BelowNavigationFeature } from "../widgets/BelowNavigationFeature";

export default function Home(props) {
  const { response } = props;
  return (
    <div>
      <h1>Awesome</h1>
      <BelowNavigationFeature serverData={response} />
    </div>
  );
}


export async function getStaticProps(context) {

  const response = await (await fetch('http://localhost:4000/build')).json();

  return {
    props: {
      response
    },
    revalidate: 10,
  }
}