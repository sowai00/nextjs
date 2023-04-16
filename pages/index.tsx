// index.js
import Link from "next/link";
import Header from "./components/header";
export default function Index() {
  return (
    <div>
      <Header />
      <h1> Index </h1>
      <Link href="/about">
        <a> About </a>
      </Link>
      <Link href="/contact">
        <a> Contact </a>
      </Link>
      <Link href="/education">
        <a> About </a>
      </Link>
    </div>
  );
}
