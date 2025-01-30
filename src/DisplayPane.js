import { useState } from "react";

function DisplayPane() {
    const [data, setData] = useState([
        { id: 1, Name: "Ogunleye Adeola", Job: "Engineer", Address: "21 Boleyn Close, Walthamstow, London, UK", selected: false },
        { id: 2, Name: "Akeem Baba", Job: "Carpenter", Address: "42, Hackney Central", selected: false },
        { id: 3, Name: "Muniru Atilogun", Job: "Barber", Address: "25 Stoke Newington", selected: false },
        { id: 4, Name: "Oke Afeez", Job: "Driver", Address: "27 London Bridge", selected: false },
    ]);

    const toggleRowSelection = (id) => {
        setData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    return (
        <div className="pager2">
            <div>
                <table>
                    <caption>Health Database</caption>
                    <thead>
                        <tr>
                            <th scope="col">Select</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Job</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} style={{ backgroundColor: item.selected ? '#d3d3d3' : 'transparent' }}>
                                <td>
                                    <button onClick={() => toggleRowSelection(item.id)}>
                                        {item.selected ? "Deselect" : "Select"}
                                    </button>
                                </td>
                                <td>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Job}</td>
                                <td>{item.Address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DisplayPane;