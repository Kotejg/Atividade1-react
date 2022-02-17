import './App.css';
import Pi from './components/primeiro'
import {Segundo} from './components/Segundo'
import Cade, {Component1, Component2} from './components/Multi' 
import {Teste} from './components/Teste'

function App() {  
  return (
    <div className="centro">
     
      <h4>Primeiro componente</h4>   
    <Pi/>
    <Segundo/> 
    <Teste/>
    <Cade/>
    <Component1/>
    <Component2/> 
    
      </div>
    
  );
}

export default App;
