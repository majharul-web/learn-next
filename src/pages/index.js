import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h3>This is Home page</h3>
      <Link href='/blog'>Blog</Link>
    </div>
  );
};

export default Home;
