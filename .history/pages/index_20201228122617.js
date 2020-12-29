import { useEffect } from 'react'



const Index = ({ server }) => {

  return (
    <>
      <h2>SSR STATUS</h2>
      <h5 style={{color:'red'}}>{server ? 'Working' : 'Not Working'}</h5>
    </>
  )
}

Index.getInitialProps = async function() {
  return {
    server: true,
  }
};

export default Index;
