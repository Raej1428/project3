export function createUser(user) {
    console.log(user);
    return {
      type: 'CREATE_USER',
      data: user
    }
  }