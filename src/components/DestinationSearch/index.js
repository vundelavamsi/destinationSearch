// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachDestination => {
      const searchInputLower = searchInput.toLowerCase()
      const nameLower = eachDestination.name.toLowerCase()
      return nameLower.includes(searchInputLower)
    })

    return (
      <div className="destination-search-bg-container">
        <h1>Destination Search</h1>
        <input
          type="search"
          placeholder="search"
          onChange={this.onSearchInput}
          value={searchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul>
          {searchResults.map(eachDestination => {
            const {id} = eachDestination
            return (
              <DestinationItem eachDestination={eachDestination} key={id} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
