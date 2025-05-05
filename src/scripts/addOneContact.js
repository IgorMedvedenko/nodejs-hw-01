import { faker } from '@faker-js/faker';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_DB = path.join(__dirname, '..', 'db', 'db.json');

const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = JSON.parse(data);
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
    console.log('Successfully added one contact to db.json');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};
const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

addOneContact();
export default addOneContact;
