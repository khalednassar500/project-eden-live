import styles from "@/styles/NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Nav = () => {
  const router = useRouter();
  const [scrollState, setScrollState] = useState(false);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <button className={styles.resContactBtn}>
        <img src="/assets/icons/smart-contact.svg" alt="logo" />
      </button>
      <nav
        className={`${styles.nav} ${scrollState ? styles.navScrolling : ""}  ${
          showNav ? styles.showNav : ""
        }`}
      >
        <button
          className={`${styles.resNavBtn} ${
            showNav ? styles.showResNavBtn : ""
          }`}
          onClick={() => setShowNav(!showNav)}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className={styles.navLogo}>
          <img src="/assets/icons/logo.svg" alt="logo" />
          <p>
            Eden <br />
            Live
          </p>
        </div>
        <div className={styles.navLinks}>
          <Link
            href="/"
            className={router.pathname === "/" && styles.activeLink}
          >
            home
          </Link>
          <a
            href="#"
            className={router.pathname === "/services" && styles.activeLink}
          >
            services
          </a>
          <a
            href="#"
            className={router.pathname === "/about" && styles.activeLink}
          >
            about
          </a>
        </div>
        <div className={styles.navContact}>
          <button className={styles.topSearchBtn}>
            <img src="/assets/icons/smart-search.svg" />
          </button>
          <Link href="/contact" className={styles.topContactUs}>
            <span>contact us</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
