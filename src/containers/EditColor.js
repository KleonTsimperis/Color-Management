import React from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import { editColor, replaceColor } from '../actions/';
import './styles.css';

const Search = Input.Search;

class EditColor extends React.Component {

  editColorHandler = () => this.props.editColor(this.props.id);

  render(){
    const { id, replaceColor } = this.props;
    return (
      <div className="buttonLayout">
        <Button
          type="primary"
          size="small"
          className="button"
          onClick={this.editColorHandler}
          >
          Cancel
        </Button>
        <Search
          placeholder="HEX"
          onSearch={value => replaceColor(id, value)}
          enterButton
          size="small"
        />
      </div>
    );
  }
}

export default connect(null, { editColor, replaceColor })(EditColor);