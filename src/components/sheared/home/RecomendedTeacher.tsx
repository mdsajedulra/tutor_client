import { getTutor } from "@/services/Tutor";
import { TutorCard } from "../tutor/TutorCard";
import { Tutor } from "@/types";

async function RecomendedTeacher() {
  const tutor = await getTutor();
  const recomendedByFindTutor = tutor.data.slice(0, 8);

  //(recomendedByFindTutor);

  return (
    <div className="container mx-auto py-20 px-4 md:py-32">
      <div>
        <h1 className="mb-12 text-3xl md:text-5xl font-bold text-center">
          Top Rated Tutors
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 sm:gap-8 md:gap-10">
        {recomendedByFindTutor.map((tutors: Tutor) => (
          <TutorCard key={tutors._id} tutor={tutors} />
        ))}
      </div>
    </div>
  );
}

export default RecomendedTeacher;
