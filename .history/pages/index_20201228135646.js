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


  const btnWidth = size / 2

  return (
    <>
      <h2>SSR STATUS</h2>
      <h5 style={{color:'red'}}>{server ? 'Working' : 'Not Working'}</h5>
      <hr />
      <h2>SCREEN WIDTH SIZE</h2>
      <h5 style={{color:'red'}}>{width}</h5>
      <hr/>
      {size>240 && (
        <>
          <h2>BUTTON WIDTH</h2>
          <h5 style={{color:'red'}}>{`${btnWidth}px`}</h5>
          <button style={{background:'red', width:btnWidth}}>BUTTON</button>
        </>
      )}
    </>
  )
}

Index.getInitialProps = async function() {
  return {
    server: true,
  }
};

export default Index;
