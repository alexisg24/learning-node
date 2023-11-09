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

const getUserById = (id: number, callback: (arg0: boolean | null, arg1: { id: number, name: string } | null) => any): any => {
  const user = users.find(user => user.id === id)
  return (user == null) ? callback(true, null) : callback(null, user)
}

export default { getUserById }
