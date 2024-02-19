

import { styles, layout } from './constant'
import { Navbar, Hero } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home';
import Support from './pages/Support';
import Blogs from './pages/Blogs'
import Features from './pages/Features';



function App() {


  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/features" element={<Features />} />
      

      </Routes>
    </BrowserRouter>

   
  

   


    


    
 

    </>
  )
}

export default App
