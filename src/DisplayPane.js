import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

function DisplayPane() {
  //const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("apiData"));
  //   if (items) {
  //   setItems(items);
  //   }
  // }, []);

  const items = JSON.parse(localStorage.getItem("apiData"));
  

  console.log(items);

  if (!Array.isArray(items)) {
    return <p>Loading data or no data available...</p>; 
  }
  else{

  return (
    <div className="pager2">
      <table>
        <caption>Health Database</caption>
        <thead>
          <tr>
            {/* <th>Select</th> */}
            <th>ID</th>
            <th>Classification</th>
            <th>Specialization</th>
            <th>Lastname</th>
            <th>Firstname</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                {/* <td><input type="checkbox" /></td> */}
                <td>{item.id}</td>
                <td>{item.classification}</td>
                <td>{item.specialization}</td>
                <td>{item.lastname}</td>
                <td>{item.firstname}</td>
                <td>{item.state}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
  }
}

export default DisplayPane;