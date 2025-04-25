"use client";
import Loader from "@/components/sheared/spinner/spinner";
import { Button } from "@/components/ui/button";
import { verifyPayment } from "@/services/Payment";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface OrderData {
  order_id: string;
  amount: number;
  name: string;
  email: string;
  method: string;
  bank_status: string;
  date_time: string;
}

const ThankYou = () => {
  const [order, setOrder] = useState<OrderData | null>(null);
  const orderId = useSearchParams().get("order_id");

  useEffect(() => {
    const getVerifyData = async () => {
      const res = await verifyPayment(orderId as string);
      const orderData: OrderData = res?.data?.[0];
      setOrder(orderData);
    };
    if (orderId) getVerifyData();
  }, [orderId]);

  if (!order) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl rounded-2xl shadow-lg bg-white p-8">
        {order?.bank_status == "Failed" ? (
          <div>
            {" "}
            <h2 className="text-red-600 text-3xl font-semibold text-center mb-2">
              ❌ Opps!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Payment failed try again from begain
            </p>
          </div>
        ) : (
          <div>
            {" "}
            <h2 className="text-green-600 text-3xl font-semibold text-center mb-2">
              🎉 Thank You!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Your order has been placed successfully.
            </p>
          </div>
        )}

        <div className="border-t border-gray-200 mt-4 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Order ID:</span> {order.order_id}
          </div>
          <div>
            <span className="font-semibold">Date:</span> {order.date_time}
          </div>
          <div>
            <span className="font-semibold">Name:</span> {order.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {order.email}
          </div>
          <div>
            <span className="font-semibold">Total Price:</span> ${order.amount}
          </div>
          <div>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`ml-2 inline-block px-2 py-1 rounded-full text-xs font-medium ${
                order.bank_status === "Success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {order.bank_status}
            </span>
          </div>
          <div>
            <span className="font-semibold">Payment Method:</span>{" "}
            {order.method}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button>
            <Link href="/dashboard/student/booking">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
