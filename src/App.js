import logo from './logo.svg';
import './App.css';
import { Usuario } from './components/Usuario/Usuario';
import { Cart } from './components/Card/Card';
import Couter from './components/Counter/Counter';
import Text from './components/Counter/Text';
import Navbar from './components/Navbar/Navbar';
import { Formulario } from './components/Formulario/Formulario';

function App() {
 
  return (
     <div>
      <Navbar></Navbar>
    <div className='row'>
      <div className=' col-md-6'>
       <Usuario></Usuario>
      </div>
    </div>  
     <Cart></Cart>
     <Formulario></Formulario> 
     <Couter></Couter>
     <Text></Text>
     

     </div>
  );
}
export default App;