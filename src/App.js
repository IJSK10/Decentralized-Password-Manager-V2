import React from "react";
import App1 from "./Post/App1";
import Display from "./Display/Display"
import Key from "./Security/Key"
import Del from "./Delete/Del"
import Intro from "./intro"
import {
    BrowserRouter as Router,
    Routes,
    Route} from "react-router-dom";
function App()
{
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="Insert" element={<App1/>} />
            <Route path="key" element={<Key />} />
            <Route path="Display" element={<Display />} />
            <Route path='Delete'element={<Del />} />
          </Routes>
        </Router>
    );
}
export default App;