import readContacts from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error reading all contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());
export default getAllContacts;
