import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import SearchBar from './components/SearchBar'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDelete = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const filteredExpenses = expenses.filter((exp) =>
    `${exp.name} ${exp.description}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
