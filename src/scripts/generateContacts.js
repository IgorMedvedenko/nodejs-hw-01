import { faker } from '@faker-js/faker';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_DB = path.join(__dirname, '..', 'db', 'db.json');

const generateContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = JSON.parse(data);
    const newContacts = Array.from({ length: 5 }, createFakeContact);
    const updatedContacts = [...existingContacts, ...newContacts];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );

    console.log(`Successfully generating and added contacts to db.json`);
  } catch (error) {
    console.error('Error generating and adding contacts:', error);
  }
};
const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

generateContacts(5);
export default generateContacts;
