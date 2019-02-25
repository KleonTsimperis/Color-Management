import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import ColorTile from './ColorTile';
import Snackbar from './Snackbar';

class Main extends React.Component {

  render(){
    return (
    <div>
      {this.props.colorList.map(color => (
        <ColorTile
          key={uuid()}
          color={color.bare}
          id={color.id}
          isEditing={color.isEditing}
        />
      ))}
      <Snackbar open={this.props.hasError} />
    </div>
    );
  }
}




const mapStateToProps = state => ({
  colorList: state.colorListReducer.colorList,
  hasError: state.errorReducer.hasError
});

export default connect(mapStateToProps)(Main);