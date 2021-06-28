// export const aptDetails = [
//     {
//         id: 43,
//         title: 'super cut',
//         price: '$30.00',
//         duration: '1 hour'
//         // which staff can do service???
//         // staff: {}
//     },
//     {
//         id: 42,
//         title: "Women's Cut- Master Stylist",
//         price: '$30.00',
//         duration: '1 hour'
//     },
//     {
//         id: 57,
//         title: "Men's Scissor Cut- Stylist",
//         price: '$30.00',
//         duration: '1 hour'
//     },
//     {
//         id: 39,
//         title: 'Full Highlight (Foils)- Master Stylist',
//         price: '$30.00',
//         duration: '1 hour'
//     },
//     {
//         id: 72,
//         title: 'Full Highlight (Foils)- Master Stylist',
//         price: '$30.00',
//         duration: '1 hour'
//     },
//     {
//         id: 45,
//         title: 'Full Highlight (Foils)- Master Stylist',
//         price: '$30.00',
//         duration: '1 hour'
//     }
// ]


// export const staffDetails = [
//     {
//         name: 'esmarelda labo'
//         // availability????
//         // which services they can do
//     },
//     {
//         name: 'julia asparanti'
//     }

// ]

import axios from 'axios'

export const getServices = async () => {
    try {
        return await axios.get("http://localhost:8080/services", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => res.data)
    } catch (err) {
        return err
    }
}

export const getStaff = async () => {
    try {
        return await axios.get("http://localhost:8080/staff", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => res.data)
    } catch (err) {
        return err
    }
}
