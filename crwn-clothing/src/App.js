import { Routes, Route } from "react-router-dom";

import "./categories.styles.scss";
import Home from "./routes/home/home.component";

function App() {
    return (
        <Routes>
            <Route path="/home" element={<Home />}></Route>
        </Routes>
    );
}

export default App;
