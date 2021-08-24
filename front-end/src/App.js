import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

//http://localhost:3030/todos

// {
//   "total": 3,
//   "limit": 10,
//   "skip": 0,
//   "data": [
//       {
//           "id": 1,
//           "text": "Todo 1",
//           "completed": false,
//           "created_at": "2021-08-24T15:20:48.072Z",
//           "updated_at": "2021-08-24T15:20:48.072Z"
//       },
//       {
//           "id": 2,
//           "text": "Todo 2",
//           "completed": false,
//           "created_at": "2021-08-24T15:20:48.072Z",
//           "updated_at": "2021-08-24T15:20:48.072Z"
//       },
//       {
//           "id": 3,
//           "text": "Todo 3",
//           "completed": false,
//           "created_at": "2021-08-24T15:20:48.072Z",
//           "updated_at": "2021-08-24T15:20:48.072Z"
//       }
//   ]
// }


function App() {
  // console.log('ip: ', docker-checkpoint_server_1)
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3030/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data)
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, [])

  const displayList = (isLoading) => {
    if (isLoading) {
      return (
        <div>loading</div>
      )
    } else {
      return (
        <ul>
          {todos.data.map(todo => (<li>{todo.text}</li>))}
        </ul>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo list</h3>
        {displayList(isLoading)}
      </header>
    </div>
  );
}

export default App;
