'use client'
import { motion } from 'framer-motion'
import { BookOpen, Calculator, Atom, Code } from 'lucide-react'

const subjects = [
  { name: 'Mathematics', icon: <Calculator size={28} /> },
  { name: 'Science', icon: <Atom size={28} /> },
  { name: 'English', icon: <BookOpen size={28} /> },
  { name: 'Computer Science', icon: <Code size={28} /> },
]

export default function BrowseBySubject() {
  return (
    <section className="px-6 md:px-20 py-14 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Browse by Subject</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {subjects.map((subject, idx) => (
          <motion.div
            key={subject.name}
            className="w-40 h-40 bg-blue-50 rounded-xl shadow-md flex flex-col items-center justify-center text-center p-4 hover:bg-blue-100 transition cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-2 text-blue-600">{subject.icon}</div>
            <span className="font-medium text-gray-800">{subject.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
