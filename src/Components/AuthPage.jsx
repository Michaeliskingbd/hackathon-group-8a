import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center bg-gradient-to-tl from-red-300 via-white to-red-300">
      <div className=" w-[400px]  p-6 border-[1px] bg-white  border-blue-400 rounded-2xl shadow-xl ">
        <h1 className="text-3xl mb-5 font-bold text-gray-500 ">Sign up</h1>
        <p className="mb-2 text-lg font-bold">Welcome {username}</p>
        <form className="space-y-4">
          <div className="w-full  h-[40px] border-[1px] rounded-lg border-red-500">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-full indent-4 bg-transparent outline-none"
              type="name"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="w-full relative  h-[40px] border-[1px] rounded-lg border-gray-500">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full indent-4 bg-transparent outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
            />
            {showPassword ? (
              <IoMdEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-xl right-4 top-4"
              />
            ) : (
              <IoMdEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-xl right-4 top-4"
              />
            )}
          </div>

          <button
            onClick={login}
            className="text-center w-full bg-gray-400 py-2 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuthPage;