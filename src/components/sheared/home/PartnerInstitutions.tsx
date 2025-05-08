'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'OpenLearn',
    logo: 'https://business-school.open.ac.uk/sites/business-school.open.ac.uk/files/images/logos/open-learn-logo.png'
  },
  {
    name: 'Khan Academy',
    logo: 'https://cdn.kastatic.org/images/khan-logo-vertical-transparent.png'
  },
  {
    name: 'Coursera',
    logo: 'https://logos-world.net/wp-content/uploads/2023/08/Coursera-Logo.png'
  },
  {
    name: 'EdX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/EdX.svg/2560px-EdX.svg.png'
  },
  {
    name: 'FutureLearn',
    logo: 'https://w7.pngwing.com/pngs/527/133/png-transparent-future-learn-hd-logo.png'
  }
]

export function PartnerInstitutions() {
  return (
    <section className="px-6 md:px-20 py-14 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">
        Trusted by Educators Across the Country
      </h2>
      <p className="text-center text-gray-600 mb-10">
        TutorLink is proud to collaborate with institutions and platforms that value quality education.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
        {partners.map((partner, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={250} height={250}
              className="h-14 max-w-[120px] object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

