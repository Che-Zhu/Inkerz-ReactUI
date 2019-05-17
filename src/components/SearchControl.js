/*This component controls case search field*/

import React from 'react';

function SeachControl(props) {
    
    return (
        <div className="search-control">   
            <input
            id="text-to-search"
             className="search-3d"
            onChange={props.onCaseSearch}
            value={props.searched} 
            placeholder="Search Case..."
        />        
        <button className="clearButton" onClick={() => props.onClear("")}>X</button>
            
        </div>
        )
    }

export default SeachControl