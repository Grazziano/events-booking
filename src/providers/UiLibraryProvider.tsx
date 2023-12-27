'use client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { IChildrenProps } from '@/interfaces';

export default function UiLibraryProvider({ children }: IChildrenProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
