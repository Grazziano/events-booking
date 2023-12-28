'use client';
import React, { useState } from 'react';
import Steps from '@/components/Steps';
import General from './General';
import LocationAndDate from './LocationAndDate';
import Media from './Media';
import Tickets from './Tickets';

export default function EventForm() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div>
      <Steps
        stepNames={['General', 'Location & Date', 'Media', 'Tickets']}
        stepsContent={[
          <General />,
          <LocationAndDate />,
          <Media />,
          <Tickets />,
        ]}
        activeStep={activeStep}
      />
    </div>
  );
}
