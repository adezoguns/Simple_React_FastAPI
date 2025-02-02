import { useEffect, useState } from "react";
import { eventBus } from "./emitter";
import { state_dict } from "./DataContext";


function DisplayPane({ getRows }) {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    eventBus.on("reload", (data) => {
      setItems(data);});
  }, []);

  //console.log(JSON.stringify(items));
  console.log(selectedItems);

  // Handle checkbox toggle
  const handleSelectionChange = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]
    );
  };

  // Update parent component with selected rows
  useEffect(() => {
    if (getRows) {
      getRows(selectedItems);
    }
  }, [selectedItems, getRows]);

  if (!Array.isArray(items)) {
    return <p>Loading data or no data available...</p>;
  } else {
    return (
      <div className="pager2">
        <table>
          <caption>Health Database</caption>
          <thead>
            <tr>
              <th>Select</th>
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
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectionChange(item.id)}
                    />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.classification}</td>
                  <td>{item.specialization}</td>
                  <td>{item.lastname}</td>
                  <td>{item.firstname}</td>
                  <td>{state_dict[item.state]}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayPane;