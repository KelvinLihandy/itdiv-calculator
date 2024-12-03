import  React, { useContext } from 'react'
import { CalcContext } from '../Contexts/CalcContext'

const Sequence = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className='sequence'>
      {calc.seq}
      |{calc.count}|{calc.sym}|{calc.prevSym}
    </div>
  )
}

export default Sequence