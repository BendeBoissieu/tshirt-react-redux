import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu } from '../actions';
import { GoCloudUpload, GoPulse, GoPencil } from 'react-icons/go';

class ButtonsCustom extends Component {
  handleClick = (e) => {
    this.props.displayMenu(e.target.value);
  }

  render(){
    return(
      <div>
        <button className="button-custom" value="UPLOAD_IMAGE_MENU" onClick={(e) => {this.handleClick(e)}}>
          <GoCloudUpload style={{margin: '0 5px'}} />
          Upload Image
        </button>
        <button className="button-custom button" value="FIND_DESIGN_MENU" onClick={(e) => {this.handleClick(e)}}>
          <GoPulse style={{margin: '0 5px'}} />
          Find Design
        </button>
        <button className="button-custom" value="ADD_TEXT_MENU" onClick={(e) => {this.handleClick(e)}}>
          <GoPencil style={{margin: '0 5px'}} />
          Add text
        </button>
      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { displayMenu: displayMenu }, dispatch );
};


export default connect(null, mapDispatchToProps) (ButtonsCustom);
