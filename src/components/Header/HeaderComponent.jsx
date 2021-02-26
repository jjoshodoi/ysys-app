import React from 'react';
import './HeaderComponent.css';

// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = () => {
    return <header className={'header'}>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
        <button>Show Filters</button>
      <h1 id="headertext"><center>Game of Thrones App</center></h1>
      <input type="Submit" value="Submit"></input>
      
      
    </header>
};