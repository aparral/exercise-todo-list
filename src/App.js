import React, { useState } from 'react';
import './App.css';


function App() {
  const [state, setState] = useState([{ task: "Tarea inicio" }]);
  const [task, setTask] = useState("");

  // const enter = (e) => {
  //   var x = e.which || e.keyCode;
  //   console.log(x);
  //   if (x === 13) { setState([...state, e.target.value]) }
  // }
  // console.log(state);

  function deleteItem(index) {
    const filterTask = state.filter((item) => {
      return item !== state[index]
    })
    setState(filterTask);
    console.log("filtertask", filterTask);
  }

  // funcion que guarda el dato en el arreglo

  function handlerSubmit(e) {
    e.preventDefault()
    setState([
      ...state,
      { task: task }
    ])
  }
  //console.log(task);
  console.log(state);

  return (
    <div className="container center">
      <h1>TO DO LIST</h1>

      <form onSubmit={e => handlerSubmit(e)}>
        <input
          placeholder="Nueva tarea"
          type="text"
          onChange={e => setTask(e.target.value)} />
      </form>


      <ul  style={{listStyle:"none"}}>
        {state.map((item, index) =>
          <li>{item.task}
            <a style={{marginLeft:"20px", fontWeight:"bold"}} onClick={() => deleteItem(index)}>  
              X
            </a>
          </li>)
        }
      </ul>
    </div >
  );
}



export default App;
