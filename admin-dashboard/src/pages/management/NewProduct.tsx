import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"

const NewProduct = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number | ''>();
    const [stock, setStock] = useState<number | ''>();
    const [photo, setPhoto] = useState<string>('');
  
    const changeImageHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const file: File | undefined = e.target.files?.[0];
        const reader: FileReader = new FileReader();

        if(file) {
            reader.readAsDataURL(file);
            reader.onloadend = ()=> {
                if(typeof reader.result === 'string') setPhoto(reader.result);
            };
        }
    }
    return (
        <div className="admin-container">
            {/* sidebar */}
            <AdminSidebar/>
            {/* main */}
            <main className="product-management">
                <article>
                    <form action="">
                        <h2>New Product</h2>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input 
                                id="name"
                                type="text" 
                                placeholder="Name the product."
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input 
                                id="price"
                                type="number" 
                                placeholder="Price"
                                required
                                value={price}
                                onChange={(e) => setPrice(e.target.value === ''? '' : Number(e.target.value))}
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
                                value={stock}
                                onChange={(e) => setStock(e.target.value === ''? '' : Number(e.target.value))}
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
                            (photo) ? <img src={photo} alt="product image" /> : ''
                        }
                        <button type="submit">Create Product</button>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default NewProduct