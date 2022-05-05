import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import debounce from "../../services/debounce";

interface IPaginationParams {
  children: any;
  onNext: Function;
  className: string;
}

const Pagination: React.FC<IPaginationParams> = ({
  children,
  onNext,
  className,
}) => {
  const ancorRef = useRef<any>();

  const debounceOnNext = debounce(onNext, 250);

  useOnScreen(ancorRef, debounceOnNext, "100px");

  return (
    <div className={className}>
      {children}
      <div ref={ancorRef}></div>
    </div>
  );
};

export default Pagination;
