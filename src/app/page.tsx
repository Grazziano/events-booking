import { Button } from '@nextui-org/button';
import { UserButton } from '@clerk/nextjs';
import { connectDB } from '@/config/dbConfig';
import { auth, currentUser } from '@clerk/nextjs/server';

connectDB();

export default async function Home() {
  const { userId } = auth();
  console.log(userId);
  const user = await currentUser();
  console.log(user?.username);

  return (
    <div className="p-10">
      <h1>Events Booking</h1>

      <Button color="primary">Click Me</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
