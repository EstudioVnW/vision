import styled from "styled-components";

export const container = styled.div `
    display: flex;
    flex-direction: column;
    padding: 30px 0 0 .75rem;
`

export const numberWrapper = styled.span`

    position: relative;
    &:focus {
            outline: none;
            box-shadow: 0 0 0 0;
    }
`

export const Input = styled.input`
    margin-top: 10px;
    color: #0000ff;
    text-align:center;
    height: 30px;
    width: 60px;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 10px;
    border-color:#d3d3d3 ;
    border: 1px solid #C4C4C4;
`


export const label = styled.label `

`

export const text = styled.p `
padding: .5rem 0 0 .75rem;
  font-size: .85rem;
  font-family: "SF Pro Regular";
  color: #333333;
  font-weight: 500;

`