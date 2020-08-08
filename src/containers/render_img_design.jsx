import React, { Component }  from "react";
import ReactDOM from "react-dom";
import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { Frame } from "scenejs";
import "../../assets/stylesheets/styles.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu } from '../actions';

class RenderImgDesign extends Component {
  frame = new Frame({
    width: "200px",
    height: "250px",
    left: "0px",
    top: "0px",
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
  });
  state = {
    target: null
  };
  render() {
    var isImgArt = this.props.selectedImgArt != null ? true  : false
    const src = `.././public/images/art_word/${this.props.selectedImgArt}.svg`;
    const renderImgArt = () => {
      if(isImgArt) {
        return <img src={src} dataimage={this.props.selectedImgArt} alt={this.props.selectedImgArt} width="100px" />
      }
    }
    const { target } = this.state;
    return (
      <div className="background-tshirt">
        <Moveable
          ref={ref(this, "moveable")}
          target={target}
          pinchThreshold={20}
          container={document.body}
          draggable={true}
          scalable={true}
          rotatable={true}
          pinchable={true}
          origin={false}
          throttleDrag={1}
          throttleRotate={0.2}
          throttleResize={1}
          throttleScale={0.01}
          onDrag={this.onDrag}
          onResize={this.onResize}
          onScale={this.onScale}
          onRotate={this.onRotate}
          onPinch={this.onPinch}
          onDragEnd={this.onEnd}
          onScaleEnd={this.onEnd}
          onResizeEnd={this.onEnd}
          onWarpEnd={this.onEnd}
          onRotateEnd={this.onEnd}
          onPinchEnd={this.onEnd}
        />
        <div className="moveable">
          {renderImgArt()}
        </div>
        <div className="label" ref={ref(this, "label")} />
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      target: document.querySelector(".moveable")
    });
    window.addEventListener("resize", this.onWindowReisze);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowReisze);
  }
  onWindowReisze = () => {
    this.moveable.updateRect();
  };

  setTransform(target) {
    target.style.cssText = this.frame.toCSS();
  }
  setLabel(clientX, clientY, text) {
    this.label.style.cssText = `
display: block; transform: translate(${clientX}px, ${clientY -
      10}px) translate(-100%, -100%) translateZ(-100px);`;
    this.label.innerHTML = text;
  }
  onPinch = ({ clientX, clientY }) => {
    setTimeout(() => {
      this.setLabel(
        clientX,
        clientY,
        `X: ${this.frame.get("left")}
  <br/>Y: ${this.frame.get("top")}
  <br/>W: ${this.frame.get("width")}
  <br/>H: ${this.frame.get("height")}
  <br/>S: ${this.frame.get("transform", "scaleX").toFixed(2)}, ${this.frame
          .get("transform", "scaleY")
          .toFixed(2)}
  <br/>R: ${parseFloat(this.frame.get("transform", "rotate")).toFixed(1)}deg
  `
      );
    });
  };
  onDrag = ({ target, clientX, clientY, top, left, isPinch }) => {
    this.frame.set("left", `${left}px`);
    this.frame.set("top", `${top}px`);
    this.setTransform(target);
    if (!isPinch) {
      this.setLabel(clientX, clientY, `X: ${left}px<br/>Y: ${top}px`);
    }
  };

  onRotate = ({ target, clientX, clientY, beforeDelta, isPinch }) => {
    const deg = parseFloat(this.frame.get("transform", "rotate")) + beforeDelta;

    this.frame.set("transform", "rotate", `${deg}deg`);
    this.setTransform(target);
    if (!isPinch) {
      this.setLabel(clientX, clientY, `R: ${deg.toFixed(1)}`);
    }
  };
  onResize = ({ target, clientX, clientY, width, height, isPinch }) => {
    this.frame.set("width", `${width}px`);
    this.frame.set("height", `${height}px`);
    this.setTransform(target);
    if (!isPinch) {
      this.setLabel(clientX, clientY, `W: ${width}px<br/>H: ${height}px`);
    }
  };
  onEnd = () => {
    this.label.style.display = "none";
  };
}

function mapStateToProps(state) {
  return {
    selectedImgArt: state.imgArt
  };
}

export default connect(mapStateToProps) (RenderImgDesign);
