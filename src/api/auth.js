import users from '../data/users.json'

const MOCK_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock-token'

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      )
      if (user) {
        resolve({ token: MOCK_TOKEN, username })
      } else {
        reject(new Error('用户名或密码错误'))
      }
    }, 1000)
  })
}
