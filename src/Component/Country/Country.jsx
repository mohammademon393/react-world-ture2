import { useState } from 'react';
import './Country.css'
import CountryDeteils from '../CountryDeteils/CountryDeteils';
const Country = ({country, hendleVisitedContry, hendleVisitedFlags}) => {
    
    const {name,flags, population, area, cca3}=country;
    
    const [visited, setVisited]=useState(false);
    const hendleVisited =()=>{
        setVisited(!visited);
    }
    
    // const passWithPares =()=>{
    //     hendleVisitedContry(country);
    // }
    
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 className={` ${visited ? 'visited-name' : 'non-visited-name'}`}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>

            <button onClick={()=>hendleVisitedContry(country)} className='visited-btn'>Mark visited</button> 

            <button onClick={()=>hendleVisitedFlags(country.flags.png)} className='visited-btn'>Visited flags</button> 
            <br/><br/>

            <button onClick={hendleVisited} className='visited-btn'>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I am visited this countries' : 'I want to visit.'}
            
            <hr/>
            <CountryDeteils>
                country={country } 
                hendleVisitedContry={hendleVisitedContry} 
                hendleVisitedFlags={hendleVisitedFlags}
            </CountryDeteils>
        </div>
    );
};

export default Country;