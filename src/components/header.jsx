import React from "react";
import { Button } from "@/components/ui/button";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoReorderThreeOutline } from "react-icons/io5";
import { UserInfo_Axios } from "../constants";
import { addUserInfo, removeUserInfo } from "../store/userSlice";
import { setDialogOpen } from "../store/dialogSlice";

const Header = () => {
  const dispatch = useDispatch();
  const dialogOpen = useSelector((state) => state.dialog.open);
  const user = useSelector((state) => state.user.userInfo);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(UserInfo_Axios, {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });

        dispatch(addUserInfo(userInfo.data));
        dispatch(setDialogOpen(false));
      } catch (error) {
        console.error("Google Auth Error:", error);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  const handleSignIn = () => {
    if (!user) {
      dispatch(setDialogOpen(true));
      return;
    }
  };

  const handleLogout = () => {
    googleLogout();
    dispatch(removeUserInfo());
    window.location.href = "/";
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 shadow-sm overflow-x-hidden">
        <div className="flex items-center gap-2">
          <img
            src="/vite.svg"
            alt="logo"
            className="h-10 w-10 md:w-15 md:h-15 size-10 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
          <h1 className="text-xs md:text-xl font-bold font-serif text-[#8046FD]">
            ToDo
          </h1>
        </div>

        <div>
          <Dialog
            open={dialogOpen}
            onOpenChange={(isOpen) => dispatch(setDialogOpen(isOpen))}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>.</DialogTitle>
                <DialogDescription>
                  <img src="./vite.svg" alt="logo" />
                  <h2 className="text-2xl font-serif font-bold mt-5">
                    Sign in to continue
                  </h2>
                  <p>Please sign in with Google authentication securely</p>
                </DialogDescription>
              </DialogHeader>
              <Button
                onClick={() => login()}
                className={
                  "text-md mt-5 flex gap-4 items-center w-full cursor-pointer"
                }>
                {" "}
                <FcGoogle className="h-6 w-6" /> Sign in with Google{" "}
              </Button>
            </DialogContent>
          </Dialog>

          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center md:gap-5 gap-2">
                <Popover>
                  <PopoverTrigger>
                    <IoReorderThreeOutline className="size-7 md:size-9 cursor-pointer" />
                  </PopoverTrigger>

                  <PopoverContent className="w-57 mx-2">
                    <div className="flex flex-wrap">
                      <img
                        src={user?.picture}
                        alt="user"
                        className="w-8 h-8 md:w-11 md:h-11 rounded-full shadow-xl border-2 border-gray-300 object-cover cursor-pointer"
                      />
                      <h1 className="text-sm px-2 font-bold font-serif py-1 md:py-2">
                        {user?.name}
                      </h1>
                    </div>
                    <p className="text-xs text-gray-500 font-serif py-2">
                      📧 {user?.email}
                    </p>
                    <a href="/">
                      <p
                        className={
                          "cursor-pointer font-bold md:text-lg text-sm font-serif hover:text-blue-700 text-[#8046FD]"
                        }
                        size={"sm"}>
                        Home
                      </p>
                    </a>

                    <a href="/about">
                      <p
                        className={
                          "cursor-pointer font-bold md:text-lg text-sm font-serif hover:text-blue-700 text-[#8046FD]"
                        }
                        size={"sm"}>
                        About
                      </p>
                    </a>

                    <a href="/profile">
                      <p
                        className={
                          "cursor-pointer font-bold md:text-lg text-sm font-serif hover:text-blue-700 text-[#8046FD]"
                        }
                        size={"sm"}>
                        Creator
                      </p>
                    </a>

                    <a href="/">
                      <p
                        onClick={handleLogout}
                        className={
                          "cursor-pointer font-bold w-13 text-sm md:text-lg font-serif hover:text-blue-700 text-[#8046FD]"
                        }
                        size={"sm"}>
                        Logout
                      </p>
                    </a>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <div className="flex items-center md:gap-5 gap-2">
                <a href="/about">
                  <p
                    className={
                      "cursor-pointer font-bold md:text-lg text-sm font-serif hover:text-blue-700 text-[#8046FD]"
                    }
                    size={"sm"}>
                    About
                  </p>
                </a>
                <Button
                  onClick={handleSignIn}
                  className={
                    "cursor-pointer w-13 md:w-20 md:h-8 h-6 text-xs md:text-sm font-serif"
                  }
                  size={"sm"}>
                  Sign In
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
