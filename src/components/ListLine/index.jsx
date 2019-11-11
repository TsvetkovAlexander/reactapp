import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Table';
import {data} from '../../database';
import EditCard from '../EditCard';
import Modal from '../Modal';
import {
  deleteLine, getLine, editLine,
} from '../../store/action';
import './style.css';

class ListLine extends Component {
  state = {
    isOpenEdit: false,

    currentLine: {},
  };


  handleClickOpenEdit = (id) => {
    const data  = this.props.line;

    return this.setState({ isOpenEdit: true, currentLine: data.find((el) => el.id === id),});
  };

  handleOnCloseEdit = () => this.setState({ isOpenEdit: false });


 handleSubmitEditLine =  values => {
     this.props.EditLine(Object.assign(values, {id:this.state.currentLine.id}) );
     this.setState({ isOpenEdit: false });
  };

  componentDidMount() {
    const { getLine} = this.props;
    getLine(data);
  }

  delLine=(id) => {
    this.props.DeleteLine(id);
  };


  render() {
    const  {line}  = this.props;
    const {
      id, isActive, name, type,
    } = this.state.currentLine;
  const {
    isOpenEdit, currentProducts,
  } = this.state;

    return(
        <div>
          <Card
            data={line}
            delLine={this.delLine}
            edit={this.handleClickOpenEdit}
          />
          <Modal isOpen = {isOpenEdit} handleClose={ this.handleOnCloseEdit} >
             <EditCard
            initialValues={this.state.currentLine}
            handleClose={this.handleOnCloseEdit}
            onSubmit={this.handleSubmitEditLine}
            />
          </Modal></div>
      );
  }
}

function mapStateToProps(state) {
  return {
    line: state.data,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getLine: (line) =>{console.log('line',line);
    return( dispatch(getLine(line)));
  } ,
  DeleteLine: (id) => dispatch(deleteLine(id)),
  EditLine: (line) => dispatch(editLine(line)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListLine);
