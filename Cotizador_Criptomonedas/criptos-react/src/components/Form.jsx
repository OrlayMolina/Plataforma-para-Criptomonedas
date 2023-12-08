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

    const [SelectCoins] = useSelectCoins('Elige tu Moneda', coins);

  return (
    <form>
        <SelectCoins /> 
        <InputSubmit 
            type="submit" 
            value="Cotizar"
        />
    </form>
  )
}

export default Form
