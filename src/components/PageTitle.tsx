'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function PageTitle({ title }: { title: string }) {
  const router = useRouter();

  return (
    <div className="flex gap-5 items-center">
      <Button isIconOnly onClick={() => router.back()}>
        <i className="ri-arrow-left-line"></i>
      </Button>

      <h1 className="text-2xl font-semibold text-gray-600">{title}</h1>
    </div>
  );
}
