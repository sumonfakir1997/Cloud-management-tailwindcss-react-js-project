// import react,{ createContext, useEffect, useReducer } from "react";
// import { reducer } from "./reducer"
// import App from "../App";

// export const photoContext = createContext();


// export const ContextPhoto =() => {
//     // const [initialState, setInitialState] = react.useState( {
//     //     isLoading: false,
//     //     photos:[]
//     //     })
  
//     // useEffect(() => {
//     //     (async () => {
//     //         const response = await fetch("https://picsum.photos/v2/list?page=2&limit=8");  
//     //         const formattedResponse = response.json();
//     //         setInitialState(formattedResponse);
//     //     })()
//     //     },[])


//     // const [state, dispatch] = useReducer(reducer,initialState)

    
//     return(

//         <photoContext.Provider value={{...initialState}}>
//             <App/>  
//         </photoContext.Provider>
//     )
// }