import Head from "next/head";
import styles from "../../styles/aid.module.css";

const myHtml = `
 
<script src="https://unpkg.com/tripetto-runner-foundation"></script>
<script src="https://unpkg.com/tripetto-runner-autoscroll"></script>
<script src="https://unpkg.com/tripetto-services"></script>
<script>
var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia3U0eDFkU1I0VUZZcDhhdW85S2xxRWlkNlJBMlhxaVBGUit2VjRuZm83Zz0iLCJkZWZpbml0aW9uIjoiUjRuRWlhNjJzUGVubWlnSHpNenZTdkd4V2xyUHdrVnh0b1JYSmtWRjN1Yz0iLCJ0eXBlIjoiY29sbGVjdCJ9.slQfOortPdVKF-hN6VuHOHGdthdaTpui2pp5vobsI3Y" });
console.log("code running");
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

export default function AidDataForm() {
  return (
    <div>
      <div>
        <Head>
          <title>Data Submission | India Vaccine</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container} id="tripetto"></div>
        <div  dangerouslySetInnerHTML={{ __html: myHtml }} />
      </div>
    </div>
  );
}
