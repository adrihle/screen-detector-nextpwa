import { useEffect, useState } from 'react'





const Index = ({ server }) => {

  const [size, setSize] = useState()

  useEffect(() => {
    const handleSize = () => setSize(window.innerWidth)
    handleSize()
    window.addEventListener('resize', handleSize)
    return () => {window.removeEventListener('resize', handleSize)}
  },[])

  const width = size + 'px'

  return (
    <>
      <h2>SSR STATUS</h2>
      <h5 style={{color:'red'}}>{server ? 'Working' : 'Not Working'}</h5>
      <hr />
      <h2>SCREEN WIDTH SIZE</h2>
      <h5 style={{color:'red'}}>{width}</h5>
      <button style={{background:'red', width:width/2}}>BUTTON</button>
    </>
  )
}

Index.getInitialProps = async function() {
  return {
    server: true,
  }
};

export default Index;
