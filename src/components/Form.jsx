import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCryptoCoin from '../hooks/useCryptoCoin';
import Error from './Error';
import axios from 'axios';
import PropTypes from 'prop-types'


const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding:10px;
    background-color:#66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:#FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color:#326AC0;
        cursor: pointer;
    }
`;

const Form = ({setCoin, setCrypto}) => {
    //cryptocurrency listing state 
    const [criptolist, setCryptoList] = useState([]);
    const [error, setError] = useState(false);


    //currency Array
    const COINS = [
        {code:'USD', name:'United States dollar'},
        {code:'MXM', name:'Mexican Peso'},
        {code:'EUR', name:'Euro'},
        {code:'GBP', name:'Pound sterling'}
    ]


    //use custom hook useCurrency, primer parametro texto para el label, segundo parametro valor vacio para initialState, tercer parametro Array de opciones de monedas
    const [currency, SelectedCurrency] = useCurrency('Select your currency', '', COINS); 

    //use custon hook useCryptoCoin
    const [cryptocoin, SelectedCrypto] = useCryptoCoin('Select yout CryptoCoin', '', criptolist);

    //run api call
    useEffect(()=>{
        const callAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setCryptoList(result.data.Data);
        }
        callAPI();
    },[]);

    //when user make submit
    const currencyQuote = e => {
        e.preventDefault();

        //valid  fields
        if(currency === '' || cryptocoin === ''){
            setError(true);
            return;
        }
        //send data to primary component
        setError(false);
        setCoin(currency);
        setCrypto(cryptocoin);

    }


    return (
        <form
            onSubmit={currencyQuote}
        >
    
            {error ? <Error message='All fields are required'/> : null}
            <SelectedCurrency/>
            <SelectedCrypto/>
            <Button
                type="submit"
                value="Calculate"
            />
            
        </form>
    );
};
Form.propTypes = {
    setCoin: PropTypes.func.isRequired,
    setCrypto: PropTypes.func.isRequired,
}

export default Form;