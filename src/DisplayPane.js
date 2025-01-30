import { useContext } from "react";
import { DataContext } from "./DataContext";

function DisplayPane() {
  const { apiData } = useContext(DataContext); 

  if (!Array.isArray(apiData)) {
    return <p>Loading data or no data available...</p>; 
  }

  return (
    <div className="pager2">
      <table>
        <caption>Health Database</caption>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Lastname</th>
            <th>Firstname</th>
            <th>Classification</th>
          </tr>
        </thead>
        <tbody>
          {apiData.length > 0 ? (
            apiData.map((item) => (
              <tr key={item.id}>
                <td><input type="checkbox" /></td>
                <td>{item.id}</td>
                <td>{item.lastname}</td>
                <td>{item.firstname}</td>
                <td>{item.classification}</td>
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

export default DisplayPane;