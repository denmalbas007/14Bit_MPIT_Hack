import React from "react";
import { Radio, cn } from "@nextui-org/react";

export const RolesRadio = (props: {
  [x: string]: any;
  children: any;
  value: any;
}) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-default-100 hover:bg-default-200 items-center justify-between",
          "flex-row-reverse max-w-[100%] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};
