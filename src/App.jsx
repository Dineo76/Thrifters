import './App.css'
import { Dashboard } from './components/Dashboard.jsx';
import Products from "./components/Products.jsx";
import Footer from './components/footer.jsx';
import { Navigate } from 'react-router-dom';

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) return <Navigate to="/" replace />
  return (
    <>
      <Dashboard />
      <Products />
      <Footer />
    </>
  )
}

function App() {
  

  return (
    <>
     <Dashboard></Dashboard>
      <Products></Products> 
   <Footer></Footer>

     
      
    </>
  )
}

export default App
