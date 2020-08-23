import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RenderImgDesign from '../containers/render_img_design';
import RenderImgUpload from '../containers/render_img_upload';
import RenderTextAdded from '../containers/render_text_added';
import { FaTrash } from 'react-icons/fa';
import { removeElement } from '../actions';

class TshirtPreview extends Component {
  removeElement = (e) => {
    this.props.removeElement(e);
  }
  render(){
    var url_tshirt = '../public/images/shirt2.png';
    const tshirt_card_style = {
      backgroundImage: `url(${url_tshirt})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '300px',
      width: '252px',
      margin: 'auto',
      backgroundColor: `${this.props.selectedColor}`
    }
    var isImgUploaded = this.props.imgUploaded != null ? true  : false
    var isImgArt = this.props.selectedImgArt != null ? true  : false
    var isTextAdded = this.props.textAdded.text != null ? true  : false
    const renderImgUploaded = () => {
      if(isImgUploaded) {
        return <RenderImgUpload />
      }
    }
    const renderImgArt = () => {
      if(isImgArt) {
        return <RenderImgDesign />
      }
    }
    const renderTextAdded = () => {
      if(isTextAdded) {
        return <RenderTextAdded />
      }
    }
    return (
      <div className="tshirt_card" style={tshirt_card_style}>
        {renderImgUploaded()}
        {renderImgArt()}
        {renderTextAdded()}
        <div className="bottom-menu-image">
          <FaTrash className="icon-trash" onClick={(e) => {this.removeElement(`${this.props.menuActive}`)}}/>
        </div>
      </div>
    );
  }
};

//The reduxState can go directly to the react props then we can have access to this.props.colors
function mapStateToProps(state) {
  return {
    selectedColor: state.selectedColor,
    selectedImgArt: state.imgArt,
    imgUploaded: state.imgUploaded,
    textAdded: state.textAdded,
    menuActive: state.menus
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { removeElement: removeElement }, dispatch );
};


export default connect(mapStateToProps, mapDispatchToProps) (TshirtPreview);
