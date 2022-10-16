const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Kepha",
  address: {
    street: "465 Main St",
    city: "Boston",
    state: "MA",
  },
};

const NAME_UPDATED = "NAME_UPDATED";
const updateName = (name) => {
  return {
    type: NAME_UPDATED,
    payload: name,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_UPDATED:
      //   return {
      //     ...state,
      //     name: action.payload,
      //     address: {
      //       ...state.address,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.name = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(updateName("Motari"));
unsubscribe();
