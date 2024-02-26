import logo from './logo.svg';
import List from './components/List';
import Card from './components/Card';
import ToDoList from './components/ToDoList';
import './App.css';
import Button from './components/Button';
import Students from './components/Students';
import UserGreeting from './components/UserGreeting';
import MyComponente from './components/MyComponente';
import Counter from './components/Counter';
import ColorPicker from './components/ColorPicker';
function App() {
  return (
    <div className="App">
      {/* <Card></Card>
      <Students name="goku" age={30} enabled={true}></Students>
      <UserGreeting isLoggedIn={true} username="viktor"></UserGreeting>
      <UserGreeting isLoggedIn={false} username="viktor"></UserGreeting>
      <Button></Button>
      <MyComponente></MyComponente>
      <Counter></Counter>
      <ColorPicker></ColorPicker> */}
      <ToDoList></ToDoList>
      {/* <List></List> */}
    </div>
  );
}

export default App;
