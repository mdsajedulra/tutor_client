import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Testimonial {
  id: number; // ইউনিক আইডি (Optional)
  name: string; // ব্যবহারকারীর নাম
  comment: string; // মন্তব্য/রিভিউ
  rating?: number; // রেটিং (Optional)
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

const Testmonial = () => {
  return (
    <>
      <Carousel className="w-full md:w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1 text-center">
                <h3 className="text-2xl mb-5">&quot;{testimonial.comment}&quot;</h3>
                <div className="flex items-center justify-center gap-5">
                 <div>
                 <Image
                    height="50"
                    width="50"
                    alt="user image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSeFVyo8KOrksQuHBQjLCyQ9dwuefXulcoWHCvu3-bRDWpOjADk7hHUJ9VZJgoUkMZF4&usqp=CAU"
                  />
                 </div>
                  {testimonial.name}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Testmonial;
