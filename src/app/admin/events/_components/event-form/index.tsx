'use client';
import React, { useState } from 'react';
import Steps from '@/components/Steps';
import General from './General';
import LocationAndDate from './LocationAndDate';
import Media from './Media';
import Tickets from './Tickets';
import { uploadImagesToFirebaseAndGetUrls } from '@/helpers/imageUpload';
import toast from 'react-hot-toast';

export default function EventForm() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [newlySelectedImages, setNewlySelectedImages] = useState<any[]>([]);
  const [event, setEvent] = useState<any>(null);

  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();
      event.images = await uploadImagesToFirebaseAndGetUrls(
        newlySelectedImages.map((image: any) => image.file)
      );
      console.log(event);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const commomProps = {
    event,
    setEvent,
    activeStep,
    setActiveStep,
    newlySelectedImages,
    setNewlySelectedImages,
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
