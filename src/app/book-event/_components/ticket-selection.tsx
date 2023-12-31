'use client';
import React, { useEffect, useState } from 'react';
import { EventType } from '@/interfaces/events';
import { Button } from '@nextui-org/react';

interface TicketSelectionProps {
  event: EventType;
}

export default function TicketSelection({ event }: TicketSelectionProps) {
  const [ticketCount, setTicketCount] = useState<number>(1);
  const [selectedTicketType, setSelectedTicketType] = useState<string>(
    event.ticketTypes[0].name
  );
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const ticketType = event.ticketTypes.find(
      (ticketType) => ticketType.name === selectedTicketType
    );

    if (ticketType) {
      setTotalAmount(ticketType.price * ticketCount);
    }
  }, [ticketCount, selectedTicketType]);

  return (
    <div className="mt-7">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">
          Select Ticket Type
        </h1>

        <div className="grid grid-cols-4 gap-10 mt-2">
          {event.ticketTypes.map((ticketType) => (
            <div
              key={ticketType.name}
              className={`bg-gray-100 border border-gray-200 p-3 rounded-sm cursor-pointer
              ${selectedTicketType === ticketType.name && 'border-blue-800'}`}
              onClick={() => setSelectedTicketType(ticketType.name)}
            >
              <h1 className="font-semibold">{ticketType.name}</h1>
              <h1 className="text-gray-600 text-sm">
                $ {ticketType.price.toFixed(2)}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <h1 className="text-xl font-semibold text-gray-700">
          Select Ticket Count
        </h1>
        <div className="flex flex-wrap mt-2">
          {[...Array(10)].map((_, index) => (
            <div
              className={`bg-gray-100 border border-gray-200 h-12 w-14 rounded-sm flex justify-center items-center cursor-pointer
              ${ticketCount === index + 1 && 'border-blue-800'}
              `}
              onClick={() => setTicketCount(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 bg-gray-100 border border-gray-200 p-3 flex justify-between items-center">
        <h1 className="font-semibold text-2xl uppercase text-gray-500">
          Total Amount: $ {totalAmount}
        </h1>
        <Button color="primary">Book Now</Button>
      </div>
    </div>
  );
}
