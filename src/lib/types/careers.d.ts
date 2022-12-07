export type GreenhouseResponse = {
  jobs: Job[];
  meta: Meta;
};

export type Job = {
  absolute_url: string;
  data_compliance: DataCompliance[];
  internal_job_id: number;
  location: Location;
  metadata: any[];
  id: number;
  updated_at: string;
  requisition_id?: string;
  title: string;
};

export type DataCompliance = {
  type: string;
  requires_consent: boolean;
  retention_period: any;
};

export type Location = {
  name: string;
};

export type Meta = {
  total: number;
};
