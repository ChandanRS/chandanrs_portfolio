import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family:DM Sans, Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.5s linear;
  }
  #menu a{
    color: ${({theme}) => theme.link}
  }
  #menu a i{
    color: ${({theme}) => theme.link}
  }

  #menu li::after{
    color: ${({theme}) => theme.link}
  }
 
  .contact i{
    color: ${({theme}) => theme.link}
  }
  .Container{
    background: ${({theme}) => theme.skillsbg}
  }
  .main-container-footer{
    background: ${({theme}) => theme.footerbg}
  }
  `
