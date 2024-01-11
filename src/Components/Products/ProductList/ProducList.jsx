import Swal from 'sweetalert2';

export default function ProductList({ data, updateCartProducts }) {
  if (!data || (data.length === 0)) {
    return <div className='col-12 text-center loading'>Loading...</div>;
} 
  const handleClick = (description, id, image, image_title, name, price) => {
    const existingStoredProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const isProductAlreadyStored = existingStoredProducts.some(product => product.id === id);
  
    if (!isProductAlreadyStored) {
      const newProduct = {
        description: description,
        id: id,
        image: image,
        image_title: image_title,
        name: name,
        price: price,
        qty: 1
      };
      console.log('Adding product to localStorage:', newProduct);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product is added to the cart',
        showConfirmButton: false,
        timer: 1500
      })
      updateCartProducts(newProduct);
      const updatedCartProducts = [...existingStoredProducts, newProduct];
      localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    } else {
      Swal.fire(
        'Product already in the cart',
      )
    }
  };
  

  return (
      <ul className='ProductsList mt-3 d-flex flex-wrap gap-3 col-12 p-0 justify-content-center' >
        {data.map(product => 
          <li
          className='p-2 itemCard pb-4 d-flex col-5 col-md-3 align-items-center justify-content-center flex-column gap-2'
            key={product.id}
            onClick={() => handleClick(product.description, product.id, product.image, product.image_title, product.name, product.price)}
          >
                  <img src={product.image} alt="" />
                  <p className="title">{product.name}</p>
                  <div className="id">
                    <p>#{product.id}</p>
                  </div>
                  <p className="price px-2">{product.price}$</p>
          </li>
        )}
      </ul>
  )
}
