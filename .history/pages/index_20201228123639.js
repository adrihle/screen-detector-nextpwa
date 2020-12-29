import { useEffect, useState } from 'react'

const Boton = ({ width }) => (
  <button style={{background:'red', width:width}}>Touch</button>
)



const Index = ({ server }) => {

  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleSize = () => setSize(window.innerWidth)
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
    </>
  )
}

Index.getInitialProps = async function() {
  return {
    server: true,
  }
};

export default Index;
