import NavBar from "@/components/navbar";

const RootLayout = ({ children }) => {
  
  return (
    <>
      <div className="w-screen h-screen flex lg:flex-row md:flex-row sm:flex-col  ">
        <NavBar>
        <main className="w-fit h-fit">{children}</main>
        </NavBar>
      </div>


    </>
  );
};

export default RootLayout;
