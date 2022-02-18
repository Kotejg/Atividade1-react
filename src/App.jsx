import './App.css';
// import Pi from './components/primeiro'
// import {Segundo} from './components/Segundo'
// import Cade, {Component1, Component2} from './components/Multi' 
// import {Teste} from './components/Teste' 
import Estilo from './components/estilos/Estilo' 
import MinMax from './components/MinMax' 
import Titulo from './components/Titulo' 
import Botao from './components/Botao'

function App() {  
  return (
    <div className="centro">
      <h4>Primeiro componente</h4>   
    {/* <Pi/>
    <Segundo/> 
    <Teste/>
    <Cade/>
    <Component1/>
    <Component2/>  */}
    <Estilo/>
    <MinMax min="2" max="10 "/> 
    <MinMax min={4} max={15} />
    <Titulo principal="Olá" secundario="tudo bom contigo?"/> 
    <Botao/>
      </div>
   
  );
}

export default App;
