import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
  background-color: #151f29;
  color: var(--wp--preset--color--body-text);
  font-family: var(--wp--preset--font-family--poppins);
  font-size: var(--wp--preset--font-size--normal);
  font-weight: var(--wp--custom--typography--font-weight--normal);
  line-height: var(--wp--custom--typography--line-height--paragraph);
  margin: 0;
  padding-top: 20px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-left: 30px;
  box-sizing: border-box;
  margin-left: auto !important;
  margin-right: auto !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  max-width: var(--wp--style--global--wide-size);
`;

export const Logo = styled.img`
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  width: 128px;
  aspect-ratio: auto 128 / 86;
  box-sizing: border-box;
  max-width: 100%;
  vertical-align: middle;
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
  font-family: var(--wp--preset--font-family--poppins);
  font-weight: var(--wp--custom--typography--font-weight--normal);
  line-height: var(--wp--custom--typography--line-height--paragraph);
  font-size: var(--wp--preset--font-size--small);
  color: inherit;
  box-sizing: inherit;
  overflow-wrap: break-word;
`;

export const MenuItem = styled.li`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  font-size: 16px;
  list-style: none;
  color: inherit;
  box-sizing: inherit;
  overflow-wrap: break-word;
`;

export const NavLink = styled(Link)`

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  font-size: 16px;
  list-style: none;
  color: #F2F2F2;
  box-sizing: inherit;
  overflow-wrap: break-word;
`;
