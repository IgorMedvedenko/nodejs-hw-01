import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_DB = path.join(__dirname, '..', 'db', 'db.json');

const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');
    console.log('Successfully removed all contacts from db.json');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();
export default removeAllContacts;
