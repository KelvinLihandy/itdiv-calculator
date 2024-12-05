import React, { useState, createContext } from 'react'

export const SuppContext = createContext();
const SuppProvider = ({children}) => {
    const [inputValue, setInputValue] = useState({
        First: '',
        Last: '',
        Email: '',
        Topic: '',
    });
    const [buttonState, setButtonState] = useState({disabled: false})
    return (
        <SuppContext.Provider value={{inputValue, setInputValue, buttonState, setButtonState}}>
            {children}
        </SuppContext.Provider>
    )
}

export default SuppProvider;