import ContactsGraphQLQuery from './ContactsGraphQLQuery';

export default class ContactsGraphQLExport {

  constructor( model ) {
    this.model = model;

    this.Query = new ContactsGraphQLQuery( this.model );
  }
}
