import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import MyNav from './MyNav'
import {useState} from 'react'

function BeerList(props) {

    const {beer} = props
    const [beers, setBeers] = useState([])

    if(!beer.length) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <div>
            <p>BeerList Component</p>
            {
                beer.map((elem) => {
                    return (
                        <div key={elem._id}>
                           <Link to={`/beers/${elem._id}`}> {elem.name} </Link>
                        </div>   
                        
                    )
                })
            }
        </div>
    )
}

export default BeerList