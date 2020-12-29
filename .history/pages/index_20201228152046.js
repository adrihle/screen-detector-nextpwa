import { useEffect, useState } from 'react'
import ScreenSizeLayout from '../components/layouts/ScreenSizeLayout'


const Index = ({ server, size, screen }) => {
  
  const width = size + 'px'

  const btnWidth = size / 2

  return (
    <div className='row'>
        <div className="col-md-4 col-lg-3">
          <h2>SSL Detector</h2>
          <h5 style={{color:'red'}}>{screen}</h5>
          <hr />
        </div>
        <div className="col-md-4 col-lg-3">
          <h2>SSR STATUS</h2>
          <h5 style={{color:'red'}}>{server ? 'Working' : 'Not Working'}</h5>
          <hr />
        </div>
        <div className="col-md-4 col-lg-3">
          <h2>SCREEN WIDTH SIZE</h2>
          <h5 style={{color:'red'}}>{width}</h5>
          <hr/>
        </div>
        <div className="col-md-4 col-lg-3">
          {size>240 && (
            <>
              <h2>BUTTON WIDTH</h2>
              <h5 style={{color:'red'}}>{`${btnWidth}px`}</h5>
              <button style={{width:btnWidth}} className='btn btn-danger mt-2'>BUTTON</button>
            </>
          )}
        </div>
    </div>
  )
}

Index.getInitialProps = async function() {
  return {
    server: true,
  }
};

export default Index;
