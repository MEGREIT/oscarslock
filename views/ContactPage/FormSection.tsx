// views/ContactPage/FormSection.tsx
"use client";
import { useState } from "react";
import styled from "styled-components";
import { media } from "utils/media"; // Assuming you might want media queries later

export default function FormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // <-- Add state for phone
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // --- Update validation to include phone ---
    if (!name || !email || !phone || !message) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // --- Send phone number to backend ---
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Mail sent successfully!");
        setName("");
        setEmail("");
        setPhone(""); // <-- Clear phone on success
        setMessage("");
      } else {
        setError(data.error || "Failed to send mail");
      }
    } catch (err) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      {success && <SuccessMsg>{success}</SuccessMsg>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required // Add required attribute
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required // Add required attribute
      />
      {/* --- Add Phone Input Field --- */}
      <Input
        type="tel" // Use type="tel" for phone numbers
        placeholder="Your Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required // Add required attribute
        // Optional: Add a pattern for basic validation
        // pattern="[0-9]{10}" // Example: for 10 digits
      />
      {/* --- End Phone Input Field --- */}
      <TextArea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required // Add required attribute
      />
      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </SubmitButton>
    </FormWrapper>
  );
}

// --- Increase max-width for larger form ---
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px; /* Increased from 500px */
  width: 100%; /* Ensure it takes available width up to max-width */
  margin: 2rem auto; /* Center the form */
  gap: 1.25rem; /* Slightly increased gap */

  h2 {
    font-size: 2rem; /* Larger heading */
    margin-bottom: 1rem;
    text-align: center;
    color: #15233e; /* Example color */
  }
`;

// --- Increase padding and font-size for inputs ---
const Input = styled.input`
  padding: 1rem; /* Increased padding */
  font-size: 1.1rem; /* Increased font size */
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// --- Increase padding and font-size for textarea ---
const TextArea = styled.textarea`
  padding: 1rem; /* Increased padding */
  font-size: 1.1rem; /* Increased font size */
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px; /* Slightly taller */
  resize: vertical; /* Allow vertical resizing */
`;

// --- Style submit button ---
const SubmitButton = styled.button`
  padding: 1rem; /* Increased padding */
  background-color: #751318;
  color: white;
  font-size: 1.1rem; /* Increased font size */
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #5e0a0a;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMsg = styled.p`
  color: green;
  text-align: center;
  font-size: 1rem;
`;

const ErrorMsg = styled.p`
  color: red;
  text-align: center;
  font-size: 1rem;
`;
