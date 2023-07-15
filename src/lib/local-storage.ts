import type { ShortLink, ShortLinks } from "@/interfaces/short-link";
import { LOCAL_STORAGE_KEY } from "./constants";
import { generateRandomString } from "./generate-random-string";
import { onClient } from "./on-client";
export const getAllLinks = (): ShortLinks => {
  const links = JSON.parse(
    onClient(() => localStorage.getItem(LOCAL_STORAGE_KEY)) ?? "{}"
  );

  return links;
};

export const addLink = (link: string) => {
  const links = getAllLinks();
  const shortId = generateRandomString();
  if (shortId in links) {
    addLink(link);
  } else {
    const newLink: ShortLink = {
      url: link,
      shortId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      visits: 0,
    };
    links[shortId] = newLink;
    onClient(() =>
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links))
    );
    return newLink;
  }
};

export const removeLink = (shortId: string) => {
  const links = getAllLinks();
  delete links[shortId];
  onClient(() =>
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links))
  );
};

export const updateLink = (
  previousShortId: string,
  newShortId: string,
  newUrl: string
) => {
  const links = getAllLinks();
  const previousLink = links[previousShortId];
  if (previousShortId !== newShortId) {
    const exists = links[newShortId];
    if (exists) return true;
    delete links[previousShortId];
    const newLink: ShortLink = {
      createdAt: previousLink.createdAt,
      updatedAt: new Date().toISOString(),
      url: newUrl,
      shortId: newShortId,
      visits: previousLink.visits,
    };
    links[newShortId] = newLink;
  } else {
    previousLink.updatedAt = new Date().toISOString();
    previousLink.url = newUrl;
  }

  onClient(() =>
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links))
  );
};

export const updateVisitCount = (shortId: string) => {
  const links = getAllLinks();
  const link = links[shortId];
  if (link) link.visits++;
  onClient(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links));
  });
};
