import requset from "./network.js"

export function getMultiData() {
  return requset({
    url: "/home/multidata"
  })
}

export function getGoodsData(type,page){
  return requset({
    url: "/home/data",
    data:{
      type,
      page
    }
  })
}