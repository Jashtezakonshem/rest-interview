import { Article } from "@/model";

export const retrieveTitle = (article: Article): string => {
  if (article.title) {
    return article.title;
  }
  if (article.story_title) {
    return article.story_title;
  }
};

export const retrieveValidTitles = (
  titles: Array<string | undefined>,
): string[] => {
  return titles.filter((title): title is string => title !== undefined);
};
