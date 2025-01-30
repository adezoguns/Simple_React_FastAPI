// Apper.jsx
import React, {useEffect, useState} from "react";
import axios from "axios"; // uimport axios


// function Apper2(){
//     const [posts, setPosts]=useState([]);

//     const client=axios.create({
//         baseURL: "https://jsonplaceholder.typicode.com/users"
//     });

//     const fetchPosts= async() =>{
//     const res= await client.get('?_limit=100');
//     setPosts(res.data);
//     };

    
//     useEffect(()=>{
//          fetchPosts();
//          }, []
//     );

//     if (!posts) return null;
    
//     return (
    
//             <div className="App">
//                 <h1 className="geeks">GeeksforGeeks</h1>
//                 <h3>Fetch data from an api in react</h3>
//                 <div className="container">
//                     {posts.map(item => (
//                         <div className="item">
//                             <ol key={item.id}>
//                                 <div>
//                                     <strong>
//                                         {"User_Name: "}
//                                     </strong>
//                                     {item.username},
//                                 </div>
//                                 <div>
//                                     Full_Name: {item.name},
//                                 </div>
//                                 <div>
//                                     User_Email: {item.email}
//                                 </div>
//                             </ol>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );

// }

// export default Apper2;

const data1=[
    {   
        "Name": "Ogunleye Adeola",
        "Job": "Engineer",
        "Address": "21 Boleyn Close, Walthamstow, London, UK"
    },
    { 
        "Name": "Dauda Adebisi",
        "Job": "Medical Doctor",
        "Address": "21 Boleyn Close, Walthamstow, London, UK"
    },
    { 
        "Name": "Dauda Adebisi",
        "Job": "Medical Doctor",
        "Address": "21 Boleyn Close, Walthamstow, London, UK"
    },
    { 
        "Name": "Dauda Adebisi",
        "Job": "Medical Doctor",
        "Address": "21 Boleyn Close, Walthamstow, London, UK"
    },
    
]


function Apper2(){

    return (
            <div className="App">
                <h3>Display data</h3>
                <div className="container">
                    {data1.map(item  => (
                        <div className="item">
                            <ol key={item.Job}>
                                <div>
                                    <strong>
                                    {"Job: "}
                                    </strong>
                                    {item.Job}
                                </div>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.Name}
                                </div>
                                <div>
                                    <strong>
                                        {"Address: "}
                                    </strong>
                                    {item.Address}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );

}

export default Apper2;