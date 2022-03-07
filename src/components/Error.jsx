import styled from '@emotion/styled/';

const Mensaje = styled.div`
    font-family: 'lato', sans-serif;
    /* background-color: #B7322C; */
    background-color: none;
    border: 2px solid #fa2317;
    color: #fa2317;
    padding: 8px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 25px;
    border-radius: 4px;
    word-spacing: 4px;
`




const Error = ({ children }) => {
  return (
    <Mensaje>{ children }</Mensaje>
  )
}

export default Error