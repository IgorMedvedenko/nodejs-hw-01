import readContacts from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};
console.log(await countContacts());
export default countContacts;
