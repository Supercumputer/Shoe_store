import { useState } from "react";

function CheckExample({laybal, type = 'radio', handler, check}) {
   
    return (
        <div className="form-check">
            <input className="form-check-input" type={type} name="flexRadioDefault" checked={check} value={laybal} id="flexRadioDefault1" onChange={handler}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                {laybal}
            </label>
        </div>
    );
}

export default CheckExample;
