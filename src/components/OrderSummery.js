import { useNavigate } from "react-router-dom";

export default function OrderSummery() {
  const navigate = useNavigate();

  return (
    <div>
      <h5>Order confirmed</h5>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
