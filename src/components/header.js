import React from "react";
import classNames from "classnames";

const Header = () => {
  return (
    <header className="z-50 h-[66px] flex justify-center align-middle fixed top-10 w-full">
      <div className="flex justify-end gap-16 container h-full items-center">
        {links.map((link) => (
          <a
            className={classNames({
              "rounded-xl px-4 py-2 font-medium text-black bg-white hover:opacity-80 transition-opacity":
                link.contact,
              "text-white font-semibold": !link.contact,
            })}
            href="/"
            key={link.title}
          >
            {link.title}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

const links = [
  { title: "About me", contact: false },
  { title: "Skills", contact: false },
  { title: "Portfolio", contact: false },
  { title: "Contact Me", contact: true },
];
