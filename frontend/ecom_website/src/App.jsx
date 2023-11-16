import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop'
import Shopcat from './pages/Shopcat'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login_signup from './pages/Login_signup'
import Footer from './components/Footer'
import men_banner from './Assets/banner_mens.png'
import kid_banner from './Assets/banner_kids.png'
import women_banner from './Assets/banner_women.png'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<Shopcat banner={men_banner} category="men"/>} />
      <Route path='/women' element={<Shopcat banner={women_banner} category="women"/>} />
      <Route path='/kid' element={<Shopcat banner={kid_banner} category="kid"/>} />
    <Route path='/Product' element={<Product/>}>
      <Route path=':productId' element={<Product />}/>
      </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login_signup/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
