import React, { useState } from "react";
import logo from "../assest/signin.gif";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="min-h-[80vh]" id="login">
            <div className="mx-auto container p-4 h-[550px]">
                <div className="bg-white px-2 py-5 w-full h-full mx-auto rounded-md max-w-[550px]">
                    <div className="w-20 h-20 mx-auto">
                        <img src={logo} alt="login icons" />
                    </div>
                    <form onSubmit={() => handleSubmit()}>
                        <div className="grid p-2 mb-3">
                            <label className="mb-1">Email</label>
                            <div className="bg-slate-100">
                                <input
                                    type="email"
                                    className="w-full h-full outline-none bg-transparent p-2 rounded-md"
                                    placeholder="Enter your email..."
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => handleOnChange(e)}
                                />
                            </div>
                        </div>
                        <div className="grid p-2 mb-3 ">
                            <label className="mb-1">Password</label>
                            <div className="bg-slate-100 flex items-center px-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full h-full outline-none bg-transparent py-2 rounded-md"
                                    placeholder="Enter your password..."
                                    value={data.password}
                                    name="password"
                                    onChange={(e) => handleOnChange(e)}
                                />
                                <div className="cursor-pointer">
                                    <span className="text-xl" onClick={() => setShowPassword((prev) => !prev)}>
                                        {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </span>
                                </div>
                            </div>
                            <Link className="text-sm block w-fit ml-auto mt-2 text-blue-400" to={"/forgot-password"}>
                                Forgot password
                            </Link>
                        </div>

                        <div className="w-full flex flex-col justify-center">
                            <button className="mx-auto py-3 px-6 rounded-2xl hover:bg-red-600 hover:scale-110 transition-all bg-red-400 text-xl text-white">
                                Login
                            </button>
                            <p className="mx-auto mt-6">
                                Don't have a account?{" "}
                                <Link className="underline hover:text-red-600" to={"/sign-up"}>
                                    Sign up
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
