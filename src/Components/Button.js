import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalcContext } from '../Contexts/CalcContext'

const getColor = (symbol) => {
  const colorTypes = {
    '?': 'support-color',
    '/': 'operand-color', 
    'x': 'operand-color',
    '-': 'operand-color', 
    '+': 'operand-color', 
    '=': 'operand-color',
  }
  return colorTypes[symbol];
}

const getPlacement = (symbol) => {
  const stylings = {
    '0': 'double-span',
    '=': 'double-span',
  }
  return stylings[symbol]
}

const Button = ({symbol}) => {
  const navigate = useNavigate();
  const {calc, setCalc, history, setHistory} = useContext(CalcContext)

  const symbols = ['/', 'x', '+', '-'];

  const redirect = () => {
    navigate('/support')
  }

  const clear = () => {
    setCalc({seq: '0', count: 1, sym: '', prevSym: 0});
  }

  const res = () => {
    if(calc.count < 3 || calc.seq === 'Err') return;
    let transformed = calc.seq;
    if(calc.sym === 'x'){
      transformed = calc.seq.replace('x', '*');
    }
    if(calc.sym === '/' && calc.seq.charAt(calc.seq.indexOf('/') + 1) === '0'){
      setCalc({
        seq: 'Err',
      })
      return;
    }
    const calculation = eval(transformed);
    setCalc({
      seq: calculation.toString(),
      count: 1,
      sym: '',
      prevSym: 0
    })
    setHistory([...history, calculation]);
  }

  const ops = () => {
    if(calc.count >= 3) return res();
    if(calc.sym !== '') return;
    setCalc({
      ...calc,
      seq: calc.seq === '0' ? calc.seq : (symbols.some(sys => calc.seq.includes(sys)) ? calc.seq : calc.seq + symbol),
      count: calc.seq === '0' ? 1 : 2,
      sym: calc.seq === '0' ? '' : symbol,
      prevSym: calc.seq === '0' ? 0 : 1,
    }) 
  }

  const del = () => {
    if(calc.seq === 'Err') return;
    if(calc.seq.length > 1){
      setCalc({seq: calc.seq.slice(0, -1)})
    }
    else setCalc({seq: '0'})
    setCalc({
      ...calc,
      seq: calc.seq.length > 1 ? calc.seq.slice(0, -1) : '0',
      count: symbols.some(sys => calc.seq.slice(-2, -1).includes(sys)) ? 2 : (calc.sym !== '' ? calc.count : 1),
      sym: calc.count === 2 ? '' : calc.sym,
      prevSym: calc.sym === '' ? 0 : 1
    })
  }

  const num = () => {
    if(calc.seq === 'Err') return;
    setCalc({
      ...calc,
      seq: calc.seq === '0' ? symbol : calc.seq + symbol,
      count: calc.prevSym === 1 ? 3 : 1,
    })
  }

  const click = (symbol) => {
    const operations = {
      '?': redirect,
      'C': clear,
      'DEL': del,
      '/': ops, 
      'x': ops,
      '-': ops, 
      '+': ops, 
      '=': res,
      '0': num,
      '1': num,
      '2': num,
      '3': num,
      '4': num,
      '5': num,
      '6': num,
      '7': num,
      '8': num,
      '9': num,
    }
   return operations[symbol]();
  }
  
  return (
    <button className={`button ${getColor(symbol)} ${getPlacement(symbol)}`} onClick={() => click(symbol)}>
        {symbol}
    </button>
  )
}

export default Button