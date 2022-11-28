 // Import des composants
 import { Header } from './Composants/Header/Header';
 import { Banniere } from './Composants/Banniere/Banniere';
 import { Description } from './Composants/Description/Description';
  import { Competence } from './Composants/Competence/Competence';

 // Import du CSS
 import './App.css';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Banniere />
      <Description />
      <Competence />
    </div>
  );
}

export default App;
