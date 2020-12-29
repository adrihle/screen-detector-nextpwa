import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";

const Index = ({ server = false }) => (
  <>
    <h2 className="text-center">Estado de SSR</h2>
    <h2>{server ? 'true' : 'false'}</h2>
  </>
);

Index.getInitialProps = async function() {
  return {
    server: true,
  }
};

export default Index;
