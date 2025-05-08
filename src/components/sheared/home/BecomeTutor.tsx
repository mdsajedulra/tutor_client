'use client'
import { motion } from 'framer-motion'

export function BecomeTutor() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center bg-blue-100 rounded-2xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4">Become a Tutor on TutorLink</h2>
        <p className="text-gray-700 mb-6">
          Join our platform to connect with students, grow your income, and share your knowledge. No commission cuts.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Join as a Tutor
        </button>
      </motion.div>
    </section>
  )
}