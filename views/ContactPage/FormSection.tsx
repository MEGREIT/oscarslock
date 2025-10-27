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
                setSuccess("Mail sent successfully!");
                setName("");
                setEmail("");
                setPhone("");
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
        // Added padding to the outer div for better spacing on small screens
        <FormContainer>
            <FormWrapper onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                {success && <SuccessMsg>{success}</SuccessMsg>}
                {error && <ErrorMsg>{error}</ErrorMsg>}

                {/* Added Labels */}
                <Label htmlFor="contact-name">Your Name</Label>
                <Input
                    id="contact-name" // Match label htmlFor
                    type="text"
                    placeholder="Enter your name" // Placeholder is now a hint
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

// New container for padding
const FormContainer = styled.div`
    padding: 1rem; // Add padding around the form
    width: 100%;
    display: flex;
    justify-content: center; // Center the form wrapper
`;


// --- Increase max-width for larger form ---
const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 700px; /* Increased width */
    width: 100%; /* Ensure it takes available width up to max-width */
    margin: 2rem auto; /* Center the form */
    padding: 2rem; /* Add padding inside the form */
    background-color: #f9f9f9; /* Optional: Light background for contrast */
    border-radius: 8px; /* Optional: Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow */
    gap: 0.75rem; /* Gap between label and input */

    h2 {
        font-size: 2.25rem; /* Larger heading */
        margin-bottom: 1.5rem;
        text-align: center;
        color: #15233e;
    }
`;

// New Label style
const Label = styled.label`
    font-size: 1rem;
    font-weight: 600;
    color: #333; // Darker label text
    margin-bottom: 0.25rem; // Space below label
`;


// --- Increase padding and font-size for inputs ---
const Input = styled.input`
    padding: 0.9rem 1rem; /* Adjusted padding */
    font-size: 1rem; /* Standard font size */
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%; // Ensure full width
    margin-bottom: 0.75rem; // Space below input

    &::placeholder {
        color: #999; // Lighter placeholder text
    }
`;

// --- Increase padding and font-size for textarea ---
const TextArea = styled.textarea`
    padding: 0.9rem 1rem; /* Adjusted padding */
    font-size: 1rem; /* Standard font size */
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height: 150px;
    resize: vertical;
    width: 100%; // Ensure full width
    margin-bottom: 0.75rem; // Space below input

     &::placeholder {
        color: #999; // Lighter placeholder text
    }
`;

// --- Style submit button ---
const SubmitButton = styled.button`
    padding: 1rem 1.5rem; /* Adjusted padding */
    background-color: #751318;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: 1rem; // Add space above button

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
    margin-bottom: 1rem;
`;

const ErrorMsg = styled.p`
    color: red;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1rem;
`;
