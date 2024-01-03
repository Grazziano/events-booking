'use client';
import React, { useState } from 'react';
import { BookingType } from '@/interfaces/events';
import { Button } from '@nextui-org/react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CancelBookingButton({
  booking,
}: {
  booking: BookingType;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const cancelBooking = async () => {
    try {
      setLoading(true);
      await axios.put(`/api/bookings/${booking._id}`, {
        status: 'cancelled',
      });
      toast.success('Booking cancel successfully');
      router.refresh();
    } catch (error: any) {
      toast.error('Error cancelling booking');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3">
      <Button color="warning" onClick={cancelBooking} isLoading={loading}>
        Cancel Booking
      </Button>
    </div>
  );
}
