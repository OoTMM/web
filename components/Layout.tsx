import RawLayout from './RawLayout';

type LayoutProps = {
  children: React.ReactNode
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <RawLayout>
        <main className="main">
          {children}
        </main>
      </RawLayout>
    </>
  )
}
