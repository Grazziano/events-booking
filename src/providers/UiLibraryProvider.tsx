'use client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { IChildrenProps } from '@/interfaces';
import { Toaster } from 'react-hot-toast';

export default function UiLibraryProvider({ children }: IChildrenProps) {
  return (
    <NextUIProvider>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </NextUIProvider>
  );
}
