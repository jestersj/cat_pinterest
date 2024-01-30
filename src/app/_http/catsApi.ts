import {$host} from "@/app/_http/index";
import {ICat} from "@/app/_types/ICat";

export const fetchCats = async (page: number) => {
    const {data} = await $host.get<ICat[]>(`/images/search?limit=52&page=${page}`, {
        headers: {'x-api-key': 'live_Cgzng6UBSpZMeIm7PXyT03zle3oH8szVKuPeYsPVdoV8Oi4L3WhqPTfUIl7tw5Ws'}
    })
    return data
}
export const fetchOneCat = async (id: string) => {
    const {data} = await $host.get<ICat>(`/images/${id}`, {
        headers: {'x-api-key': 'live_Cgzng6UBSpZMeIm7PXyT03zle3oH8szVKuPeYsPVdoV8Oi4L3WhqPTfUIl7tw5Ws'}
    })
    return data
}