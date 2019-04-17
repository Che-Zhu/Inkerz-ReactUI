import React from 'react';

function Header() {
    return (
        <div className="header-flex">
            <div>
                <img src="../../images/logo_white.png" alt="Inkerz Logo"></img>
            </div>
            <div className="nav">
                <a href="index.html">3D MODELER</a>
                <a href="index.html">WHY INKERZ?</a>
                <a href="index.html">CONTACT</a>
            </div>
        </div>
    )

}

export default Header