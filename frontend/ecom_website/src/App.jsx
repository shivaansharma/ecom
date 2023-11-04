import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop'
import Shopcat from './pages/Shopcat'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login_signup from './pages/Login_signup'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcat/>} category="mens"/>
      <Route path='/women' element={<Shopcat/>}  category="women"/>
      <Route path='/kids' element={<Shopcat/>}  category="kids"/>
    <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login_signup/>}/>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
