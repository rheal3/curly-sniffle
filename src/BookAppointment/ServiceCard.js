import styled from 'styled-components'

const ServiceCardStyling = styled.div`
    width: 90%;
    text-align: left;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid #D5D9DC;
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
            <button>select</button>
        </div>
    </ServiceCardStyling>

export default ServiceCard



