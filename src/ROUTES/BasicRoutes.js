import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../PAGES/Home/Home'
import NavBar from '../COMMON/Navbar'
import Bollywood from '../PAGES/Bollywood/Bollywood'
import BollywoodDetails from '../PAGES/Bollywood/BollywoodDetails'
import Technology from '../PAGES/Technology/Technology'
import TechnologyDetails from '../PAGES/Technology/TechnologyDetails'
import Hollywood from '../PAGES/Hollywood/Hollywood'
import HollywoodDetails from '../PAGES/Hollywood/HollywoodDetails'
import Fitness from '../PAGES/Fitness/Fitness'
import FitnessDetails from '../PAGES/Fitness/FitnessDetails'
import Food from '../PAGES/Food/Food'
import FoodDetails from '../PAGES/Food/FoodDetails'
import PageNotFound from '../PAGES/PageNotFound/PageNotFound'

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/:Id" element={<Home />} />

                <Route path="/bollywood" element={<Bollywood Title="Bollywood" />} />
                <Route path="/bollywood/:Id" element={<BollywoodDetails />} />

                <Route path="/technology" element={<Technology Title="Technology" />} />
                <Route path="/technology/:Id" element={<TechnologyDetails />} />

                <Route path="/hollywood" element={<Hollywood Title="Hollywood" />} />
                <Route path="/hollywood/:Id" element={<HollywoodDetails />} />

                <Route path="/fitness" element={<Fitness Title="Fitness" />} />
                <Route path="/fitness/:Id" element={<FitnessDetails />} />

                <Route path="/food" element={<Food Title="Food" />} />
                <Route path="/food/:Id" element={<FoodDetails />} />

                <Route path="*" element={<PageNotFound />} /> 
            </Routes>
        </BrowserRouter>
    )
}
export default RouterComponent;