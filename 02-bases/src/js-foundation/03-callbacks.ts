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

const getUserById = (id: number, callback: Function): any => {
  const user = users.find(function (user) {
    return user.id === id
  })

  if (user != null) {
    return callback(null, user)
  }

  return callback(true, null)
}

export default { getUserById }
