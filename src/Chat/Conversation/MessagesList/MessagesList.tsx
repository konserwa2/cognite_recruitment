import React from 'react'

import './MessagesList.css'

export interface Message {
  id: string
  body: string
}

const MessageListItem: React.FC<{ body: string }> = ({ body }) => {
  return (
    <div className="messages-list__item">
      { body }
    </div>
  )
}

export const MessagesList: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="messages-list">
      {
        messages.map(message => (
          <MessageListItem key={ message.id } body={ message.body } />
        ))
      }
    </div>
  )
}
