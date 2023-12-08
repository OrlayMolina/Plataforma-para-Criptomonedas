import { useState, useEffect } from 'react'
import styled from "@emotion/styled";
import Form from "./components/Form";
import imageCrypto from './img/imagen-criptos.png'
import Result from './components/Result';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column.gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [ coins, setCoins ] = useState({});
  const [ result, setResult ] = useState({});

  useEffect(() => {
    if(Object.keys(coins).length > 0){
      
      const quoteCryto = async () => {
        const { coin, cryptocurrency } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result.DISPLAY[cryptocurrency][coin]);
      }

      quoteCryto();
    }

  },[coins])

  return (
    <Container>
      <Image
        src={imageCrypto}
        alt="Imagen criptomonedas"
      />      
      <div>
        <Heading>
          Cotiza Criptomonedas al Instante
        </Heading>

        <Form 
          setCoins={setCoins}
        />

        {result.PRICE && <Result result={result}/>}

      </div>
    </Container>
  )
}

export default App
