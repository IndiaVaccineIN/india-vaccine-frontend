import { useRouter } from "next/router";
import useSWR, { SWRConfiguration } from "swr";
import { LocaleSchema, mapLocaleToJSON } from "./shared/LocalesMap";

/**
 * The SWR config used by the application
 */
export const swrConfig: SWRConfiguration = {
  fetcher: (resource, init) =>
    fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/${resource}`, init).then((res) =>
      res.json()
    ),
};

/**
 * The SWR fetcher for fetching data from the application
 *
 * @param args
 * @returns JSON
 *
 * @reference https://swr.vercel.app/docs/data-fetching
 */
export const appSWRFetcher = (...args) =>
  //@ts-expect-error Ignore this error
  fetch(...args).then((res) => res.json());

/**
 * Check if a object is empty
 *
 * @param obj The object
 *
 * @returns Boolean
 */
export const isEmpty = (obj: Object) => {
  return Object.keys(obj).length === 0;
};

/**
 * Check if a string is a number
 *
 * @reference https://stackoverflow.com/a/1779019/12241836
 */
export const isNum = (val: string) => /^\d+$/.test(val);

export const cleanObj = (obj: Object) =>
  Object.keys(obj).forEach((key) => (!obj[key] ? delete obj[key] : {}));

/**
 * The interface for the response of the `useTranslation` hook
 */
interface IUseTranslationResponse {
  data: LocaleSchema
}

/**
 * Hook used to get the translation data
 * 
 * @returns Interface with translation data in it
 */
export const useTranslation = () : IUseTranslationResponse => {
  const { locale } = useRouter();

  const { data } = useSWR(`/locales/${locale}.json`, {
    //@ts-expect-error locale does not expect the correct types
    initialData: mapLocaleToJSON(locale),
    fetcher: appSWRFetcher
  })

  return {
    data: data,
  }
}
