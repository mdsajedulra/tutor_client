import BookingRequest from "./BookingRequest";
import ManageProfile from "./ManageProfile";
import Top from "./Top";

const Dashboard = () => {
  return (
    <>
      <div className="w-full">
        <div>
          <Top />
        </div>
        <div className="flex justify-around">
          <div className="w-">
            <h1 className="text-2xl mb-4 font-bold">Manage Profile</h1>

            <ManageProfile />
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
