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
        <ColorList />
        <br />
        <div className={classesMenus} style={{display: this.props.menu === "upload_image" ? 'block' : 'none' }}>
          <UploadImage />
        </div>
        <div className={classesMenus} style={{display: this.props.menu === "find_design" ? 'block' : 'none' }}>
          <FindDesign />
        </div>
        <div className={classesMenus} style={{display: this.props.menu === "add_text" ? 'block' : 'none' }}>
          <AddText />
        </div>
        <ButtonsCustom />
      </div>);
  }
}


//The reduxState can go directly to the react props then we can have access to this.props.colors
function mapStateToProps(state) {
  return {
    colors: state.colors,
    menu: state.menus
  };
}

export default connect(mapStateToProps) (MenusCustom);
