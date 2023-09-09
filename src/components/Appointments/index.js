import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import Appoint from '../AppointmentItem'

class Appointments extends Component {
  state = {input: '', dateEl: '', list: []}

  input = event => {
    const {input} = this.state
    this.setState({input: event.target.value})
  }

  dateEl = event => {
    const {dateEl} = this.state
    this.setState({dateEl: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onsubmit = event => {
    event.preventDefault()
    const {input, dateEl, list} = this.state
    const newAppointment = {
      id: uuidv4(),
      input,
      dateEl,
      isLiked: false,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newAppointment],
      input: '',
      dateEl: '',
    }))
  }

  starred = () => {
    const {list} = this.state
    const filtered = list.filter(each => each.isLiked === true)
    this.setState({list: filtered})
  }

  render() {
    const {input, dateEl, list} = this.state
    return (
      <div>
        <div className="container">
          <div>
            <h1>Add Appointments</h1>
            <form>
              <label htmlFor="inputEl">Title</label>
              <input
                onChange={this.input}
                placeholder="Title"
                id="inputEl"
                value={input}
              />
              <label htmlFor="dateEl">Date</label>
              <input
                type="date"
                onChange={this.dateEl}
                placeholder="Date"
                id="dateEl"
                value={dateEl}
              />
              <button type="submit" onClick={this.onsubmit}>
                Add
              </button>
            </form>
          </div>
          <ul>
            <img
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </ul>
        </div>
        <hr />
        <div>
          <h2>Appointments</h2>
          <button onClick={this.starred}>Starred</button>
        </div>
        <div>
          {list.map(item => (
            <Appoint
              item={item}
              key={item.id}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Appointments
