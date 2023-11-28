import {useParams, useNavigate} from 'react-router-dom';

import {useEffect} from 'react';

const Product = () => {
  const params = useParams();
  console.log(params);

  // useEffect(() => {
  //   fetch(`http://localhost:8001/api/products/${params.productId}`)
  //     .then((res) => res.json());
  // }, [params.productId]);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
    }, 3000);
  }, []);

  return (
    <div>
      <h2>A single product view for product # {params.productId}</h2>
    </div>
  );
};

export default Product;
