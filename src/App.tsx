import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await (
        await fetch("https://jsonplaceholder.typicode.com/todos")
      ).json();
      console.log(data);
      setData(data);
    })();
  }, []);
  return (
    <>
      <div className="App">
        {data.map((e: any) => {
          return <li>{e.title}</li>;
        })}
      </div>
    </>
  );
}

export default App;
