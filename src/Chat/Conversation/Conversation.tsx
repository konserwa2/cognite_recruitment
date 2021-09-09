import React from 'react'

import { MessagesList, Message } from './MessagesList'
import { NewMessage } from './NewMessage'

import './Conversation.css'

interface Props {
  messages: Message[]
  onNewMessage: (body: string) => void
}

export const Conversation: React.FC<Props> = ({ messages, onNewMessage }) => {
  return (
    <div className="conversation">
      <div className="conversation__messages">
        <MessagesList messages={ messages } />
      </div>
      <NewMessage onNewMessage={ onNewMessage } />
    </div>
  )
}