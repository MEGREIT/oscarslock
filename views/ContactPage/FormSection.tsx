// views/ContactPage/FormSection.tsx
"use client";
import { useState } from "react";
import styled from "styled-components";
import { media } from "utils/media";

export default function FormSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");

        if (!name || !email || !phone || !message) {
            setError("Please fill all fields");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, message }),
            });

            const data = await res.json();
            if (res.ok) {
                setSuccess("✅ Thank you! Your message has been sent successfully. We'll get back to you soon!");
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                // Auto-hide success message after 5 seconds
                setTimeout(() => setSuccess(""), 5000);
            } else {
                setError(data.error || "Failed to send mail");
            }
        } catch (err) {
            setError("Something went wrong");
        }
        setLoading(false);
    };

    return (
        <FormContainer>
            <FormWrapper onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                {success && <SuccessMsg>{success}</SuccessMsg>}
                {error && <ErrorMsg>{error}</ErrorMsg>}

                <Label htmlFor="contact-name">Your Name</Label>
                <Input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <Label htmlFor="contact-email">Your Email</Label>
                <Input
                    id="contact-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Label htmlFor="contact-phone">Your Mobile Number</Label>
                <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <Label htmlFor="contact-message">Your Message</Label>
                <TextArea
                    id="contact-message"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <SubmitButton type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </SubmitButton>
            </FormWrapper>
        </FormContainer>
    );
}

// --- Styles ---

const FormContainer = styled.div`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width: 100%;
    margin: 2rem auto;
    padding: 2.5rem; /* Slightly more padding */
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 0.8rem; /* Adjusted gap */

    h2 {
        font-size: 2.5rem; /* Larger heading */
        margin-bottom: 2rem;
        text-align: center;
        color: #15233e;
    }
`;

const Label = styled.label`
    font-size: 1.1rem; /* Increased label size */
    font-weight: 600;
    color: #333;
    margin-bottom: 0.3rem;
`;

const Input = styled.input`
    padding: 1rem 1.1rem; /* Adjusted padding */
    font-size: 1.1rem; /* Increased font size */
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 0.8rem;

    &::placeholder {
        color: #999;
        font-size: 1.1rem; /* Increased placeholder size */
    }
`;

const TextArea = styled.textarea`
    padding: 1rem 1.1rem; /* Adjusted padding */
    font-size: 1.1rem; /* Increased font size */
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height: 160px; /* Taller */
    resize: vertical;
    width: 100%;
    margin-bottom: 0.8rem;

     &::placeholder {
        color: #999;
        font-size: 1.1rem; /* Increased placeholder size */
    }
`;

const SubmitButton = styled.button`
    padding: 1.1rem 1.5rem; /* Adjusted padding */
    background-color: #751318;
    color: white;
    font-size: 1.2rem; /* Increased button text size */
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: 1rem;

    &:hover:not(:disabled) {
        background-color: #5e0a0a;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const SuccessMsg = styled.p`
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 6px;
    padding: 1.2rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    animation: slideDown 0.3s ease-out;

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const ErrorMsg = styled.p`
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 6px;
    padding: 1.2rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    animation: slideDown 0.3s ease-out;

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
