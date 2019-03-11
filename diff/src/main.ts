import { diff } from "./diff";

let eleA = {
  tagName:'div',
  attrs:{
    name:'zhangsan'
  },
  children:[
    {tagName:'p',attrs:{},children:[`i'm a p`]}
  ]
}

let eleB = {
  tagName:'div',
  attrs:{
    name:'lisi'
  },
  children:[
    {tagName:'p',attrs:{},children:[`i'm changed!`]}
  ]
}

console.info(diff(eleA, eleB))

