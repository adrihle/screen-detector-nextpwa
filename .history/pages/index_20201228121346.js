import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";

const Index = ({ posts }) => (
  <>
    <h2 className="text-center">algo</h2>
  </>
);

Index.getInitialProps = async function() {
  const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await fetchPosts.json();

  return {
    posts
  };
};

export default Index;
