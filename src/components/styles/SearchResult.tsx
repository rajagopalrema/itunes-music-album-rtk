import styled from "styled-components";

export const SearchResultText = styled.div<{fontWeight: string}> `
display: inline-block; 
font-size: medium;
font-weight: ${(props) => props.fontWeight};
`;