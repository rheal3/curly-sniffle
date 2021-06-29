import {useState} from 'react'
import FAQCard from './FAQCard'
import styled from 'styled-components'
import {initState} from './api'

const FAQSContainer = styled.div`
    width: 100%;
    max-width: 75vw;
    margin: 0 auto;
    padding: 25px;
`

const FAQContainer = styled.div`
    .header h1 {
        margin-top: 56px;
        margin-bottom: 0px;
    }
`

const FAQ = () => {
    const [faqs, setFaqs] = useState(initState)

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false
            }
            return faq
        }))
    }
    return (
        <FAQContainer>
            <div className="header">
                <h1>faq</h1>
            </div>
            <FAQSContainer className="faqs">
                {faqs.map((faq, i) => (
                    <FAQCard faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                ))} 
            </FAQSContainer>
        </FAQContainer>
    )
}

export default FAQ