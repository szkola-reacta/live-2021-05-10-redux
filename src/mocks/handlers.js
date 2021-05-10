import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {

    return res(
      ctx.json([{
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'John',
        lastName: 'Maverick',
      }, {
        id: 'ae7c5197-6a3a-4d63-845e-48e18f2c914e',
        firstName: 'Justyna',
        lastName: 'Kowalska',
      }, {
        id: '6018f6c8-a8df-4570-ab67-90613f087504',
        firstName: 'John',
        lastName: 'Doe',
      }])
    )
  }),
];
