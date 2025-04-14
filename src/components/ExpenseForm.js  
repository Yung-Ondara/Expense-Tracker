import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Expense Name" required />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <input name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" type="number" />
      <input name="date" value={formData.date} onChange={handleChange} placeholder="Date" type="date" />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
          