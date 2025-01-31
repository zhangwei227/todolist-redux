import { ADD_TODO_ITEM, CHANGE_INPUT_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes';
// import axios from 'axios';

export const getInputChangeAction = (value) => (
    {
        type: CHANGE_INPUT_ITEM,
        value
    });
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('list.json').then((res) => {
//             const data = res.data;
//             const action = initListAction(data);
//             dispatch(action);
//         });
//     }
// }

export const getInitList = () => ({
    type: GET_INIT_LIST
})
