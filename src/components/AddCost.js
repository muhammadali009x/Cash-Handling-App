import React, { Component } from 'react'
import request from 'superagent'
import SingleInput from './SingleInput'
import TextArea from './TextArea'

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
import '../css/AddCost.css'

class AddCost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      costType: this.props.params.type,
      value: '',
      description: '',
      currentYear: '',
      currentMonth: '',
      currentDay: ''
    }
  }
  componentWillMount () {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDate()
    this.setState ({ currentYear })
    this.setState ({ currentMonth })
    this.setState ({ currentDay })
  }
  handleAmountChange = e => {
    this.setState({ value: e.target.value })
  }
  handleYearChange = e => {
    this.setState({ currentYear: e.target.value })
  }
  handleMonthChange = e => {
    this.setState({ currentMonth: e.target.value })
  }
  handleDayChange = e => {
    this.setState({ currentDay: e.target.value })
  }
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value })
  }
  handleFormSubmit = e => {
    e.preventDefault()
    let validationIndex = 0
    if (this.state.currentDay > 0 && this.state.currentDay < 32) {
    } else {
      validationIndex += 1
      console.log('Wrong day');
    }
    if (this.state.currentMonth > 1 && this.state.currentMonth < 13) {
    } else {
      validationIndex += 1
      console.log('Wrong month');
    }
    if (this.state.currentYear > 1900 && this.state.currentYear < 2050) {
    } else {
      validationIndex += 1
      console.log('Wrong year');
    }
    if (this.state.value.length >= 1) {
    } else {
      validationIndex += 1
      console.log('Wrong value');
    }
    if (validationIndex === 0) {
      const formPayload = {
        "costType": this.state.costType,
        "year": this.state.currentYear.toString(),
        "month": this.state.currentMonth.toString(),
        "day": this.state.currentDay.toString(),
        "value": this.state.value,
        "description": this.state.description,
      }
      const apiUrl = 'https://monee-86652.firebaseio.com/' + formPayload.year + '/' + formPayload.month + '/' + formPayload.day + '/.json'
      request.post(apiUrl)
        .send(formPayload)
        .end(console.log('Post done'))
    }
  }

  render() {
    const imagesListMap = {
      bills,
      groceries,
      transport,
      takeaway,
      leisure,
      health,
      sport,
      clothes,
      savings,
      vacation,
      electronics,
      other
    }
    return (
      <section className='addCost'>
        <img src={imagesListMap[this.state.costType]} alt={this.state.costType + ' icon'} />
        <h1>
          {this.state.costType}
        </h1>
        <form className='container' onSubmit={this.handleFormSubmit}>
          <SingleInput
            inputType={'number'}
            title={'Amount'}
            name={'value'}
            controlFunc={this.handleAmountChange}
            placeholder={'123.45'} />
          <SingleInput
            inputType={'number'}
            title={'Date'}
            name={'year'}
            content={this.state.currentYear}
            controlFunc={this.handleYearChange}
            placeholder={'YYYY'} />
          <SingleInput
            inputType={'number'}
            title={'/'}
            name={'month'}
            content={this.state.currentMonth}
            controlFunc={this.handleMonthChange}
            placeholder={'MM'} />
          <SingleInput
            inputType={'number'}
            title={'/'}
            name={'day'}
            content={this.state.currentDay}
            controlFunc={this.handleDayChange}
            placeholder={'DD'} />
          <TextArea
            title={'Short description if needed'}
            rows={2}
            resize={false}
            name={'description'}
            controlFunc={this.handleDescriptionChange}
            placeholder={'Write cost description here'} />
          <input
            type='submit'
            className=''
            value='Submit'/>
        </form>
      </section>
    )
  }
}

export default AddCost
