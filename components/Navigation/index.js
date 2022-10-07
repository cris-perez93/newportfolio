import styled from "@emotion/styled";
import Link from "next/link";


const NavigationElement = styled.li`
  
  transition: 0.3s all;

  padding-right:50px;
  padding-left:10px;
  &:hover {
    transform: translateY(-2px);
    text-shadow: 5px 5px 1px rgba(0, 0, 0, 0.336);
    color: #4517c4;
  }
`;

const Nav = styled.nav`
  position:absolute ;
  display: flex;
  flex-direction: column;
  top: 50px;
  left: 50px;
  gap: 10px;
  font-size: 24px;
  padding:10px;
  display: flex;
  justify-content: space-between;
 
`

const Navigation = () => {

    return (
      <Nav>
        <Link href="/"><a><NavigationElement >profile</NavigationElement></a></Link>
        <Link href="/works"><a><NavigationElement >works</NavigationElement></a></Link>
        <Link href="/ilustrations"><a><NavigationElement>ilustrations</NavigationElement></a></Link>
        <NavigationElement><a>contact</a></NavigationElement>
      </Nav>
    );
}
 
export default Navigation;