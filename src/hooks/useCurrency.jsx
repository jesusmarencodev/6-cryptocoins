import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family:'Bebas Neue', cursive;
    color:#FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size:2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width:100%;
    display:block;
    padding: 1rem;
    -webkit-appearance:none;
    border-radius:10px;
    border:none;
    font-size:1rem;
`;


const useCurrency = (label, initialState, COINS) => {/* estos paramtros vienen desde el componente form cuando inicializo los valores del custom hook */
    //State custom hooks
    const [state, setState] = useState(initialState);

    const Selected = () => (
        <Fragment>
            <Label htmlFor="currency">{label}</Label>
            <Select
                name="currency"
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">Select</option>
                
                {COINS.map(coin =>(
                    // eslint-disable-next-line
                    <option key={coin.code}  value={coin.code}>{coin.name}</option>
                ))}
            </Select>
        </Fragment>
    );
    //return State, interfaz and function that modify the state
    return [state, Selected, setState];
};

export default useCurrency;