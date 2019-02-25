import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { removeColor, editColor } from '../actions/';
import EditColor from './EditColor';
import './styles.css';

class ColorTileActions extends React.PureComponent {

  editColorHandler = () => this.props.editColor(this.props.buttonId);

  removeColorHandler = (buttonId) => () => this.props.removeColor(buttonId);

  render(){
    const { buttonId, isEditing } = this.props;
    return (
      <div className="colorTileChild buttonLayout">
       { isEditing ?
        <EditColor id={buttonId} />
          :
        <Button
          type="primary"
          size="small"
          className="button"
          onClick={this.editColorHandler}
        >
          Edit
        </Button>
        } 
        <Button
          size="small"
          type="danger"
          className="button"
          onClick={this.removeColorHandler(buttonId)}
        >
          Delete
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  buttonId: ownProps.id,
  toEdit: ownProps
});
 
export default connect(mapStateToProps, { removeColor, editColor })(ColorTileActions);