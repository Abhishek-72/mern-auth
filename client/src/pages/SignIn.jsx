import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      setError(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7 text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="bg-slate-100 rounded-lg p-3 "
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 font-semibold text-white uppercase rounded-lg p-3 "
        >
          {loading ? "Loading..." : "signin"}
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && "Something went wrong"}</p>
    </div>
  );
}
