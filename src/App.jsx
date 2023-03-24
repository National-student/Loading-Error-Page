import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components";
import { About, Home, Todos, User, Error, Posts, Comments   } from "./Pages";

function App() {
  return (
    <div>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:userId" element={<Posts />} />
        <Route path="/users/:userId/:postId/" element={<Comments />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}


export default App;
