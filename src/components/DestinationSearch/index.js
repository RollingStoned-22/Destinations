// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: '', destinations: this.props.destinationsList}
  changeCase = () => {
    const {destinations} = this.state
    const allDestinations = destinations.map(place => {
      place.name.toLowerCase()
    })
    this.setState({destinations: allDestinations})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteDestination = id => {
    const {destinations} = this.state
    const filteredDestinations = destinations.filter(place => place.id !== id)
    this.setState({destinations: filteredDestinations})
  }

  render() {
    const {destinations, searchInput} = this.state
    const filteredDestinations = destinations.filter(place =>
      place.name.includes(searchInput),
    )
    console.log(destinations)
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <input
          type="search"
          placeholder="Search"
          onChange={this.onChangeInput}
        />
        <div className="destinations-container">
          <ul>
            {filteredDestinations.map(destinationDetails => (
              <DestinationItem
                destinationDetails={destinationDetails}
                deleteDestination={this.deleteDestination}
                key={destinationDetails.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
