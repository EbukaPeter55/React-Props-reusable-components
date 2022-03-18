import logo from './logo.svg';
import './App.css';
import Author from "./Author";
import PrimaryButton from './PrimaryButton';

function App() {
  return (
    <div className="App">
      <div className="author-profile">
      	<Author name="Alvin"  
        imageUrl="https://avatars.githubusercontent.com/u/43749581?v=4" />
        <PrimaryButton
         width="30%"
         height="45px"
         backgroundColor="blue"
         buttonText="Contact me"
         color="white"
         border="none"
         fontSize=".89rem"
         fontWeight="600"
         margin=".8rem" 
        />
      </div>
    </div>
  );
}

export default App;
