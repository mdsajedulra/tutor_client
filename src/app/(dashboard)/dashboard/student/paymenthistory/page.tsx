"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { paymentHistory } from "@/services/Payment";
import { useEffect, useState } from "react";

interface IPaymentHistory {
  bookingId: string;
  selectedHours: number;
  selectedMonths: number;
  status: string;
  totalHours: number;
  totalPrice: number;
  student: {
    name: string;
    email: string;
  };
  transaction: {
    id: string;
    method: string;
    bank_status: string;
    date_time: string;
  };
  createdAt: string;
}

const Page = () => {
  const { user } = useUser();
  const [data, setData] = useState<IPaymentHistory[] | null>(null);

  useEffect(() => {
    const getPaymentHistory = async () => {
      const res = await paymentHistory(user?.email as string);
      setData(res?.data);
    };
    if (user?.email) {
      getPaymentHistory();
    }
  }, [user?.email]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <span className="badge badge-success">Paid</span>;
      case "Pending":
        return <span className="badge badge-warning">Pending</span>;
      default:
        return <span className="badge badge-error">Failed</span>;
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="p-4 ">
        <h2 className="text-xl font-bold mb-4">Booking List</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Total Hours</TableCell>
              <TableCell>Total Price (BDT)</TableCell>
              <TableCell>Transaction Method</TableCell>
              <TableCell>Bank Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>{item.bookingId.slice(-4)}</TableCell>
                <TableCell>{item.student.name}</TableCell>
                <TableCell>{item.student.email}</TableCell>
                <TableCell>{item.totalHours}</TableCell>
                <TableCell>{item.totalPrice} BDT</TableCell>
                <TableCell>{item.transaction.method}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>{new Date(item.transaction.date_time).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Page;
