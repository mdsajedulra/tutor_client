'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, DollarSign, MessageSquareHeart } from 'lucide-react'

const features = [
  { icon: <ShieldCheck size={28} />, title: 'Verified Tutors', desc: 'All tutors are identity and qualification verified.' },
  { icon: <Clock size={28} />, title: 'Flexible Timing', desc: 'Learn on your schedule, anytime, anywhere.' },
  { icon: <DollarSign size={28} />, title: 'Affordable Pricing', desc: 'Quality education at prices that suit you.' },
  { icon: <MessageSquareHeart size={28} />, title: 'Secure Communication', desc: 'Safe and direct messaging with tutors.' },
]

export function WhyChooseUs() {
  return (
    <section className="px-6 md:px-20 py-14 bg-blue-50">
      <h2 className="text-3xl font-bold mb-10 text-center">Why Choose TutorLink?</h2>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 mb-3 mx-auto">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}