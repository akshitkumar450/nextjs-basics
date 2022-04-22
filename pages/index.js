import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>home</h1>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <Link href="/product">
        <a>product</a>
      </Link>
      <button onClick={() => router.push("/product")}>click</button>
    </div>
  );
}

export default Home;
// root file of the app
