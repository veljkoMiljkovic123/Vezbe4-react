import { useState } from "react";
import "./App.css";
import ToggleMode from "./components/ToggleMode";
import InputComponent from "./components/InputComponent";
import OutputComponent from "./components/OutputComponent";
import { all } from "axios";
import ProductsComponent from "./components/ProductsComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [allTodo,setAllTodo] = useState([])
  console.log(allTodo);
  

  return <div className={darkMode ? "dark" : "light"}>
    <h1 className="text-center text-2xl mx-5 dark:text-red-100 bg-blue-200 dark:bg-orange-400">TODO APP</h1>
    <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode}/>

    <div className="flex gap-9 justify-start items-start">
      <div className="todo w-1/2">
      <h1 className="text-center text-2xl mx-5 dark:text-red-100  bg-blue-200 dark:bg-orange-400">TODO APP</h1>

      <InputComponent darkMode={darkMode} setDarkMode={setDarkMode} allTodo={allTodo} setAllTodo={setAllTodo}/>
      <div className="flex flex-col">
      <OutputComponent allTodo={allTodo} setAllTodo={setAllTodo}/>
      </div>
      </div>
      <div className="products w-1/2">
      <h1 className="text-center text-2xl mx-5 dark:text-red-100  bg-blue-200 dark:bg-orange-400">PRODUCTS</h1>
      <ProductsComponent />
      </div>
    </div>
  </div>;
}

export default App;
