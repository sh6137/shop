import logo from './logo.svg';
import './App.css';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import data from "./data.js";

// import bg from './img/bg.png';
function App() {

    //백단에서 데이터를 받아왔다고 생각
    let [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Shopshop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="main-bg"></div>

            <div className="container">
                <div className="row">
                    {
                        shoes.map(function (string,i){
                            return(
                                <Card shoes={shoes} i={i}></Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

function Card(props){
    return(
        <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
            <p>{props.shoes[props.i].price}</p>
        </div>
    )
}

export default App;
