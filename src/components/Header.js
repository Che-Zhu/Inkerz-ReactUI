/*THis componenet renders vanilla header with logo and links 

Drop down menu for small screen devices uses this example
https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
and is modified
*/

import React from 'react';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="images/logo_white.png" alt="Inkerz Logo" className="logoImage"></img>
        </div>

        <div className="nav-links">
          <a href="index.html">3D MODELER</a>
          <a href="https://inkerz.com">WHY INKERZ?</a>
          <a href="https://inkerz.com/contact/">CONTACT</a>
        </div>

        <div className="menu-division">
          <img src="images/logo_white.png" alt="Inkerz Logo" className="menuLogoImage"></img>
          <button
            className="menu-button"
            onClick={this.showMenu}
            style={{ backgroundImage: "url(images/menu-icon.png)", backgroundRepeat: 'no-repeat' }}>
          </button>
          {
            this.state.showMenu
              ? (
                <div
                  className="menu"
                  ref={(element) => { this.dropdownMenu = element; }}>
                  <a href="index.html">
                    <button className="menuItem">3D MODELER</button>
                  </a>
                  <a href="https://inkerz.com">
                    <button className="menuItem">WHY INKERZ?</button>
                  </a>
                  <a href="https://inkerz.com/contact/">
                    <button className="menuItem">CONTACT</button>
                  </a>
                </div>
              )
              : (
                null
              )
          }
        </div>

      </div>
    );
  }
}



export default Header
