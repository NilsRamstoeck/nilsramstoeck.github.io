import { FunctionComponent, h, VNode } from "preact";
import { lazy, Suspense, useMemo } from "preact/compat";

type Props = {
  module: string;
  fallback?: VNode<any>;
};


export function LazyLoaded({ module, fallback }: Props) {

  const Component = useMemo<FunctionComponent>(() => lazy(() => import(module)), [module]);

  return <Suspense fallback={fallback ?? <div>loading...</div>}>
    <Component></Component>
  </Suspense>;
}

