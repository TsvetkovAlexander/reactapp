import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Table';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {data} from '../../database';
import EditCard from '../EditCard';
import Modal from '../Modal';
import {
  deleteLine, getLine, editLine,
} from '../../store/action';


import './style.css';
import Dialog from '@material-ui/core/Dialog';



class ListLine extends Component {
  state = {
    isOpenEdit: false,

    currentLine: {},
    tmpLine:{}
  };


  handleClickOpenEdit = (id) => {
    const data  = this.props.line;

    console.log('id234', id);
    console.log('currentLine: data.find((el) => el.id === id)', data.find((el) => el.id === id));
    return this.setState({ isOpenEdit: true, currentLine: data.find((el) => el.id === id),  });
  };

  handleOnCloseEdit = () => this.setState({ isOpenEdit: false });

  handleSubmitEditLine = (values) => {
    const { editLine } = this.props;

    console.log('values999999999', values);
    editLine(values);
    this.setState({ isOpenEdit: false });
  };


  componentDidMount() {
    const { getLine} = this.props;
    console.log(' data1',  this.props.data);
    getLine(data);
  }

  delLine=(id) => {
    console.log('удаляем!!!',id );
    this.props.DeleteLine(id);
  };


  render() {
   console.log('this.props', this.props.line);

    const  {line}  = this.props;

    console.log(' data123', this.props.line);
    const {
      id, isActive, name, type,
    } = this.state.currentLine;
  const {
    isOpenEdit, currentProducts,
  } = this.state;
    console.log('this.state', this.state);
    console.log('tmpLine', this.state.tmpLine);
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
    tmpLine: state.data,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getLine: (line) =>{console.log('line',line);
    return( dispatch(getLine(line)));
  } ,
  DeleteLine: (id) => dispatch(deleteLine(id)),
  editLine: (line) => dispatch(editLine(line)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListLine);
