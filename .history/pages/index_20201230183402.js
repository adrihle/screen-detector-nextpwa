import Nav from '../components/navigation/mobile'
import Dotq from '../static/icons/dotqblackusage'

const Index = ({ server, measures, screen }) => {
  
  const width = measures && measures[0] + 'px'
  const heigh = measures && measures[1] + 'px'
  

  return (
    <div  className='container p-3'>
      <div className='row' id='content'>
        <div className="col-md-6 col-lg-3">
          <h2>SSL Detector</h2>
          <h5 style={{color:'red'}}>{screen}</h5>
          <hr />
        </div>
        <div className="col-md-6 col-lg-3">
          <h2>SSR STATUS</h2>
          <h5 style={{color:'red'}}>{server ? 'Working' : 'Not Working'}</h5>
          <hr />
        </div>
        <div className="col-md-6 col-lg-3">
          <h2>SCREEN WIDTH SIZE</h2>
          <h5 style={{color:'red'}}>{width}</h5>
          <hr/>
        </div>
        <div className="col-sm-1 col-md-6 col-lg-3">
          {(measures && measures[0]>240) && (
            <>
              <h2>SCREEN HEIGH SIZE</h2>
              <h5 style={{color:'red'}}>{`${heigh}`}</h5>
              <button className='btn btn-danger mt-2'>BUTTON</button>
            </>
          )}
        </div>
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
