import React, { useState } from "react";
import { motion } from "framer-motion";
import { SendHorizontal } from "lucide-react";

function SimpleForm() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://committee-mobile-app-backend.vercel.app/api/v1/auth/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Success message
      } else {
        alert(result.message); // Error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email. Please try again.");
    }
  
    setFormData({ email: "", message: "" });
  };

  return (
    <motion.div
      className="form"
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      transition={{
        type: "spring",
        damping: 15, 
        stiffness: 120,
        duration: 0.8,
      }}
    >
      <h5 style={{ fontSize: "16px", letterSpacing: "1px", padding: "4px" }}>
        Just a quick hit, and you're good to go. 🎯
      </h5>
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: "left", padding: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </div>
        <div style={{ textAlign: "left", padding: "15px" }}>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            style={{
              width: "95%",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <center>
          <motion.button
            className="submitbutton"
            whileHover={{ scale: 1.05 }}  // Adds a smooth scale effect on hover
            whileTap={{ scale: 0.95 }}   // Shrinks slightly when tapped/clicked
            
          >
            <div className="submittext" style={{ fontSize: "20px", fontWeight: "bold" }}>
              Submit
            </div>
            <SendHorizontal size={24} strokeWidth={1} />
          </motion.button>
        </center>
      </form>
    </motion.div>
  );
}

export default SimpleForm;
