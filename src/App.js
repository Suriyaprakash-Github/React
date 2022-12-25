// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Chennai",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Mumbai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Surat",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Hyderabad",
    },
  ];
  // Loops for details
  // const expenseArray = [];
  // for (let i = 0; i < expenses.length; i++) {
  //   expenseArray.push(
  //     <ExpenseItem
  //       title={expenses[i].title}
  //       amount={expenses[i].amount}
  //       date={expenses[i].date}
  //       location={expenses[i].location}
  //     />
  //   );

  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <Expenses item={expenses} />
      </div>
      {/* {expenseArray} */}
    </div>
  );
};
export default App;
