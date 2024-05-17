//Link
import Link from "next/link";

//next hooks
import { usePathname } from "next/navigation";

//framer motion
import { motion } from "framer-motion";

const Links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "My project" },
  { path: "/contact", name: "Contact" },
];

const Nav = ({ containerStyles, LinkStyles, underLineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${LinkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100" }}
                animate={{ y: 0 }}
                transtition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
