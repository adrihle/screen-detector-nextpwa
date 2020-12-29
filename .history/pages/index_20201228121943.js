import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";

const Index = ({ server }) => (
  <>
    <h2 className="text-center">Estado de SSR</h2>
    <h2>{server == false ? 'true' : 'false'}</h2>
  </>
);

Index.getInitialProps = async function() {
  return {
    server: true,
  }
};

export default Index;
