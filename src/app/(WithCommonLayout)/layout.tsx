import Navbar from "@/components/sheared/home/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default layout;
