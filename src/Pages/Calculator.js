import React from 'react'
import Wrapper from '../Components/Wrapper';
import History from '../Components/History';
import ButtonContainer from '../Components/ButtonContainer';
import Button from '../Components/Button';

const buttonValues = [
    ["C", "DEL", "?", "/"],
    ["1", "2", "3", "x"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "+"],
    ["0", "="],
  ];

const Calculator = () => {
    return (
        <div className='canvas'>
            <Wrapper>
                <History>

                </History>
                <ButtonContainer>
                    {buttonValues.flat().map(symbol => (
                        <Button symbol={symbol}></Button>
                    ))}
                </ButtonContainer>
            </Wrapper>
        </div>
    )
}

export default Calculator;