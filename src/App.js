import Navbar from "./components/Navbar";
import Game from "./components/Game";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function NoRoute() {
    return (
        <div>
            <h1>404 pas trouvé</h1>
        </div>
    )
}

function Home()
{
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="*" element={<NoRoute />} />
            </Routes>
        </Router>
    )
}

export default App;
