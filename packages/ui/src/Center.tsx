export const Center = ({ Children }: { Children: React.ReactNode }) => {
  return (
    <div className="flex justify-center flex-col h-full">
      <div className="flex justify-center">{Children}</div>
    </div>
  );
};
