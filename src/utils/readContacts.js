import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(
      `Failed to read contacts from ${PATH_DB}: ${error.message}`,
    );
  }
};
export default readContacts;
