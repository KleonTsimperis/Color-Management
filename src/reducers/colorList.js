import uuid from 'uuid';
import * as ACTION from '../actions/constants';

const initialState = {
  colorList: []
};

const colorListReducer = (state = initialState, action) => {
  let colors = state.colorList.slice();
  switch (action.type) {

    case ACTION.FETCHDATA:
      return {
         colorList: [
           ...state.colorList,
           Object.assign(
             {},
             action.data.image,
             { id:uuid() },
             { isEditing: false }
             ),
          ]
      }


    case ACTION.REMOVECOLOR:
      const updatedColorList = colors.filter(item => item.id !== action.id);
      return { colorList: updatedColorList }


    case ACTION.EDITCOLOR:
      const editedColorList = colors.map(item => {
        if (item.id === action.id) {
            return {
              ...item,
              isEditing: !item['isEditing']
            };
        }
        return item;
      });
      return { colorList: editedColorList }


    case ACTION.AMENDDATA:
      const indexToReplace = colors.findIndex(item => item.id === action.id)
      return {
        colorList: [
          ...state.colorList.slice(0, indexToReplace),
          Object.assign(
            {},
            action.data.image,
            { id:uuid() },
            { isEditing: false }
          ),
          ...state.colorList.slice(indexToReplace + 1)
        ]
      }


    default:
      return state;
  }
}

export default colorListReducer;