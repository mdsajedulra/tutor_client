"use client";
import { motion } from "framer-motion";
import { Props } from "./HeroSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopTutors({ tutors }: Props) {
  const topTutors = [...tutors]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 3);

  return (
    <section className="px-6 md:px-20 py-10 bg-gradient-to-br from-sky-100 to-white">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Top Featured Tutors
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {topTutors.map((tutor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <Image
              src={
                tutor.image
                  ? tutor.image
                  : "https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png"
              }
              alt="Tutor Image"
              width={250}
              height={250}
              className="w-24 h-24 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold">
              {tutor.name ? tutor.name : "Abc"}
            </h3>
            <p className="text-gray-600 mt-1">{tutor.subjects}</p>
            <p className="text-yellow-500 mt-2">⭐ {tutor.ratings}</p>

            <Button
              asChild
              className="mt-6 px-4 py-1 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm"
            >
              <Link href={`/tutor/${tutor._id}`}>View Profile</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
