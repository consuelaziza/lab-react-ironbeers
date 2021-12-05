import React from 'react'
import {Link} from 'react'

function Home() {
    return (
        <div>
         <img src="images/beers.png" alt="beer"></img>
          <Link to={'/beers'}>All Beers</Link>  
          <p>Loreum blah blah bah eahieiefiheiohfioh</p>
          <img src="images/random-beer" alt="random beer"></img>
          <Link to={'/random-beer'}>Random Beer</Link> 
          <p>Loreum blah blah bah eahieiefiheiohfioh</p>
          <img src="images/new-beer.png" alt="new beer"></img>
          <Link to={'/new-beer'}>New Beer</Link> 
           <p>Loreum blah blah bah eahieiefiheiohfioh</p>
          
        </div>
    )
}

export default Home
