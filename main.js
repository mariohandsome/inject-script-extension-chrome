// let tagArray = ['span', 'p']

// for (let tagItem of tagArray) {
//   let tags = document.getElementsByTagName(tagItem)

//   for (let tag of tags) {
//     tag.innerHTML = ""
//   }
// }

let dataArray = ['logo-img-small', 'logo', 'logo_mark', 'nav-links', 'nav-link']

for (let dataItem of dataArray) {
  let datas = document.getElementsByClassName(dataItem)

  for (let data of datas) {
    data.innerHTML = ""
  }
}
