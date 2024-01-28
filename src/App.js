import Navbar from "./components/Navbar";
import Game from "./pages/Game";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <Router>
            {/*<Navbar />*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App;
