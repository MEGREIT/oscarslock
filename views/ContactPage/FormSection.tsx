// views/ContactPage/FormSection.tsx
import { useState } from "react";
import styled from "styled-components";

export default function FormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!name || !email || !message) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Mail sent successfully!");
        setName("");
        setEmail("");
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
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextArea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </SubmitButton>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  min-height: 120px;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: #751318;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

const SuccessMsg = styled.p`
  color: green;
`;

const ErrorMsg = styled.p`
  color: red;
`;
