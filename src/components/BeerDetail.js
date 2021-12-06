import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import React from 'react'

function BeerDetail() {
    // We get this 'beerId' from the <Route path="/beer/:beerId "> we defined in App.js
    const {beerId} = useParams()

    const [beerDetail, setBeerDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single beer  
           let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
           setBeerDetail(response.data)
        }
        getData()
    }, [beerId])

    if(!beerDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <div>
            <img src={beerDetail.image_url} alt="img" height="500px"></img>
            <h4>Name: {beerDetail.name}</h4>
            <h4>Tagline: {beerDetail.tagline }</h4>
            <h4>Contributed By:{beerDetail.contributed_by}</h4>
            <button>
                <Link to={`/beer/${beerDetail._id}/edit`}>Edit</Link>
            </button>
            
        </div>
    )
}

export default BeerDetail
