import { MutableRefObject, useEffect, useRef } from 'react';

type HandlerFn = () => void;

const useClickOutside = (handler: HandlerFn): MutableRefObject<undefined> => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = event => {
      if (
        !domNode ||
        !domNode.current ||
        //@ts-ignore
        !domNode.current.contains(event.target)
      ) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

export default useClickOutside;
