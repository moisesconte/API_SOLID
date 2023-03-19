import '@fastify/jwt';

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      // id: number,
      sub: string,
      role: 'ADMIN' | 'MEMBER'
      // age: number
    } // user type is return type of `request.user` object
  }
}