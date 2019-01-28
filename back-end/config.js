module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/exampleDb',
  LISTEN_PORT: process.env.LISTEN_PORT || 80,
  jwt: {
    secret: process.env.JWT_SECRET || 'yetOyNa1vwpf4CwgRBSl9k0xMgGzhtk0f4WSHIde',
    options: {
      audience: 'https://salu.pro',
      expiresIn: '12h', // 1d
      issuer: 'salu.pro'
    },
    cookie: {
      domain: '.salu.pro',
      httpOnly: false,
      sameSite: false,
      signed: false,
      secure: false
    }
  }
};
