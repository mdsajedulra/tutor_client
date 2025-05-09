'use client'
import { motion } from 'framer-motion'
import { Search, Users, MessageSquare, GraduationCap } from 'lucide-react'

const steps = [
  { title: 'Search', icon: <Search size={24} />, description: 'Find tutors based on subject, level, or rating.' },
  { title: 'Compare', icon: <Users size={24} />, description: 'Compare tutor profiles and select your match.' },
  { title: 'Contact', icon: <MessageSquare size={24} />, description: 'Message tutors to discuss your needs.' },
  { title: 'Learn', icon: <GraduationCap size={24} />, description: 'Start your learning journey with confidence.' },
]

export default function HowItWorks() {
  return (
    <section id='howworks' className="px-6 md:px-20 py-14 bg-gray-100">
      <h2 className="text-3xl font-bold mb-12 text-center">How TutorLink Works</h2>
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 mb-4">{step.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
            <p className="text-sm text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
