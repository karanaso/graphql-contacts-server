import {ContactsSchema} from './ContactsSchema';

export default class ContactsModel {
  constructor( config, connection ) {
    this.config = config;
    this.connection = connection;
    this.modelName = 'Contacts';
    this.model = connection.model( this.modelName, ContactsSchema );

    //this.findById('5750b262ed3045423719283a').then( (q) => { console.log(q)})

    console.log(`ContactsModel Initialized succesfully`);
  }

  insert = ( Contact ) => {
    const newContact = new this.model( Contact );
    return new Promise( (resolve,reject) => {
      newContact.save( ( err ) => {
          if (err !== undefined) {
            resolve('success')
          } else {
            reject( err );
          }
      });
    });
  }

  findById = ( contactId ) => {
    return new Promise( (resolve,reject) => {
      this.model.findOne({'_id':contactId}, (err,contact) => {
        if (err) reject(err);
        resolve(contact);
      });
    });
  }

  find = ( args ) => {
    console.log(args);
    return new Promise( (resolve,reject) => {
      this.model.find(args, (err,contact) => {
        if (err) reject(err);
        resolve(contact);
      });
    });
  }
}
