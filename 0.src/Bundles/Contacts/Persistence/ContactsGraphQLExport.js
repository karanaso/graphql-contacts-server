import ContactsGraphQLQuery from './ContactsGraphQLQuery';
import ContactsGraphQLMutations from './ContactsGraphQLMutations';

export default class ContactsGraphQLExport {
  constructor( model ) {
    this.model = model;

    this.Queries = new ContactsGraphQLQuery( this.model );
    this.Mutations = new ContactsGraphQLMutations( this.model );
  }

  getQueries = () => {
    return this.Queries;
  }

  getMutations = () => {
    return this.Mutations;
  }
}
