import {
  ADD_CHALLENGE,
  TOGGLE_FAVORITE,
  UPDATE_PROGRESS,
  RESET_PROGRESS,
  DELETE_CHALLENGE,
  LOAD_FROM_STORAGE,
} from "./challenge.actions";

export const initialState = {
  challenges: [],
  favorites: [],
};

export function challengeReducer(state, action) {
  switch (action.type) {
    case LOAD_FROM_STORAGE:
      return action.payload;

    case ADD_CHALLENGE:
      return {
        ...state,
        challenges: [...state.challenges, action.payload],
      };

    case TOGGLE_FAVORITE:
      return state.favorites.includes(action.payload)
        ? {
            ...state,
            favorites: state.favorites.filter((id) => id !== action.payload),
          }
        : {
            ...state,
            favorites: [...state.favorites, action.payload],
          };

    case UPDATE_PROGRESS:
      return {
        ...state,
        challenges: state.challenges.map((ch) =>
          ch.id === action.payload.id
            ? { ...ch, progress: action.payload.progress }
            : ch
        ),
      };

    case RESET_PROGRESS:
      return {
        ...state,
        challenges: state.challenges.map((ch) =>
          ch.id === action.payload ? { ...ch, progress: 0 } : ch
        ),
      };

    case DELETE_CHALLENGE:
      return {
        ...state,
        challenges: state.challenges.filter((ch) => ch.id !== action.payload),
        favorites: state.favorites.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
}