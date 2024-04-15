import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import catMock from '../mock/cats-offline.json';
import tagMock from '../mock/tags-offline.json';
import NavigationBar from '../components/NavigationBar';
import CatCards from '../components/CatCards';

function CatList() {
  const { setCatList, setTag, catList, tags } = useContext(AppContext);

  // Fetch cat and tag data (replace if using a custom API)
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('https://cataas.com/api/cats');
        const data = await response.json();
        setCatList(data)
      } catch (error) {
        console.error('Error fetching cats:', error);
        setCatList(catMock); 
        setTag(tagMock); 
      }
    };

    const fetchTags = async () => {
      try {
        const response = await fetch('https://cataas.com/api/tags');
        const data = await response.json();
        setTag(data)
      } catch (error) {
        console.error('Error fetching tags:', error);
        setTag(tagMock); 
        setCatList(catMock);
      }
    };

    fetchCats();
    fetchTags();
  }, [setCatList, setTag]); // Only re-run on context changes

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <section>
          <CatCards />
        </section>
      </main>
    </>
  );
}

export default CatList;
