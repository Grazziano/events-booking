import { Button } from '@nextui-org/button';
import { UserButton } from '@clerk/nextjs';
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
    <div className="p-10">
      <h1>Events Booking</h1>

      <Button color="primary">Click Me</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
