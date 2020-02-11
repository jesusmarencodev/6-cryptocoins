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


const useCryptoCoin = (label, initialState, COINS) => {
    //State custom hooks
    const [state, setState] = useState(initialState);

    const SelectedCrypto = () => (
        <Fragment>
            <Label htmlFor="currency">{label}</Label>
            <Select
                name="currency"
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">Select</option>
                {COINS.map(coin =>(
                    <option key={coin.CoinInfo.Id} value={coin.CoinInfo.Name} >{coin.CoinInfo.FullName}</option>
                ))} 
            </Select>
        </Fragment>
    );
        //return State, interfaz and function that modify the state
        return [state, SelectedCrypto, setState];
};

export default useCryptoCoin;