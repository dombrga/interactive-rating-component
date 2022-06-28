import { useState } from 'react'
import './App.scss'
import HowDidWeDo from './components/HowDidWeDo'
import ThankYou from './components/ThankYou'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [rate, setRate] = useState(null)

  return (
    <>
      <main>
        {!isSubmitted ? 
        <HowDidWeDo
          setIsSubmitted={setIsSubmitted}
          setRate={setRate}
        /> : 
        <ThankYou
          rate={rate}
        /> 
      }
      </main>
      <footer>
        Challenge by <a href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub/interactive-rating-component-k2YGkTPhx_" target="_blank">Frontend Mentor</a>. 
        Coded by <a target="_blank" href="https://github.com/dombrga">Dom B</a>.
      </footer>
    </>
  )
}

export default App
