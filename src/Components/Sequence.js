import  React, { useContext } from 'react'
import { CalcContext } from '../Contexts/CalcContext'
import { Textfit } from 'react-textfit';

const Sequence = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className='sequence' max={40} min={20}>
      {calc.seq}
      {/* |{calc.count}|{calc.sym}|{calc.prevSym} */}
    </Textfit>
  )
}

export default Sequence