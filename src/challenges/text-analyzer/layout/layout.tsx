interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <main className="bg-slate-100 p-4 w-full">{children}</main>;
};

export default Layout;
