import { useRouter } from "next/router";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AidHome from "../components/aid/aid_home";
import AidCvcResults from '../components/aid/aid_cvc_results';


export default function Aid() {
  const { query } = useRouter();
  return (
    <div>
      <Navbar />
      {/* When the user is on '/aid' page */}
      {(Object.keys(query).length === 0) && <AidHome />}

      {/* When user is on '/aid?district=XXXXXX' OR '/aid?pincode=XXXXXX' */}
      {Object.keys(query).length !== 0 && (query.pincode || query.district) && <AidCvcResults />}

      <Footer />
    </div>
  );
}
