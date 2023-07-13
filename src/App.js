import logo from './logo.svg';
import './App.css';
import {Button, Container, Nav, Navbar, Row, Col, Card} from 'react-bootstrap';
import {useState} from "react";
import data from "./data.js";
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from "./routes/Detail";

// import bg from './img/bg.png';
function App() {

    //백단에서 데이터를 받아왔다고 생각
    let [shoes] = useState(data);
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Shopshop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {
                            navigate('/')
                        }}>Home</Nav.Link>
                        <Nav.Link onClick={() => {
                            navigate('/detail')
                        }}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={
                    <>
                        <div className="main-bg"></div>
                        <div className="container">
                            <div className="row">
                                {
                                    shoes.map(function (string, i) {
                                        return (
                                            <Cards shoes={shoes} i={i}></Cards>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                }/>
                <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>

                <Route path="*" element={<div>없는 페이지</div>}/>
                <Route path="/about" element={<About/>}>
                    <Route path="member" element={<div>맴버</div>}/>
                    <Route path="location" element={<div>위치 페이지</div>}/>
                </Route>

                <Route path="/event" element={<Event/>}>
                    <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}/>
                    <Route path="two" element={<p>생일기념 쿠폰 받기</p>}/>
                </Route>

            </Routes>
        </div>
    );
}

function Event() {
    return (
        <div>
            <h2>오늘의 이벤트</h2>
            <Outlet></Outlet>
        </div>
    )
}

function About() {
    return (
        <div>
            <h4>회사정보</h4>
            <Outlet></Outlet>
        </div>
    )
}

function Cards(props) {
    let i = props.i + 1;
    return (
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes' + i + '.jpg'} width="80%"/>
            {/*<img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="80%" />*/}
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
            <p>{props.shoes[props.i].price}</p>
        </div>
    )
}


export default App;
