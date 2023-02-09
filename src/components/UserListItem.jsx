import React from "react";
import { NavLink } from "react-router-dom";

const UserListItem = ({ user, handleScrollClick }) => {
  const notActiveClass =
    "mt-3 px-4 shadow-md bg-slate-100 w-full py-3 cursor-pointer rounded-sm flex items-center relative transition-all duration-100 ease-in before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-full before:bg-gray-200/70 before:-z-10 z-10 before:transition-all before:duration-200 before:rounded-sm hover:before:w-full hover:-translate-y-[2px]";
  const activeClass =
    "bg-gray-200 mt-3 px-4 shadow-md w-full py-3 cursor-pointer rounded-sm flex items-center relative transition-all duration-100 ease-in before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-full before:bg-gray-200/70 before:-z-10 z-10 before:transition-all before:duration-200 before:rounded-sm hover:before:w-full hover:-translate-y-[2px]";

  return (
    <div onClick={handleScrollClick}>
      <NavLink
        to={`/user/${user.id}`}
        className={({ isActive }) => (isActive ? activeClass : notActiveClass)}
      >
        <div>
          <img
            src={`https://ui-avatars.com/api/?name=${user.profile.firstName}+${user.profile.lastName}?background=random?font-size=0.33`}
            alt="user-avatar"
            className="rounded-full w-11 md:w-12"
          />
        </div>
        <p className="ml-3 font-semibold">
          {user.profile.firstName} {user.profile.lastName}
        </p>
      </NavLink>
    </div>
  );
};

export default UserListItem;
