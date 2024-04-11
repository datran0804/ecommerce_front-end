import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Card from '../../components/Card'
const Products = () => {
    const [product, setProduct] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOption, setSortOption] = useState('default')
    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const response = await fetch("/products.json");
                    const data = await response.json();
                    // console.log(data)
                    setProduct(data)
                    setFilterItems(data)
                } catch (error) {
                    console.log("error", error)
                }
            }
            fetchData();
        }, [])

    // flitering function
    const filterItem = (category) => {
        const filtred = category === "all" ? (product) : product.filter((item) => item.category === category);

        setFilterItems(filtred);
        setSelectedCategory(category);
    }

    //show all products
    const showAll = () => {
        setFilterItems(product);
        selectedCategory("all")
    }

    //sorting function
    const handleSortChange = (option) => {
        setSortOption(option);
        //logic sorting
        let sortedItems = [...filterItems];
        switch (option) {
            case "A-Z": sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A": sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "low-high": sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-low": sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilterItems(sortedItems)

    }

    
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
            <h2 className='text-3xl font-semibold capitalize text-center my-8'>Or subscribe to the newsletter</h2>
            {/* product cards */}
            <div>
                <div className='flex flex-col md:flex-row  flex-wrap md: justify-between items-center space-x-3 mb-8'>
                    {/* buttons */}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                        <button onClick={showAll}>All Products</button>
                        <button onClick={() => filterItem("Dress")}>Clothing</button>
                        <button onClick={() => filterItem("Shoe")}>Shoe</button>
                        <button onClick={() => filterItem("Bag")}>Bag</button>
                    </div>
                    {/* sorting option */}
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black p-2'>
                            <FaFilter className='text-white h-4 w-4' />
                        </div>


                        <select
                            id='sort'
                            onChange={(e) => handleSortChange(e.target.value)}
                            value={sortOption}
                            className='bg-black text-white px-2 py-1 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-high">Low to High</option>
                            <option value="high-low">High to Low</option>

                        </select>
                    </div>
                </div>
                <Card filteredItems={filterItems} />


                <div>

                </div>
            </div>
        </div>
    )
}

export default Products