import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';

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
    <div>
      {tags?.map((tag) => {
        const idKey = catList[0]?._id ? '_id' : 'id'; // Define idKey here
        const filteredCats = catList?.filter((cat) => cat.tags?.includes(tag)) || [];

        return (
          <div key={tag} className="tag-item">
            <button onClick={() => handleToggle(tag)}>{tag}</button>
            {isOpen[tag] && (
              <div className="tag-info">
                {filteredCats.length > 0 ? (
                  <ul>
                    {filteredCats.map((cat) => (
                      <li key={`${cat[idKey]}-${tag}`}>
                        {/* Replace with the appropriate property to display cat information */}
                        <p>{cat[idKey]}</p>
                        {/* Add image or other relevant information based on your cat data structure */}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No cats found with the tag "{tag}".</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CatCards;