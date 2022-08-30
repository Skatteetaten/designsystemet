import React, { useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { MyExampleComponent } from './example-component';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <T extends WithRouterProps>(
  Component: React.ComponentType<T>
) => {
  return function Test(props: Omit<T, keyof WithRouterProps>): JSX.Element {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component
        {...(props as T)}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  };
};

// Lage et eksempel med forwardRef ytterst + withRouter inne
// Lage et eksempel med Root props component

export const MyExampleComponentWithHOC = (): JSX.Element => {
  const myRef = useRef<HTMLButtonElement>(null);

  return (
    <MyExampleComponent ref={myRef} id={'123'}>
      {'lorem'}
    </MyExampleComponent>
  );
};

export const Test = withRouter(MyExampleComponentWithHOC);
