import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SearchPage() {
  const { category } = useParams();  // URL에서 카테고리 값 가져오기
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // 카테고리에 맞는 데이터를 API나 파일에서 불러옵니다.
    fetch(`/api/albums?category=${category}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [category]);  // category가 바뀔 때마다 데이터 리로드

  return (
    <div>
      <h1>{category} 음반</h1>
      <div>
        {albums.length === 0 ? (
          <p>음반이 없습니다.</p>
        ) : (
          <ul>
            {albums.map((album) => (
              <li key={album.id}>
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
                <p>{album.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
