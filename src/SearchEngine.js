 import { useState, useEffect, useContext} from "react";
import { DataContext, medicalSpecialties } from "./DataContext";
import { eventBus } from "./emitter";


 
function SearchEng({children}) {
  const [selectedParent, setSelectedParent] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
  const [apiData, setApiData] = useState([]);
  //const { setAPIData } = useContext(DataContext); 
  const [error, setError] = useState("");

  // Handles Parent Selection
  const handleParentSelection = (e) => {
    setSelectedParent(e.target.value);
    setSelectedChild(""); // Reset child when parent changes
  };

  // Handles Child Selection
  const handleChildSelection = (e) => {
    setSelectedChild(e.target.value);
  };

  // API Call to Post Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedParent || !selectedChild) {
      setError("Please select both a parent and a child.");
      return;
    }

    const data = { parent: selectedParent, child: selectedChild };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/search_db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      //console.log(result);
      //setApiData(result);


      if (Array.isArray(result)) { 
        setApiData(result);
        eventBus.emit("reload", result);
        //localStorage.setItem("apiData", JSON.stringify(result));
      } else {
        eventBus.emit("reload", []);
      }
      //console.log("API Response:", result);

      if (!response.ok) {
        setError(result.message || "Failed to submit.");
      } else {
        //alert("Selection submitted successfully!");
        setError("");
      }
    } catch (error) {
      setError("Error connecting to the server.");
    }
  };


  return (
    <div>
      {/* Parent Dropdown */}
      <label>Classification:</label>
      <select value={selectedParent} onChange={handleParentSelection}>
        <option value="">Select Parent</option>
        {Object.keys(medicalSpecialties).map((parent) => (
          <option key={parent} value={parent}>
            {parent}
          </option>
        ))}
      </select>

      {/* Child Dropdown (only if parent is selected) */}
      {selectedParent && (
        <>
          <label>Specialization:</label>
          <select value={selectedChild} onChange={handleChildSelection}>
            <option value="">Select Child</option>
            {Object.keys(medicalSpecialties[selectedParent]).map((child) => (
              <option key={child} value={child}>
                {child}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Submit Button */}
        <div className="search_submitter">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
}

export default SearchEng;
