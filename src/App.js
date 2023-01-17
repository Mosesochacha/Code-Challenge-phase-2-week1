
import './App.css';
import AddingForm from './AddingForm';
import DataFetching from './DataFetching';


function App() {
  console.log(window.location);
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
      <div className="Container">
      <Component/>
      </div>
      
      

    </div>
  );
}

export default App;
