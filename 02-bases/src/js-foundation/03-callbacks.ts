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
]

export const getUserById = (id: number, callback: (err?: string, user?: { id: number, name: string }) => any): any => {
  const user = users.find(function (user) {
    return user.id === id
  })

  if (user != null) {
    return callback(undefined, user)
  }

  return callback(`User not found with id: ${id}`, undefined)
}
