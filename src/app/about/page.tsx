import { BookOpen, Bot, Globe, Smartphone } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      This is the about page
      <div className="bg-gray-50 text-gray-900">
        {/* Hero */}
        <section className="text-center py-16 px-4">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-xl font-semibold text-blue-700">
            Empowering Students, One Connection at a Time
          </p>
          <p className="text-gray-600">
            We bridge to connect students with passionate tutors through
            meaningful connections.
          </p>
        </section>

        {/* Mission */}
        <section className="w-[70%] my-5 mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 py-10 bg-white">
          <Image
            src="https://img.freepik.com/premium-vector/infographic-illustration-concept-teacher-teaching-online_999616-1580.jpg?w=2000"
            alt="Mission Illustration"
            width={400}
            height={250}
            className="rounded"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              Our goal is to connect students with passionate, qualified tutors
              who can guide them toward academic success. We believe in
              accessible, personalized learning for everyone.
            </p>
          </div>
        </section>

        {/* Founders + Stories */}
        <section className="px-6 md:px-20 py-14 bg-gray-100">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Founders */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Meet the Founders</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    name: "John Smith",
                    role: "Co-Founder & CEO",
                    img: "https://png.pngtree.com/png-clipart/20231015/original/pngtree-man-avatar-clipart-illustration-png-image_13302499.png",
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Co-Founder & CTO",
                    img: "https://media.istockphoto.com/vectors/female-emotions-attractive-cartoon-character-vector-id873885996?k=6&m=873885996&s=612x612&w=0&h=7klXglEsyQi04MVRHO6wUvBMRjU6hBDr36rCTV1dqx4=",
                  },
                  {
                    name: "Michael Brown",
                    role: "Co-Founder & CCO",
                    img: "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211469.png",
                  },
                ].map((person) => (
                  <div
                    key={person.name}
                    className="text-center bg-white p-4 rounded shadow"
                  >
                    <div className="mx-auto w-20 h-20 rounded-full bg-gray-200 m-4">
                      <Image
                        src={person.img}
                        alt="person's image"
                        width={250}
                        height={250}
                        className="rounded"
                      />
                    </div>
                    <h4 className="font-semibold">{person.name}</h4>
                    <p className="text-sm text-gray-500">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "James", role: "Student", img: "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211469.png", },
                  { name: "Lisa", role: "Tutor", img: "https://media.istockphoto.com/vectors/female-emotions-attractive-cartoon-character-vector-id873885996?k=6&m=873885996&s=612x612&w=0&h=7klXglEsyQi04MVRHO6wUvBMRjU6hBDr36rCTV1dqx4=", },
                ].map((person) => (
                  <div
                    key={person.name}
                    className="bg-white p-4 rounded shadow text-center"
                  >
                    <div className="mx-auto w-20 h-20 rounded-full bg-gray-200 m-4">
                    <Image
                        src={person.img}
                        alt="person's image"
                        width={250}
                        height={250}
                        className="rounded"
                      />
                    </div>
                    <h4 className="font-semibold">{person.name}</h4>
                    <p className="text-sm text-gray-500">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="text-center py-14 px-6 md:px-20 bg-white">
          <h3 className="text-2xl font-bold mb-4">Vision</h3>
          <p className="max-w-2xl mx-auto text-gray-700 mb-6">
            We envision a future where every learner, no matter their
            background, can find the perfect tutor to help them thrive.
          </p>
          <div className="text-gray-600 max-w-xl mx-auto italic mb-6">
            Thanks to the platform, I improved my grades and gained confidence
            in math.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 bg-gray-50 border rounded flex items-center gap-2 justify-center">
              <BookOpen className="w-10 h-10 text-blue-500" /> Expanding
              Subjects
            </div>
            <div className="p-4 bg-gray-50 border rounded flex items-center gap-2 justify-center">
              <Globe className="w-10 h-10 text-blue-500" /> Global Reach
            </div>
            <div className="p-4 bg-gray-50 border rounded flex items-center gap-2 justify-center">
              <Bot className="w-10 h-10 text-blue-500" /> AI-Driven Matching
            </div>
            <div className="p-4 bg-gray-50 border rounded flex items-center gap-2 justify-center">
              <Smartphone className="w-10 h-10 text-blue-500" /> Mobile App
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
