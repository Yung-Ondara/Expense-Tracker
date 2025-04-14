function ExpenseTable({ expenses, onDelete }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, index) => (
            <tr key={index}>
              <td>{exp.name}</td>
              <td>{exp.description}</td>
              <td>{exp.category}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  