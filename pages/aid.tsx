import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from  "../styles/aid.module.css";

export default function Aid() {
  const myHtml = `
  <div id="tripetto"></div>
  <script src="https://unpkg.com/tripetto-runner-foundation"></script>
  <script src="https://unpkg.com/tripetto-runner-autoscroll"></script>
  <script src="https://unpkg.com/tripetto-services"></script>
  <script>
  var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia3U0eDFkU1I0VUZZcDhhdW85S2xxRWlkNlJBMlhxaVBGUit2VjRuZm83Zz0iLCJkZWZpbml0aW9uIjoiUjRuRWlhNjJzUGVubWlnSHpNenZTdkd4V2xyUHdrVnh0b1JYSmtWRjN1Yz0iLCJ0eXBlIjoiY29sbGVjdCJ9.slQfOortPdVKF-hN6VuHOHGdthdaTpui2pp5vobsI3Y" });
  
  TripettoAutoscroll.run({
      element: document.getElementById("tripetto"),
      definition: tripetto.definition,
      styles: tripetto.styles,
      l10n: tripetto.l10n,
      locale: tripetto.locale,
      translations: tripetto.translations,
      attachments: tripetto.attachments,
      onSubmit: tripetto.onSubmit
  });
  </script>
  `
  return (
    <div>
      <Navbar />
      <div >
        <Head>
          <title>India Vaccine Project | Volunteer Pledge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main  className={styles.aidContainer}>
        <div dangerouslySetInnerHTML={{__html: myHtml}} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
