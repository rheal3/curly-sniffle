import styled from 'styled-components'
import ServiceCard from './ServiceCard'


const BookAppointmentBackground = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    background: rgb(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookAppointmentContainer = styled.div`
    width: 900px;
    height: 90vh;
    border-radius: 5px;
    box-shadow: 2px 3px 10px 2px rgba(0,0,0,0.47);
    background: #FFF;
`

const AppointmentStepsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    ul {
        list-style-type: none;
        text-align: left;
        li {
            margin-bottom: 24px;
            h5 {
                margin-top: 0;
                font-size: 1rem;
                line-height: 1.625;
            }
        }
    }
`

const AppointmentContentContainer = styled.div`
    flex-grow: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// const StaffCard = () => 
//     <div>
//         {/* <span>image of letter in circle</span> */}
//         <h5>Name</h5>
//     </div>

const BookAppointment = () => {
    return (
        <BookAppointmentBackground>
            <BookAppointmentContainer>
                <div>
                    close - fixed top right
                </div>
                <div style={{height: '80px'}}>
                    header - title top left
                </div>
                <div className='row' style={{display: 'flex'}}>
                    <AppointmentStepsContainer>
                        <ul>
                            <li>
                                <h5>Select service</h5>
                            </li>
                            <li>
                                <h5>Select staff</h5>
                            </li>
                            <li>
                                <h5>Select date and time</h5>
                            </li>
                            <li>
                                <h5>Enter your details</h5>
                            </li>
                        </ul>
                    </AppointmentStepsContainer>
                    <AppointmentContentContainer>
                        <ServiceCard title="super cut" price="30.00" length="1 hour"/>
                    </AppointmentContentContainer>
                </div>
                <div>
                    footer - next page and back buttons
                </div>
            </BookAppointmentContainer>
        </BookAppointmentBackground>
    )
}

export default BookAppointment