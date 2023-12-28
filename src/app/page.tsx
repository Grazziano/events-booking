import { connectDB } from '@/config/dbConfig';
import {
  getMongoDBUserIDOfLoggedInUser,
  handleNewUserRegistration,
} from '@/actions/users';

connectDB();

export default async function Home() {
  await handleNewUserRegistration();

  const mongoUserId = await getMongoDBUserIDOfLoggedInUser();

  console.log(mongoUserId);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}
