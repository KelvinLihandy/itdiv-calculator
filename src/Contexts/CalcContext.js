import React, { useState, createContext } from 'react'

export const CalcContext = createContext();
const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState({
        seq: '0',
        count: 1,
        sym: '',
        prevSym: 0
    });

    return (
        <CalcContext.Provider value={{calc, setCalc}}>
            {children}
        </CalcContext.Provider>
    )
}

export default CalcProvider;