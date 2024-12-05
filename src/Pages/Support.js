import React from 'react'
import WrapperSupp from '../Components/WrapperSupp'
import HeaderSupport from '../Components/HeaderSupport'
import FormContainer from '../Components/FormContainer'
import LeftForm from '../Components/LeftForm'
import RightForm from '../Components/RightForm'
import SendSupport from '../Components/SendSupport'
import SuppProvider from '../Contexts/SupportContext'

const Support = () => {
    // const {inputValue} = useContext(SuppContext);

    return (
        <SuppProvider>
        <div className='support'>
                <WrapperSupp>
                    <HeaderSupport />
                    <FormContainer>
                        <LeftForm />
                        <RightForm />
                    </FormContainer>
                    <SendSupport />
                </WrapperSupp>
            </div>
        </SuppProvider>
    )
}

export default Support;