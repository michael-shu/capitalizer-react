import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputField from './components/InputField';


function App() {

  return (
    <Container fluid = "lg" id = "bin">
      <Row>
        <h1>Capitalizer</h1>
        <InputField id = "input"></InputField>
      </Row>
    </Container>
  );
}

export default App;
