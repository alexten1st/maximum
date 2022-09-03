import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../copmponents/Loader/Loader";
import OfferList from "../copmponents/OfferList/OfferList";

export default function Home({ server }) {
  const router = useRouter();
  const options = [
    "Audi",
    "Mitsubishi",
    "Volkswagen",
    "Kia",
    "Honda",
    "Hyundai",
  ];
  const [modelState, setModelState] = useState(
    router.query.model || options[0]
  );
  const [mainData, setData] = useState(server);
  const [needLoader, setNeedLoader] = useState(false);

  useEffect(() => {
    router.push(`?model=${modelState}`, undefined, { shallow: true });
    const load = async () => {
      const response = await fetch(
        `https://maximum.expert/api/stock-test?brand=${modelState}`
      );
      const data = await response.json();
      setData(data.list.slice(0, 9));
      setNeedLoader(false);
    };
    if (!mainData[0] || modelState !== mainData[0].feedData.brandName) {
      setNeedLoader(true);
      load();
    }
  }, [modelState]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <>
          <select
            onChange={(e) => {
              setModelState(options[e.target.selectedIndex]);
            }}
            value={modelState}
            className={styles.select}
          >
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>

          <div
            className={
              needLoader
                ? `${styles.contentContainer} ${styles.opacity}`
                : `${styles.contentContainer}`
            }
          >
            {needLoader && <Loader />}
            <OfferList mainData={mainData}/>
          </div>
        </>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { query } = context;
  const { model } = query;
  const brand = model ? `brand=${model}` : `brand=Audi`;
  const response = await fetch(
    `https://maximum.expert/api/stock-test?${brand}`
  );
  const data = await response.json();
  return {
    props: {
      server: data.list.slice(0, 9),
    },
  };
}
