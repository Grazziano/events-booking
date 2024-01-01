import React, { useState } from 'react';
import { Button, Modal, ModalContent } from '@nextui-org/react';
import {
  PaymentElement,
  AddressElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface PaymentModalProps {
  showPaymentModal: boolean;
  setShowPaymentModal: (show: boolean) => void;
}

export default function PaymentModal({
  showPaymentModal,
  setShowPaymentModal,
}: PaymentModalProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    setLoading(true);

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_DOMAIN!}`,
      },
      redirect: 'if_required',
    });

    setLoading(false);

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)

      toast.error(result.error.message!);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.

      toast.success('Payment Successfull');
      router.push('/bookings');
    }
  };

  return (
    <Modal
      isOpen={showPaymentModal}
      onClose={() => setShowPaymentModal(false)}
      size="xl"
    >
      <ModalContent>
        <h1 className="text-gray-500 text-3xl">Complete your Payment</h1>

        <form className="p-5" onSubmit={handleSubmit}>
          <PaymentElement />
          <AddressElement
            options={{
              allowedCountries: ['US'],
              mode: 'shipping',
            }}
          />

          <div className="flex justify-end gap-5 mt-5">
            <Button type="button">Cancel</Button>
            <Button color="primary" type="submit" isLoading={loading}>
              Pay
            </Button>
          </div>
        </form>
      </ModalContent>
    </Modal>
  );
}
