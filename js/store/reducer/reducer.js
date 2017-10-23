// import update from 'immutability-helper';
// import {FILTER_PRODUCTS} from "../actions/actions";
// import products from '../../data/products';
//
// const initialState = {
//   products: products,
// }
//
// const reducer = function(state = initialState, action) {
//   switch (action.type) {
//     case FILTER_PRODUCTS:
//       // console.log("filtering!");
//       let filteredSearch = products.filter((productInfo) => {
//         if (productInfo.price < 20 && action.payload == "underTwenty"){
//           // console.log("underTwenty");
//         return true
//       } else if (productInfo.price >= 20 && action.payload == "overTwenty"){
//         // console.log("overTwenty");
//         return true;
//       } else if (action.payload == "all") {
//         return true
//       } else {
//         // console.log("all");
//         return false
//       }
//     })
//     console.log("filteredSearch", filteredSearch);
//       return {products: filteredSearch};
//       break;
//       default:
//       return state
//       break;
//   }
// }
//
// export default reducer;
