import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="relative">
      <div className="w-full bg-slate-900 h-16 flex justify-between">
        <Image
          src="/images/logo/png/logo-no-background.png"
          alt="logo"
          className="w-20 h-full p-3"
          width={21}
          height={10}
        ></Image>
      </div>
      <Image
        alt="landing"
        src="/images/landing.jpg"
        className="w-screen h-screen"
        width={1200}
        height={1200}
        priority={false}
      ></Image>
      <a href="/dashboard" className="absolute  top-3 right-5">
        <Button className="bg-orange-600 hover:bg-white hover:text-orange-600">
          Get Started
        </Button>
      </a>
      {/* <Link href="sign-in">
        <div className="h-10 w-32 flex justify-center items-center rounded-md bg-slate-900 text-white">
          Login
        </div>
      </Link>
      <Link href="sign-up">
        <div>Register</div>
      </Link> */}
    </div>
  );
}
