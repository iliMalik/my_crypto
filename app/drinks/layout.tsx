export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx-create-drinks</code>
        </pre>
      </div>
      {children}
    </div>
  );
}
