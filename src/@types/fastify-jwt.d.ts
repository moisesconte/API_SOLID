import '@fastify/jwt';

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    // payload: { id: number } // payload type is used for signing and verifying
    user: {
      // id: number,
      sub: string,
      // age: number
    } // user type is return type of `request.user` object
  }
}