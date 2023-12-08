import { useEffect, useState } from "react";  // useEffect es un hook que se ejecuta cuando el componente esta listo
import styled from "@emotion/styled";
import Error from "./Error";
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

    const [ crypts, setCrypts] = useState([]); // se usa array destructuring
    const [ error, setError] = useState(false);
    /* Se usa array destructuring el cual tiene encuenta la coincidencia segun el index no el nombre. 
       Si fuera object destructuring sí necesitaria el mismo nombre.*/
    const [ coin, SelectCoins] = useSelectCoins('Elige tu Moneda', coins);
    const [ cryptocurrency, SelectCryptocurrency] = useSelectCoins('Elige tu Criptomoneda', crypts);

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';

            const response = await fetch(url);
            const result = await response.json()

            const arrayCrypto = result.Data.map(crypto => {
                // como es más de una linea de codigo se debe usar el return
                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }

                return object;
            })

            setCrypts(arrayCrypto)
        }

        consultAPI();
        
    }, [])


    const handleSubmit = e => {
        e.preventDefault();

        if([coin, cryptocurrency].includes('')) {
            setError(true);
            return;
        }
    }

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form
            onSubmit={handleSubmit}
        >
            <SelectCoins /> 

            <SelectCryptocurrency />

            <InputSubmit 
                type="submit" 
                value="Cotizar"
            />
        </form>
    </>
  )
}

export default Form
