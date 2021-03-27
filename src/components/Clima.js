import React from 'react';

const Clima = ({resultado}) => {
    //Extraer los valores
    const {name, main} = resultado;

    if(!name) return null;

    //Grado Kelvin
    const kelvin = 273.15;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">

                <h2>El Clima de {name} es:</h2>
                <p className="temperatura">
                <i className="fa fa-thermometer-three-quarters" aria-hidden="true"></i>

                {parseFloat(main.temp - kelvin).toFixed(2)}
                    <span>&#x2103;</span> 
                    <p>Sensación térmica</p>

                </p>

                <p className=""> Max.
                    <i className="fa fa-thermometer-full" aria-hidden="true"></i>
                    {parseFloat(main.temp_max - kelvin).toFixed(2)}
                    <span>&#x2103;</span> 
                </p>

                <p className="">Min.
                <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                {parseFloat(main.temp_min - kelvin).toFixed(2)}
                    <span>&#x2103;</span>
                </p>
            </div>
        </div>
        );
}
 
export default Clima;