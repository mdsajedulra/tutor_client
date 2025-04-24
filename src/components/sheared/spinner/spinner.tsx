// src/components/ui/FullScreenLoader.tsx

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FullScreenLoaderProps {
  className?: string;
}

const Loader = ({ className }: FullScreenLoaderProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/70",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        <p className="text-sm text-gray-600">Please wait, loading...</p>
      </div>
    </div>
  );
};

export default Loader;
