import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Pre-rendering</h1>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  );
}

export default Home;
// root file of the app
