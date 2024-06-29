type Props = {
  children: JSX.Element;
};

const FormOnlyLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col bg-base-200 p-8 text-base-content min-h-screen w-full">
      <div className="flex flex-col self-center bg-base-100 border border-base-300 rounded-md max-w-3xl min-h-[80vh] min-w-[35vw] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default FormOnlyLayout;
