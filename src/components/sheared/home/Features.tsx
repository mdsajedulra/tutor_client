import { CheckCircle, CreditCard, Search } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Why Choose TutorLink?
        </h2>
        <p className="text-gray-600 mt-4">
          Find tutors easily, pay securely, and trust verified profiles.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg w-full md:w-1/3">
          <Search className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Find Tutors Fast</h3>
          <p className="text-gray-600">
            Quickly discover the best tutors for your needs by subject, grade,
            and reviews.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg w-full md:w-1/3">
          <CreditCard className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p className="text-gray-600">
            Pay confidently with SSL-secured transactions through trusted
            gateways.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-6 shadow-md rounded-lg w-full md:w-1/3">
          <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
          <p className="text-gray-600">
            All tutors are background-checked and verified for your peace of
            mind.
          </p>
        </div>
      </div>
    </section>
  );
}
