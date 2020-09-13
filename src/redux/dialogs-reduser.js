        const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
        const SEND_MESSAGE = 'SEND-MESSAGE';

        let initialState = {
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
        }

        const dialogsReducer = (state = initialState, action) => {

            switch (action.type) {
                case UPDATE_NEW_MESSAGE_BODY:
                    state.newMessageBody = action.body;
                    return state;
                case  SEND_MESSAGE:
                    let body = state.newMessageBody;
                    state.newMessageBody = '';
                    state.messages.push({id: 6, message: body});
                    return state;
                default:
                    return state;
            }
        }

        export const sendMessageCreator = () => ({type: SEND_MESSAGE});

        export const updateNewMessageBodyCreator = (body) =>
            ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

        export default dialogsReducer;