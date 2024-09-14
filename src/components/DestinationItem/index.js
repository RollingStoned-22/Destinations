// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails, key} = props
  const {id, name, imgUrl} = destinationDetails
  return (
    <div className="container">
      <img src={imgUrl} alt={name} className="image" />
      <h2>{name}</h2>
    </div>
  )
}

export default DestinationItem
