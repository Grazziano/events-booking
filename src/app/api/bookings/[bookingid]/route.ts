import { connectDB } from '@/config/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import BookingModel from '@/models/booking-model';
import { auth } from '@clerk/nextjs';

connectDB();

interface EventParams {
  params: {
    bookingid: string;
  };
}

export async function PUT(request: NextRequest, { params }: EventParams) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const reqBody = await request.json();

    await BookingModel.findByIdAndUpdate(params.bookingid, reqBody);

    return NextResponse.json(
      { message: 'Booking updated successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: EventParams) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await BookingModel.findByIdAndDelete(params.bookingid);

    return NextResponse.json(
      { message: 'Booking deleted successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
