declare module '*.svg' {
  const ReactComponent: (
    props: React.SVGAttributes<SVGSVGElement>
  ) => JSX.Element;
  export { ReactComponent };
}
