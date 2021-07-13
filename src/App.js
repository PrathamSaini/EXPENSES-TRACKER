
import "./App.css";
import React,{useState} from "react";
import Expenses from './components/Expenses';
import NewExpense from "./components/NewExpense";
const DUMMY_EXPENSES = [
  
];
function App() {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler =(expense) =>{
    setExpenses((prevExpenses)=>{
      return([expense,...prevExpenses]);
    });
  };
  return (
    <div>
       <div className="heading1"><h1>THE EXPENSES TRACKER</h1></div>
       <div className="heading2"><h2>'Track Your Expenses and Manage Your Budget'</h2></div>
       <div className="editor"><h3>Designed By:- Pratham Saini</h3></div>
       <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
}
export default App;
