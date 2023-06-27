import { useRouter } from "next/router";
import React from "react";

export default function ClientPage({ slug }) {
  return (
    <div>
      <h1>Página de {slug}</h1>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const slug = params.slug;

  // Validate slug for existing user that shared the link

  return {
    props: {
      slug,
    },
  };
}
