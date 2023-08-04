import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/pages/layout/Container'
import Navbar from './components/pages/layout/Navbar'
import Footer from './components/pages/layout/Footer'

function App() {
  return (
    <Router>
     <Navbar />
      <Container customClass="min-height">
      <Routes>
          <Route path= "/" element={<Home/>}/> 
          <Route path= "/projects" element={<Projects/>}/> 
          <Route path= "/Company" element={<Company/>}/> 
          <Route path= "/Contact" element={<Contact/>}/> 
          <Route path= "/NewProject" element={<NewProject/>}/>
          <Route path= "/Project/:id" element={<Project/>}/>
          </Routes>
      </Container>
      
      <Footer />
    </Router>
  )
}
export default App
