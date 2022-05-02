// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    { 
        username: { 
            type: String,
            required: "Username is required",
            unique: true,
            trim: true,            
        },
        email: { 
            type: String, 
            required: "Email is required",
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        thoughts:  [
            { 
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends:  [
            { 
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
    },

    {
        toJSON: {
        getters: true,
        },
        id: false,
    }
);

userSchema.virtual("friendCount").get
(() => {
    this.friends.length
})

const User = model('user', userSchema);

module.exports = User;
