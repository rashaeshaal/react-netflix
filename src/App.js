import React from "react";
import NavBar from "./components/Navbar/NavBar";
import { action,originals, comedy ,horror ,romance , documentaries} from "./urls";
import './App.css'
import Banner from "./components/Navbar/Banner/Banner";
import RowPost from "./components/Navbar/RowPost/RowPost";



function App() {
  return (
   <>
   <NavBar/>
   <Banner />
   <RowPost url={originals} title=" Netfix Orginal" />
   <RowPost url={action} title=" Action " isSmall />
   <RowPost url={comedy} title='Comedy Movies' isSmall/>
   <RowPost url={horror} title='Horror Movies' isSmall/>
   <RowPost url={romance} title='Romantic Movies' isSmall/>
   <RowPost url={ documentaries } title='Documentaries' isSmall/>
   </>
  );
}

export default App;