import { useState, useEffect } from 'react';
import ProductList from './ProductList/ProducList'
import Search from './Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync } from '../../Actions/Actions';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Products({ updateCartProducts }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(state.products);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  useEffect(() => {
    const filtered = state.products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchInput, state.products]);

  return (
    <section className="col-12 container pt-3 col-lg-10 col-xl-6">
      <header className="d-flex flex-column gap-2 justify-content-center align-items-center">
        <div className="d-flex col-12 container px-3 gap-3 align-items-center">
          <h1>
            <StorefrontIcon sx={{ fontSize: 40 }} color="primary"/>
            Products
          </h1>
        </div>
      </header>
      <Search onSearch={(value) => setSearchInput(value)} />
      <ProductList data={filteredProducts} updateCartProducts={updateCartProducts}/>
    </section>
  );
}
