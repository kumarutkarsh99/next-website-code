// lib/renderDynamicFields.tsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function renderDynamicFields(
  meta: any,
  onChange: (key: string, value: any) => void,
  sectionKey: string,
  config: any
) {
  const sectionConfig = config[sectionKey];
  if (!sectionConfig) return null;

  return sectionConfig.fields.map((field: any) => {
    switch (field.type) {
      case "text":
        return (
          <Input
            key={field.name}
            placeholder={field.label}
            value={meta[field.name] || ""}
            onChange={e => onChange(field.name, e.target.value)}
          />
        );

      case "textarea":
        return (
          <Textarea
            key={field.name}
            placeholder={field.label}
            value={meta[field.name] || ""}
            onChange={e => onChange(field.name, e.target.value)}
          />
        );

      case "json":
        return (
          <Textarea
            key={field.name}
            placeholder={field.label}
            rows={6}
            value={JSON.stringify(meta[field.name] || {}, null, 2)}
            onChange={e => {
              try {
                onChange(field.name, JSON.parse(e.target.value));
              } catch {
                // optional: show toast for invalid JSON
              }
            }}
          />
        );

      case "badges":
        const badges = meta.badges || [];
        return (
          <div key={field.name} className="space-y-2">
            <p className="font-medium">{field.label}</p>
            {badges.map((badge: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={badge}
                  onChange={e => {
                    const newBadges = [...badges];
                    newBadges[index] = e.target.value;
                    onChange("badges", newBadges);
                  }}
                />
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    const newBadges = [...badges];
                    newBadges.splice(index, 1);
                    onChange("badges", newBadges);
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => onChange("badges", [...badges, ""])}
            >
              + Add Badge
            </Button>
          </div>
        );
 
case "image": {
  const value = meta[field.name];

  // const preview =
  //   value instanceof File
  //     ? URL.createObjectURL(value)
  //     : typeof value === "string"
  //     ? value.startsWith("http")
  //       ? value
  //       : `${API_BASE_URL}/${value}`
  //     : null;

  const preview =
  value instanceof File
    ? URL.createObjectURL(value)
    : typeof value === "string"
    ? value.startsWith("http")
      ? value
      : `${window.location.origin}/${value}`
    : null;

  return (
    <div key={field.name} className="space-y-2">
      <label className="text-sm font-medium">{field.label}</label>

      <Input
        type="file"
        accept="image/*"
        onChange={e => {
          const file = e.target.files?.[0];
          if (!file) return;
          onChange(field.name, file);
        }}
      />

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="h-28 w-auto rounded border object-cover"
          onLoad={() => {
            if (value instanceof File) {
              URL.revokeObjectURL(preview);
            }
          }}
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
}


/* ---------------- QUILL EDITOR ---------------- */
case "quill":
  return (
    <div key={field.name}  className="
      w-[900px]
      [&_.ql-container]:min-h-[120px]
      [&_.ql-editor]:min-h-[120px]
      [&_.ql-editor]:overflow-y-hidden
    ">
      <label className="text-sm font-medium">{field.label}</label>

<ReactQuill
  theme="snow"
  value={meta[field.name] || ""}
  onChange={(content) => {
    onChange(field.name, content); // keep HTML
  }}
  className="bg-white"
/>
    </div>
  );


      default:
        return null;
    }
  });
}
