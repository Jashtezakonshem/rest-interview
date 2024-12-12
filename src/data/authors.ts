/*
* const promises = []
      for (let i = 1; i <= 5; i++) {
        promises.push(getArticles(undefined, i))
      }
      const articlesPayloads = await Promise.all(promises)
      const authors = articlesPayloads.map((articlesPayload) => articlesPayload.data.map((article) => article.author))
      const allAuthors = flatten(authors)
      const uniqueAuthors = Array.from(new Set(allAuthors))
* */

export const authors = [
  "epaga",
  "patricktomas",
  "saintamh",
  "panny",
  "olalonde",
  "WisNorCan",
  "dmmalam",
  "replicatorblog",
  "eightturn",
  "vladikoff",
  "mpweiher",
  "coloneltcb",
  "guelo",
  "frederfred",
  "pkiller",
];
