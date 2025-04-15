import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/category/${category}/${subcategory}`);
        setProducts(res.data);
      } catch (err) {
        setError('데이터를 가져오는 데 실패했습니다.');
        console.error(err);
      }
    };
    fetchData();
  }, [category, subcategory]);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>{`${category.toUpperCase()} > ${subcategory.toUpperCase()}`}</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title} - {item.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
