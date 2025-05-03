import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Successfully removed the last contact from db.json');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing the last contact:', error);
  }
};

removeLastContact();
export default removeLastContact;
