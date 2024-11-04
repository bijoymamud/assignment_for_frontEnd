import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Pages/Home/Footer'

const Main = () => {
  return (
      <div>
   
              <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Main
