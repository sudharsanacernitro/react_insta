import './post.css';
import imgsrc from '/home/sudharsan/projects/my-react-app1/src/icons/profile.png';
import post from '/home/sudharsan/projects/my-react-app1/src/icons/school.jpg';

function App()
{


    return(<div id='post'>
        <div>
            <div id="name">
        <img src={imgsrc} id="dp"></img>
        <h3>Ram</h3>
        </div>
        <div id="pic_vid"><img src={post} id="img"></img></div>
        </div>
    </div>);
}
export default App;