import { useState } from "react";
import styled from "@emotion/styled";

// eslint-disable-next-line react-refresh/only-export-components
const Label = styled.label`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

// eslint-disable-next-line react-refresh/only-export-components
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 20px;
`

/**
 * @module useSelectCoins
 * @returns A Array with the function SelectCoins
 */
const useSelectCoins = (label, options) => {

    const [state, setState] = useState('')
  
    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState(e.target.value) }
            >
                <option value="">Seleccione</option>

                {options.map(option => (
                    <option 
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                )) }
            </Select>
        </>
    )

    return [ state, SelectCoins ]
}

export default useSelectCoins
