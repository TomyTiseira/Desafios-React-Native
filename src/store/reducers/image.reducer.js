import { ADD_IMAGE, LOAD_IMAGES, SELECT_IMAGE } from "../actions/image.action";
import Image from "../../models/Image";

const initialState = {
  images: [],
  selected: null,
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      const newImage = new Image(
        Date.now(),
        action.payload.title,
        action.payload.image
      );
      return {
        ...state,
        images: state.images.concat(newImage),
      };

    case SELECT_IMAGE:
      const selected = state.images.find(
        (image) => image.id === action.imageID
      );
      return {
        ...state,
        selected,
      };
    case LOAD_IMAGES:
      return {
        ...state,
        images: action.images.map(
          (image) => new Image(image.id, image.title, image.image)
        ),
      };
    default:
      return state;
  }
};

export default ImageReducer;
