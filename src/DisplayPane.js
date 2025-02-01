import { useEffect, useState } from "react";
import { eventBus } from "./emitter";

const state_dict = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District of Columbia",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

function DisplayPane({ getRows }) {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    eventBus.on("reload", () => setItems(JSON.parse(localStorage.getItem("apiData"))));
    return () => eventBus.removeAllListeners("reload");
  }, []);

  console.log(items);

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