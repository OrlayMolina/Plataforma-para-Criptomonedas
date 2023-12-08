import { useEffect } from "react";  // useEffect es un hook que se ejecuta cuando el componente esta listo
import styled from "@emotion/styled";
import useSelectCoins from "../hooks/useSelectCoins";
import { coins } from "../data/Coins";

const InputSubmit = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  background-color: #66A2FE;
  transition: background-color .3s ease;

  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`

const Form = () => {

    /* Se usa array destructuring el cual tiene encuenta la coincidencia segun el index no el nombre. 
       Si fuera object destructuring sí necesitaria el mismo nombre.*/
    const [ coin, SelectCoins] = useSelectCoins('Elige tu Moneda', coins);

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

            const response = await fetch(url);
            
            console.log(response);
        }

        consultAPI();
        
    }, [])

  return (
    <form>
        <SelectCoins /> 

        {coin}

        <InputSubmit 
            type="submit" 
            value="Cotizar"
        />
    </form>
  )
}

export default Form
