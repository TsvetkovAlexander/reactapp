export const DELETE_LINE_SUCCESS = 'DELETE_LINE_SUCCESS';

export const EDIT_LINE_SUCCESS = 'EDIT_LINE_SUCCESS';

export const GET_LINE_SUCCESS = 'GET_LINE_SUCCESS';


export const deleteLine = (guid) =>{
  console.log('guid',guid);
  return({
    type: DELETE_LINE_SUCCESS,
    payload: guid
  })};

export const getLine = (line) => {
  console.log('line',line);
  return({
    type: 'GET_LINE_SUCCESS',
    payload: line,
  })};

export const editLine = (line) => {
  console.log('line',line);
  return({
  type: 'EDIT_LINE_SUCCESS',
  payload: line,
})};
