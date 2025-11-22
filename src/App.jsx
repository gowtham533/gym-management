import './App.css'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Edit from './components/Edit';
import Home from './pages/Home'
import Form from './pages/Form'
import List  from './pages/List';
import View from './pages/View';
import Pnf from './pages/Pnf';





function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/home/:id/view' element={<View/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
