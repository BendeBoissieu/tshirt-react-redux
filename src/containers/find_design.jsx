import React, { Component } from 'react';
import { GoX } from 'react-icons/go';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu} from '../actions';
import ImgDesign from './img_design';


const image_designs = ["garden_trolley", "happy_father", "black_white_rainbow", "guitar_player"];

class FindDesign extends Component {
  closeMenu = (e) => {
    this.props.displayMenu(e);
  }


  renderList = () => {
    return image_designs.map(imgArt =>
        <ImgDesign name={imgArt} key={imgArt}/>
    )
  }

  render(){
    return(
      <div>
        <h3>Find a design
          <span>
            <GoX style= {{float: "right"}} onClick={(e) => {this.closeMenu('')}} />
          </span>
        </h3>
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { displayMenu: displayMenu }, dispatch );
};


export default connect(null, mapDispatchToProps) (FindDesign);
