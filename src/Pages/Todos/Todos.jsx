import React from "react";
import "./Todos.css";
import { Loading } from "../../Components";

export const Todos = () => {
  const [todos, setTodos] = React.useState({
    isLoading: true,
    isError: false,
    data: [],
  });

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) =>
        setTodos({
          data: data,
          isLoading: false,
          isError: false,
        })
      )
      .catch((err) =>
        setTodos({
          isError: err,
          isLoading: false,
        })
      );
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      {todos.isLoading && <Loading />}

      {todos.isError && <strong>Error...</strong>}

      {
        todos.data.length > 0 && <ul>
          {
            todos.data.map(todo => (
              <li key={todo.id}>
                {todo.title}
              </li>
            ))
          }
        </ul>
      }
    </div>
  );
};
