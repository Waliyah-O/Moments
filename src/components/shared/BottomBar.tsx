import { Link, useLocation } from "react-router-dom";

import { bottomBarLinks } from "@/constants";

const BottomBar = () => {
  const pathname = useLocation();

  return (
    <section className="bottom-bar">
      {" "}
      {bottomBarLinks.map((link) => {
        const isActive = pathname.pathname === link.route;

        return (
          <Link
            to={link.route}
            // className=" group flex gap-4 items-center p-4"
            key={link.label}
            className={`rounded-[10px] flex-center flex-col gap-1 py-2 px-4 transition ${
              isActive && "bg-primary-500 "
            }`}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              // width={16}
              // height={16}
              className={` ${isActive && "invert-white"}`}
            />
            <p className="tine-medium text-light-2">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default BottomBar;
