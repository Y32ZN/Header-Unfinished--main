import { useState } from 'react';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState({
    genre: 'R&B',
    artist: 'Fujii Kaze',
    albumName: 'HEHN',
    releaseDate: '2022/04/04',
    minPrice: '12400',
    maxPrice: '23452',
  });

  const [data, setData] = useState([]); // 필터링된 데이터 저장

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchTerm({
      ...searchTerm,
      [name]: value,
    });
  };

  const handleSearch = () => {
    // 실제로는 백엔드 API 호출을 통해 데이터 필터링
    const filteredData = mockData.filter((item) => {
      return (
        (searchTerm.genre ? item.genre === searchTerm.genre : true) &&
        (searchTerm.artist ? item.artist.includes(searchTerm.artist) : true) &&
        (searchTerm.albumName ? item.albumName.includes(searchTerm.albumName) : true) &&
        (searchTerm.releaseDate ? item.releaseDate.includes(searchTerm.releaseDate) : true) &&
        (searchTerm.minPrice ? item.price >= parseInt(searchTerm.minPrice) : true) &&
        (searchTerm.maxPrice ? item.price <= parseInt(searchTerm.maxPrice) : true)
      );
    });
    setData(filteredData);
  };

  return (
    <div>
      <h1>일본 음악 검색</h1>
      <div>
        <input
          type="text"
          name="genre"
          placeholder="장르"
          value={searchTerm.genre}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="가수"
          value={searchTerm.artist}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="albumName"
          placeholder="앨범명"
          value={searchTerm.albumName}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="releaseDate"
          placeholder="발매일 (YYYY-MM-DD)"
          value={searchTerm.releaseDate}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="최소 가격"
          value={searchTerm.minPrice}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="최대 가격"
          value={searchTerm.maxPrice}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      <div>
        {data.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <h2>{item.albumName}</h2>
                <p>가수: {item.artist}</p>
                <p>장르: {item.genre}</p>
                <p>발매일: {item.releaseDate}</p>
                <p>가격: ¥{item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
