import React from 'react'
import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import classNames from 'classnames'

import './ContactList.css'

export interface Contact {
  id: string
  name: string
  avatar: string
}

interface ContactListItemProps {
  contact: Contact
  onClick: () => void
  selected: boolean
}

const ContactListItem: React.FC<ContactListItemProps> = ({ contact, onClick, selected }) => {
  return (
    <li 
      className={ classNames('contact-list__item', { 'contact-list__item--selected': selected }) }
      onClick={ () => onClick() }
    >
      <Avatar icon={ <UserOutlined /> } />
      <span className="contact-list__item-name">
        { contact.name }
      </span>
    </li>
  )
}

interface Props {
  contacts: Contact[]
  onSelect: (contactId: string) => void
  selectedContactId: string
}

export const ContactList: React.FC<Props> = ({ contacts, onSelect, selectedContactId }) => {
  return (
    <div className="contact-list">
      <ul className="contact-list__list">
        {
          contacts.map(contact => (
            <ContactListItem 
              key={ contact.id } 
              contact={ contact } 
              onClick={ () => onSelect(contact.id) } 
              selected={ contact.id === selectedContactId }
            />
          ))
        }
      </ul>
      <Button onClick={ () => null }>Add new contact</Button>
    </div>
  )
}
