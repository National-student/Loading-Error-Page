import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components";
import { About, Home, Todos, User } from "./Pages";

function App() {
  return (
    <div>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
