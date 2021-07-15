import React, {useState} from 'react';
import Calendar from 'react-calendar'
import styled from 'styled-components'
import './DateCard.css'

const DateCardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

const DateCard = () => {
    const [date, setDate] = useState(new Date())
                                
    return (
        <DateCardContainer>
            <Calendar onChange={(value, event) => {setDate(value)}} value={date} />
            
        </DateCardContainer>
    ); 
}


export default DateCard;