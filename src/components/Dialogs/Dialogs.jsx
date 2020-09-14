import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogs;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = state.messages.map(message => <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    return (
      <div className={s.dialogs}>
          <div >
              {dialogsElements}
          </div>
          <div >
                  <div>
                      {messagesElement}
                  </div>
                  <div>
                      <textarea
                          onChange={onNewMessageChange}
                          placeholder={'Enter your message'}
                          value={newMessageBody}
                      />
                  </div>
                  <div>
                      <button className={s.btnSend} onClick={onSendMessageClick}>send</button>
                  </div>
          </div>

      </div>
    );
}

export default Dialogs