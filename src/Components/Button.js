import React from 'react'
import { useNavigate } from 'react-router-dom'

const colorTypes = [
  'basic-color',
  'support-color',
  'operand-color',
  '#fcfafb' //for history text
]

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

  const click = (symbol) => {
    if(symbol == '?'){
      return navigate('/support');
    }
  }
  return (
    <button className={`button ${getColor(symbol)} ${getPlacement(symbol)}`} onClick={() => click(symbol)}>
        {symbol}
    </button>
  )
}

export default Button