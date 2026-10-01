import React from "react";
import Footer from "../components/layout/client/footer";
import NavBar from "../components/layout/client/nav";

const ClientLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <NavBar />
      <section className="min-h-[80vh] relative top-16 z-0">{children}</section>

      <Footer />
    </main>
  );
};

export default ClientLayout;
