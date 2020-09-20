import React, { Component } from 'react';
import { GoX } from 'react-icons/go';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu, addText } from '../actions';
import { CompactPicker } from 'react-color';
import { FaBold,FaItalic,FaUnderline,FaAlignJustify,FaAlignLeft,FaAlignCenter,FaAlignRight } from 'react-icons/fa';

var numbersFontSize = [];
for (var i = 8; i <= 35; i++) {
  numbersFontSize.push(i);
}

class AddText extends Component {

  handleClick = (e) => {
    this.props.displayMenu(e);
  }

  changeText = (e) => {
    var dataId = e.target.getAttribute('data-id')
    if (dataId == "new_text") {
      var text = e.target.value.split(" ").join("\u00A0");
      var size = this.props.textAdded.size
    } else if (dataId == "new_text_size") {
      var size = e.target.value;
      var text = this.props.textAdded.text;
    }
    var color = this.props.textAdded.color;
    var weight = this.props.textAdded.weight;
    var style = this.props.textAdded.style;
    var decoration = this.props.textAdded.decoration;
    var align = this.props.textAdded.align;
    this.props.addText(text, size, color, weight, style, decoration, align);
  }

  changeColor = (color, event) => {
    var text = this.props.textAdded.text;
    var size = this.props.textAdded.size;
    var color = color.hex;
      var weight = this.props.textAdded.weight;
    var style = this.props.textAdded.style;
    var decoration = this.props.textAdded.decoration;
    var align = this.props.textAdded.align;
    this.props.addText(text, size, color, weight, style, decoration, align);

  }

  changeFontStyle = (change) => {
    var text = this.props.textAdded.text;
    var size = this.props.textAdded.size;
    var color = this.props.textAdded.color;
    var weight = this.props.textAdded.weight;
    var style = this.props.textAdded.style;
    var decoration = this.props.textAdded.decoration;
    var align = this.props.textAdded.align;
    switch(change){
      case 'bold':
        if (change == this.props.textAdded.weight) {
          var weight = "normal";
        } else {
          var weight = "bold";
        }
        break;
      case 'italic':
        if (change == this.props.textAdded.style) {
          var style = "normal";
        } else {
          var style = "italic";
        }
        break;
      case 'underline':
        if (change == this.props.textAdded.decoration) {
          var decoration = "none";
        } else {
          var decoration = "underline";
        }
        break;
      case 'justify':
        if (change == this.props.textAdded.align) {
          var align = "left";
        } else {
          var align = "justify";
        }
        break;
      case 'left':
        var align = "left";
        break;
      case 'right':
        if (change == this.props.textAdded.align) {
          var align = "left";
        } else {
          var align = "right";
        }
        break;
      case 'center':
        if (change == this.props.textAdded.align) {
          var align = "left";
        } else {
          var align = "center";
        }
        break;
    }
    this.props.addText(text, size, color, weight, style, decoration, align);
  }

  render(){
    return(
      <div>
        <h3>Add Text
          <span>
            <GoX style= {{float: "right"}} onClick={(e) => {this.handleClick('')}} />
          </span>
        </h3>
        <div className="container-add-text">
          <textarea className="text-input apply-font" value={this.props.textAdded.text} data-id="new_text" style={{width: '100%'}} placeholder='Your text' onChange={this.changeText}></textarea>
          <div className="font-input">
            Font Size
            <select style= {{width: "70px", margin: "0 10px"}} data-id="new_text_size" value={this.props.textAdded.size} onChange={this.changeText} >
              {numbersFontSize.map((number) => <option key={number.toString()} value={number}>{number}</option>)}
            </select>
            <div className="font-input">
              Font Couleur
            <CompactPicker onChange={ this.changeColor } />
            </div>

          <FaBold  className="icon-text-style" style={{background: this.props.textAdded.weight=='bold' ? '#79CFC3' : 'none' }} value="bold" onClick={(e) => {this.changeFontStyle('bold')}} />
          <FaItalic className="icon-text-style" style={{background: this.props.textAdded.style=='italic' ? '#79CFC3' : 'none' }} value="italic" onClick={(e) => {this.changeFontStyle('italic')}} />
          <FaUnderline className="icon-text-style" style={{background: this.props.textAdded.decoration=='underline' ? '#79CFC3' : 'none' }} value="underline" onClick={(e) => {this.changeFontStyle('underline')}} />
          <FaAlignJustify className="icon-text-style" style={{background: this.props.textAdded.align=='justify' ? '#79CFC3' : 'none' }} value="justify" onClick={(e) => {this.changeFontStyle('justify')}} />
          <FaAlignLeft className="icon-text-style" style={{background: this.props.textAdded.align=='left' ? '#79CFC3' : 'none' }} value="left" onClick={(e) => {this.changeFontStyle('left')}} />
          <FaAlignCenter className="icon-text-style" style={{background: this.props.textAdded.align=='center' ? '#79CFC3' : 'none' }} value="center" onClick={(e) => {this.changeFontStyle('center')}} />
          <FaAlignRight className="icon-text-style" style={{background: this.props.textAdded.align=='right' ? '#79CFC3' : 'none' }} value="rigth" onClick={(e) => {this.changeFontStyle('right')}} />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { displayMenu: displayMenu,
      addText: addText
    }, dispatch );
};

function mapStateToProps(state) {
  return {
    textAdded: state.textAdded
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (AddText);
