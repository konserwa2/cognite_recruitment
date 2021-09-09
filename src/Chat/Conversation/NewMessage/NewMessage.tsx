import React, { useState } from 'react'
import { Input, Button } from 'antd'

import './NewMessage.css'

export const NewMessage: React.FC<{ onNewMessage: (body: string) => void }> = ({ onNewMessage }) => {
  const [body, setBody] = useState('')

  const onAccept = () => {
    if (body.trim()) {
      onNewMessage(body)
      setBody('')
    }
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onAccept()
  }

  return (
    <div className="new-message">
      <Input
        className="new-message__input"
        value={ body }
        onChange={ e => setBody(e.target.value) }
        onKeyPress={ onKeyPress }
      />
      <Button onClick={ () => onAccept() }>Send</Button>
    </div>
  )
}
