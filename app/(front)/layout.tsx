
export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow mx-auto p-4 ">
      {children}
    </main>
  );
}
