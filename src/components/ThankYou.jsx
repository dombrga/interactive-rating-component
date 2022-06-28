import thankYou from '@/assets/illustration-thank-you.svg'

function ThankYou({ rate }) {
  return (
    <div className="general thank-you-container">
      <img className='thank-you' src={thankYou} alt="thank-you" />
      <p className='selected'>You selected {rate} out of 5</p>
      <h1>Thank you!</h1>
      <p className="statement"></p>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default ThankYou