// "use client";

// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Link from "next/link";

// const roles = ["owner", "broker"];

// const SignupPage = () => {
//   const [activeTab, setActiveTab] = useState("owner");
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [showPwd, setShowPwd] = useState(false);
//   const [errors, setErrors] = useState<any>({});
//   const [submitting, setSubmitting] = useState(false);

//   const validate = () => {
//     const newErrors: any = {};
//     if (!form.name.trim()) newErrors.name = "Name is required.";
//     if (!form.email.trim()) newErrors.email = "Email is required.";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       newErrors.email = "Invalid email.";
//     if (!form.password.trim()) newErrors.password = "Password is required.";
//     else if (form.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     if (errors[e.target.name]) validate();
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       setSubmitting(true);
//       const dataToSubmit = { ...form, role: activeTab };
//       console.log("Submitting:", dataToSubmit);
//       // TODO: POST to Laravel backend
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative min-h-screen flex items-center justify-center">
//         {/* Background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1950&q=80')",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-bold text-center mb-4">
//             Create an Account
//           </h1>

//           {/* Role Tabs */}
//           <div className="flex justify-center space-x-2 mb-6">
//             {roles.map((role) => (
//               <button
//                 key={role}
//                 onClick={() => setActiveTab(role)}
//                 className={`capitalize px-4 py-2 rounded-full border ${
//                   activeTab === role
//                     ? "bg-blue-600 text-white"
//                     : "bg-white text-gray-700 border-gray-300"
//                 }`}
//               >
//                 {role}
//               </button>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring ${
//                   errors.name ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.name && (
//                 <p className="text-sm text-red-600">{errors.name}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-600">{errors.email}</p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Password</label>
//               <div className="relative">
//                 <input
//                   type={showPwd ? "text" : "password"}
//                   name="password"
//                   value={form.password}
//                   onChange={handleChange}
//                   className={`w-full border px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPwd(!showPwd)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
//                 >
//                   {showPwd ? (
//                     // Eye Off
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5.5 0-10-5-10-8s4.5-8 10-8c2.31 0 4.42.77 6.06 2.06M1 1l22 22" />
//                     </svg>
//                   ) : (
//                     // Eye
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
//                       <circle cx="12" cy="12" r="3" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-sm text-red-600">{errors.password}</p>
//               )}
//             </div>

//             {/* Hidden Role Field (optional, already using tab state) */}
//             <input type="hidden" name="role" value={activeTab} />

//             <button
//               type="submit"
//               disabled={submitting}
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
//             >
//               {submitting ? "Signing up..." : `Signup as ${activeTab}`}
//             </button>
//           </form>

//           <p className="text-sm text-center mt-4 text-gray-700">
//             Already have an account?{" "}
//             <Link href="/login" className="text-blue-600 hover:underline">
//               Login here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignupPage;


















"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignupPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      // Dummy signup (store in localStorage)
      const existingUsers: FormData[] =
        JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = existingUsers.find(
        (u) => u.email === formData.email
      );

      if (userExists) {
        setErrors({ email: "Email already registered." });
        setSubmitting(false);
        return;
      }

      existingUsers.push({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      localStorage.setItem("users", JSON.stringify(existingUsers));

      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => router.push("/login"), 2000);
    } finally {
      setSubmitting(false);
    }
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
              "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Signup Box */}
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Create Your Account
            </h1>

            {success && (
              <p className="text-green-600 text-center mb-4 font-medium">
                {success}
              </p>
            )}

            <form onSubmit={handleSignup} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                <label className="block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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
                  <p className="text-sm text-red-600 mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPwd ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-500 ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPwd((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPwd ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
              >
                {submitting ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;


