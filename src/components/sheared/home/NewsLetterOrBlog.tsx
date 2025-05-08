'use client'
import { motion } from 'framer-motion'

export function NewsletterOrBlog() {
  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-tr from-white to-blue-50">
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4">Stay Updated with TutorLink</h2>
        <p className="text-gray-600 mb-6">
          Get learning tips, tutor highlights, and more. Join our newsletter!
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-md w-full md:w-64"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  )
}
