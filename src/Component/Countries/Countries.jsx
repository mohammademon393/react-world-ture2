import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries]= useState([]);
    const [visitedCountries, setVisitedCountries]= useState([]);
    const [visitedFlags, setVisitedFlags]= useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((data)=> setCountries(data)
        )
    },[])

    const hendleVisitedContry=(country)=>{
        console.log('added a henled visitor');
        const newVisitCounrty= [...visitedCountries, country];
        setVisitedCountries(newVisitCounrty);
    }

    const hendleVisitedFlags = flag => {
        // console.log('added a visitig FLAGS');
        const newVisitFlags =  [...visitedFlags, flag];
        setVisitedFlags(newVisitFlags);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
        {/* Visiting country */}
            <div>
                <h4>Marked visited: {visitedCountries.length}</h4>

                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flags-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }                
            </div>
            
           {/* Display country */}
            <div style={{border:'2px solid blue',borderRadius:'15px', padding:'10px'}}>

            <div className="country-container">
                {
                 countries.map(country=><Country 
                    key={country.cca3} 
                    hendleVisitedContry={hendleVisitedContry}
                    hendleVisitedFlags={hendleVisitedFlags}
                    country={country}></Country>)
                }
            </div>
        </div>
        </div>
    );
};

export default Countries