import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
  } catch (error) {
    throw new Error(`Failed to write contacts to ${PATH_DB}: ${error.message}`);
  }
};
export default writeContacts;
