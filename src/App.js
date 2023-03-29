import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
   <header>
    <MyNav />
    <Welcome />
   </header>
   <main>
    <Books />
   </main>
    </div>
  );
}

export default App;
