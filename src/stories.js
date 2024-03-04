import './stories.css';
import imgsrc from '/home/sudharsan/projects/my-react-app1/src/icons/profile.png';
import { useState } from 'react';
var g = undefined;

function ProfileDetails({ name }) {
  return (
    <div id='f'>
      {name}
    </div>
  );
}

function App() {
  var names = ['ram', 'sam', 'shiva', 'karthi', 'blacky'];
  var [isOpen, setIsOpen] = useState(false);

  function click(a,event) {
    g = a;
    setIsOpen(!isOpen);
  }

  function renderProfiles() {
    const imgComponents = [];
    for (let i = 0; i < 5; i++) {
      imgComponents.push(
        <div id='single' className={names[i]}  onClick={(event) => click(names[i],event)}>
          <img  src={imgsrc} alt={`Profile ${i}`} id="store"/>
          <p>{names[i]}</p>
        </div>
      );
    }
    return imgComponents;
  }

  return (
    <div id='story'>
      {renderProfiles()}
      {isOpen && 
        <ProfileDetails name={g} />
      }
    </div>
  );
}

export default App;
