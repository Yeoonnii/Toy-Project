import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlePage = (targetUrl) => {
    navigate(targetUrl);
  };

  return (
    <div>
      <h3>Home</h3>
      <hr />
      <button onClick={() => handlePage("/signUp")}>Sign Up</button>
    </div>
  );
};

export default Home;
