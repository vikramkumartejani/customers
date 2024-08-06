import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 md:py-10 py-5">
        <Sidebar />
        <main className="main-container flex-1 px-3 lg:pl-5 lg:pr-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
