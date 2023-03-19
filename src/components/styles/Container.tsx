import styled from "styled-components";
import { MainTitle } from "../styles/MainTitle"
import { DataNotAvailable } from "./DataNotAvailable";
import {SearchResultText} from "./SearchResult";

export const Appcontainer: any = styled.div`
    width: 90%;
    margin: 0px auto 0px auto;
    background-color: white;
    font-family: 'Poppins', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFFFF;
    color:#565656;
`;

Appcontainer.MainTitle = MainTitle;
Appcontainer.DataNotAvailable = DataNotAvailable;
Appcontainer.SearchResultText = SearchResultText;



