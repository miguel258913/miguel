import logo from './logo.svg';
import './App.css';
import { Usuario } from './components/Usuario/Usuario';
import { Cart } from './components/Card/Card';
import Couter from './components/Counter/Counter';
import Text from './components/Counter/Text';
import Navbar from './components/Navbar/Navbar';
import { Formulario } from './components/Formulario/Formulario';
import { Tablas } from './components/Tablas/Tablas';

function App() {
 
  return (
     <div>
      <Navbar></Navbar>
    <div className='row'>
      <div className=' col-md-6'>
       <Usuario></Usuario>
      </div>
       <div className=' col-md-6'>
         
     <Cart></Cart>
      </div>
      <div className=' col-md-6'>
            
      <Formulario></Formulario> 
      </div>
      <div className=' col-md-6'>
         
      <Tablas></Tablas>
      </div>

    </div>
     <Couter></Couter>
     <Text></Text>
     

     </div>
  );
}
export default App;