import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Company from './components/pages/Company';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>

      <Navbar></Navbar>

      <Container customClass="min-height">

        <Routes>

          <Route 
            exact
            path="/" 
            element={
              <Home></Home>
            }> 

          </Route>

          <Route 
            exact
            path="/newproject" 
            element={
              <NewProject></NewProject>
            }> 

          </Route>

          <Route 
            exact
            path="/company" 
            element={
              <Company></Company>
            }> 

          </Route>

          <Route 
            exact
            path="/contact" 
            element={
              <Contact></Contact>
            }>

          </Route>

          <Route 
            exact
            path="/projects" 
            element={
              <Projects></Projects>
            }> 

          </Route>

        </Routes>

      </Container>

      <Footer></Footer>

    </Router>
  );
}

export default App;
