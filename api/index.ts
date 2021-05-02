import useSWR, { SWRResponse } from "swr"
import { components } from "./interfaces"

/**
 * The hook used to get the vaccine availability data
 * 
 * @param props The props for the API
 * 
 * @returns The vaccine data
 */
// export function useVaccineAvailability(props: components["schemas"]["CVCRequest"]): SWRResponse<any, any> {
//     const { data, error } = useSWR(`v1/cvc`)

//     return {
//         data: data,
//         isLoading: !error && !data,
//         isError: error
//     }
// }