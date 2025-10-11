import NextImage from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { generateSlug } from "@/utils/formatString";
import { media } from "@/utils/media";

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
  useImage: boolean;
  FaIcon?: any;
  istransparent?: boolean;
}

export default function BasicCard({
  title,
  description,
  imageUrl,
  useImage,
  FaIcon,
  istransparent,
}: BasicCardProps) {
  return (
    <Card isTransparent={istransparent!}>
      {useImage ? (
        <NextImage src={imageUrl} alt="header image" width={100} height={100} />
      ) : (
        <FontAwesomeIcon icon={FaIcon} width={90} height={90} />
      )}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}
const Title = styled.div`
  font-weight: bold;
  display: inline-block;
  position: relative;
  font-size: 2.2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: rgb(255, 175, 1);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  ${media("<tablet")} {
    margin-left: 0rem;
    margin-right: 0rem;
  }
  /* &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  } */
`;

const Card = styled.div<{ isTransparent: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  ${(props) =>
    props.isTransparent
      ? "background: transparent;"
      : "background: rgb(255,255,255);"}

  /* box-shadow: var(--shadow-md); */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  border-radius: 0.6rem;
  color: rgb(10, 18, 30);
  font-size: 1.6rem;
  padding: 3 2rem;
  ${media("<tablet")} {
    padding: 3 0rem;
    font-size: 1.2rem;
  }

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Description = styled.div`
  opacity: 0.6;
  font-size: 1.7rem;
  ${media("<tablet")} {
    font-size: 1.3rem;
  }
`;
