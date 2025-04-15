import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";  // 사이드바
import HomePage from "./pages/HomePage";  // 홈 페이지
import SearchPage from "./pages/SearchPage";  // 검색 페이지

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />  {/* 사이드바 */}
        <div style={{ marginLeft: '220px', width: '100%' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />  {/* 홈 페이지 */}
            <Route path="/search" element={<SearchPage />} />  {/* 검색 페이지 */}
            <Route path="/search/:category" element={<SearchPage />} />  {/* 카테고리별 검색 페이지 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



