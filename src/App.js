import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [incomeItems, setIncomeItems] = useState([]);
  const [expencesItems, setExpencesItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpences, setTotalExpences] = useState(0);

  const addItem = (option, desc, number) => {
    if (option === "+") {
      const newIncomeItems = [...incomeItems];
      newIncomeItems.push({
        desc,
        number,
        option,
        id: Math.random(),
      });
      setIncomeItems(newIncomeItems);
      const newTotalIncome = totalIncome + parseInt(number);
      setTotalIncome(newTotalIncome);
      const newTotal = total + parseInt(number);
      setTotal(newTotal);
    } else {
      const newExpencesItems = [...expencesItems];
      newExpencesItems.push({
        desc,
        number,
        option,
        id: Math.random(),
      });
      setExpencesItems(newExpencesItems);
      const newTotalExpences = totalExpences + parseInt(number);
      setTotalExpences(newTotalExpences);
      const newTotal = total - parseInt(number);
      setTotal(newTotal);
    }
  };

  const removeIncome = (id, number) => {
    const itemIndex = incomeItems.findIndex((item) => item.id === id);
    const newIncomeItems = [...incomeItems];
    newIncomeItems.splice(itemIndex, 1);
    setIncomeItems(newIncomeItems);

    const newTotalIncome = totalIncome - parseInt(number);
    setTotalIncome(newTotalIncome);

    const newTotal = total - parseInt(number);
    setTotal(newTotal);
  };

  const removeExpences = (id, number) => {
    const itemIndex = expencesItems.findIndex((item) => item.id === id);
    const newExpencesItems = [...expencesItems];
    newExpencesItems.splice(itemIndex, 1);
    setExpencesItems(newExpencesItems);

    const newTotalExpences = totalExpences - parseInt(number);
    setTotalExpences(newTotalExpences);

    const newTotal = total + parseInt(number);
    setTotal(newTotal);
  };

  return (
    <>
      <Banner
        totalIncome={totalIncome}
        totalExpences={totalExpences}
        total={total}
      />
      <Form addItem={addItem} />
      <div className="tables">
        <Table items={incomeItems} title="Income" removeItem={removeIncome} />
        <Table
          items={expencesItems}
          title="Expences"
          totalIncome={totalIncome}
          removeItem={removeExpences}
        />
      </div>
    </>
  );
}

export default App;
