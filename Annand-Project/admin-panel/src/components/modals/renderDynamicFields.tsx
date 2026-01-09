import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SECTION_FORM_CONFIG } from "@/lib/sectionFormConfig";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type OnChangeFn = (key: string, value: any) => void;

export function renderDynamicFields(
  meta: Record<string, any>,
  onChange: OnChangeFn,
  sectionKey: string,
  config: typeof SECTION_FORM_CONFIG
) {
  const section = config[sectionKey];
  if (!section) return null;

  return section.fields.map(field => {
    const value = meta[field.name] ?? "";

    switch (field.type) {
      /* ---------------- TEXT ---------------- */
      case "text":
        return (
          <Input
            key={field.name}
            placeholder={field.label}
            value={value}
            onChange={e => onChange(field.name, e.target.value)}
          />
        );

      /* ---------------- TEXTAREA ---------------- */
      case "textarea":
        return (
          <Textarea
            key={field.name}
            placeholder={field.label}
            value={value}
            onChange={e => onChange(field.name, e.target.value)}
          />
        );

      /* ---------------- JSON ---------------- */
      case "json":
        return (
          <Textarea
            key={field.name}
            rows={6}
            placeholder={field.label}
            value={
              typeof value === "string"
                ? value
                : JSON.stringify(value, null, 2)
            }
            onChange={e => {
              try {
                onChange(field.name, JSON.parse(e.target.value));
              } catch {
                onChange(field.name, e.target.value);
              }
            }}
          />
        );

      /* ---------------- FILE UPLOAD ---------------- */
      case "file":
        return (
          <div key={field.name} className="space-y-2">
            <label className="text-sm font-medium">{field.label}</label>

            <Input
              type="file"
              accept="image/*"
              onChange={async e => {
                const file = e.target.files?.[0];
                if (!file) return;

                const formData = new FormData();
                formData.append("file", file);

                const res = await fetch(`${API_BASE_URL}/upload`, {
                  method: "POST",
                  body: formData,
                });

                const data = await res.json();

                // ✅ store URL in meta
                onChange(field.name, data.url);
              }}
            />

            {value && (
              <img
                src={value}
                alt="preview"
                className="h-28 rounded border object-cover"
              />
            )}
          </div>
        );

      /* ---------------- QUILL EDITOR ---------------- */
      case "quill":
        return (
          <div key={field.name} className="space-y-2">
            <label className="text-sm font-medium">{field.label}</label>

            <ReactQuill
              theme="snow"
              value={value}
              onChange={html => onChange(field.name, html)}
              className="bg-white"
            />
          </div>
        );

      default:
        return null;
    }
  });
}
