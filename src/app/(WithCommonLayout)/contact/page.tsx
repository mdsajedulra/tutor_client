"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email.includes("@") || !form.message) {
      toast.error("⚠️ Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    // Fake API request
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-t from-green-400 to-w  py-20 text-center">
        <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
        <p className="text-lg opacity-90">
          We’d love to hear from you. Reach out with any questions or feedback!
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
            <MapPin className="w-6 h-6 text-green-500" />
            <div>
              <p className="font-medium">Our Office</p>
              <p className="text-gray-600">123 TutorLink Street, Dhaka</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
            <Mail className="w-6 h-6 text-green-500" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">support@tutorlink.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
            <Phone className="w-6 h-6 text-green-500" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+880 1234-567890</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902424960597!2d90.3912!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b1c3e9e0b9%3A0xb0bfa46a9e9d1b6d!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className="min-h-[120px]"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
