import { faker } from '@faker-js/faker';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);

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
