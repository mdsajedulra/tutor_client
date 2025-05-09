'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const tutorTestimonials = [
  {
    name: 'Fatima Khan',
    subject: 'Biology',
    feedback: 'TutorLink helped me reach more students in less time. The platform is easy to use and student matching is great!',
    image: 'https://t4.ftcdn.net/jpg/09/37/59/67/360_F_937596700_JRPvP1Z4rz0RhfJQE3BU45ldBMnWkw4j.jpg' 
  },
  {
    name: 'Ali Raza',
    subject: 'Mathematics',
    feedback: 'The ability to set my own schedule and interact with students directly made tutoring on TutorLink a breeze!',
    image: 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'
  }
]

export function TutorTestimonials() {
  return (
    <section id="tutorReview" className="px-6 md:px-20 py-14 bg-gray-100">
      <h2 className="text-3xl font-bold mb-3 text-center">
        Why You Should Become a Tutor on TutorLink
      </h2>
      <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        Hear from real tutors who are growing their careers, reaching more students, and loving the flexibility TutorLink offers. Whether you are just starting out or have years of experience, TutorLink gives you the tools and exposure to succeed.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {tutorTestimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
            <Image
                src={testimonial.image?testimonial.image:'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'}
                alt={testimonial.name}
                width={250}
                height={250}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-blue-600">{testimonial.subject} Tutor</p>
              </div>
            </div>
            <blockquote className="text-gray-700 italic">“{testimonial.feedback}”</blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
