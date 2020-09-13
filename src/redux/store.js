import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 25},
                {id: 2, message: 'It\'s my first post', likes: 15},
                {id: 1, message: 'Hi, how are you?', likes: 25},
                {id: 2, message: 'It\'s my first post', likes: 15},
                {id: 1, message: 'Hi, how are you?', likes: 25},
                {id: 2, message: 'It\'s my first post', likes: 15}
            ],
            newPostText: 'qwerty'

        },
        dialogs: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Good morning'},
                {id: 4, message: 'Excellent job'},
                {id: 5, message: 'Excellent job'}
            ],
            dialogs: [
                {id: 1, name: 'Victor'},
                {id: 2, name: 'Aleksandr'},
                {id: 3, name: 'Evgeniy'},
                {id: 4, name: 'Maria'},
                {id: 5, name: 'Elena'},
                {id: 6, name: 'Svetlana'}
            ],
            newMessageBody: ''

        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber()  {
         console.log('Changed')
        },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {   // Type: 'ADD-POST
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    },

}

export default store