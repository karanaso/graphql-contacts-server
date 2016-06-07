import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactsSchema = new Schema({
  ContactDetails : String,
  Firstname : String,
  Lastname : String,
  SocSecId : String,
  DriverLicId : String,
  DOB : String,
  TagsAndGroups : String,
  Notes : String,
  Business : {
    CompanyName : String,
    JobDescription : String,
    Address : String,
    Town : String,
    ZipCode : String,
    LandLine : String,
    Mobile : String,
    Email : String,
    Skype : String,
    MSN : String
  },
  Personal : {
    Address : String,
    Town : String,
    ZipCode : String,
    LandLine : String,
    Mobile : String,
    Email : String,
    Skype : String,
    MSN : String
  },
  updateInfo : {
    created_at : { type : Date },
    updated_at : { type : Date, default : Date.now }
  }
});
