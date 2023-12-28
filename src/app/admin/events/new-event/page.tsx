import React from 'react';
import PageTitle from '@/components/PageTitle';
import EventForm from '../_components/event-form';

export default function NewEventPage() {
  return (
    <div className="bg-white p-5">
      <PageTitle title="New Event" />

      <div className="mt-5">
        <EventForm />
      </div>
    </div>
  );
}
