import { Button } from '@nextui-org/button';
import { UserButton } from '@clerk/nextjs';
import { connectDB } from '@/config/dbConfig';

connectDB();

export default function Home() {
  return (
    <div className="p-10">
      <h1>Events Booking</h1>

      <Button color="primary">Click Me</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
