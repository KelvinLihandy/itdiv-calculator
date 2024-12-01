import React from 'react'
import WrapperCalc from '../Components/WrapperCalc';
import History from '../Components/History';
import ButtonContainer from '../Components/ButtonContainer';
import Button from '../Components/Button';

const buttonSymbols = [
    ["C", "DEL", "?", "/"],
    ["1", "2", "3", "x"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "+"],
    ["0", "="],
  ];

const Calculator = () => {
    return (
        <div className='calculator'>
            <WrapperCalc>
                <History>

                </History>
                <ButtonContainer>
                    {buttonSymbols.flat().map(symbol => (
                        <Button symbol={symbol}></Button>
                    ))}
                </ButtonContainer>
            </WrapperCalc>
        </div>
    )
}

export default Calculator;