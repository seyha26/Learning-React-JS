import { useState, useEffect } from "react";
import Form from "./Form";
// import List from "./List";
import Table from "./Table";
function App() {
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState("users");

  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
