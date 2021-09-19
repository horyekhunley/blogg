import logo from './logo.svg';
import './App.css';
import { Card, CardTitle, Container, Col, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import AllBlogs from './components/AllBlogs'
import UpdateBlog from './components/UpdateBlog'
import AddBlog from './components/AddBlog'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Router>
          <CardTitle className="display-2">
            Bloggr
          </CardTitle>
          <Container>
            <Row>
              <Col>
                <Menu />
              </Col>
            </Row>
            <Row>
            <Col>
              <Route path="/" component={AllBlogs} exact />
              <Route path="/add" component={AddBlog} exact />
              <Route path="/update" component={UpdateBlog} exact />
            </Col>
            </Row>
          </Container>
        </Router>

      </Card>
    </div>
  );
}

export default App;
