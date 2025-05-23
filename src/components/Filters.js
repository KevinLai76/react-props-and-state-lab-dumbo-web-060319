import React from 'react'

class Filters extends React.Component {

  constructor() {
    super();
    this.state = {
      currentValue: 'all'
    }
  }

  handleSelectChange = (event) => {
    const filterType = event.target.value

    this.setState({currentValue: filterType})
    this.props.onChangeType(filterType)
  }

  handleSubmit = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleSelectChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleSubmit} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
