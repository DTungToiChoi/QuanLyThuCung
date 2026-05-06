interface MonacoEditorProps {
  value?: string;
  onChange?: (value: string | undefined) => void;
  language?: "json" | "xml" | "graphql" | "sql";
  height?: string;
  readOnly?: boolean;
}

export function MonacoEditorField({
  value,
  onChange,
  height = "300px",
  readOnly = false,
}: MonacoEditorProps) {
  return (
    <textarea
      value={value ?? ""}
      readOnly={readOnly}
      onChange={(event) => onChange?.(event.target.value)}
      style={{
        width: "100%",
        minHeight: height,
        padding: 12,
        border: "1px solid #d9d9d9",
        borderRadius: 6,
        fontFamily: "Consolas, Monaco, monospace",
        fontSize: 13,
        lineHeight: 1.5,
        resize: "vertical",
      }}
    />
  );
}
