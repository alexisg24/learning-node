const buildMakePerson = ({ getUUID, getAge }: { getUUID: Function, getAge: Function }) => {
  return ({ name, birthdate }: { name: string, birthdate: string }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate)
    }
  }
}

export default {
  buildMakePerson
}
