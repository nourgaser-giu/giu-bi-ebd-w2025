import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Redirecting to the home page in 3 seconds...</p>
      <p style={{ marginTop: "20px" }}>
        <a href="/">Click here to go home immediately.</a>
      </p>
    </div>
  );
};

export default NotFoundPage;