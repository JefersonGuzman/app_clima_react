import React from 'react';
import PropTypes from 'prop-types';
import diezGrados from '../img/10_Grados.jpg';
import quinceGrados from '../img/15_Grados.jpg';
import veinteGrados from '../img/20_Grados.jpg';
import treintaGrados from '../img/30_Grados.jpg';



const Clima = ({resultado}) => {
    //Extraer los valores
    const {name, main} = resultado;

    if(!name) return null;

    //Grado Kelvin
    const kelvin = 273.15;

    //Condicion para mostrar imagen
    const variableK=parseFloat(main.temp - kelvin).toFixed(2);

    //Varible que contendra las imagenes
    let ImgClima='';

    if (variableK <= 10) {
        ImgClima= <img src={diezGrados}/>;
    }else if(variableK > 10 && variableK < 16){
        ImgClima= <img src={quinceGrados}/>;
    }else if(variableK > 15 && variableK < 21){
        ImgClima= <img src={veinteGrados}/>;
    }else{
        ImgClima= <img src={treintaGrados}/>;
    }

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                
                <h2>El Clima de {name} es:</h2>
                <div className="bloque_m1">
                    {ImgClima}

                </div>
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
 
Clima.propTypes = {
    resultado: PropTypes.object.isRequired

}

export default Clima;