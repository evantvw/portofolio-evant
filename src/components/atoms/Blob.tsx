"use client";

import { cn } from "@/libs/utils";

interface Props {
  className?: string;
}

const Blob = ({ className }: Props) => {
  return (
    <div className={cn("size-[500] rounded-full opacity-30", className)} />
  );
};

export default Blob;
