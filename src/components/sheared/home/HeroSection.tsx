import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HeroSection() {
  return (
  <div className=" w-full">
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-50">
      {/* Main Text */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700">
        Find Your Perfect Tutor Today!
      </h1>

      {/* Sub Text */}
      <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl">
        Discover top tutors by subject, grade, or name. Learn from the best and achieve your goals!
      </p>

      {/* Search Bar */}
      <div className="flex w-full max-w-xl gap-2">
        <Input placeholder="Search by subject, grade, or tutor name..." className="bg-white" />
        <Button>Search</Button>
      </div>

      {/* Call to Action Button */}
      <div className="mt-8">
        <Link href={"/tutor"}>
        <Button className="px-6 py-3 text-lg">Get Started</Button></Link>
      </div>
    </section>
  </div>
  );
}
