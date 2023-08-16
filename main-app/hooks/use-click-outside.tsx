import { RefObject, useEffect, useRef } from 'react';

type HandlerFn = () => void;

const useClickOutside = (handler: HandlerFn): RefObject<any> => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
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
