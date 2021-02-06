import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  // never run in the browers. This is run in the build time
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  // to use
  return {
    props: {
      ninjas: data,
    },
  };
};

const index = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninja Listing</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div className="">
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;
