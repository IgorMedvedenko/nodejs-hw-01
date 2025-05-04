import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_DB = path.join(__dirname, '../db/db.json');

const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), `utf8`);
      console.log('Last contact removed successfully.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing the last contact:', error);
  }
};

removeLastContact();
export default removeLastContact;
