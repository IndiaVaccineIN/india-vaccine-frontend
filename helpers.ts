import { SWRConfiguration } from "swr";

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
//@ts-expect-error Ignore this error
export const appSWRFetcher = (...args) => fetch(...args).then(res => res.json());


/**
 * Check if a object is empty
 * 
 * @param obj The object
 * 
 * @returns Boolean
 */
export const isEmpty = (obj: Object) => {
    return Object.keys(obj).length === 0;
}
