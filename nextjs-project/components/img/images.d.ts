declare module '*.jpg' {
  const content: import('./components/sitecomp/img').StaticImageData;
  export default content;
}
