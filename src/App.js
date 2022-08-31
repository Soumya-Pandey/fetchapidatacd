import { useEffect, useState } from "react";

export default function App() {

  const[data, setData] = useState([]);
  console.log(data);
  let api = "https://jsonplaceholder.typicode.com/users";

  const fecthApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setData(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthApiData(api);
  }, []);

  return (
    <div className="App">
      {data.map((mydata) => (
        <li key = {mydata.id}>{mydata.name}{mydata.phone}</li>
      ))}
    </div>
  );
}
