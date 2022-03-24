import { useParams } from "react-router-dom";

export default function UserDeatails() {
  const { userId } = useParams();

  return (
    <div>
      <p>Details about user {userId}</p>
    </div>
  );
}
