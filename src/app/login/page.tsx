

// "use client";

// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Link from "next/link";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPwd, setShowPwd] = useState(false);
//   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
//     {}
//   );
//   const [submitting, setSubmitting] = useState(false);

//   const validate = () => {
//     const newErrors: typeof errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) newErrors.email = "Email is required.";
//     else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email.";

//     if (!password) newErrors.password = "Password is required.";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       setSubmitting(true);
//       // TODO: Connect with your Laravel API here
//       console.log({ email, password });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative min-h-screen flex items-center justify-center">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd8b?auto=format&fit=crop&w=1950&q=80')",
//           }}
//         />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Login Box */}
//         <div className="relative z-10 w-full max-w-md">
//           <div className="bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//               Real Estate CRM Login
//             </h1>

//             <form onSubmit={handleLogin} className="space-y-5">
//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                     if (errors.email) validate();
//                   }}
//                   className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.email && (
//                   <p className="text-sm text-red-600 mt-1">{errors.email}</p>
//                 )}
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPwd ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                       if (errors.password) validate();
//                     }}
//                     className={`w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-500 ${
//                       errors.password ? "border-red-500" : "border-gray-300"
//                     }`}
//                   />
//                   {/* Password Toggle Button */}
//                   <button
//                     type="button"
//                     onClick={() => setShowPwd((prev) => !prev)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2"
//                   >
//                     {showPwd ? (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-600"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5.5 0-10-5-10-8s4.5-8 10-8c2.31 0 4.42.77 6.06 2.06M1 1l22 22" />
//                       </svg>
//                     ) : (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-600"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
//                         <circle cx="12" cy="12" r="3" />
//                       </svg>
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-sm text-red-600 mt-1">{errors.password}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
//               >
//                 {submitting ? "Logging in..." : "Login"}
//               </button>
//             </form>

//             <p className="text-sm text-center mt-4 text-gray-600">
//               Don&apos;t have an account?{" "}
//               <Link href="/signup" className="text-blue-600 hover:underline">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;





"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ErrorType {
  email?: string;
  password?: string;
}

interface UserType {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState<ErrorType>({});
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: ErrorType = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setMessage("");

    const users: UserType[] = JSON.parse(localStorage.getItem("users") || "[]");

    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (userFound) {
      localStorage.setItem("loggedInUser", JSON.stringify(userFound));
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => router.push("/user/dashboard"), 2000);
    } else {
      setMessage("❌ Invalid email or password.");
    }

    setSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd8b?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Login Box */}
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Welcome Back 👋
            </h1>

            {message && (
              <p
                className={`text-center mb-4 font-medium ${
                  message.includes("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-500 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPwd ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
              >
                {submitting ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;


