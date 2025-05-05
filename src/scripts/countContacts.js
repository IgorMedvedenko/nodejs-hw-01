import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_DB = path.join(__dirname, '..', 'db', 'db.json');

const countContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};
console.log(await countContacts());
export default countContacts;
