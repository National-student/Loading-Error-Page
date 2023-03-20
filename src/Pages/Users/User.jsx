import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../Components";
import './User.css'

export const User = () => {
  const [user, setUser] = React.useState({
    isLoading: true,
    isError: false,
    odam: [],
  });

  React.useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        setUser({
          ...user,
          odam: data,
          isLoading: false,
        })
      )
      .catch((err) =>
        setUser({
          ...user,
          isError: err,
          isLoading: false,
        })
      );
  }, []);

  return <div>

 <h1>Users</h1>

    {
      user.isLoading && <Loading />
    }

    {
      user.isError && <strong>Error...</strong>
    }

    {
      user.odam.length > 0 && <ul>
        {
          user.odam.map(item => (
            <Link className="user" to={`/users/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          )) 
        }
      </ul>
    }
  </div>;
};
