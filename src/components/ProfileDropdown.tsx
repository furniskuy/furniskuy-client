import { authKey, useLogout } from "@/api/auth";
import { useAuth } from "@/context/AuthProvider";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useQueryClient } from "@tanstack/react-query";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProfileDropdown = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const logout = useLogout({
    onSuccess: () => {
      queryClient.invalidateQueries(authKey.user);
      auth?.logout();
      toast.success("Logout berhasil");
    },
    onError: () => {
      toast.error("Autentikasi gagal, silahkan login kembali");
      auth?.logout();
    },
  });

  const handleLogout = () => {
    logout.mutate();
    navigate("/login");
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[24px] h-[24px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
          <FaUserCircle />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[150px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer"
            onClick={handleLogout}
            disabled={logout.isLoading}
          >
            Logout
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
