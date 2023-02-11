import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Day1 />} />
          <Route path="/Day2" element={<Day2 />} />
          <Route path="/Day3" element={<Day3 />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
