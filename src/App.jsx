import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../src/components/Home/Home'
import Find from '../src/components/Find/Find'

function App() {

  return (
    <>
      {/* <Header />
      <Home /> */}
      <Router >
        <Routes>
          <Route path='/' element={<><Layout/><Home/></>}/>  
          <Route path='/find' element={<><Layout/><Find/></>}/>  
        </Routes>
      </Router>
    </>
  )
}

export default App;
