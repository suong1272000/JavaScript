import { data } from "./data.js";

export const newData = data.data;

export const listData = newData.map((value,index)=>{
    const image = value.newData[index].images.poster_url
    const title = value.newData[index].title
    const runtime = value.newData[index].running_time_friendly
})