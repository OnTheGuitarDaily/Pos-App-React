import { useState, useEffect } from 'react';
import ProductList from './ProductList/ProducList'
import Search from './Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync } from '../../Actions/Actions';

export default function Products() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    <section className="mt-3 col-12 container py-3 col-lg-6 ProductsSection">
      <header className="d-flex flex-column gap-2 justify-content-center align-items-center">
        <div className="d-flex col-12 container px-3 gap-3 align-items-center">
          <h1>Products</h1>
        </div>
      </header>
      <Search onSearch={(value) => setSearchInput(value)} />
      <ProductList data={filteredProducts} />
    </section>
  );
}
