import ErrorBoundary from '../ErrorBoundary'
import Aside from '../Aside'
import Main from '../Main'
import './index.css'

function Container() {
  return (
    <ErrorBoundary
    errorMessage='Something went wrong :('
    >
      <div className='container'>
       <Aside />
       <Main />
    </div>
    </ErrorBoundary>

  )
}

export default Container 