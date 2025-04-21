import { Button } from "@/components/ui/button";

const BookingRequest = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-20 border p-3 rounded-xl items-center">
        <div>
          <h2>Anthon Oitwale</h2>
          <h2>Sunday 24 at 1.30Pm</h2>
        </div>
        <div>
          <Button>View</Button>
        </div>
      </div>
      <div className="flex gap-20 border p-3 rounded-xl items-center">
        <div>
          <h2>Anthon Oitwale</h2>
          <h2>Sunday 24 at 1.30Pm</h2>
        </div>
        <div>
          <Button>View</Button>
        </div>
      </div>
      <div className="flex gap-20 border p-3 rounded-xl items-center">
        <div>
          <h2>Anthon Oitwale</h2>
          <h2>Sunday 24 at 1.30Pm</h2>
        </div>
        <div>
          <Button>View</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingRequest;
