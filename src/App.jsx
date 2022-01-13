import './App.css';
import Calculator from './components/calculator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Rea-Calculator</h1>
      <Calculator></Calculator>
      <footer class="footer">Criado por <a href="https://github.com/GustavoGajdeczka">Gustavo Gajdeczka</a></footer>
    </div>
  );
}

export default App;
