import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import { contentReducer } from "./Content/reducer";
import leaderboardsReducer from "./Leaderboards/reducer";
import { modalLoginReducer } from "./Login/reducer";
import { modalRegisterReducer } from "./Register/reducer";
import { threadDetailReducer, threadsReducer } from "./Thread/reducer";
import { usersReducer, allUsersReducer } from "./Users/reducer";

const store = configureStore({
  reducer: {
    userData: usersReducer,
    threadsData: threadsReducer,
    leaderboards: leaderboardsReducer,
    threadDetail: threadDetailReducer,
    modalLogin: modalLoginReducer,
    allUsers: allUsersReducer,
    modalRegister: modalRegisterReducer,
    loadingBar: loadingBarReducer,
    content: contentReducer,
  },
});
export default store;
