import React from 'react';
import PageTitle from '@/components/PageTitle';
import EventsTableForReports from './_components/reports-for-events';
import EventModel from '@/models/event-model';
import { connectDB } from '@/config/dbConfig';

connectDB();

export default async function ReportsPage() {
  const events = await EventModel.find({});

  return (
    <div>
      <PageTitle title="Reports" />
      <EventsTableForReports events={JSON.parse(JSON.stringify(events))} />
    </div>
  );
}
