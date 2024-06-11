interface IWebsitePage {
  name: string;
  path: string;
};

export const websitePages: IWebsitePage[] = [
  { name: 'About', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Resume', path: '/resume' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];
