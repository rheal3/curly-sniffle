import styled from 'styled-components'

const StaffCardStyling = styled.div`
    width: 90%;
    text-align: left;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid #D5D9DC;
    display: flex;
    flex-direction: row;
    .img {
        padding-left: 25px;
    }
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
            cursor: pointer;
        }
    }
`

const StaffCard = ({appointment, setAppointment, staffDetails}) => {
    const {first_name, last_name} = staffDetails

    const selectBtn = () => {
        setAppointment({...appointment, staff: staffDetails})
    }

    return (
        <StaffCardStyling>
            <div className="img">
                {/* image first letter in circle */}
                <h1>😵</h1>
            </div>
            <div className="info">
                <h2>{first_name} {last_name}</h2>
            </div>
            <div className="book">
                <button onClick={selectBtn}>select</button>
            </div>
        </StaffCardStyling>
    )
}

export default StaffCard



