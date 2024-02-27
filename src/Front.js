import react from 'react';

import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
const Front=()=>{
return (
<>
<section className='front-section'>
<h1>MovieSphere</h1>
<div className='.backcolor'>
<div className='h3'>Explore the magic of movies with MovieSphere!</div><h3>Discover trending films and personalized recommendations, all in a single click.</h3>
<NavLink to="/Home" className="back-btn1">
 Welcome
</NavLink>
</div>
</section>
</>
);
}
export default Front;