'use client';
import React, { useState } from 'react';
import Steps from '@/components/Steps';
import General from './General';
import LocationAndDate from './LocationAndDate';
import Media from './Media';
import Tickets from './Tickets';
import { uploadImagesToFirebaseAndGetUrls } from '@/helpers/imageUpload';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function EventForm() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [newlySelectedImages, setNewlySelectedImages] = useState<any[]>([]);
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (e: any) => {
    try {
      setLoading(true);
      e.preventDefault();
      event.images = await uploadImagesToFirebaseAndGetUrls(
        newlySelectedImages.map((image: any) => image.file)
      );
      // console.log(event);
      await axios.post('/api/admin/events', event);
      toast.success('Event created successfully');
      router.refresh();
      router.push('/admin/events');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const commomProps = {
    event,
    setEvent,
    activeStep,
    setActiveStep,
    newlySelectedImages,
    setNewlySelectedImages,
    loading,
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Steps
          stepNames={['General', 'Location & Date', 'Media', 'Tickets']}
          stepsContent={[
            <General {...commomProps} />,
            <LocationAndDate {...commomProps} />,
            <Media {...commomProps} />,
            <Tickets {...commomProps} />,
          ]}
          activeStep={activeStep}
        />
      </form>
    </div>
  );
}
