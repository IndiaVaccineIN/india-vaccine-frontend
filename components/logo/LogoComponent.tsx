import Image from "next/image";
import { useRouter } from "next/router";

const LogoComponent = () => {
  const { locale } = useRouter();

  const logoSourceUrl = `/assets/logo/${locale}.svg`;

  return (
    <a href={"https://indiavaccine.in"}>
      <Image src={logoSourceUrl} height={50} width={200} />
    </a>
  );
};

export default LogoComponent;
