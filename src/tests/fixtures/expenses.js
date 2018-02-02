import moment from 'moment';

export default  [
        {
            id: '1',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 12,
            createdAt: 0
        },
        {
            id: '2',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 13,
            createdAt: moment(0).subtract(4,"days").valueOf()
        },
        {
            id: '3',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 14,
            createdAt:  moment(0).add(4,"days").valueOf()
        }
    ];
