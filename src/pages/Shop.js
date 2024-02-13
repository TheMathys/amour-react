import Navbar from "../components/Navbar";
import PaperBorder from "../components/PaperBorder";
import { Helmet } from 'react-helmet';

const Shop = () => {
    
    return (
        <div>
            <Helmet>
                <title>SHOP</title>
                <link rel="icon" href="./assets/icon.png" />
            </Helmet>
            <Navbar />
            <PaperBorder indice={2} />
        </div>
    );
}

export default Shop;