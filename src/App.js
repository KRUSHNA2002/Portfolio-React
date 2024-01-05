import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// components
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PageNotFound from './components/PathNotFound';

function App() {
  return (
      <>
         <Router>
           <MyNavbar/>
              <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/project' element={<Project/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/Footer' element={<Footer/>}></Route>
                  <Route path='/resume' element={<Resume/>}></Route>
                  <Route path='*' element={<PageNotFound/>}></Route>
              </Routes>
         </Router>
      </>
  );
}

export default App;
