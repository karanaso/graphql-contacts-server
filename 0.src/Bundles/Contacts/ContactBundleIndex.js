import ContactsModel from './Persistence/ContactsModel';
import ContactsGraphQLExport from './Persistence/ContactsGraphQLExport';
import ContactsFaker from './Faker/ContactsFaker';

export default class ContactsBundle {
  constructor( config, connection ) {
    this.config = config;
    this.connection = connection;
    this.ContactsModel = new ContactsModel( config, connection );
    this.graphQLExport = new ContactsGraphQLExport( this.ContactsModel );
  }

  runFaker = ( numberOfContactsToCreate ) => {
    const contactsFaker = new ContactsFaker( numberOfContactsToCreate, this.ContactsModel );
    contactsFaker.run();
  }
}
