import { faker } from '@faker-js/faker';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = existingContacts.concat(newContacts);
    await writeContacts(updatedContacts);

    console.log(`Successfully added ${number} contacts to db.json`);
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
