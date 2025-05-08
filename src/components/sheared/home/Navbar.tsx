// "use client";
// import { useState } from "react";
// import { Book, Menu, Search, User, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Avater } from "./avater";
// import { Button } from "@/components/ui/button";
// import { MegaMenu } from "./Megamenu";

// export default function Navbar() {
//   const pathName = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Find Tutor", href: "/tutor" },
//     { name: "About Us", href: "/about" },
//     { name: "FAQ", href: "/faq" },
//     { name: "Blogs", href: "/blog" },
//   ];

//   return (
//     <div>
//       <header className="w-full border-b py-4">
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <Book className="h-8 w-8 text-tutor-primary" />
//             <span className="text-2xl font-display font-bold text-tutor-primary">
//               TutorLink
//             </span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-6">
//             {navItems.map((nav, index) => (
//               <Link
//                 key={index}
//                 href={nav.href}
//                 className="font-medium hover:text-tutor-primary transition-colors"
//               >
//                 {" "}
//                 {nav?.name}{" "}
//               </Link>
              
//             ))}
//             <MegaMenu/>
//             {/* <Link href="/" className="font-medium hover:text-tutor-primary transition-colors">
//             Home
//           </Link>
//           <Link href="/tutors" className="font-medium hover:text-tutor-primary transition-colors">
//             Find Tutors
//           </Link>
//           <Link href="/about" className="font-medium hover:text-tutor-primary transition-colors">
//             About Us
//           </Link>
//           <Link href="/blog" className="font-medium hover:text-tutor-primary transition-colors">
//             Blog
//           </Link>
//           <Link href="/faq" className="font-medium hover:text-tutor-primary transition-colors">
//             FAQ
//           </Link> */}
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button
//               variant="outline"
//               className="hidden md:flex gap-2 items-center"
//             >
//               <User size={18} />
//               <Link href="/login">
//                 <span>Sign In</span>
//               </Link>
//             </Button>
//             <Link href="/signupstudent">
//               <Button variant="outline">Sign Up as Student</Button>
//             </Link>
//             <Link href="/signuptutor">
//               <Button>Become a Tutor</Button>
//             </Link>

//             <Button variant="ghost" size="icon" className="md:hidden">
//               <Search size={20} />
//             </Button>
//             <Button variant="ghost" size="icon" className="md:hidden">
//               <User size={20} />
//             </Button>
//           </div>
//         </div>
//       </header>
//       <div>
//         <nav className="p-4 shadow-md bg-white">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold text-blue-600">
//               <Link href="/">TutorLin 🎓</Link>
//             </div>

//             {/* Desktop menu */}
//             <div className="hidden md:flex gap-6 items-center">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`hover:text-blue-600 transition ${
//                     pathName === item.href ? "text-blue-500 font-semibold" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {
//                 // second nave bar
//               }
//               <Avater />
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button onClick={() => setIsOpen(!isOpen)}>
//                 {isOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile menu dropdown */}
//           {isOpen && (
//             <div className="flex flex-col mt-4 space-y-2 md:hidden">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`block px-2 py-1 hover:bg-blue-100 rounded ${
//                     pathName === item.href ? "text-blue-600 font-semibold" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="mt-2">
//                 <Avater />
//               </div>
//             </div>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// }



"use client"

import { Menu } from "lucide-react";
import Link from "next/link";


import { Avater } from "./avater";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {

  const pathName = usePathname();
  return (
    <nav className="flex items-center justify-between p-4  shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href={"/"}>TutorLink 🎓</Link>
      </div>

      {/* Search Bar */}
     

      {/* Buttons */}

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/tutor">
          <Button variant="outline"
          className={pathName === '/tutor'?"bg-blue-400 text-white text-bold":""}
          >View All Tutor</Button>
        </Link>


        <Link href="/about">
          <Button variant="outline"
          className={pathName === '/about'?"bg-blue-400 text-white text-bold":""}
          >About Us</Button>
        </Link>

        <Link href="/faq">
          <Button variant="outline"
          className={pathName === '/faq'?"bg-blue-400 text-white text-bold":""}
          >FAQ</Button>
        </Link>

        <Link href="/blog">
          <Button variant="outline"
          className={pathName === '/blog'?"bg-blue-400 text-white text-bold":""}
          >Blogs</Button>
        </Link>
      </div>


      <div>
        {/* <ModeToggle /> */}
      </div>
      <Avater />
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu className="h-6 w-6" />
      </div>
      <div className="md:hidden"></div>
    </nav>
  );
}