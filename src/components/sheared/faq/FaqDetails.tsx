"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FaqDetails = () => {
  const faqData = {
    Tutoring: [
      {
        question: "How do I find a tutor?",
        answer:
          "You can search tutors by subject, location, and rating using our tutor directory.",
      },
      {
        question: "What subjects are available?",
        answer:
          "We offer tutoring in math, science, languages, computer science, and more.",
      },
      {
        question: "Are tutors verified?",
        answer:
          "Yes, all tutors are verified through background checks and qualification reviews.",
      },
    ],
    Payments: [
      {
        question: "How are payments processed?",
        answer: "Payments are securely processed via Stripe or PayPal.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Yes, you can request a refund if you're not satisfied, within 24 hours after the session.",
      },
      {
        question: "Is my payment info secure?",
        answer:
          "Absolutely. We use encryption and industry-standard security protocols.",
      },
    ],
    "Account Management": [
      {
        question: "How do I reset my password?",
        answer: "Go to your account settings and click 'Reset Password'.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, contact support or use the delete option in your profile settings.",
      },
      {
        question: "How do I update my profile?",
        answer:
          "You can update your profile information from your dashboard anytime.",
      },
    ],
  };

  const categories = Object.keys(faqData) as Array<keyof typeof faqData>;

  const [activeCategory, setActiveCategory] =
    useState<keyof typeof faqData>("Tutoring");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-16 bg-gray-50 text-gray-900 text-center min-h-screen">
      <h2 className="text-4xl font-bold mb-2">FAQ</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Answers to frequently asked questions about the platform and its
        services.
      </p>

      {/* Category Buttons */}
      <div className="inline-flex rounded-lg overflow-hidden border border-gray-300 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setOpenIndex(null); // close any open question on category change
            }}
            className={`px-4 py-2 font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-blue-100 text-blue-800"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="w-1/2 mx-auto text-left">
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          {faqData[activeCategory].map((item, index) => (
            <div
              key={index}
              className="border-b pb-4 last:border-none last:pb-0"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left font-medium text-lg text-gray-800 hover:text-blue-600 transition"
              >
                {item.question}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-600 mt-2 overflow-hidden"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Ask a Question Section */}
      <div className="mt-20 max-w-2xl mx-auto bg-gray-200 p-8 rounded-xl shadow-md text-left">
        <h3 className="text-2xl font-bold text-center mb-4">
          Still have a question?
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Can’t find the answer you’re looking for? Let us know and we will get
          back to you.
        </p>
        <form className="space-y-4 flex flex-col">
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-white p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md bg-white p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Question
            </label>
            <textarea
              rows={4}
              className="mt-1 block w-full rounded-md bg-white p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ask your question here..."
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-1/2 max-w-md bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FaqDetails;