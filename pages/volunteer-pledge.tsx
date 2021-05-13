import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/VolunteerPledge.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>India Vaccine Project | Volunteer Pledge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.content_wrapper}>
            <h1>IndiaVaccine Volunteer Pledge</h1>
            By submitting the volunteer signup form, you pledge to
            IndiaVaccine.In (“IV”) and any of its users that:
            <p>
              1. You shall be honest in the discharge of your obligations as a
              volunteer and that you will exercise due care and skill at all
              times while rendering your services, including accurately
              capturing any information that maybe shared with you by third
              parties such as vaccination centres;
            </p>
            <p>
              2. You agree to comply with all applicable law whilst undertaking
              any work for IV;
            </p>
            <p>
              3. You will at all times comply with all orders and instructions
              given by the [leadership/management team of IV], which will form
              the framework for provision of your services and with a view to
              fulfill the requirements that IV has identified and communicated
              to you;
            </p>
            <p>
              4. You agree to maintain the confidentiality of any and all
              confidential information or personal information that you gain
              access to as result of the discharge of your obligations as a
              volunteer and that you shall not under any circumstances make any
              use of such information or share such information with any third
              party;
            </p>
            <p>
              5. You agree not to provide any information to the users of IV,
              which you know is untrue or which could be construed as
              misleading;
            </p>
            <p>
              6. You agree to indemnify IV for any loss IV incurs as a result of
              your actions or material;
            </p>
            <p>
              7. You acknowledge and agree that by becoming a volunteer in this
              program you are not and will not be considered to be an employee
              or consultant or other staff of IV and nor will you be entitled to
              receive any form of remuneration or any employee benefits; and
            </p>
            <p>
              8. You agree that IV shall have the right to discontinue your
              services for any reason whatsoever without giving you a notice.
            </p>
            {/* I, [Insert full name of the volunteer], hereby acknowledge that I have read, reviewed and have understood the above terms and conditions and agree to adhere to the same. */}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
