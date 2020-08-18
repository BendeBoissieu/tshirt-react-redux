import React, { Component } from 'react';
import { GoX } from 'react-icons/go';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu, loadImage } from '../actions';

class UploadImage extends Component {
  handleClick = (e) => {
    this.props.displayMenu(e);
  }

  _handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onload = () => {
      this.props.loadImage(reader.result, file.name);
    }
    reader.readAsDataURL(file)


  }

  render(){
    var isImgUploaded = this.props.imgUploaded != null ? true  : false
    const renderImgUploaded = () => {
      if(isImgUploaded) {
        return <img src={this.props.imgUploaded.url} dataimage={this.props.imgUploaded.name} alt={this.props.imgUploaded.name} width="100px" />
      }
    }
    return(
      <div>
        <h3>Upload Image
          <span>
            <GoX style= {{float: "right"}} onClick={(e) => {this.handleClick('')}} />
          </span>
        </h3>
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput"
              type="file"
              onChange={(e)=>this._handleImageChange(e)} />
            {renderImgUploaded()}
            <button type="button" onClick={this.submit} > Upload </button>
          </form>

        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { displayMenu: displayMenu,
      loadImage: loadImage
    }, dispatch );
};

function mapStateToProps(state) {
  return {
    imgUploaded: state.imgUploaded
  };
}


export default connect(mapStateToProps, mapDispatchToProps) (UploadImage);
