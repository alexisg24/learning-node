"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    const user = users.find(user => user.id === id);
    return (user == null) ? callback(true, null) : callback(null, user);
};
exports.default = { getUserById };
