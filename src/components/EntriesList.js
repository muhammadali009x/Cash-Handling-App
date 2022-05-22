import React, { Component } from 'react'
import request from 'superagent'

class EntriesList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      allEntriesArray: []
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.data);
    this.entriesObjectToArrayAll(nextProps.data)
  }

  deleteEntry = (i, randomId, year, month, day) => {
    const apiUrl = 'https://monee-86652.firebaseio.com/' + year + '/' + month + '/' + day + '/' + randomId + '/.json'
    request
    .delete(apiUrl)
    .end((error, result) => {
      if (error || !result.ok) {
        console.log('Error')
      } else {
        console.log('Entry deleted')
      }
    })
    this.setState(state => {
      state.allEntriesArray.splice(i, 1)
      return {allEntriesArray: state.allEntriesArray}
    })
  }
  // methods below are separated since i'd like to map the object by year, month or day so only data from specific date would be displayed
  entriesObjectToArrayDay = (array, o, year, month, day) => {
    Object.keys(o[year][month][day]).map((element) => {
      return array.push({
        randomId: element,
        year: o[year][month][day][element].year,
        month: o[year][month][day][element].month,
        day: o[year][month][day][element].day,
        costType: o[year][month][day][element].costType,
        value: o[year][month][day][element].value,
        description: o[year][month][day][element].description
      })
    })
    return this.setState({ allEntriesArray: array})
  }

  entriesObjectToArrayMonth = (array, o, year, month) => {
    Object.keys(o[year][month]).map((day) => {
      return this.entriesObjectToArrayDay(array, o, year, month, day)
    })
  }

  entriesObjectToArrayYear = (array, o, year) => {
    Object.keys(o[year]).map((month) => {
      return this.entriesObjectToArrayMonth(array, o, year, month)
    })
  }

  entriesObjectToArrayAll = (o) => {
    let allEntriesArrayTemp = []
    Object.keys(o).map((year) => {
      return this.entriesObjectToArrayYear (allEntriesArrayTemp, o, year)
    })
  }

  render () {
    const listItems = this.state.allEntriesArray.map((entry, i) => (
      <div key={i}>
        <h1>{i + ' / ' + entry.value + '  /  ' + entry.randomId + '  /  ' + entry.year + '  /  ' + entry.month + '  /  ' + entry.day}</h1>
        <button key={i} onClick={ () => { this.deleteEntry(i, entry.randomId, entry.year, entry.month, entry.day) }}>Delete entry</button>
      </div>
    ))

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

export default EntriesList
