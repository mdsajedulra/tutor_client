import BookingRequest from "./BookingRequest";

import Top from "./Top";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

const Dashboard = () => {
  return (
    <>
      <div className="w-full">
        <div>
          <Top />
        </div>
        <div className="flex justify-around">
          <div className="w-full">
            {/* <UpdateProfile /> */}
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-bold">Booking Request</h1>
            <BookingRequest />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
