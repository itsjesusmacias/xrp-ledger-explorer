// @ts-nocheck

import { useState, useEffect } from "react";
import { useIsMounted } from "./useIsMounted";

// types

// TODO pendiente tipar 

interface Options {
  triggerPromiseOnMount: () => void;
  deserializerFn: () => void;
}
interface Props {
  promiseFunction: () => void;
}

interface Return {
  result: any;
  error: string | null;
  isLoading: boolean;
  triggerPromise: (...promiseParams: any[]) => Promise<void>;
}

/**
 * Hook to use as a base for promiseBased hooks like hooks for API REST calls.
 *
 * Allows to call the promise onMount, and to provide a deserializer function
 * to treat the promise result on succes.
 *
 * If the hook is unmounted while the promise is still not resolved,
 * the setState will be blocked to avoid memory leaks.
 *
 * @param { Function } promiseFunction
 * @param {{ triggerPromiseOnMount: boolean, deserializerFn: Function }} conf
 * @returns {{
 *  result: *,
 *  error: string,
 *  isLoading: boolean,
 *  triggerPromise: Function
 * }}
 */
const usePromise: Return = (
  promiseFunction,
  { triggerPromiseOnMount, deserializerFn } = {}
): Props => {
  const isMounted = useIsMounted();
  const [state, setState] = useState({
    result: null,
    error: null,
    isLoading: false,
  });

  const triggerPromise = async (...promiseParams) => {
    if (isMounted.current) {
      setState({ ...state, isLoading: true });
      try {
        let result = await promiseFunction(...promiseParams);
        if (deserializerFn) {
          result = deserializerFn(result);
        }
        if (isMounted.current) {
          setState({
            result,
            error: null,
            isLoading: false,
          });
        }
      } catch (error) {
        if (isMounted.current) {
          setState({
            result: null,
            error,
            isLoading: false,
          });
        }
      }
    }
  };
  useEffect(() => {
    if (triggerPromiseOnMount) {
      triggerPromise();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    result: state.result,
    isLoading: state.isLoading,
    error: state.error,
    triggerPromise,
  };
};

export { usePromise };
