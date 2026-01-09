import Layout from "@/components/Layout";
import CMSSettingsTabs from "@/pages/CmsDashboardTabs";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Upload } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface MailMergeJob {
  id: number;
  template_id: number;
  template_name:string;
  total: number;
  processed: number;
  status: string;
  created_at: string;
}

interface MailTemplate {
  id: number;
  name: string;
}
interface ApiResponse<T> {
  status: boolean;
  message: string;
  result: T;
}

const CMS = () => {
  const [activeTab, setActiveTab] =
    useState<"pages" | "template">("pages");

  const [jobs, setJobs] = useState<MailMergeJob[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const [file, setFile] = useState<File | null>(null);
  const [templateId, setTemplateId] = useState("");
  const [uploading, setUploading] = useState(false);
  const [templates, setTemplates] = useState([]);
  

  /** ✅ Fetch mail merge jobs */
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<ApiResponse<MailMergeJob[]>>(
        `${API_BASE_URL}/email/merge-jobs`
      );
      setJobs(data.result);
    } catch {
      toast.error("Failed to load mail merge jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "template") 
    {
        fetchJobs();
    fetchTemplates();
}
  }, [activeTab]);

  const toggleOne = (id: number) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (jobs.every(j => selected.has(j.id))) {
      setSelected(new Set());
    } else {
      setSelected(new Set(jobs.map(j => j.id)));
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this mail merge job?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/email/merge-jobs/${id}`);
      toast.success("Job deleted");
      fetchJobs();
    } catch {
      toast.error("Failed to delete job");
    }
  };

  /** ✅ Upload CSV */
  const handleUpload = async () => {
    if (!file || !templateId) {
      toast.error("CSV file and Template ID are required");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("templateId", templateId);

    try {
      setUploading(true);
      await axios.post(
        `${API_BASE_URL}/email/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("CSV uploaded successfully");
      setFile(null);
      setTemplateId("");
      fetchJobs();
     fetchTemplates();
    } catch {
      toast.error("CSV upload failed");
    } finally {
      setUploading(false);
    }
   
  };

 const fetchTemplates = async () => {
  setLoading(true);
  try {
    const { data } = await axios.get<ApiResponse<MailTemplate[]>>(
      `${API_BASE_URL}/email/mail-templates`
    );
    setTemplates(data.result);
  } catch (error) {
    toast.error("Failed to load mail templates");
  } finally {
    setLoading(false);
  }
};

  return (
    <Layout>
      <div className="space-y-6">
        {/* <h1 className="text-3xl font-bold text-slate-800">
          CMS Management
        </h1> */}

        <Tabs
          value={activeTab}
          onValueChange={v => setActiveTab(v as any)}
        >
          <TabsList>
            <TabsTrigger value="pages">Mail Templates</TabsTrigger>
            <TabsTrigger value="template">Mail Merge Jobs</TabsTrigger>
          </TabsList>

          <TabsContent value="pages">
            <CMSSettingsTabs />
          </TabsContent>

          <TabsContent value="template">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Mail Merge Job History</CardTitle>

              {/* ✅ Upload CSV */}
              <div className="flex gap-2">
                  <Select
    value={templateId}
    onValueChange={(value) => setTemplateId(value)}
  >
    <SelectTrigger className="w-56">
      <SelectValue placeholder="Select Template" />
    </SelectTrigger>
    <SelectContent>
      {templates.map((template) => (
        <SelectItem
          key={template.id}
          value={template.id.toString()}
        >
          {template.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
                <Input
                  type="file"
                  accept=".csv"
                  onChange={e =>
                    setFile(e.target.files?.[0] || null)
                  }
                  className="w-60"
                />
                <Button
                  onClick={handleUpload}
                  disabled={uploading}
                >
                  <Upload className="w-4 h-4 mr-1" />
                  {uploading ? "Uploading..." : "Upload CSV"}
                </Button>
              </div>
            </CardHeader>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Checkbox
                      checked={
                        jobs.length > 0 &&
                        jobs.every(j => selected.has(j.id))
                      }
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Template Name</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Processed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : jobs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center">
                      No jobs found
                    </TableCell>
                  </TableRow>
                ) : (
                  jobs.map(job => (
                    <TableRow key={job.id}>
                      <TableCell>
                        <Checkbox
                          checked={selected.has(job.id)}
                          onCheckedChange={() => toggleOne(job.id)}
                        />
                      </TableCell>
                      <TableCell>{job.id}</TableCell>
                      <TableCell>{job.template_name}</TableCell>
                      <TableCell>{job.total}</TableCell>
                      <TableCell>{job.processed}</TableCell>
                      <TableCell>{job.status}</TableCell>
                      <TableCell>
                        {new Date(job.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(job.id)}
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CMS;
