
import './App.css';
import Process from './components/Process';
import './components/Footer';
import Footer from './components/Footer';
import './components/Footer.css';
import RegistrationForm from './components/RegistrationForm.jsx';
function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
      <Process/> 
      <RegistrationForm/>
      <Footer />
      
    </div>
       {/* Hello World */}
      
    </div>
    
  
  );
}

export default App;
