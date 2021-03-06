import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {getServices} from '../api'

const ServiceCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 50px;
`

const ServiceCardStyling = styled.div`
    background: #FFF;
    width: 60vw;
    text-align: left;
    margin: 10px 0px;
    border-radius: 5px;
    box-shadow: 2px 3px 10px 2px rgba(0,0,0,0.47);
    display: flex;
    flex-direction: row;
    .info {
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-grow: 4;
        p {
            margin: 0;
        }
        h2 {
            margin: 0 0 10px 0;
            font-size: 16px;
        }
    }
    .book {
        padding: 25px 60px 25px 0;
        flex-grow: 1;
        text-align: right;
        margin: auto;
        input {
            width: 20px;
            height: 20px;
        }
        button {
            background: #DCDCDC;
            border: 1px solid #DCDCDC;
            border-radius: 2px;
            padding: 5px 8px;
            font-weight: bold; 
        }
    }
`

const ServiceCard = ({price, title, length}) => 
    <ServiceCardStyling>
        <div className="info">
            <h2>{title}</h2>
            <p>${price} - {length}</p>
        </div>
        <div className="book">
            {/* <input type='checkbox'></input> */}
            <button>select</button>
        </div>
    </ServiceCardStyling>

const ServicesContainer = styled.div`
    /* background: #0091AD; */
    /* background: url("https://www.parlourvt.com/uploads/b/71386660-3fa2-11ea-8b02-5116966810d1/_T7A6742.jpg") no-repeat center center fixed;  */
    height: 100vh;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: 'Square Market', Helvetica, Arial, sans-serif;
    h1 {
        width: 100vw;
        margin-top: 32px;
        text-align: center;
        position: absolute;
        margin-top: 56px;
        margin-bottom: 0px;
    }
`

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const allServices = await getServices()
            setServices(allServices)
        }
        fetchData()
    }, [])

    return (
        <ServicesContainer>
            <h1>Services</h1>
            <ServiceCardsContainer>
                {services.length === 0 ? <p>please call xxx-xxx-xxxx to discuss available services</p> : services.map((details, i) => <ServiceCard title={details.title} price={details.price} length={details.duration}/>)}
            </ServiceCardsContainer>
        </ServicesContainer>
    )
}

export default Services