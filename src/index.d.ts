import React from 'react';
declare module '*.png' {
  const content: string;
  export default content;
}

type SvgComponent = React.FC<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  const value: SvgComponent;
  export default value;
}

declare module '*.scss' {
  const content: { [key: string]: string };
  export default content;
}

declare module 'react-icons/ai';
