import Image from "next/image";

export default function BecomeTutorCard() {
  return (
  <div className="container mx-auto">
      <div className="w-full conatiner mx-auto rounded-2xl overflow-hidden relative group">
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src="/become-teacher.webp"
          alt="Become a Tutor"
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>

      {/* Overlay Card */}
      <div className="absolute bottom-5 right-5 bg-[#FFD6C9] p-6 rounded-2xl max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-2">
          You can become a great tutor too!
        </h2>
        <p className="text-gray-800 mb-4">
          Share your knowledge, live off your passion and become your own boss
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
          Find out more <span>⭐</span>
        </button>
      </div>
    </div>
  </div>
  );
}
