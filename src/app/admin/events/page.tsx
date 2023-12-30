import React from 'react';
import PageTitle from '@/components/PageTitle';
import { Link } from '@nextui-org/react';
import EventModel from '@/models/event-model';
import { EventType } from 'firebase/database';
import EventsTable from './_components/events-table';
import { connectDB } from '@/config/dbConfig';

connectDB();

export default async function EventsPage() {
  const events: EventType[] = (await EventModel.find().sort({
    createdAt: -1,
  })) as any;

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Events" />

        <Link
          href="/admin/events/new-event"
          className="bg-primary text-white px-5 py-2 rounded-sm text-sm"
        >
          Create Event
        </Link>
      </div>

      <EventsTable events={JSON.parse(JSON.stringify(events))} />
    </div>
  );
}
