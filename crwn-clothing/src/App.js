import { Routes, Route } from "react-router-dom";

import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import GLogin from "./routes/sign-in/golang-google-sign-in.component";
import SignIn from "./routes/sign-in/sign-in.component";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/google-sign-in" element={<GLogin />} />
            </Route>
        </Routes>
    );
}

export default App;
