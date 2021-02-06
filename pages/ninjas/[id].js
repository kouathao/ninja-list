import React from "react";
import Head from "next/head";

// get staticpath return all values for route params

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  let { address, company, email, name, phone, username, website } = ninja;
  return (
    <>
      <Head>
        <title>Ninja List | {ninja.name}</title>
      </Head>
      <div className="">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{website}</p>
        <p>{address.city}</p>
      </div>
    </>
  );
};

export default Details;
