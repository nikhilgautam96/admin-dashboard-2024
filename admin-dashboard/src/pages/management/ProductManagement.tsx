import { ChangeEvent, FormEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"


const img_1 =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
    const [name, setName] = useState<string>('Puma Shoes');
    const [price, setPrice] = useState<number>(2000);
    const [stock, setStock] = useState<number>(10);
    const [photo, setPhoto] = useState<string>(img_1);

    const [nameUpdate, setNameUpdate] = useState<string>(name);
    const [priceUpdate, setPriceUpdate] = useState<number>(price);
    const [stockUpdate, setStockUpdate] = useState<number>(stock);
    const [photoUpdate, setPhotoUpdate] = useState<string>(photo);
  
    const changeImageHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const file: File | undefined = e.target.files?.[0];
        const reader: FileReader = new FileReader();

        if(file) {
            reader.readAsDataURL(file);
            reader.onloadend = ()=> {
                if(typeof reader.result === 'string') setPhotoUpdate(reader.result);
            };
        }
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setName(nameUpdate);
        setPrice(priceUpdate);
        setStock(stockUpdate);
        setPhoto(photoUpdate);
    }

    return (
        <div className="admin-container">
            {/* sidebar */}
            <AdminSidebar/>
            {/* main */}
            <main className="product-management">
                <section>
                    <strong>ID - someId</strong>
                    <img src={photo} alt="Product" />
                    <p>{name}</p>
                    {stock > 0 ? (
                        <span className="green">{stock} Available</span>
                    ) : (
                        <span className="red">Not Available</span>
                    )}
                    <h3>${price}</h3>
                </section>
                <article>
                    <form onSubmit={submitHandler}>
                        <h2>Manage Product</h2>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input 
                                id="name"
                                type="text" 
                                placeholder="Name the product."
                                required
                                value={nameUpdate}
                                onChange={(e) => setNameUpdate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input 
                                id="price"
                                type="number" 
                                placeholder="Price"
                                required
                                value={priceUpdate}
                                onChange={(e) => setPriceUpdate(Number(e.target.value))}
                                min={0}
                            />
                        </div>
                        <div>
                            <label htmlFor="stock">Stock</label>
                            <input 
                                id="stock"
                                type="number" 
                                placeholder="Stocks"
                                required
                                value={stockUpdate}
                                onChange={(e) => setStockUpdate(Number(e.target.value))}
                                min={0}
                            />
                        </div>
                        <div>
                            <label htmlFor="photo">Photo</label>
                            <input 
                                id="photo"
                                type="file" 
                                required
                                onChange={changeImageHandler}
                            />
                        </div>
                        {
                            (photo) ? <img src={photoUpdate} alt="product image" /> : ''
                        }
                        <button type="submit">Update Product</button>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default ProductManagement
