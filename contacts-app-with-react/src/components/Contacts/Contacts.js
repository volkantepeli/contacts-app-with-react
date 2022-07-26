import { useState, useEffect } from 'react'
import List from './List/List'
import Form from './Form/Form'

function Contacts() {
  const [contacts, setContacts] = useState ([
    {
      fullname: 'Volkan',
      phone_number: '44554545'
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts