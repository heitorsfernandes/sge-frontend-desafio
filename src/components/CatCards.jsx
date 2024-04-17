import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import  { CatCardsContainer, TagItem, TagButton, TagInfo, TagList, TagListItem } from '../styles/CatCardsStyle';


function CatCards() {
  const { catList, tags } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState({});

  useEffect(() => {
    // Cria um objeto com o estado false para cada tag
    const initialIsOpenState = {};
    tags.forEach(tag => {
      initialIsOpenState[tag] = false;
    });
    setIsOpen(initialIsOpenState);
  }, [tags]);

  const handleToggle = (tag) => {
    setIsOpen(prevState => ({ ...prevState, [tag]: !prevState[tag] }));
  };

  return (
    <CatCardsContainer>
      {tags?.map((tag) => {
        const idKey = catList[0]?._id ? '_id' : 'id'; // Define idKey here
        const filteredCats = catList?.filter((cat) => cat.tags?.includes(tag)) || [];

        return (
          <TagItem key={tag} className="tag-item">
            <TagButton onClick={() => handleToggle(tag)}>{tag}</TagButton>
            {isOpen[tag] && (
              <TagInfo className="tag-info">
                {filteredCats.length > 0 ? (
                  <TagList>
                    {filteredCats.map((cat) => (
                      <TagListItem key={`${cat[idKey]}-${tag}`}>
                        <p>{cat[idKey]}</p>
                      </TagListItem>
                    ))}
                  </TagList>
                ) : (
                  <p>No cats found with the tag "{tag}".</p>
                )}
              </TagInfo>
            )}
          </TagItem>
        );
      })}
    </CatCardsContainer>
  );
}

export default CatCards;