import Image from "next/image";
import { useRouter } from "next/router";
import { isEnglishLocale } from "../../shared/LocalesMap";

const LogoComponent = () => {
  const { locale } = useRouter();

  const logoSourceUrl = `/assets/logo/${locale}.svg`;

  return (
    <a href={`/${!isEnglishLocale(locale) ? locale : ""}`}>
      <Image src={logoSourceUrl} height={50} width={200} />
    </a>
  );
};

export default LogoComponent;
