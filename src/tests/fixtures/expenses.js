import moment from 'moment';

export default  [
        {
            id: '0',
            description: 'Bill',
            note: 'This was the final payment for that address',
            amount: 12,
            createdAt: 0
        },
        {
            id: '1',
            description: 'Rent',
            note: 'This was the final payment for that address',
            amount: 13,
            createdAt: moment(0).subtract(4,"days").valueOf()
        },
        {
            id: '2',
            description: 'Credit Card',
            note: 'This was the final payment for that address',
            amount: 14,
            createdAt:  moment(0).add(4,"days").valueOf()
        }
    ];
