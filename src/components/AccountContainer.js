import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionList';

function AccountContainer() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newTransaction, setNewTransaction] = useState({
        name: '',
        amount: '',
        date: '',
        category: '',
        description: ''
    });

    useEffect(() => {
        fetch("http://localhost:8001/transaction")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data:", data);
            setTransactions(data);
        })
        .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTransaction(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTransactions([...transactions, newTransaction]);
        setNewTransaction({
            name: '',
            amount: '',
            date: '',
            category: '',
            description: ''
        });
    };

    const filteredTransactions = searchTerm 
        ? transactions.filter(t => t.description.includes(searchTerm))
        : transactions;

    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <TransactionForm 
                newTransaction={newTransaction} 
                handleInputChange={handleInputChange} 
                handleSubmit={handleSubmit} 
            />
            <TransactionTable transactions={filteredTransactions} />
        </div>
    );
}

export default AccountContainer;




