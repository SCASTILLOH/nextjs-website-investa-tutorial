"use client";
import React from "react";
import { navData } from "../constants/index";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>
      {navData.map((link) => (
        <Link
          key={link._id}
          href={link.href}
          className="relative -mx-3 -my-2 px-3 rounded-lg py-2 text-base text-gray-700 transition-colors"
          onMouseEnter={() => setHoverIndex(link._id)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <AnimatePresence>
            {hoverIndex === link._id && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{link.title}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
