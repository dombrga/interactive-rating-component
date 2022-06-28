import { useState } from 'react'
import star from '@/assets/icon-star.svg'


function HowDidWeDo({ setIsSubmitted, setRate }) {
  const [ratings, setRatings] = useState([
    {rating: 1, name: 'one', checked: false},
    {rating: 2, name: 'two', checked: false},
    {rating: 3, name: 'three', checked: false},
    {rating: 4, name: 'four', checked: false},
    {rating: 5, name: 'five', checked: false},
  ]) 

  // functions
  function handleClickRating(rating) {
    setRatings(prev => prev.map(
      (item) => rating.rating === item.rating ? {...rating, checked: !rating.checked} :  {...item, checked: false})
      )
    setRate(rating.rating)
  }
  function handleSubmit() {
    setIsSubmitted(true)
  }

  // jsx templates
  const ratingsElem = ratings.map(rating => {
    return (
      <label 
      className={'rating' + (rating.checked ? ' checked': '')} 
      key={rating.rating}
      >
        {rating.rating}
        <input type="radio" name='ratings' value={rating.rating} 
        onChange={() => handleClickRating(rating)} />
      </label>
    )
  })

  return (
    <div className='general rating-container'>
      <img className='star' src={star} alt="" />
      <h1>How did we do?</h1>
      <p className="statement">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='ratings'>
        {ratingsElem}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default HowDidWeDo