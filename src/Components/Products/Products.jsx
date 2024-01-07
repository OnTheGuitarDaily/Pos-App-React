import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchDataAsync } from '../../Actions/Actions';

export default function Products() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.products);
    console.log(state.products)

    useEffect(() => {
    dispatch(fetchDataAsync());
    }, []);

    if (!state || (state.products.length === 0)) {
        return <div className='col-12 text-center mt-5 pt-5 loading'>Loading...</div>;
      }

  return (
    <div>
        <ul>
            {state.products.map(product => 
                    <li key={product.id}>{product.name}</li>
            )}
        </ul>
    </div>
  )
}
