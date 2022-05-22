import React from 'react'
import { Link } from 'react-router'
import bills from '../images/009-internet.png'
import groceries from '../images/007-food-1.png'
import transport from '../images/013-transport.png'
import takeaway from '../images/005-food.png'
import leisure from '../images/004-drink.png'
import health from '../images/010-medical.png'
import sport from '../images/001-gym.png'
import clothes from '../images/012-christmas.png'
import savings from '../images/006-money.png'
import vacation from '../images/003-summer.png'
import electronics from '../images/011-technology.png'
import other from '../images/008-round.png'
import '../css/Home.css'

const Home = () =>  {
  const costTypes = [
    { text: 'bills', icon: bills },
    { text: 'groceries', icon: groceries },
    { text: 'transport', icon: transport },
    { text: 'takeaway', icon: takeaway },
    { text: 'leisure', icon: leisure },
    { text: 'health', icon: health },
    { text: 'sport', icon: sport },
    { text: 'clothes', icon: clothes },
    { text: 'savings', icon: savings },
    { text: 'vacation', icon: vacation },
    { text: 'electronics', icon: electronics },
    { text: 'other', icon: other },
  ]
  const listItems = costTypes.map((type, i) => (
    <Link key={i} className='cost__element' to={'/addcost/'+ type.text}>
      <img src={type.icon} alt={type.text + ' icon'} />
      <h1>{type.text}</h1>
    </Link>
  ))
  return (
    <section className='home'>
      <ul className='costList'>{listItems}</ul>
    </section>
  )
}

export default Home
