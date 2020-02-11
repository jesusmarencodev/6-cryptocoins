import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types'


const DivResult = styled.div`
    color:#FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Paragraph = styled.p`
    font-size: 18px;
    span{
        font-weight:bold;
    }
`;  

const Price = styled.p`
    font-size: 30px;
`;


const Quote = ({quote}) => {
    if(Object.keys(quote).length === 0) return null;
    console.log(quote);

    return (
        <DivResult>
            <Price>The price es: <span>{quote.PRICE}</span></Price>
            <Paragraph>The highest price of the day is: <span>{quote.HIGHDAY}</span></Paragraph>
            <Paragraph>The lowest price of the day is: <span>{quote.LOWDAY}</span></Paragraph>
            <Paragraph>Variation last 24 hours: <span>{quote.CHANGEPCT24HOUR}</span></Paragraph>
            <Paragraph>Last Update: <span>{quote.LASTUPDATE}</span></Paragraph>
        </DivResult>
    );
};
Quote.propTypes = {
    quote : PropTypes.object.isRequired,
}

export default Quote;