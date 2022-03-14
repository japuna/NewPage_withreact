import styled from "styled-components";
import tw from "twin.macro";

export const ProfileStyles = styled.div`
  ${tw`
  flex
  font-bold
  h-auto
  items-center
  justify-between
  px-20
  pt-0
  pb-0
  text-xl
  w-full
  bg-primary
`}
  & h2 {
    font-size: 2.6rem;
    &:before {
      ${tw`
        absolute
        content-['']
        rounded-2xl
        border-white
        border-solid
        border-2
        shadow-SecondaryShadow
      `}
      width: 380px;
      height: 70px;
      margin-top: -1%;
      margin-left: -1%;
      transform: rotate(2deg);
    }
    &:after {
      ${tw`
        absolute
        content-['']
        rounded-2xl
        border-secondary
        border-solid
        border-2
        shadow-SecondaryShadow
      `}
      width: 400px;
      height: 70px;
      margin-left: -5%;
      margin-top: -1.2%;
      left: 9%;
      transform: rotate(-1deg);
    }
  }
  & img {
    ${tw`
      w-44
      ml-10
      mt-3
    `}
    z-index:100;
  }
  &:after {
    ${tw`
    content-['']
      w-60
      bg-white
      absolute
      shadow-WhiteShadow
      right-9
    `}
    height: 15rem;
    margin-top: -1%;
    transform: rotate(8deg);
  }
`;

/*

export const ProfileStyles = styled.div`
${tw`
bg-secondary
  flex
  font-bold
  h-auto
  items-center
  justify-between
  px-40
  py-8
  text-xl
  w-full
`}
`
*/
