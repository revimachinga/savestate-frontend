interface ComponentTemplateProps {
  text: string
}

export default function ComponentTemplate({ text }: ComponentTemplateProps) {
  return <div className="p-4 bg-gray-200 rounded">{text}</div>
}
