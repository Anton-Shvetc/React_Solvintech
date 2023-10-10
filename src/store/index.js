import { createStore } from "redux";
import { combineReducers } from "redux";
import { cardsReducer, detailsReducer } from "./reducer";
import { useSelector } from "react-redux";


export const rootReducer = combineReducers({
  cards: cardsReducer,
  details: detailsReducer,
});

export const store = createStore(rootReducer);

export const useAppSelector = useSelector;
