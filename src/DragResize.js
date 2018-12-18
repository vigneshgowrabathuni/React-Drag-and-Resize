import React, { Component } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";
import { Rnd } from "react-rnd";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Modal,
  Button,
  Label,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Container
} from "reactstrap";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  width: "100%",
  height: "100%"
};

class DragResize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      },
      items: []
    };
  }
  onItemClick = item => {
    let array = this.state.items;
    if(item === 1){
      array.push({ name: item, url: "https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697057-facebook-512.png" });
    }else if(item === 2){
array.push({ name: item, url: "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/youtube-512.png" });
    }else{

array.push({ name: item, url: "https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" });
    }
    
    console.log(array, "array");
    console.log(item, "item");
    this.setState({ items: array });
  };

  onResize = (event, { element, size }) => {
    this.setState({ width: size.width, height: size.height });
  };
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <Container >
        <Row className="pt-4">
          <Col md="9" 
            className="leftPanel"
            style={{
              position: "relative",
              overflow: "auto",
              padding: "0"
            }}
          >
            {this.state.items.map((item, i) => {
              return (
                <Rnd
                  style={style}
                  bounds=".leftPanel"
                  default={{
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                  }}
                >
                  <img style={style} src={item.url} />
                </Rnd>
              );
            })}
          </Col>
          <Col md="3" className="rightPanel">
            <div onClick={() => this.onItemClick(1)}>
              <div className="box item-1">
                <img width="80" src="https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697057-facebook-512.png" />
              </div>
            </div>
            <div onClick={() => this.onItemClick(2)}>
              <div className="box item-2">
                <img width="80" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/youtube-512.png" />
              </div>
            </div>
            <div onClick={() => this.onItemClick(3)}>
              <div className="box item-3">
                <img width="80" src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DragResize;
