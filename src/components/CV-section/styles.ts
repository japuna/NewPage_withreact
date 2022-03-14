import styled from "styled-components";
import tw from "twin.macro";

export const CVSectionsStyles = styled.div`
  ${tw`
    bg-secondary
    border-secondary
    border-solid
    p-8
    rounded-2xl
    w-full
  `}
  height: fit-content;
  :nth-child(2n-1) {
    transform: rotate(2deg);
  }
  :nth-child(2n) {
    transform: rotate(0deg);
  }
  h3 {
    ${tw`
      text-3xl
      mb-7
      font-semibold
      text-white
    `}
  }
`;

export const CVSectionContainerStyles = styled.section`
  ${tw`
  bg-darkBlue
    flex
    gap-12
    justify-between
    px-20
    py-10
    w-full
  `}
  height: fit-content;
`;

export const ItemListStyles = styled.div`
  ${tw`
mb-8
`}

  h4 {
    ${tw`
    text-lightGray
    font-bold
  `}
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: bold;
  }
  p {
    ${tw`
    mt-2
    `}
    margin-top: 0.5rem;
    font-size: 1.15rem;
    line-height: 1.4rem;
  }
`;
