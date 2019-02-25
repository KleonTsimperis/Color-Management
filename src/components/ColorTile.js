import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import ColorTileActions from '../containers/ColorTileActions';
import ColorDisplay from './ColorDisplay';
import '../containers/styles.css';

class ColorTile extends React.PureComponent {

  render(){
    const { color, id, isEditing, isLoading } = this.props;
    if (isLoading) return <Spin/>
    return (
      <div className="colorTile">
        <ColorDisplay
          color={color}
        />
        <ColorTileActions
          id={id}
          isEditing={isEditing}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.spinnerReducer.isLoading
});

export default connect(mapStateToProps)(ColorTile);
