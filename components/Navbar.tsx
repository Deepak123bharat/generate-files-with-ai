import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full justify-between">
        <MobileSidebar />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
