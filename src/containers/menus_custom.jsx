
import React, { Component } from 'react';
import ColorList from '../containers/color_list.jsx';
import FindDesign from '../containers/find_design.jsx';
import UploadImage from '../containers/upload_image.jsx';
import AddText from '../containers/add_text.jsx';
import ButtonsCustom from '../containers/buttons_custom.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MenusCustom extends Component {
  render(){
    let classesMenus = "rectangle-customize";
    return(
      <div className="Custom">
        <p>TEST {this.props.selectedMenu}</p>
        <ColorList />
        <br />
        <div className={classesMenus} style={{display: this.props.selectedMenu === "UPLOAD_IMAGE_MENU" ? 'block' : 'none' }}>
          <UploadImage />
        </div>
        <div className={classesMenus} style={{display: this.props.selectedMenu === "FIND_DESIGN_MENU" ? 'block' : 'none' }}>
          <FindDesign />
        </div>
        <div className={classesMenus} style={{display: this.props.selectedMenu === "ADD_TEXT_MENU" ? 'block' : 'none' }}>
          <AddText />
        </div>
        <ButtonsCustom />
      </div>);
  }
}


//The reduxState can go directly to the react props then we can have access to this.props.colors
function mapStateToProps(store) {
  return {
    selectedMenu: store.selectedMenuReducer
  };
}

export default connect(mapStateToProps, undefined) (MenusCustom);
