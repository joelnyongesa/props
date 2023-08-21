import './App.css';
import Fruits from './Fruits';

function App() {
  let title = "My Fruits App"

  let fruits = ["Mango", "Apple", "Banana", "Melons"]

  function addOne(){
    console.log("This is the add one function. It adds 1+1 equals 1")
  }

  function addTwo(num){
    console.log(num+2)
  }

  function logFruit(fruit){
    console.log(fruit)
  }

  function addFruit(fruit){
    let newFruits = [
      ...fruits,
      fruit
    ]
  }


  return (
    <div className="App">
      <Fruits title={title} fruits={fruits} addFunction={addOne} addTwo={addTwo} logFruit={logFruit}/>
    </div>
  );
}

export default App;
