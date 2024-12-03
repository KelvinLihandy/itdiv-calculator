import React from 'react'
import WrapperCalc from '../Components/WrapperCalc';
import CalcProvider from '../Contexts/CalcContext';
import History from '../Components/History';
import Sequence from '../Components/Sequence'
import ButtonContainer from '../Components/ButtonContainer';
import UpperContainer from '../Components/UpperContainer';
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
        <CalcProvider>
            <div className='calculator'>
                <WrapperCalc>
                    <UpperContainer>
                        <History />
                        <Sequence />
                    </UpperContainer>
                    <ButtonContainer>
                        {buttonSymbols.flat().map(symbol => (
                        <Button symbol={symbol}></Button>
                        ))}
                    </ButtonContainer>
                </WrapperCalc>
            </div>
        </CalcProvider>
    )
}

export default Calculator;