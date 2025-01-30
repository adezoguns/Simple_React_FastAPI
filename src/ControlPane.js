import React, {useEffect, useState}  from "react"
import { IoSearch } from "react-icons/io5"
import { MdAccountBalanceWallet } from "react-icons/md"
import { IoIosLogIn } from "react-icons/io"
import { IoIosLogOut } from "react-icons/io"
import { IoTrailSignOutline } from "react-icons/io5"
import { MdOutlineSettings } from "react-icons/md"
import SearchEng  from './SearchEngine';

import Modal from "./Modal"


const ControlPane = () =>{

    const trial = () => {
        alert("Hello World!");
      }

    const [login, setOpenLogin] = useState(false);
    const [reg, setOpenRegistration] = useState(false);
    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");
    const [email, setEmail]=useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname]=useState("");
    const [error, setError] = useState("");


    // useEffect(()=>{
    //     setGlobalData(data1);
    //      }, []
    // );


    const handleCloseLogin = () => {
          setOpenLogin(false);
      };
  
    const handleOpenLogin = () => {
          setOpenLogin(true);
      };

    const handleClose2 = () => {
        setOpenRegistration(false);
    };

    const handlereg = () => {
            setOpenRegistration(true);
        };

    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = {email, password };
    
        try {
        const response = await fetch("http://127.0.0.1:5000/api/token", 
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });
    
        const data = await response.json();
        console.log(data);
        ///console.log(error);

        //
    
        if (response.ok) {
            localStorage.setItem("token", data.token); // Store JWT token
            alert("Login successful!");
        } else {
            setError(data.message || "Invalid credentials");
        }
        } catch (error) {
        setError("Error connecting to the server");
        }
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
    
        const credentials = {firstname, lastname, email, password, re_password};
    
        try {
          const response = await fetch("http://127.0.0.1:5000/api/registration", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });
    
          const data2 = await response.json();
          console.log(data2);
    
        //   if (response.ok) {
        //     //localStorage.setItem("token", data.token); // Store JWT token
        //     alert("Login successful!");
        //   } else {
        //     setError(data.message || "Invalid credentials");
        //   }
        } catch (error) {
          setError(`Error connecting to the server: ${error}`);
        }
      };

    return(
            <div className="pager1">
                <div className="Account">
                    <h4 className="h3_color">Account</h4>
                    <hr/>
                    <div className="account_sub_tab">
                        <p className="log_in" onClick={handleOpenLogin}>
                            <IoIosLogIn/> Log In</p>
                            <Modal isOpen={login} onClose={handleCloseLogin}>
                                <>
                                    <div>
                                        <form onSubmit={handleLogin}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email:</label><br/>
                                                <input
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                />
                                            </div>
                                            <br/>
                                            <div className="form-group">
                                                <label htmlFor="password">Password:</label><br/>
                                                <input
                                                type="password"
                                                placeholder="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                />
                                            </div>
                                            <br/><br/>
                                            <input type="submit" value="Submit"/>
                                        </form>
                                    </div>
                                </>
                            </Modal>
                        <p className="log_out">
                            <IoIosLogOut/> Log Out</p> 
                        <p className="sign_up" onClick={handlereg}>
                            <IoTrailSignOutline/> Sign Up</p>
                            <Modal isOpen={reg} onClose={handleClose2}>
                                <>
                                    <div>
                                        <form onSubmit={handleRegistration}>
                                            <div className="form-group">
                                                <label htmlFor="fname">First name:</label><br/>
                                                <input
                                                type="fname"
                                                placeholder="fname"
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                required
                                                />
                                            </div>
                                            <br/>
                                            <div className="form-group">
                                                <label htmlFor="lname">Last name:</label><br/>
                                                <input
                                                type="lname"
                                                placeholder="lname"
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                                required
                                                />
                                            </div>
                                            <br/>
                                            <div className="form-group">
                                                <label htmlFor="email">Email:</label><br/>
                                                <input
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                />
                                            </div>
                                            <br/>
                                            <div className="form-group">
                                                <label htmlFor="password">Password:</label><br/>
                                                <input
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                />
                                            </div><br/>
                                            <div className="form-group">
                                                <label htmlFor="password2">Re-Password:</label><br/>
                                                <input
                                                type="password"
                                                placeholder="Re-Password"
                                                value={re_password}
                                                onChange={(e) => setRePassword(e.target.value)}
                                                required
                                            />
                                            </div><br/><br/>
                                            <input type="submit" value="Submit"/>
                                        </form>
                                    </div>
                                </>
                            </Modal>
                        <div className="settings">
                            <MdOutlineSettings/> Settings</div>
                    </div>

                </div>
                <div className="Resource">
                    <h4 className="h3_color">Resource</h4>
                    <hr/>
                    <div className="resource_sub_tab">
                        <p className="acc">
                            <MdAccountBalanceWallet/> Account</p>
                        
                        <p className="search" >
                        <IoSearch/> Search
                                <SearchEng/>
                        </p>
                    </div>
                </div>

                <div className="Welcome">
                    <h4 className="h3_color">Welcome</h4>
                    <hr/>
                    <div className="welcome_sub_tab">
                    <button className="fastgolem_invite">Fastgolem Beta Invite</button>
                    </div>

                </div>
               
            </div>
    );
}
export default ControlPane;