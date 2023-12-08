//import styled from "@emotion/styled";
import PropTypes from 'prop-types';


const Result = ({ result }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = result;

  return (
    <div>
      <p>El precio es de: <span>{PRICE}</span></p>
      <p>El precio más alto del día: <span>{HIGHDAY}</span></p>
      <p>El precio más bajo del día: <span>{LOWDAY}</span></p>
      <p>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span> %</p>
      <p>última actualización: <span>{LASTUPDATE}</span></p>
    </div>
  )
}

Result.propTypes = {
    result: PropTypes.object.isRequired,
}; 

export default Result
