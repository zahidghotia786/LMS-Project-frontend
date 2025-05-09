"use client";
import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";
import DropdownPages from "./DropdownPages";
import DropdownCourses from "./DropdownCourses";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";
import DropdownDashboard from "./DropdownDashboard";
import DropdownEcommerce from "./DropdownEcommerce";

const NavItems = () => {
  const [userExists, setUserExists] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const user = localStorage.getItem("user");
    setUserExists(!!user);
  }, []);

  if (!mounted) return null; // Prevent SSR mismatch

  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
      dropdown: null,
      isRelative: false,
    },
    {
      id: 3,
      name: "Pages",
      path: "/about",
      dropdown: <DropdownPages />,
      isRelative: false,
    },
    {
      id: 4,
      name: "Courses",
      path: "/courses",
      dropdown: <DropdownCourses />,
      isRelative: false,
    },
    ...(userExists
      ? [
          {
            id: 5,
            name: "Dashboard",
            path: "/dashboards/instructor-dashboard",
            dropdown: <DropdownDashboard />,
            isRelative: true,
          },
        ]
      : []),
    {
      id: 6,
      name: "eCommerce",
      path: "/ecommerce/shop",
      dropdown: <DropdownEcommerce />,
      isRelative: true,
    },
  ];

  return (
    <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
      <ul className="nav-list flex justify-center">
        {navItems.map((navItem, idx) => (
          <Navitem key={idx} idx={idx} navItem={{ ...navItem, idx }}>
            <DropdownWrapper>{navItem.dropdown}</DropdownWrapper>
          </Navitem>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
