import BookingRequest from "@/components/modules/dashboard/tutor/BookingRequest";

const Page = async () => {
  return (
    <>
    <div className="flex flex-col items-center w-full">
    <div className="font-bold text-2xl my-10">Booking Request</div>
    <BookingRequest />
    </div>
    </>
  );
};

export default Page;
