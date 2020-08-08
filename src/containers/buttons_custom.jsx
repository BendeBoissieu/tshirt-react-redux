import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu } from '../actions';
import { GoCloudUpload, GoPulse, GoPencil } from 'react-icons/go';

class ButtonsCustom extends Component {
  handleClick = (e) => {
    this.props.displayMenu(e);
  }

  render(){
    return(
      <div>
        <button className="button-custom" onClick={(e) => {this.handleClick('upload_image')}}>
          <GoCloudUpload style={{margin: '0 5px'}} />
          Upload Image
        </button>
        <button className="button-custom button" onClick={(e) => {this.handleClick('find_design')}}>
          <GoPulse style={{margin: '0 5px'}} />
          Find Design
        </button>
        <button className="button-custom" onClick={(e) => {this.handleClick('add_text')}}>
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
