import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema'
// https://github.com/aldeed/meteor-simple-schema => Simpl-schema docs

import { Accounts } from 'meteor/accounts-base'

export const validateNewUser = (user) => {
    const email = user.emails[0].address

    new SimpleSchema({
        email: {
            type: String,
            regEx: SimpleSchema.RegEx.Email
        }
    }).validate({email})

    return true
}

if(Meteor.isServer) {
    Accounts.validateNewUser(validateNewUser)
}