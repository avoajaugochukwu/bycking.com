import Head from "next/head";
import { useRouter } from "next/router";
import Details from "../../screens/Shop/Details";

import bikes_data from "../../data/bikes_data";

export default function BikeDetails() {
  const router = useRouter();
  const { bike_name } = router.query;

  const bike_details = bikes_data.filter((bikes) => bikes.url === bike_name);

  if (!bike_details) {
    return;
  }

  return (
    <>
      <Head>
        <title>Bycking | { bike_details[0]?.brand } | { bike_details[0]?.name }</title>
        <meta name="description" content="Bycking | Cart" />
      </Head>
      <Details bike={bike_details} />
    </>
  );
}

// export async function getServerSideProps({ params }) {
//   const res = await fetch('https://jovial-wing-63739c.netlify.app/bikes_data.json')
//   const bikes = await res.json()

//   return {
//     props: {
//       bikes,
//       bike_name: params.bike_name
//     }
//   }
// }
