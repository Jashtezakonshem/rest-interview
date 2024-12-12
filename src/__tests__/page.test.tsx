import '@testing-library/jest-dom';
import { Article } from '@/model';
import { retrieveTitle, retrieveValidTitles } from '@/utils';
import { expect, describe, it } from '@jest/globals';

const articles: Article[] = [
  {
    title: undefined,
    url: 'https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html',
    author: 'panny',
    num_comments: 1397,
    story_id: undefined,
    story_title: undefined,
    story_url: undefined,
    parent_id: undefined,
    created_at: 1513275215,
  },
  {
    title: 'LOTR',
    url: 'https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html',
    author: 'panny',
    num_comments: 1397,
    story_id: undefined,
    story_title: undefined,
    story_url: undefined,
    parent_id: undefined,
    created_at: 1513275215,
  },
];

describe('Titles', () => {
  it('titles should be lower than articles', () => {
    const titles = articles.map(retrieveTitle);
    const validTitles = retrieveValidTitles(titles);
    expect(validTitles.length).toBeLessThan(articles.length);
  });

  it('title should be LOTR', () => {
    const [, title] = articles.map(retrieveTitle);
    expect(title).toBe('LOTR');
  });
});
