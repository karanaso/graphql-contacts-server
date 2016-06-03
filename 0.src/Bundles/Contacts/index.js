import {ContactsSchema} from './Persistence/ContactsSchema';
import ContactsModel from './Persistence/ContactsModel';
import ContactsGraphQLSchema from './Persistence/ContactsGraphQLSchema';
import ContactsFaker from './Faker/ContactsFaker';

export default class ContactsBundle {
  constructor( config, connection ) {
    this.config = config;
    this.connection = connection;
    this.ContactsModel = new ContactsModel( config, connection );
    this.graphQLSchema = new ContactsGraphQLSchema( this.ContactsModel );

    console.log(`ContactsBundle Initialized succesfully`);
  }

  runFaker = ( numberOfContactsToCreate ) => {
    let contactsFaker = new ContactsFaker( numberOfContactsToCreate, this.ContactsModel );
    contactsFaker.run();
  }
}
