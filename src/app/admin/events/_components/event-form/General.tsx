import React from 'react';
import { Input, Textarea } from '@nextui-org/react';

export interface EventFormStepProps {
  event: any;
  setEvent: React.Dispatch<React.SetStateAction<any>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function General({ event, setEvent }: EventFormStepProps) {
  const getCommonProps = (name: string) => {
    return {
      labelPlacement: 'outside',
      value: event?.[name],
      onchange: (e: any) => setEvent({ ...event, [name]: e.target.value }),
    } as any;
  };

  return (
    <div className="flex flex-col gap-5">
      <Input
        label="Event Name"
        placeholder="Event Name"
        {...getCommonProps('name')}
      />

      <Input
        label="Organizer"
        placeholder="Enter organizer name"
        {...getCommonProps('organizer')}
      />

      <Textarea label="Description" {...getCommonProps('description')} />
    </div>
  );
}
