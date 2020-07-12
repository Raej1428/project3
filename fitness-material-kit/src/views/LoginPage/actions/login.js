export function loginUser(user) {
    console.log(user);
    return {
      type: 'LOGIN_USER',
      data: user
    }
  }