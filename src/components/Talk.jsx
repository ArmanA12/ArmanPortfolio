import React, { useState } from "react";
import { SendHorizontal } from 'lucide-react';


function SimpleForm() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ email: "", message: "" });
  };

  return (
    <div  className="form" style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h5 style={{fontSize:"16px",letterSpacing:"1px",padding:"4px"}}>
      Just a quick hit, and you're good to go. 🎯
      </h5>
      <form onSubmit={handleSubmit}>
        <div style={{  textAlign: "left", padding:"15px" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "95%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginTop:"10px" }}
          />
        </div>
        <div style={{  textAlign: "left", padding:"15px" }}>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            style={{ width: "95%", padding: "10px", marginTop:"10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <center>
        <button className="submitbutton"  >
          <div className="submittext" style={{fontSize:"30px", fontWeight:"200"}}>Submit</div>
           <SendHorizontal size={30}  strokeWidth={1}  />
        </button>

        </center>
      </form>
    </div>
  );
}

export default SimpleForm;
