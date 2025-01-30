import React, {useEffect, useState}  from "react"
import ControlPane from "./ControlPane"
import DisplayPane from "./DisplayPane";


const Combo = () => {
    return(
        <div className="combo1">
            <ControlPane/>
            <DisplayPane/>
        </div>
    );
}
export default Combo;