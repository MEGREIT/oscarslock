import { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { media } from "utils/media";

export default function FormSection() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHasErrored(false);
    setHasSuccessfullySentMail(false);
    setIsLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      phone: fd.get("phone")?.toString() || "",
      subject: fd.get("subject")?.toString() || "",
      description: fd.get("description")?.toString() || "",
    };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setHasSuccessfullySentMail(true);
        e.currentTarget.reset();
      } else {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputStack>
            <Input placeholder="Your Name" id="name" name="name" required />
          </InputStack>
          <InputStack>
            <Input placeholder="Your Email" id="email" name="email" required />
          </InputStack>
          <InputStack>
            <Input placeholder="Your Phone Number" id="phone" name="phone" />
          </InputStack>
        </InputGroup>

        <InputStack>
          <Input placeholder="Subject" id="subject" name="subject" />
        </InputStack>

        <InputStack>
          <Textarea
            as="textarea"
            placeholder="How Can We Help you..."
            id="description"
            name="description"
            required
          />
        </InputStack>

        <Button as="button" type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </Button>

        {hasSuccessfullySentMail && <Message success>✅ Mail sent successfully!</Message>}
        {hasErrored && <Message error>❌ Something went wrong. Try again.</Message>}
      </Form>
    </Wrapper>
  );
}

// ===== STYLES =====
const Wrapper = styled.div`
  justify-content: center;
  margin: 0 10rem;
  text-align: center;
  ${media("<tablet")} { margin: 0 2rem; }
`;

const Form = styled.form`
  input::placeholder, textarea::placeholder { font-weight: bold; color: #0a3161; }
  input, textarea { background-color: #fff; }
  & > * { margin-bottom: 2rem; }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:first-child) { margin-left: 0.5rem; }
  & > * { flex: 1; }
  ${media("<=tablet")} {
    flex-direction: column;
    & > *:not(:first-child) { margin-top: 2rem; }
  }
`;

const InputStack = styled.div` display: flex; flex-direction: column; width: 100%; `;
const Textarea = styled(Input)` width: 100%; min-height: 20rem; `;

const Message = styled.p<{ success?: boolean; error?: boolean }>`
  color: ${(props) => (props.success ? "green" : props.error ? "red" : "black")};
  font-weight: bold;
  margin-top: 1rem;
`;
