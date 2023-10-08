import React from 'react';
import  ReactDOM  from 'react-dom';

const PortalButton=({buttonclick})=>{
    return ReactDOM.createPortal(
        <div>
            <button id="button" onClick={buttonclick}>Click</button>
        </div>
        document.getElementById("portal-button")
        
    );
};
export default PortalButton;

//portal-button id will be used here for portal purpose