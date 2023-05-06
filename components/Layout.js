import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="created by @mukhlishga" />
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <header className="py-5">
        <h1 className="text-4xl text-center my-2 font-bold">{title}</h1>
      </header>

      <main className="container mx-auto">{children}</main>

      <footer className="flex justify-center items-center mb-5">
        <Link href="https://github.com/mukhlishga/pokedex">
          created by @mukhlishga
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
