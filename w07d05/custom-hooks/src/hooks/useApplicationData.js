import {useReducer} from 'react';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const ADD_PHOTO_ID = 'addPhotoId';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PHOTO_ID:
      const copyOfPhotoIds = [
        ...state.favouredPhotoIds,
        action.photoId
      ];

      const copy3 = {
        ...state,
        favouredPhotoIds: copyOfPhotoIds
      };

      return copy3;

      // alternately
      // return {
      //   ...state,
      //   favouredPhotoIds: [
      //     ...state.favouredPhotoIds,
      //     action.photoId
      //   ]
      // };

    case INCREMENT:
      const copy1 = {...state};
      copy1.count += 1;
      return copy1;

    case DECREMENT:
      const copy2 = {...state};
      copy2.count -= 1;
      return copy2;

    default:
      throw new Error(`Action type: ${action.type} is not recognized`);
  }
};

const initialState = {
  count: 0,
  favouredPhotoIds: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const addPhotoId = (photoId) => {
    dispatch({ type: ADD_PHOTO_ID, photoId: photoId });
  };

  return {
    state,
    increment,
    decrement,
    addPhotoId
  };
};

export default useApplicationData;
