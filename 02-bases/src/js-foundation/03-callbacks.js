"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
/* eslint-disable n/no-callback-literal */
const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];
const getUserById = (id, callback) => {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (user != null) {
        return callback(undefined, user);
    }
    return callback(`User not found with id: ${id}`, undefined);
};
exports.getUserById = getUserById;
