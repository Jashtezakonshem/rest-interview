const titlesKey = 'rest-interview-titles';

export const saveTitles = ({ titles, page, author }) => {
  try {
    const savedTitles = localStorage.getItem(titlesKey)
      ? JSON.parse(localStorage.getItem(titlesKey) as string)
      : {};
    const titlesForAuthor = savedTitles[author];
    const hasAuthor = Boolean(titlesForAuthor);
    if (hasAuthor) {
      titlesForAuthor[page] = titles;
      savedTitles[author] = titlesForAuthor;
    } else {
      savedTitles[author] = { [page]: titles };
    }
    localStorage.setItem(titlesKey, JSON.stringify(savedTitles));
  } catch (error) {
    console.error(error);
  }
};

export const getSavedTitles = ({ page, author }) => {
  try {
    const savedTitles = localStorage.getItem(titlesKey)
      ? JSON.parse(localStorage.getItem(titlesKey) as string)
      : {};
    const titlesForAuthor = savedTitles[author];
    const hasAuthor = Boolean(titlesForAuthor);
    if (hasAuthor) {
      return titlesForAuthor[page];
    }
  } catch (error) {
    console.error(error);
  }
};
