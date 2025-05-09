/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const stats = [
  { icon: '👨‍🏫', title: 'Verified Tutors', count: 800, label: 'Tutors' },
  { icon: '📚', title: 'Subjects Covered', count: 1200, label: 'Subjects' },
  { icon: '🧑‍🎓', title: 'Students Served', count: 15000, label: 'Students' }
]

function AnimatedCounter({ count }:any) {
  const [currentCount, setCurrentCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCount < count) {
        setCurrentCount(prev => prev + 100)
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [count, currentCount])

  return <span>{currentCount}</span>
}

export function TutorStatistics() {
  return (
    <section id='statistics' className="px-6 md:px-20 py-14 bg-blue-50">
      <h2 className="text-3xl font-bold mb-10 text-center">TutorLink in Numbers</h2>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 text-4xl mb-3 mx-auto">{stat.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{stat.title}</h3>
            <p className="text-2xl font-semibold">
              <AnimatedCounter count={stat.count} />+
            </p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
