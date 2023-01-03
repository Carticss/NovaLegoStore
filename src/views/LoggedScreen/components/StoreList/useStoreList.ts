import { useState, useEffect, useContext } from "react"
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";
import { StoreRepo } from "./StoreRepository"

interface Product {
    id: number,
    name: string,
    unit_price: number,
    stock: number,
    image: string
  }
  
  interface Props {
    products: Product[]
  }

export const useStoreList = () => {

    const { items, addItem, removeItem } = useContext(ShoppingCartContext);
    const [details, setDetails] = useState()
    const [products, setProducts] = useState<Product[]>()

    const getProductList = async () => {
        try {
            const response = await StoreRepo.getAllDetails()
            const products = await StoreRepo.getAllProducts()
            setDetails(response)
            setProducts(products)
        }catch (error: any) {
            throw error
        }
    }

    useEffect(() => {
        getProductList()
    }, [])

	return {
        details,
        products
	}
}
