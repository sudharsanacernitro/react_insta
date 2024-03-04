import './App.css';
import Button from './button';
import Stories from './stories';
import Post from './post';
function App() {
  return (
    <div className="App">
              <Button />
              <div id="main">
              <Stories />
              <Post /></div>
    </div>
  );
}

export default App;
