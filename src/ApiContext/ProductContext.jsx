/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import items from "../data/Product.json";
import ProductList from '../components/shop/ProductList';
import { createContext ,useState,useEffect, useContext} from "react";

export const ProductContext  = createContext()


export function  ProductProvider({children})
{
const [product,setProduct]=useState(items);
const [category,setCategory] = useState(["All"])
const [search ,setSearch] = useState("")
useEffect(

function (){

    if(!search) {
        console.log("enter !!!!!!")
        if(category.includes("All"))
            {
                setProduct(()=>{return items}) 
                console.log("thisis he source of trurh table ",product)
                //in this case teh table always saty empty  the case of all 
                console.log(items)

            }
        else{ setProduct(items.filter((item)=>{return category.includes(item.category)}))    }
    }else
    {
        if(category =="All"){
    setProduct(items.filter((product)=>{return product.title.toLowerCase().match(search.toLowerCase()) }))
     }else

    {setProduct(items.filter((product)=>{return product.title.toLowerCase().match(search.toLowerCase())&& category.includes(product.category)   }))
} }}
,[search]
)
function handleOnchange(e)
{
    setSearch(e.target.value)
   

}
function handleClick(e)
{
   
    

    if(e.target.checked)
      {   if(e.target.value != "All" && category.includes("All")) 
          {setCategory((prev)=>{return prev.filter((item)=>{return item !="All"})})
                console.log("thisis the all value case ")
        }
        console.log(e.target.value,"is checked ")
        setCategory((prev)=>{return [...prev,e.target.value]})
    }
    else{
        setCategory((prev)=>{return prev.filter((item)=>{return item !=e.target.value})})
        console.log(category ," is unselected")

    }


}


useEffect(function ()
  {
setProduct(items)
  },[]
)
    useEffect(function (){
        console.log(category)
                if(category.length===0) {setCategory(["All"]);return}

        if(category.includes("All")) setProduct(items)
           
       else { setProduct(items.filter((product)=>{return category.includes(product.category)  }))
    
    }

      },[category])



    return <ProductContext.Provider value={{product,category,handleClick,handleOnchange}}>{children} </ProductContext.Provider>
     
}


export function useProduct()
{
    const context = useContext(ProductContext)
    if(context === undefined) throw console.error("the context its used outside its sccope");
    


    return context 
}