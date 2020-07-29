import React from 'react';

import {Container, PreviusButton, NextButton} from './styles';

interface IPagination {
  next(): void;
  previus(): void;
  total: number;
  page: number;
}

const Pagination: React.FC<IPagination> = ({
  children,
  next,
  previus,
  total,
  page,
}) => {
  return (
    <>
      {total > 1 ? (
        <Container>
          <PreviusButton onClick={previus} disabled={page === 1}>
            -
          </PreviusButton>
          {children}
          <NextButton onClick={next} disabled={page === total}>
            +
          </NextButton>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default Pagination;
