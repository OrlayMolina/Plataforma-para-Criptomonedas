import styled from "@emotion/styled";

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
  return (
    <form>
      <InputSubmit 
        type="submit" 
        value="Cotizar"
      />
    </form>
  )
}

export default Form
