import styled from 'styled-components';

export const CatCardsContainer = styled.div`
  padding-top: 20px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-left: 30px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TagItem = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 330px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 
`;

export const TagButton = styled.button`
  background-color: #eff168;
  color: #121b23;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  border-radius: 5px;

  &:hover {
    background-color: #d8c943;
  }
`;

export const TagInfo = styled.div`
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 653px; 
`;

export const TagList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
`;

export const TagListItem = styled.li`
  border: 1px solid #eff168;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #121b23;
  text-align: center;
`;