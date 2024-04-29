import React, { useState } from 'react';

function Search() {
    const [searchDate, setSearchDate] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    const transactions = [
        { id: 1, description: "Groceries", amount: 50, date: "2024-04-25" },
        { id: 2, description: "Gas", amount: 30, date: "2024-04-24" },
        { id: 3, description: "Dinner", amount: 40, date: "2024-04-23" },
        { id: 4, description: "Movie Tickets", amount: 25, date: "2024-04-22" },
        { id: 5, description: "Lunch", amount: 20, date: "2024-04-21" },
    ];

    const handleSearch = (event) => {
        const date = event.target.value.trim();
        setSearchDate(date);

        if (date === '') {
            setFilteredTransactions([]);
            return;
        }

        const filtered = transactions.filter(transaction =>
            transaction.date.includes(date)
        );
        setFilteredTransactions(filtered);
    };

    return (
        <>
            <input
            className='form-control'
                id="search"
                type="text"
                placeholder="Search Transaction by Date"
                onChange={handleSearch}
            />
            <ul>
                {filteredTransactions.map((transaction, index) => (
                    <li key={index}>{transaction.description} - {transaction.date}</li>
                ))}
            </ul>
        </>
    )
}

export default Search;