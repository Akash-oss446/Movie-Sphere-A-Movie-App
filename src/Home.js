import React, { useContext } from "react";
import Search from './Search';
import { Appcontext } from "./Context";
import { useGlobalContext } from "./Context";
import Movies from "./Movies";
const Home=()=>{
    //const name=useContext(Appcontext)

    return (<div>
      <Search />
      <Movies />
    </div>)
}
export default Home;
