import CountryData from "../CountryData/CountryData";

const CountryDeteils = ({country, hendleVisitedContry, hendleVisitedFlags}) => {
    return (
        <div>
            <h3>Country deteils</h3>
        <hr/>
        <CountryData>
            country={country } 
                hendleVisitedContry={hendleVisitedContry} 
                hendleVisitedFlags={hendleVisitedFlags}
        </CountryData>
        </div>

    );
};

export default CountryDeteils;