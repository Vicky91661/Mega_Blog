import { useState,useEffect} from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'


function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch =useDispatch()

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }).finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div>
      <div>
        <Header/>
        <main>
            
        </main>
        <Footer/>
      </div>
    </div>
  ): null
  
}

export default App
