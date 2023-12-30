import React from 'react';
import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="flex h-screen fixed justify-center items-center inset-0">
      <Spinner size="lg" />
    </div>
  );
}
