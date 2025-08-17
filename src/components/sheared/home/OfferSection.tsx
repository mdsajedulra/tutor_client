import { Button } from "@/components/ui/button";
import Link from "next/link";

// app/components/OfferSection.tsx
export default function OfferSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white py-16">
      <div className="mx-auto container px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 Special Offers</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Join TutorLink today and enjoy exclusive benefits for students and
          tutors. Don’t miss out on these limited-time offers!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl border bg-white p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              🔥 Free Trial Classes
            </h3>
            <p className="text-gray-600 mb-4">
              New students can book their first 2 classes completely free.
            </p>
            <Button className="w-full rounded text-white py-2  transition">
              <Link href={"/signupstudent"}>Claim Now</Link>
            </Button>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border bg-white p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              💡 Tutor Registration Bonus
            </h3>
            <p className="text-gray-600 mb-4">
              New tutors enjoy 0% commission during their first month.
            </p>
            <Button className="w-full rounded text-white py-2  transition">
              <Link href={"/signuptutor"}>Join as Tutor</Link>
            </Button>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border bg-white p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">📚 Refer & Earn</h3>
            <p className="text-gray-600 mb-4">
              Refer a friend and both of you will receive discount credits.
            </p>
            <Button className="w-full rounded  text-white py-2  transition">
              Refer a Friend
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
