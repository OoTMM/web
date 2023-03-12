import React from 'react';

type Props = {
  children?: React.ReactNode
};

const H1 = ({ children }: Props) => (<h1>{children}</h1>);
const H2 = ({ children }: Props) => (<h2>{children}</h2>);
const H3 = ({ children }: Props) => (<h3>{children}</h3>);

export function useMDXComponents() {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
  };
}
