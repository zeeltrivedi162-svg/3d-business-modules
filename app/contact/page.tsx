"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email required";
    if (!form.phone.trim()) newErrors.phone = "Phone required";
    if (!form.message.trim()) newErrors.message = "Message required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setSuccess("🚀 Message Sent Successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1200);
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-white via-yellow-50 to-white px-4 py-20 overflow-hidden">

      {/* 🌟 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-300/30 blur-[140px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let’s Build <span className="text-yellow-500">3D Future</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Transform your ideas into high-quality 3D models, animations, and immersive web experiences.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📍 Ahmedabad, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 contact@3dstudio.com</p>
          </div>

          {/* BADGES */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["3D Design", "Animation", "Prototyping", "AR/VR"].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 🔥 FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ rotateX: 2, rotateY: -2 }}
          className="bg-white/70 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-yellow-100"
        >
          <h1 className="text-2xl font-bold text-center mb-6">
            Send Message
          </h1>

          {success && (
            <motion.p
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-center mb-4 text-green-500 font-semibold"
            >
              {success}
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {["name", "email", "phone"].map((field) => (
              <div key={field} className="relative">
                <input
                  name={field}
                  value={(form as any)[field]}
                  onChange={handleChange}
                  required
                  className="peer w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-yellow-400 bg-white/60"
                />
                <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500 bg-white px-1">
                  {field}
                </label>

                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="peer w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-yellow-400 bg-white/60"
              />
              <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500 bg-white px-1">
                message
              </label>

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-3 rounded-lg font-bold shadow-lg"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>

          </form>
        </motion.div>

      </div>
    </main>
  );
}