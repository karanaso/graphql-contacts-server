import Faker from 'faker';
import _ from 'lodash';

export default class ContactsFaker {
  constructor( numberOfContactsToCreate, ContactsModel ) {
    this.numberOfContactsToCreate = numberOfContactsToCreate;
    this.ContactsModel = ContactsModel;
    this.faker = Faker;
  }

  run = () => {
    for(let n =0; n<this.numberOfContactsToCreate; n++) {
       const contact = new this.ContactsModel.model({
          ContactDetails: this.faker.company.companyName(),
          Firstname: this.faker.name.firstName(),
          Lastname: this.faker.name.lastName(),
          SocSecId: this.faker.random.number(),
          DriverLicId: this.faker.random.number(),
          DOB: this.faker.date.past(),
          TagsAndGroups: this.faker.lorem.words(5),
          Notes: this.faker.lorem.sentences(5),
          Business: {
            CompanyName: this.faker.company.companyName(),
            JobDescription: this.faker.lorem.words(5),
            Address: this.faker.address.streetAddress(),
            Town: this.faker.address.city(),
            ZipCode: this.faker.address.zipCode(),
            LandLine: this.faker.phone.phoneNumber(),
            Mobile: this.faker.phone.phoneNumber(),
            Email: this.faker.internet.email(),
            Skype: this.faker.internet.email(),
            MSN: this.faker.internet.email()
          },
          Personal: {
            Address: this.faker.address.streetAddress(),
            Town: this.faker.address.city(),
            ZipCode: this.faker.address.zipCode(),
            LandLine: this.faker.phone.phoneNumber(),
            Mobile: this.faker.phone.phoneNumber(),
            Email: this.faker.internet.email(),
            Skype: this.faker.internet.email(),
            MSN: this.faker.internet.email()
          },
          updateInfo : {
            created_at : this.faker.date.past(),
            updated_at : this.faker.date.recent()
          }
      });
      contact.save();
    }
  }

}
