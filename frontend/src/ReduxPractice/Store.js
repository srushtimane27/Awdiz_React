import rootReducer from "./reducers/Root.reducer";

const store = configureStore({reducer: rootReducer});

export default store;