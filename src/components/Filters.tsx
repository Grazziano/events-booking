'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';

interface IFilter {
  name: string;
  date: string;
}

export default function Filters() {
  const router = useRouter();
  const [filters, setFilters] = useState<IFilter>({
    name: '',
    date: '',
  });

  useEffect(() => {
    setTimeout(() => {
      router.push(`/?name=${filters.name}&date=${filters.date}`);
    }, 400);
  }, [filters.name]);

  useEffect(() => {
    router.push(`/?name=${filters.name}&date=${filters.date}`);
  }, [filters.date]);

  return (
    <div className="bg-white p-5 rounded-sm mb-5 flex flex-col md:flex-row gap-5 items-start md:items-end">
      <div className="w-full">
        <h1 className="text-sm text-gray-500">Search for an event by name</h1>
        <input
          type="text"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          placeholder="Search for an event"
          className="w-full p-2 rounded-sm border border-gray-200"
        />
      </div>

      <div className="w-full">
        <h1 className="text-sm text-gray-500">Search for an event by date</h1>
        <input
          type="date"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          placeholder="Search for an event"
          className="w-full p-2 rounded-sm border border-gray-200"
        />
      </div>

      <div className="w-60">
        <Button
          className="px-5"
          onClick={() =>
            setFilters({
              name: '',
              date: '',
            })
          }
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
