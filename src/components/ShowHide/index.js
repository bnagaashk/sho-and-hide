import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isclick1: false, isclick2: false}

  firstNameClick = () => {
    this.setState(prevStatee => ({isclick1: !prevStatee.isclick1}))
  }

  lastNameClick = () => {
    this.setState(prevStatee => ({isclick2: !prevStatee.isclick2}))
  }

  render() {
    const {isclick1, isclick2} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide">
          <button type="button" className="btn" onClick={this.firstNameClick}>
            Show/Hide Firstname
          </button>
          <button type="button" className="btn" onClick={this.lastNameClick}>
            Show/Hide Lastname
          </button>
          {isclick1 ? (
            <div className="box">
              <p className="heading-name">Joe</p>
            </div>
          ) : null}
          {isclick2 ? (
            <div className="box">
              <p className="heading-name">Jonas</p>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default ShowHide
