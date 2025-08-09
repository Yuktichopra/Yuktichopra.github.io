import Image from 'next/image';
import Link from 'next/link';
import { Prose } from './prose';

export function MDXComponents(props: any) {
  return {
    h1: (props: any) => <h1 className="text-4xl font-bold text-slate-900 mb-6 mt-10" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-semibold text-slate-800 mb-5 mt-8" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-6" {...props} />,
    h4: (props: any) => <h4 className="text-xl font-semibold text-slate-800 mb-3 mt-5" {...props} />,
    p: (props: any) => <p className="text-lg text-slate-700 leading-relaxed mb-4" {...props} />,
    a: (props: any) => <Link className="text-cyan-600 hover:underline" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside text-slate-700 mb-4 space-y-1" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside text-slate-700 mb-4 space-y-1" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-cyan-600 pl-4 italic text-slate-600 my-6" {...props} />,
    img: (props: any) => <Image className="rounded-lg my-6" {...props} />,
    pre: (props: any) => <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-6" {...props} />,
    code: (props: any) => <code className="bg-gray-100 text-slate-800 px-1 py-0.5 rounded" {...props} />,
    // Add other components as needed
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <Prose>{children}</Prose>
    ),
    ...props.components,
  };
}
