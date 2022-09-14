import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { connect } from 'react-redux';

const ChatBox = ({ props }) => {
    const [messages, setMessages] = useState([]);
    // console.log('tryingngngngngngngn');
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'We have sent your order to the shopkeeper. wait for us to further update u from shopkeeper',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

const select = (store) => {
    return store;
}
export default connect(select)(ChatBox);