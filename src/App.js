import logo from './logo.svg';
import './App.css';
import Author from "./Author";
import PrimaryButton from './PrimaryButton';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


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

      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
