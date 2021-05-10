import Image from "next/image";
import { useRouter } from "next/router";

const LogoComponent = () => {
  
  const { locale } = useRouter();
  
  const WEBSITE_URL = 'https://www.indiavaccine.in';  
   
  const logoUrl = `/assets/logo/${locale}.svg`;
  
  return (
    <a href={WEBSITE_URL}>
      <Image src={logoUrl} height={50} width={200}></Image>
    </a>
  );
};

export default LogoComponent;
