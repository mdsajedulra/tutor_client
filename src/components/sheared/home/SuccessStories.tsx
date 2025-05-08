'use client'
import { motion } from 'framer-motion'

const stories = [
  {
    name: 'Ahmed Raza',
    feedback: 'With the help of TutorLink, I improved my math grades from C to A within 2 months. Highly recommend!',
    subject: 'Mathematics'
  },
  {
    name: 'Zainab Ali',
    feedback: 'My spoken English and confidence grew tremendously. Thanks to my amazing online tutor!',
    subject: 'English'
  }
]

export function SuccessStories() {
  return (
    <section className="px-6 md:px-20 py-14 bg-gray-100">
      <h2 className="text-3xl font-bold mb-10 text-center">Success Stories from Students</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-gray-700 italic mb-4">“{story.feedback}”</blockquote>
            <p className="font-semibold text-sm text-blue-600">— {story.name}, {story.subject}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
