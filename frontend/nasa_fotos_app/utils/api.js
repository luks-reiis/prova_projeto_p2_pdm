import axios from 'axios'
// funcionamento normal:
export default axios.create({
  baseURL: 'http://localhost:3000/'
})

//testar no celular com expo go. Comentar quando subir oficial
//Usei meu ip, pode ser que o seu seja diferente
// export default axios.create({
//   baseURL: 'http://192.168.15.9:3000/'
// })