import styled from 'styled-components'
import arrow from './chevron-down-solid.svg'

const FAQContainer = styled.div`
    margin: 15px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 2px 3px 10px 2px rgba(0,0,0,0.47);
    text-align: left;

    .faq-question {
        position: relative;
        font-size: 20px;
        padding-right: 80px;
        transition: all 0.4s ease;
        margin-bottom: ${props => props.open ? "15px" : ""};
    }
    .faq-question::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 10px;
        transform: ${props => props.open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)"};
        width: 23px;
        height: 23px;

        background-image: url(${props => props.imgUrl});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        transition: all 0.4s ease;
    }

    .faq-answer {
        opacity: ${props => props.open ? 1 : 0};
        max-height: ${props => props.open ? "1000px" : 0};
        overflow-y: hidden;
        transition: all 0.4s ease;
    }
    
`

const FAQCard = ({faq, index, toggleFAQ}) => {
    return (
        <FAQContainer open={faq.open} key={index} imgUrl={arrow} onClick={() => {toggleFAQ(index)}}>
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </FAQContainer>
    )
}

export default FAQCard