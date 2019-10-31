import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getPokemon} from '../../ducks/reducer'

const Open = (props) => (
  <div className="open">
    <div className="background">
      <div className="camera-ring">
        <Link to='/'>
          <div className="camera-circle" />
        </Link>
      </div>
      <div className="circles-container">
        <div className="little-circle red" />
        <div className="little-circle yellow" />
        <div className="little-circle green" />
      </div>
      <div className="inside">
        <h1>Welcome, {props.username}</h1>
        {props.loading ? 'Loading...' : props.pokemon.results.map(pokemon => {
          return <h3 key={pokemon.name}>{pokemon.name}</h3>
        })}
        <button
          disabled={!props.pokemon.previous}
          onClick={() => props.getPokemon(props.pokemon.previous)}
        >
        {'<<<'}</button>
        <button
        disabled={!props.pokemon.next}
        onClick={() => props.getPokemon(props.pokemon.next)}
        >{'>>>'}</button>
      </div>
    </div>
  </div>
)

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, {getPokemon})(Open)
