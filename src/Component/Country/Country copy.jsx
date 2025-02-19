import './Country.css'
const Country = ({country}) => {
    
    const {name,flags, population, area, cca3}=country;
    
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
        </div>
    );
};

export default Country;