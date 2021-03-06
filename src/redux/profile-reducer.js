        const ADD_POST = 'ADD-POST';
        const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

        let initialState = {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 25},
                {id: 2, message: 'It\'s my first post', likes: 15},
                {id: 1, message: 'Hi, how are you?', likes: 25},
                {id: 2, message: 'It\'s my first post', likes: 15},
                {id: 1, message: 'Hi, how are you?', likes: 25},
                {id: 2, message: 'It\'s my first post', likes: 15}
            ],
            newPostText: 'qwerty'
        };

        const profileReducer = (state = initialState, action) => {

            switch (action.type) {
                case ADD_POST: {
                    let newPost = {
                        id: 5,
                        message: state.newPostText,
                        likes: 0
                    };
                    let stateCopy = {...state};
                    stateCopy.posts = [...state.posts];
                    stateCopy.posts.push(newPost);
                    stateCopy.newPostText = '';
                    return stateCopy;
                }
                case UPDATE_NEW_POST_TEXT : {
                    let stateCopy = {...state}
                    stateCopy.newPostText = action.newText;
                    return stateCopy
                }
                default:
                    return state;

            }
        }

        export const addPostActionCreator = () => ({type: ADD_POST});

        export const updateNewPostTextActionCreator = (message) =>
            ({type: UPDATE_NEW_POST_TEXT, newText: message});

        export default profileReducer;
