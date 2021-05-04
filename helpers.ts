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

export const appSWRFetcher = (...args) =>
  //@ts-expect-error Ignore this error
  fetch(...args).then((res) => res.json());
