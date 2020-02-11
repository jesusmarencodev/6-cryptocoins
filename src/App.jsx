import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import img from './cryptomonedas.png'
import Form from './components/Form';
import Spinner from './components/Spinner';
import Quote from './components/Quote';

import axios from 'axios';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width:992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`;
const Image = styled.img`
  max-width:100%;
  margin-top:5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color:#fff;
  text-align:left;
  font-weight:700;
  font-size:50px;
  margin-bottom:50px;
  margin-top:80px;

  &::after{
    content:'';
    width:100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;


function App() {

  const [coin, setCoin]= useState('');
  const [crypto, setCrypto]= useState('');
  const [quote, setQuote]= useState({});
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const coinQuote = async () => {
      //Evitar la ejecucion la primera vez
      if(coin === '') return;

      //Consult API
  
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
      const result = await axios.get(url);
      setLoading(true)

      //ocultar el spinner
      setTimeout(()=>{
        setLoading(false);
        setQuote(result.data.DISPLAY[crypto][coin]);
      },3000);

    }
    coinQuote();
  },[coin, crypto]);

  //mostrar spinner
  const component = (loading) ? <Spinner/> :  <Quote quote={quote}/>

  return (
    <Container>
      <div>
        <Image
          src={img}
          alt="crypto"
        />
      </div>
      <div>
        <Heading>Instant Cryptocurrency quote</Heading>
        <Form
          setCoin={setCoin}
          setCrypto={setCrypto}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;
