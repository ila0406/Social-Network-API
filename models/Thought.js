const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    { 
        thoughtText: { 
            type: String,
            required: "Thought is required",
            minlength: 1,
            maxlength: 280,     
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: () => {
                new Date().toDateString()
            }
          },
        username: {
            type: String,
            required: true,
        },
        reactions:  [reactions],
    },

    {
        toJSON: {
        getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual("reactionCount").get
(() => {
    this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;