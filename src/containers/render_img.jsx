import React, { Component }  from "react";
import ReactDOM from "react-dom";
import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { setAlias, Frame } from "scenejs";
import "../../assets/stylesheets/styles.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu } from '../actions';

setAlias("tx", ["transform", "translateX"]);
setAlias("ty", ["transform", "translateY"]);
setAlias("tz", ["transform", "translateZ"]);
setAlias("rotate", ["transform", "rotate"]);
setAlias("sx", ["transform", "scaleX"]);
setAlias("sy", ["transform", "scaleY"]);
setAlias("matrix3d", ["transform", "matrix3d"]);


class RenderImg extends Component {

  state = {
    target: null,
    isResizable: false,
    item: null
  }

  items: IObject<Frame> = {};

  render() {

    const selectedTarget = this.state.target;
    const isResizable = this.state.isResizable;
    const item = this.state.item;


    var isImgArt = this.props.selectedImgArt != null ? true  : false
    const src = `.././public/images/art_word/${this.props.selectedImgArt}.svg`;
    const renderImgArt = () => {
      if(isImgArt) {
        return <img src={src} data-target={this.props.selectedImgArt} dataimage={this.props.selectedImgArt} data-type="find_design" alt={this.props.selectedImgArt} width="100px" />
      }
    }

    var isImgUploaded = this.props.imgUploaded != null ? true  : false
    const renderImgUploaded = () => {
      if(isImgUploaded) {
        return <img src={this.props.imgUploaded.url} data-target="imgUploaded" dataimage={this.props.imgUploaded.name} data-type="upload_image" alt={this.props.imgUploaded.name} width="100px" />
      }
    }
    const styleText = {
      fontSize: `${this.props.textAdded.size}px`,
      color: this.props.textAdded.color,
      fontWeight: this.props.textAdded.weight,
      fontStyle: this.props.textAdded.style,
      textDecoration: `${this.props.textAdded.decoration} ${this.props.textAdded.color}`,
      textAlign: this.props.textAdded.align,
      width: 100,
      minHeight: 40
    }

    var isTextAdded = this.props.textAdded != null ? true  : false
    const renderTextAdded = () => {
      if(isTextAdded) {
        return (
          <p style={styleText} data-target="textAdded" data-type="add_text" >{this.props.textAdded.text}</p>
        )
      }
    }


    return (
      <div className="background-tshirt" onMouseDown={this.onClick}
          onTouchStart={this.onClick} >
        <Moveable
          target={selectedTarget}
          container={document.querySelector("background-tshirt")}
          ref={ref(this, "moveable")}
          origin={false}
          keepRatio={true}
          origin={false}
          draggable={true}
          scalable={!isResizable}
          // resizable={isResizable}
          // warpable={true}
          throttleDrag={1}
          throttleRotate={0.2}
          throttleResize={1}
          throttleScale={0}
          rotatable={true}
          onRotate={({ target, beforeDelta }) => {
            item.set(
              "rotate",
              `${parseFloat(item.get("rotate")) + beforeDelta}deg`
            );
            target.style.cssText += item.toCSS();
          }}
          onDrag={({ target, beforeDelta }) => {
            item.set("tx", `${parseFloat(item.get("tx")) + beforeDelta[0]}px`);
            item.set("ty", `${parseFloat(item.get("ty")) + beforeDelta[1]}px`);
            // target!.style.left = `${left}px`;
            // target!.style.top = `${top}px`;
            target.style.cssText += item.toCSS();
          }}
          onScale={({ target, dist }) => {
            item.set("sx", dist[0]);
            item.set("sy", dist[1]);

            item.set(
              "transform",
              "translateX"
            );
            item.set(
              "transform",
              "translateY"
            );
            target.style.cssText += item.toCSS();
          }}
          onResize={false}
          onWarp={({ target, delta, multiply }) => {
            const matrix3d = item.get("matrix3d");

            if (!matrix3d) {
              item.set("matrix3d", delta);
            } else {
              item.set("matrix3d", multiply(item.get("matrix3d"), delta, 4));
            }
            target.style.cssText += item.toCSS();
          }}
        />
        <div className="label" ref={ref(this, "label")} />
        {renderImgArt()}
        {renderImgUploaded()}
        {renderTextAdded()}
      </div>
    );
  }
  onClick = (e: any) => {
    const target = e.target;
    //console.log(this.props.menuActive);
    var datatype = target.getAttribute("data-type");
    console.log(datatype);
    this.props.displayMenu(datatype);
    const id = target.getAttribute("data-target");
    e.preventDefault();
    if (!id) {
      return;
    }
    const items = this.items;
    if (!items[id]) {
      items[id] = new Frame({
        tz: "5px",
        tx: "0px",
        ty: "0px",
        rotate: "0deg",
        sx: 1,
        sy: 1
      });
    }

    if (!this.moveable.isMoveableElement(e.target)) {
      if (this.state.target === e.target) {
        this.moveable.updateRect();
      } else {
        const nativeEvent = e.nativeEvent;
        this.setState(
          {
            target: e.target,
            item: items[id]
          },
          () => {
            this.moveable.dragStart(nativeEvent);
          }
        );
      }
    }
  }


}


function mapStateToProps(state) {
  return {
    selectedImgArt: state.imgArt,
    imgUploaded: state.imgUploaded,
    textAdded: state.textAdded,
    menuActive: state.menus
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { displayMenu: displayMenu }, dispatch );
};

export default connect(mapStateToProps,mapDispatchToProps) (RenderImg);
