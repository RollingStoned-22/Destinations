// Write your code here
import './index.css'
import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props
  state = {searchInput: '', destinationsList: destinationsList}
  console.log(state)
  return (
    <div className="container">
      <h1>Destination Search</h1>
      <input type="search" placeholder="Search" />
      <div className="destinations-container">
        <div>
          {destinationsList.map(destinationDetails => (
            <DestinationItem
              destinationDetails={destinationDetails}
              key={destinationDetails.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DestinationSearch
