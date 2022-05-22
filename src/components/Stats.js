import React, { Component } from 'react'
import request from 'superagent'
import EntriesList from './EntriesList'
import '../css/Stats.css'

class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEntries: []
    }
  }
  // componentDidMount() {
  componentDidMount() {
    const apiUrl = 'https://monee-86652.firebaseio.com/.json'
    request
      .get(apiUrl)
      .end((error, result) => {
        if (error || !result.ok) {
          console.log('Error')
        } else {
          console.log('GET done')
          this.setState({ allEntries: result.body })
        }
      })
  }

  render() {
    return (
      <section className='stats'>
        <EntriesList data={this.state.allEntries} />
      </section>
    )
  }
}

export default Stats
