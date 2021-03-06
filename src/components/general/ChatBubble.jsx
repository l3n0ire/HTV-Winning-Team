import React, { Component } from 'react';
import Speech from 'react-speech';

export default class ChatBubble extends Component {

    render() {
        const props = this.props;
        return (
            <div key={`${props.className}-${props.i}`} className={`${props.className} chat-bubble`}>
                <span className="chat-content">{props.text}</span>
            </div>
        )
    }
}
