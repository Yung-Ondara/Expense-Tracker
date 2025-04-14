import { useState } from 'react';
import './App.css';
import ExpenseForm from './src/components/ExpenseForm';
import ExpenseTable from './src/components/ExpenseTable';
import SearchBar from './src/components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ExpenseForm onAddExpense={handleAddExpense} />

      <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;
