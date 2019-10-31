import React from 'react'
import { Link } from 'react-router-dom'
import { setUsername, getPokemon } from './../../ducks/reducer';
import { connect } from 'react-redux'

const Cover = (props) => {
  return (
    <div className="cover">
      <div className="background">
        <div className="camera-ring">
          <div className="camera-circle" />
        </div>
        <div className="circles-container">
          <div className="little-circle red" />
          <div className="little-circle yellow" />
          <div className="little-circle green" />
        </div>
        <div className="lid">
          <Link to="/open">
            <div
              className="triangle-button"
              onClick={() => props.getPokemon('https://pokeapi.co/api/v2/pokemon')} />
          </Link>
          <div className="inputs">
            <input
              placeholder="Username"
              type="text"
              onChange={e => props.setUsername(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { setUsername, getPokemon })(Cover)
