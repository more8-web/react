        import {combineReducers, createStore} from "redux";
        import profileReducer from "./profile-reducer";
        import dialogsReducer from "./dialogs-reduser";
        import sidebarReducer from "./sidebar-reducer";

        let reducers = combineReducers({
                profile: profileReducer,
                dialogs: dialogsReducer,
                sidebar: sidebarReducer
        }
        );

        let store = createStore(reducers);

        window.store = store

        export default store