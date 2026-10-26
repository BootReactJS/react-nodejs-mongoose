import Header from  "./components/header/Header.jsx";
import Wrapper from  "./components/wrapper/Wrapper.jsx";
import { useState } from "react"

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
      setIsLoggedIn(true);
    };

  const logout = () => {
      setIsLoggedIn(false);
  };

    return(
      <div>
          Welcome to React   with JavaScript XML  rider
              {isLoggedIn ? <Header logout={logout}/> : null}
            <Wrapper isLoggedIn={isLoggedIn}  />
      </div>
    );
}
export default App;
