import writeContacts from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Successfully removed all contacts from db.json');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();
export default removeAllContacts;
