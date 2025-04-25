import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "রাহুল সরকার",
    comment:
      "এই সার্ভিসের মাধ্যমে আমার ব্যবসায় অনেক উন্নতি হয়েছে! দারুণ সাপোর্ট।",
    rating: 5,
  },
  {
    id: 2,
    name: "প্রিয়া মিত্র",
    comment: "অভিজ্ঞতা অসাধারণ ছিল। খুব দ্রুত এবং নির্ভরযোগ্য।",
    rating: 4,
  },
  {
    id: 3,
    name: "অমিত সাহা",
    comment: "সাশ্রয়ী মূল্যে ভালো মানের সার্ভিস। আবার নেব ইনশাআল্লাহ।",
  },
];

const Testimonial = () => {
  return (
    <div className="my-20 px-4 sm:px-6 lg:px-8">
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="flex justify-center">
              <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md text-center">
                <p className="text-lg italic mb-4">“{testimonial.comment}”</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <Image
                    height={50}
                    width={50}
                    alt="user image"
                    className="rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSeFVyo8KOrksQuHBQjLCyQ9dwuefXulcoWHCvu3-bRDWpOjADk7hHUJ9VZJgoUkMZF4&usqp=CAU"
                  />
                  <span className="font-semibold text-gray-700">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonial;
