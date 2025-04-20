"use client"
import { TutorCard } from "@/components/sheared/tutor/TutorCard";
import { useGetTutorQuery } from "@/lib/redux/api/tutorApi";

const Page = () => {
    const { data } = useGetTutorQuery({});
    
    // Check if data exists before mapping
    if (!data) return <div>Loading...</div>;

    return (
        <>
        <div className="my-20 text-center text-5xl" >Find the
perfect tutor
</div>
           <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2  gap-5 my-10 justify-items-center ">
    
           {data.map((tutor: any) => (
                <TutorCard key={tutor.id} tutor={tutor} />
            ))}
           </div>
        </>
    );
};

export default Page;