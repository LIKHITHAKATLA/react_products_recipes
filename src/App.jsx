import './App.css'
import {Java} from './components/backend/Java'
import {PHP} from './components/backend/PHP'
import {Python} from './components/backend/Python'
import {Ruby} from './components/backend/Ruby'
import Django from './components/database/Django'
import Firebase from './components/database/Firebase'
import Mongodb from './components/database/Mongodb'
import SQL from './components/database/SQL'
import Bootstrap from './components/frontend/Bootstrap'
import CSS from './components/frontend/CSS'
import HTML from './components/frontend/HTML'
import Javascript from './components/frontend/Javascript'
import Navbar_routing from './components/Navbar_routing/Navbar_routing'
import Listrender from './components/Props/Listrender'
import Propex from './components/Props/Propex'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import data from './components/Products/Pdata'
import Productdetails from './components/Products/Productdetails'
import Receipes from './components/Receipe/Receipes'
import data1 from './components/Receipe/data'
import Classbased from './components/classbased/Classbased'
// console.log(data.products)
function App() {
  const student1 = {
    name:"likhitha",
    id:1
}
// const student = "likhitha"
  return (
    <div className='container'>
      <Navbar_routing></Navbar_routing>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Products/Product/:id' element={<Productdetails/>} />
        <Route path='/products' element={<Products productsdata={data.products} />} />
        <Route path='/receipe' element={<Receipes receipedata={data1.recipes} />} />
    
      </Routes>
      <Classbased></Classbased>

      {/* <Propex  stu1 = {student1}/>  */}
      {/* <Listrender></Listrender> */}
      
{/*      
      <div id='Frontend'>
        <HTML></HTML>
        <CSS></CSS>
        <Javascript></Javascript>
        <Bootstrap></Bootstrap>
      </div>
      <div id="Backend">
        <Python></Python>
        <Java></Java>
        <PHP></PHP>
        <Ruby></Ruby>
      </div>
      <div id='Database'>
        <SQL></SQL>
        <Django></Django>
        <Mongodb></Mongodb>
        <Firebase></Firebase>
      </div> */}
    </div>
    
    
  )
}

export default App
