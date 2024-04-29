import React, { useState } from 'react';

function Form({ AddToForm }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputData = { date, description, category, amount };

        fetch("http://localhost:3001/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData)
        })
        .then(response => response.json())
        .then(data => {
            AddToForm(data);
            setDate("");
            setDescription("");
            setCategory("");
            setAmount("");
        })
        .catch(error => console.error('Error:', error));
    };

    const appendToTable = () => {
        const table = document.getElementById('transaction-table');
        const newRow = table.insertRow(-1);

        const cell1 = newRow.insertCell(0);
        cell1.textContent = date;

        const cell2 = newRow.insertCell(1);
        cell2.textContent = description;

        const cell3 = newRow.insertCell(2);
        cell3.textContent = category;

        const cell4 = newRow.insertCell(3);
        cell4.textContent = amount;
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-3'>
                    <input
                    className='form-control'
                    id='date'
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={handleDateChange}
                />

                    </div>
                <div className='col-3'>
                <input
                className='form-control'
                   id='date'
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                </div>
             <div className='col-3'>
             <input
                className='form-control'
                    id='date'
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={handleCategoryChange}
                />
             </div>
          
          <div className='col-3'>
          <input
                className='form-control'
                    id='date'
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleAmountChange}
                />

          </div>
                
                <div className='col-2 mx-auto p-2'>
                <button id="check" onClick={appendToTable} className=' btn btn-info'>Add Transaction</button>
                </div>
               
                </div>
                
            </form>
                   

                   <table className='table' id="transaction-table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*the Rows will be appended here */}
                        <tr>
                            <td>2024-04-25</td>
                            <td>Groceries</td>
                            <td>Expense</td>
                            <td>Ksh 200</td>
                            
                          </tr>
                          <tr>
                            <td>2024-04-24</td>
                            <td>Gas</td>
                            <td>Expense</td>
                            <td>Ksh 1200</td>
                          </tr>
                          <tr>
                            <td>2024-04-22</td>
                            <td>Movie Tickets</td>
                            <td>Expense</td>
                            <td>Ksh 200</td>
                          </tr>
                           <tr>
                            <td>2024-04-23</td>
                            <td>Dinner</td>
                            <td>Expense</td>
                            <td>Ksh 2000</td>
                          </tr>
                          <tr>
                            <td>2024-04-21</td>
                            <td>Lunch</td>
                            <td>Expense</td>
                            <td>Ksh 200</td>
                          </tr>

                        </tbody>
                      </table>


        </>
    );
}

export default Form;