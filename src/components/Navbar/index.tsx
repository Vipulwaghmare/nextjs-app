"use client";
import { usePathname, useRouter } from "next/navigation";
import Navlink from "./Navlink";

const linkList = [
  { title: "Homepage", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const session = true;
  const isAdmin = true;

  const onLogout = () => {
    router.push("/login");
  };

  return (
    <div className="h-24 flex justify-between p-2">
      <div>Vipul Waghmare</div>
      <div>
        {linkList.map(({ title, href }) => (
          <Navlink key={title} title={title} href={href} pathname={pathname} />
        ))}
        {session ? (
          isAdmin ? (
            <>
              <Navlink title="Admin" href="/" />
              <button type="button" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : null
        ) : (
          <Navlink title="Login" href="/login" pathname={pathname} />
        )}
      </div>
    </div>
  );
}
