const CLEAR_CARD = "CLEAR_CARD";
const INCREMENT_ITEM = "INCREMENT_ITEM";
const SET_CURRENT_CARDS = "SET_CURRENT_CARDS";
const SET_LOADER_DETAILS = "SET_LOADER_DETAILS";
const SET_CARDS = "SET_CARDS";
const SET_LOADER = "SET_LOADER";

const initialState = {
  cards: [],
  displayedItems: 4,
  loader: false,
};

const initialDetailsState = {
  currentCard: null,
  loader: false,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS: {
      return { ...state, cards: action.payload };
    }
    case INCREMENT_ITEM: {
      return { ...state, displayedItems: state.displayedItems + 4 };
    }
    case SET_LOADER: {
      return { ...state, loader: action.payload };
    }
    default: {
      return state;
    }
  }
};
export const detailsReducer = (state = initialDetailsState, action) => {
  switch (action.type) {
    case SET_CURRENT_CARDS: {
      return { ...state, currentCard: action.payload };
    }
    case CLEAR_CARD:
      return { ...state, currentCard: null };
    case SET_LOADER_DETAILS: {
      return { ...state, loader: action.payload };
    }
    default: {
      return state;
    }
  }
};
export const setCurrentCards = (card) => ({
  type: SET_CURRENT_CARDS,
  payload: card,
});
export const clearCards = () => ({ type: CLEAR_CARD });
export const setLoaderDetails = (flag) => ({
  type: SET_LOADER_DETAILS,
  payload: flag,
});

export const setCards = (cards) => ({ type: SET_CARDS, payload: cards });
export const incrementItems = () => ({ type: INCREMENT_ITEM });
export const setLoader = (flag) => ({ type: SET_LOADER, payload: flag });
