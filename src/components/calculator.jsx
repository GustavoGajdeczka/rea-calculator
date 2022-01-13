import React from "react";
import { useState } from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Calculator = (props) => {
  let regex =  /[*/\-+]+/
  var [value, setValue] = useState(0)
  function setTecla(param){
    if(value === 0){
      value = ''
    }
    setValue((`${value}${param}`))
  }
  function setOperacao(param){
    if(!param === "=" && regex.test(value)){
      param = null
      console.log("pegou")
    }
    switch (param) {
      case ".":
        regex = /[0-9](..)/
        var val = value.split(" ")
        if(val[2] && !regex.test(val[2])){
          setValue(`${value}.`)
        }
        if(!regex.test(value)){
          setValue(`${value}.`)
        }
        break;
      case "+":
        setValue((`${value} + `))
        break;
      case "-":
        setValue((`${value} - `))
        break;
      case "*":
        setValue((`${value} * `))
        break;
      case "/":
        setValue((`${value} / `))
        break;
      case "=":
        calcula()
        break;
      default:
        break;
    }
  }
  function calcula(){
    
    var val = value.split(" ")
    if(!val[1] ){
      alert("Insira uma operação")
    }else{
      val[0] = parseFloat(val[0])
      val[2] = parseFloat(val[2])
      switch (val[1]) {
        case "+":
          setValue((val[0] + val[2]))
          break;
        case "-":
          setValue((val[0] - val[2]))
          break;
        case "*":
          setValue((val[0] * val[2]))
          break;
        case "/":
          if(val[0] === 0 || val[2] === 0){
            setValue(0)
          }else{
            setValue((val[0] / val[2]))
          }
          break;
        default:
          break;
      }
    }
  }
  function clean(param){
    setValue(0)
  }
  return (
    <>
    <Card className="calcCard">
      <Card.Body>
        <Container>
          <Row>
            <Col className="d-flex flex-row justify-content-end">
              <h1 className="px-3">{value}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <button onClick={() => clean()} className="btn btn-danger ">C</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao("square")} className="btn btn-danger ">√</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao("%")} className="btn btn-danger ">%</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao("/")} className="btn btn-danger ">/</button>
            </Col>
          </Row>

          <Row >
            <Col>
              <button onClick={() => setTecla(7)} className="btn btn-danger ">7</button>
            </Col>
            <Col>
              <button onClick={() => setTecla(8)} className="btn btn-danger ">8</button>
            </Col>
            <Col>
              <button onClick={() => setTecla(9)} className="btn btn-danger ">9</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao("*")} className="btn btn-danger ">X</button>
            </Col>
            
          </Row>

          <Row >
            <Col>
              <button onClick={() => setTecla(4)} className="btn btn-danger ">4</button>
            </Col>
            <Col>
              <button onClick={() => setTecla(5)} className="btn btn-danger ">5</button>
            </Col>
            <Col>
              <button onClick={() => setTecla(6)} className="btn btn-danger ">6</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao("-")} className="btn btn-danger ">-</button>
            </Col>
            
          </Row>

          <Row >
            <Col>
              <button onClick={() => setTecla(1)} className="btn btn-danger ">1</button>
            </Col>
            <Col>
              <button onClick={() => setTecla(2)} className="btn btn-danger ">2</button>
            </Col>
            <Col>
              <button onClick={() => setTecla(3)} className="btn btn-danger ">3</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao("+")} className="btn btn-danger ">+</button>
            </Col>
            
          </Row>

          <Row >
            <Col>
              <button onClick={() => setTecla(0)} className="btn btn-danger ">0</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao(".")} className="btn btn-danger ">.</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao("=")} className="btn btn-danger ">=</button>
            </Col>
            <Col>
              <button onClick={() => setOperacao("+")} className="btn btn-danger ">+</button>
            </Col>
          </Row>

        </Container>
      </Card.Body>
    </Card>
    </>
  )
}

export default Calculator