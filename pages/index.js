import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Pre-rendering</h1>
    </div>
  );
}

export default Home;
// root file of the app
