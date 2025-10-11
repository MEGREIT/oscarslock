import { useState } from "react";
// import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { media } from "utils/media";

interface EmailPayload {
  name: string;
  email: string;
  description: string;
}

export default function FormSection() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Email from contact form",
          ...payload,
        }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  return (
    <Wrapper>
      <Form
        action={"https://formsubmit.co/" + `oscar@oscarslock.com`}
        method="POST"
        encType="multipart/form-data"
      >
        <InputGroup>
          <InputStack>
            {/* {errors.name && <ErrorMessage>Name is required</ErrorMessage>} */}
            <Input
              placeholder="Your Name"
              id="name"
              name="name"
              // disabled={isDisabled}
              // {...register("name", { required: true })}
            />
          </InputStack>
          <InputStack>
            {/* {errors.email && <ErrorMessage>Email is required</ErrorMessage>} */}
            <Input
              placeholder="Your Email"
              id="email"
              name="email"
              // disabled={isDisabled}
              // {...register("email", { required: true })}
            />
          </InputStack>
          {/* phone number */}
          <InputStack>
            <Input
              placeholder="Your Phone Number"
              id="phone"
              name="phone"
              // disabled={isDisabled}
              // {...register("phone", { required: true })}
            />
          </InputStack>
          {/* {errors.phone && <ErrorMessage>Phone is required</ErrorMessage>} */}
        </InputGroup>
        <InputStack>
          <Input
            placeholder="Subject"
            id="subject"
            name="subject"
            // disabled={isDisabled}
            // {...register("subject", { required: false })}
          />
        </InputStack>
        <InputStack>
          {/* {errors.description && (
            <ErrorMessage>Description is required</ErrorMessage>
          )} */}
          <Textarea
            as="textarea"
            placeholder="How Can We Help you..."
            id="description"
            name="description"
            // disabled={isDisabled}
            // {...register("description", { required: true })}
          />
        </InputStack>
        <InputStack>
          {/* {errors.description && (
            <ErrorMessage>Description is required</ErrorMessage>
          )} */}

          <FileButton htmlFor="upload">
            {/* <FontAwesomeIcon
              className=" hover:text-[#f2bd28] mx-auto"
              icon={faPaperclip}
            /> */}
            <p className="text-2xl">Upload a file</p>
          </FileButton>
          <File
            id="upload"
            type="file"
            name="upload"
            // {...register("file", { required: false })}
          />
        </InputStack>
        <input type="hidden" name="_template" value="basic" />
        <Button
          as="button"
          type="submit"

          // disabled={isSubmitDisabled}
        >
          Send Message
        </Button>
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  margin: 0 10rem;
  text-align: center;
  ${media("<tablet")} {
    margin: 0 2rem;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.3rem;
`;

const Form = styled.form`
  input::placeholder {
    font-weight: bold;
    color: #0a3161;
  }
  textarea::placeholder {
    font-weight: bold;
    color: #0a3161;
  }
  input,
  textarea {
    background-color: #fff; /* Change this to your desired background color */
    /* font-weight: bold; */
  }
  & > * {
    margin-bottom: 2rem;
  }
`;

const FileButton = styled.label`
  cursor: pointer;
  font-weight: bold;
  display: inline-block;
  position: relative;
  margin-top: 1rem;
  &:hover {
    color: #751318;
  }
`;
const File = styled.input`
  display: none;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:first-child) {
    margin-left: 0.5rem;
  }

  & > * {
    flex: 1;
  }

  ${media("<=tablet")} {
    flex-direction: column;
    & > *:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:first-child) {
  }
`;

const ErrorMessage = styled.p`
  color: rgb(207, 34, 46);
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
