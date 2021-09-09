import React, { useState } from 'react'

import { Conversation, Message } from './Conversation'
import { ContactList, Contact } from './ContactList'

import './Chat.css'

let idCount = 1
const newId = () => {
  return String(idCount++)
}

export const Chat: React.FC = () => {
  const [contacts] = useState<Contact[]>([
    { id: newId(), name: 'Joe Doe 1', avatar: 'mockedUrl' },
    { id: newId(), name: 'Joe Doe 2', avatar: 'mockedUrl' },
    { id: newId(), name: 'Joe Doe 3', avatar: 'mockedUrl' },
    { id: newId(), name: 'Joe Doe 4', avatar: 'mockedUrl' },
    { id: newId(), name: 'Joe Doe 5', avatar: 'mockedUrl' }
  ])
  const [contactMessages, setContactMessages] = useState<Record<string, Message[]>>(contacts.reduce((acc, contact) => ({
    ...acc,
    [contact.id]: []
  }), {}))
  const [selectedContactId, setSelectedContactId] = useState<string>(null)

  const onNewMessage = (messageBody: string) => {
    setContactMessages({
      ...contactMessages,
      [selectedContactId]: [
        { id: newId(), body: messageBody },
        ...contactMessages[selectedContactId]
      ]
    })
  }

  return (
    <div className="chat">
      {
        selectedContactId
          ? (
            <div className="chat__conversation">
              <Conversation
                messages={ selectedContactId ? contactMessages[selectedContactId] : [] }
                onNewMessage={ onNewMessage }
              />
            </div>
          )
          : (
            <div className="chat__conversation-placeholder">Please select contact</div>
          )
      }
      <div className="chat__contact-list">
        <ContactList 
          contacts={ contacts } 
          onSelect={ setSelectedContactId } 
          selectedContactId={ selectedContactId }
        />      
      </div>
    </div>
  )
}
