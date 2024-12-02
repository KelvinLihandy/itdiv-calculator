import React from 'react'
import { useParams } from 'react-router-dom';
import WrapperSupp from '../Components/WrapperSupp'
import HeaderSupport from '../Components/HeaderSupport'
import TicketNumber from '../Components/TicketNumber'

const Ticket = () => {
  const {id} = useParams();

  return (
    <div className='support'>
            <WrapperSupp>
                <HeaderSupport />
                <div className='ticket-container'>
                  <div className='thanks'>
                    Thank you for sending us your report, we will track the problem now
                  </div>
                  <TicketNumber number={id}/>
                </div>
            </WrapperSupp>
        </div>
  )
}

export default Ticket