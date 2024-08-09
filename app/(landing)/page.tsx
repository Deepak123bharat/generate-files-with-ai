import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      Landing Page(un protected)
      <Link href="sign-in">
        <div className="h-10 w-32 flex justify-center items-center rounded-md bg-slate-900 text-white">
          Login
        </div>
      </Link>
      <Link href="sign-up">
        <div>Register</div>
      </Link>
    </div>
  );
}
