import React from 'react';
import Header from "./components/header/Header";
import TaskCards from "./components/task/TaskCards";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  )
}

export default App;
