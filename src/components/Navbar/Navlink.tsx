import React from "react";
import Link from "next/link";

export default function Navlink({
  title,
  href,
  pathname,
}: {
  title: string;
  href: string;
  pathname?: string;
}) {
  return (
    <Link
      key={title}
      href={href}
      className={`min-w-16 p-3 text-center ${
        pathname === href && "rounded-xl bg-white text-black"
      }`}
    >
      {title}
    </Link>
  );
}
