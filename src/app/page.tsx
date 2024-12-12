'use client';
import { useCallback, useEffect, useState } from 'react';
import { getArticles } from '@/api';
import { retrieveTitle, retrieveValidTitles } from '@/utils';
import { Pagination, Select } from 'antd';
import { authors } from '@/data/authors';
import { getSavedTitles, saveTitles } from '@/utils/localStorage';

const authorOptions = authors.map((author) => ({
  label: author,
  value: author,
}));
export default function Home() {
  const [titles, setTitles] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [author, setAuthor] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number>(1);

  const onAuthorChange = useCallback((author: string) => {
    setAuthor(author);
    setPage(1);
  }, []);

  const onPaginationChange = async (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (!author) {
      setTitles([]);
    } else {
      const savedTitles = getSavedTitles({ page, author });
      if (savedTitles) {
        setTitles(savedTitles);
      } else {
        const fetch = async () => {
          const articlesPayload = await getArticles(author, page);
          setTotal(articlesPayload.total);
          const titles = articlesPayload.data.map(retrieveTitle);
          const validTitles = retrieveValidTitles(titles);
          setTitles(validTitles);
          saveTitles({ titles: validTitles, page, author });
        };

        fetch();
      }
    }
  }, [page, author]);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Select
        className="w-32"
        allowClear={true}
        onChange={onAuthorChange}
        options={authorOptions}
      />
      <div className="mt-4">
        {titles.map((title) => (
          <div key={title}>{title}</div>
        ))}
      </div>
      <Pagination current={page} onChange={onPaginationChange} total={total} />
    </div>
  );
}
