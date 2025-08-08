"use client";

type UnrealizedPerformanceRootProps = {
  children: React.ReactNode;
};
export function UnrealizedPerformanceRoot({
  children,
}: UnrealizedPerformanceRootProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Unrealized performance</h2>

      <table className="w-full text-left">{children}</table>
    </div>
  );
}
