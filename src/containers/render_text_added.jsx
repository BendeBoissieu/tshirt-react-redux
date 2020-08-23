import React, { Component }  from "react";
import ReactDOM from "react-dom";
import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { Frame } from "scenejs";
import "../../assets/stylesheets/styles.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu } from '../actions';

class RenderImgUploaded extends Component {
  frame = new Frame({
    width: "100px",
    height: "100px",
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
    const styleText = {
      fontSize: `${this.props.textAdded.size}px`,
      color: this.props.textAdded.color,
      fontWeight: this.props.textAdded.weight,
      fontStyle: this.props.textAdded.style,
      textDecoration: `${this.props.textAdded.decoration} ${this.props.textAdded.color}`,
      textAlign: this.props.textAdded.align

    }

    var isTextAdded = this.props.textAdded != null ? true  : false
    const renderTextAdded = () => {
      if(isTextAdded) {
        return (<p style={styleText}>{this.props.textAdded.text}</p>)
      }
    }

    const { target } = this.state;
    return (
      <div className="background-tshirt">
        <Moveable
          ref={ref(this, "moveable")}
          target={target}
          pinchThreshold={20}
          container={document.querySelector("background-tshirt")}
          draggable={true}
          scalable={false}
          rotatable={true}
          origin={false}
          dragArea={true}
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
        <div className="label" ref={ref(this, "label")} />
        <div className="moveable add_text">
          {renderTextAdded()}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      target: document.querySelector(".moveable.add_text")
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
  onScale = ({ target, delta, clientX, clientY, isPinch }) => {
    const scaleX = this.frame.get("transform", "scaleX") * delta[0];
    const scaleY = this.frame.get("transform", "scaleY") * delta[1];
    this.frame.set("transform", "scaleX", scaleX);
    this.frame.set("transform", "scaleY", scaleY);
    this.setTransform(target);
    if (!isPinch) {
      this.setLabel(
        clientX,
        clientY,
        `S: ${scaleX.toFixed(2)}, ${scaleY.toFixed(2)}`
      );
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
    textAdded: state.textAdded
  };
}

export default connect(mapStateToProps) (RenderImgUploaded);
