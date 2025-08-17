/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const BlogDetails = ({ data }: any) => {
  //('blog', data);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = data?.filter(
    (post: any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}

      <div>
        <h1 className="mt-12 text-3xl md:text-5xl font-bold text-center">
          Our Blogs
        </h1>
      </div>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts?.map((post: any, index: number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <Button className="ml-auto px-4 py-2 rounded-lg  transition-colors">
                    Read More
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default BlogDetails;
