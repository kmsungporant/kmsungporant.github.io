import React, { ReactElement, useEffect } from "react";

type Props = {
  children: ReactElement;
  id?: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
};

const Template = ({ children, id, className, ref }: Props) => {
  return (
    <div className={`h-full snap-start ${className || ""}`} id={id} ref={ref}>
      {children}
    </div>
  );
};

export default Template;
