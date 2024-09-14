// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails, deleteDestination} = props
  const {id, name, imgUrl} = destinationDetails

  const onDelete = () => {
    deleteDestination(id)
  }

  return (
    <li className="container">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
