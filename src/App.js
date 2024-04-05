import Game from "./pages/Game";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/home" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App;
