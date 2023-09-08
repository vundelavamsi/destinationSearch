// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {name, imgUrl} = eachDestination
  //   console.log(id)
  //   console.log(name)
  //   console.log(imgUrl)
  return (
    <li>
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
