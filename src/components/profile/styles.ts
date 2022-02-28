import styled from "styled-components";
import tw from "twin.macro"

export const ProfileStyles = styled.div`
${tw`
bg-secondary
  flex
  font-bold
  h-auto
  items-center
  justify-between
  px-40
  pt-20
  pb-16
  text-xl
  w-full
`}
  & img {
    ${tw`
      w-44
      ml-10
      mt-3
    `}
  }
  &:after {
    ${tw`
    content-['']
      w-60
      h-52
      rounded-lg
      border-2
      border-solid
      border-white
      absolute
      shadow-WhiteShadow
    `}
    transform: rotate(8deg);
  }
`


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



