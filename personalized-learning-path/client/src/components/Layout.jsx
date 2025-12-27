import Navbar from "./Navbar";

const Layout = ({ children, fullWidth = false }) => {
  return (
    <>
      <Navbar />
      <main
        style={
          fullWidth
            ? { width: "100%" }
            : { maxWidth: "1200px", margin: "0 auto", padding: "20px" }
        }
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
