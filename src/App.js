
import './App.css';
import AddingForm from './AddingForm';
import DataFetching from './DataFetching';
import NavBar from './NavBar';

function App() {
  let Component 
  switch(window.location.pathname){
    case "/home":
    Component = DataFetching
    break
    default:
    case"/addingForm":
    Component =AddingForm
    

  }
  return (

    <div className="App">
      {/* <NavBar/> */}
      <di className="Container">
      <Component/>
      </di>
      
      

    </div>
  );
}

export default App;
