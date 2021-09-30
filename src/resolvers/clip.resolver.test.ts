import { mongoose } from '@typegoose/typegoose';
import testConn from 'src/test-utils/test-conn';

beforeAll(async () => {
  await testConn();
});

// ToDo move to globalTeardown
afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});

describe('Create Clips', () => {
  it('Create Clips', async () => {
    console.log('Create Clips');
  });
});
