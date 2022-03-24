import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h4>Home page</h4>
      <button onClick={() => navigate("/order-summery", { replace: false })}>
        place order
      </button>
    </div>
  );
}
