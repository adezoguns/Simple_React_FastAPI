import React, { useEffect, useState } from "react";
import axios from "axios";

const App2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/api/data")
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    console.log(data);

    return (
        <div>
            <h1 className="header101">React</h1>
            <div className="container">
                   {data.map(item => (
                         <div className="item">
                             <ol key={item.id}>
                                <div>
                                    <strong>
                                         {"User_Name: "}
                                  </strong>
                                     {item.Name},
                                 </div>
                                 <div>
                                     Full_Name: {item.Job},
                                 </div>
                                 <div>
                                     User_Email: {item.Address}
                                 </div>
                             </ol>
                         </div>
                     ))}
                 </div>
        </div>
    );
};

export default App2;