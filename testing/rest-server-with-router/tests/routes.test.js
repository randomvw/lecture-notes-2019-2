const request = require('supertest');
const app = require('../index');

it('should create a new puppy', async () => {
  let response = await request(app)
    .post('/puppies')
    .send(
      {
        "name": "Sam",
        "breed": "dalmatian",
        "likes": ["petting", "chasing cars", "swimming"],
        "dislikes": ["all other animals", "the vet"]
      }
    )
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('id');
});

it('should fetch all puppies', async () => {
  let response = await request(app)
    .get('/puppies');

  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});

it('should return 404 for a missing puppy', async () => {
  let response = await request(app)
    .get('/puppies/0');
  expect(response.statusCode).toBe(404);
});
