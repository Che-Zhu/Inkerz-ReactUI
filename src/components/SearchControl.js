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
            style={{backgroundImage: "url(images/search-icon.png)",
            backgroundRepeat: 'no-repeat'}}
        />                  
        </div>
        )
    }

export default SeachControl
