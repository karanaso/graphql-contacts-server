import ContactsGraphQLQuery from './ContactsGraphQLQuery';

export default class ContactsGraphQLSchema {

  constructor( model ) {
    this.model = model;

    this.Query = new ContactsGraphQLQuery( this.model );
  }
}
